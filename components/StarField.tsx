import React, { useEffect, useRef, useMemo } from 'react';

// Helper to generate random number
const random = (min: number, max: number) => Math.random() * (max - min) + min;

// Type definition for a star object
interface StarData {
  id: string;
  top: string;
  left: string;
  size: string;
  opacity: number;
  animationDelay: string;
}

const StarField: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse Parallax Logic
  // We use CSS variables to update the position to avoid React re-renders on mouse move
  useEffect(() => {
    let animationFrameId: number;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      // Calculate normalized mouse position (-0.5 to 0.5)
      targetX = (e.clientX - innerWidth / 2) / innerWidth;
      targetY = (e.clientY - innerHeight / 2) / innerHeight;
    };

    const animate = () => {
      // Linear interpolation for smooth movement
      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;

      if (containerRef.current) {
        containerRef.current.style.setProperty('--mouse-x', currentX.toString());
        containerRef.current.style.setProperty('--mouse-y', currentY.toString());
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Generate stars for different layers
  // Layer 0: Furthest (slowest)
  // Layer 1: Middle
  // Layer 2: Closest (fastest)
  const layers = useMemo(() => {
    return [0.02, 0.04, 0.07].map((speed, layerIndex) => {
      // More small stars, fewer large stars
      const starCount = 40 - (layerIndex * 10); 
      
      const stars: StarData[] = Array.from({ length: starCount }).map((_, i) => ({
        id: `layer-${layerIndex}-star-${i}`,
        top: `${random(0, 100)}%`,
        left: `${random(0, 100)}%`,
        size: layerIndex === 0 ? random(1, 2) + 'px' : layerIndex === 1 ? random(2, 3) + 'px' : random(2, 4) + 'px',
        opacity: layerIndex === 0 ? random(0.3, 0.6) : random(0.6, 1),
        animationDelay: `${random(0, 5)}s`,
      }));

      return { stars, speed };
    });
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 overflow-hidden pointer-events-none z-[1]"
      style={{ '--mouse-x': '0', '--mouse-y': '0' } as React.CSSProperties}
    >
      {/* Parallax Layers */}
      {layers.map((layer, layerIndex) => (
        <div 
          key={layerIndex}
          className="absolute inset-0 will-change-transform"
          style={{
            transform: `translate3d(calc(var(--mouse-x) * ${layer.speed * -1000}px), calc(var(--mouse-y) * ${layer.speed * -1000}px), 0)`
          }}
        >
          {layer.stars.map((star) => (
            <div
              key={star.id}
              className={`absolute bg-white rounded-full ${layerIndex === 0 ? 'animate-twinkle-slow' : 'animate-twinkle'}`}
              style={{
                top: star.top,
                left: star.left,
                width: star.size,
                height: star.size,
                opacity: star.opacity,
                animationDelay: star.animationDelay,
                boxShadow: layerIndex > 0 ? `0 0 ${parseInt(star.size) + 2}px rgba(255, 255, 255, ${star.opacity})` : 'none'
              }}
            />
          ))}
        </div>
      ))}

      {/* Shooting Stars Container */}
      {/* These run on CSS animations defined in index.html for maximum performance */}
      <div className="shooting-star-container">
         <div className="shooting-star shooting-star-1"></div>
         <div className="shooting-star shooting-star-2"></div>
         <div className="shooting-star shooting-star-3"></div>
         <div className="shooting-star shooting-star-4"></div>
      </div>
    </div>
  );
};

export default StarField;
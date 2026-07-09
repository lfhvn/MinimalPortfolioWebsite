import React, { useEffect, useRef } from 'react';

interface RealityViewerProps {
  realityMode: string;
  className?: string;
}

export function RealityViewer({ realityMode, className = '' }: RealityViewerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Animation state
    let frame = 0;
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
      rotation?: number;
      rotationSpeed?: number;
    }> = [];

    // Initialize particles based on reality mode
    const initializeParticles = () => {
      particles.length = 0;
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;

      if (width === 0 || height === 0) return; // Don't initialize if canvas has no size

      switch (realityMode) {
        case 'base':
          // Stable grid pattern
          for (let i = 0; i < 50; i++) {
            particles.push({
              x: (i % 10) * (width / 10) + (width / 20),
              y: Math.floor(i / 10) * (height / 5) + (height / 10),
              vx: 0,
              vy: 0,
              size: 2,
              opacity: 0.3,
              color: 'var(--terminal-text)'
            });
          }
          break;

        case 'matrix':
          // Falling code rain
          for (let i = 0; i < 30; i++) {
            particles.push({
              x: Math.random() * width,
              y: Math.random() * height,
              vx: 0,
              vy: 2 + Math.random() * 3,
              size: 12,
              opacity: 0.8,
              color: '#00ff00'
            });
          }
          break;

        case 'quantum':
          // Entangled particles
          for (let i = 0; i < 20; i++) {
            particles.push({
              x: width / 2 + (Math.random() - 0.5) * 200,
              y: height / 2 + (Math.random() - 0.5) * 200,
              vx: (Math.random() - 0.5) * 2,
              vy: (Math.random() - 0.5) * 2,
              size: 4 + Math.random() * 4,
              opacity: 0.6,
              color: '#ff0080',
              rotation: Math.random() * Math.PI * 2,
              rotationSpeed: (Math.random() - 0.5) * 0.1
            });
          }
          break;

        case 'virtual':
          // Geometric wireframes
          for (let i = 0; i < 15; i++) {
            particles.push({
              x: Math.random() * width,
              y: Math.random() * height,
              vx: (Math.random() - 0.5) * 1,
              vy: (Math.random() - 0.5) * 1,
              size: 20 + Math.random() * 30,
              opacity: 0.4,
              color: '#00ffff',
              rotation: Math.random() * Math.PI * 2,
              rotationSpeed: (Math.random() - 0.5) * 0.05
            });
          }
          break;

        case 'augmented':
          // Layered reality elements
          for (let i = 0; i < 25; i++) {
            particles.push({
              x: Math.random() * width,
              y: Math.random() * height,
              vx: Math.sin(i) * 0.5,
              vy: Math.cos(i) * 0.5,
              size: 6 + Math.random() * 6,
              opacity: 0.5,
              color: i % 2 === 0 ? '#ffff00' : '#ff6600'
            });
          }
          break;

        case 'weirdcore':
          // Glitchy, distorted elements
          for (let i = 0; i < 40; i++) {
            particles.push({
              x: Math.random() * width,
              y: Math.random() * height,
              vx: (Math.random() - 0.5) * 4,
              vy: (Math.random() - 0.5) * 4,
              size: Math.random() * 15,
              opacity: Math.random(),
              color: ['#ff0080', '#00ffff', '#ffff00', '#ff6600'][Math.floor(Math.random() * 4)]
            });
          }
          break;

        case 'liminal':
          // Slow, ethereal movement
          for (let i = 0; i < 12; i++) {
            particles.push({
              x: Math.random() * width,
              y: Math.random() * height,
              vx: (Math.random() - 0.5) * 0.5,
              vy: (Math.random() - 0.5) * 0.5,
              size: 8 + Math.random() * 12,
              opacity: 0.2 + Math.random() * 0.3,
              color: '#cccccc'
            });
          }
          break;

        case 'ai':
          // Neural network patterns
          for (let i = 0; i < 30; i++) {
            particles.push({
              x: Math.random() * width,
              y: Math.random() * height,
              vx: 0,
              vy: 0,
              size: 3,
              opacity: 0.6,
              color: '#007aff'
            });
          }
          break;

        case 'consciousness':
          // Pulsing, organic forms
          for (let i = 0; i < 8; i++) {
            particles.push({
              x: width / 2 + Math.cos(i * Math.PI / 4) * 80,
              y: height / 2 + Math.sin(i * Math.PI / 4) * 80,
              vx: 0,
              vy: 0,
              size: 15 + Math.sin(frame * 0.1 + i) * 5,
              opacity: 0.4 + Math.sin(frame * 0.05 + i) * 0.2,
              color: '#9933ff'
            });
          }
          break;

        default:
          break;
      }
    };

    // Animation loop
    const animate = () => {
      frame++;
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;

      if (particles.length === 0) {
        initializeParticles();
      }

      // Update and draw particles
      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Update rotation if applicable
        if (particle.rotation !== undefined && particle.rotationSpeed !== undefined) {
          particle.rotation += particle.rotationSpeed;
        }

        // Boundary handling based on reality mode
        switch (realityMode) {
          case 'matrix':
            if (particle.y > height + 20) {
              particle.y = -20;
              particle.x = Math.random() * width;
            }
            break;

          case 'quantum':
            // Quantum tunneling effect
            if (particle.x < 0 || particle.x > width) particle.vx *= -1;
            if (particle.y < 0 || particle.y > height) particle.vy *= -1;
            particle.x = Math.max(0, Math.min(width, particle.x));
            particle.y = Math.max(0, Math.min(height, particle.y));
            break;

          case 'weirdcore':
            // Chaotic wrapping
            if (particle.x < 0) particle.x = width;
            if (particle.x > width) particle.x = 0;
            if (particle.y < 0) particle.y = height;
            if (particle.y > height) particle.y = 0;
            // Random glitches
            if (Math.random() < 0.01) {
              particle.x = Math.random() * width;
              particle.y = Math.random() * height;
            }
            break;

          default:
            // Standard wrapping
            if (particle.x < 0) particle.x = width;
            if (particle.x > width) particle.x = 0;
            if (particle.y < 0) particle.y = height;
            if (particle.y > height) particle.y = 0;
            break;
        }

        // Draw particle
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = particle.color;

        if (realityMode === 'matrix') {
          // Draw matrix characters
          ctx.font = `${particle.size}px monospace`;
          ctx.fillText(String.fromCharCode(0x30A0 + Math.random() * 96), particle.x, particle.y);
        } else if (realityMode === 'virtual' && particle.rotation !== undefined) {
          // Draw wireframe cubes
          ctx.translate(particle.x, particle.y);
          ctx.rotate(particle.rotation);
          ctx.strokeStyle = particle.color;
          ctx.lineWidth = 2;
          ctx.strokeRect(-particle.size/2, -particle.size/2, particle.size, particle.size);
          ctx.strokeRect(-particle.size/3, -particle.size/3, particle.size * 2/3, particle.size * 2/3);
        } else if (realityMode === 'ai') {
          // Draw neural connections
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
          
          // Draw connections to nearby particles
          particles.forEach((other, otherIndex) => {
            if (index !== otherIndex) {
              const dx = particle.x - other.x;
              const dy = particle.y - other.y;
              const distance = Math.sqrt(dx * dx + dy * dy);
              if (distance < 100) {
                ctx.strokeStyle = particle.color;
                ctx.lineWidth = 1;
                ctx.globalAlpha = (100 - distance) / 100 * 0.3;
                ctx.beginPath();
                ctx.moveTo(particle.x, particle.y);
                ctx.lineTo(other.x, other.y);
                ctx.stroke();
              }
            }
          });
        } else {
          // Draw regular circles
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      });

      // Reality-specific effects
      if (realityMode === 'weirdcore') {
        // Add glitch effects
        if (Math.random() < 0.1) {
          ctx.save();
          ctx.globalAlpha = 0.5;
          ctx.fillStyle = '#ff0080';
          ctx.fillRect(Math.random() * width, Math.random() * height, Math.random() * 50, 2);
          ctx.restore();
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    initializeParticles();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [realityMode]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        width: '100%',
        height: '100%',
        borderRadius: '8px',
        background: 'transparent'
      }}
    />
  );
}
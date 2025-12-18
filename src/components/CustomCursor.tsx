import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let spots: Particle[] = [];
    let hue = 0;

    const mouse = {
      x: undefined as number | undefined,
      y: undefined as number | undefined
    };

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;

      constructor() {
        this.x = mouse.x || 0;
        this.y = mouse.y || 0;
        this.size = Math.random() * 4 + 1;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
        this.color = `hsl(${hue}, 100%, 70%)`;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.1) this.size -= 0.05;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();

        // Add a little glow
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;
      }
    }

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.x;
      mouse.y = event.y;
      for (let i = 0; i < 3; i++) {
        spots.push(new Particle());
      }
    };

    const handleTouchMove = (event: TouchEvent) => {
      mouse.x = event.touches[0].clientX;
      mouse.y = event.touches[0].clientY;
      for (let i = 0; i < 2; i++) {
        spots.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      handleParticles();
      hue += 2;
      requestAnimationFrame(animate);
    };

    const handleParticles = () => {
      for (let i = 0; i < spots.length; i++) {
        spots[i].update();
        spots[i].draw();
        if (spots[i].size <= 0.1) {
          spots.splice(i, 1);
          i--;
        }
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    handleResize();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999]"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default CustomCursor;

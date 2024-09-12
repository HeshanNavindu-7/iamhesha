import React, { useEffect, useRef, useCallback, useMemo } from "react";
import { createNoise3D } from "simplex-noise";
// import { motion } from "framer-motion";

interface VortexProps {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  particleCount?: number;
  rangeY?: number;
  baseHue?: number;
  baseSpeed?: number;
  rangeSpeed?: number;
  baseRadius?: number;
  rangeRadius?: number;
  backgroundColor?: string;
}

export const Vortex = (props: VortexProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const particleCount = props.particleCount || 700;
  const particlePropCount = 9;
  const particlePropsLength = particleCount * particlePropCount;
  const rangeY = props.rangeY || 100;
  const baseTTL = 50;
  const rangeTTL = 150;
  const baseSpeed = props.baseSpeed || 0.0;
  const rangeSpeed = props.rangeSpeed || 1.5;
  const baseRadius = props.baseRadius || 1;
  const rangeRadius = props.rangeRadius || 2;
  const baseHue = props.baseHue || 220;
  const rangeHue = 100;
  const noiseSteps = 3;
  const xOff = 0.00125;
  const yOff = 0.00125;
  const zOff = 0.0005;
  const backgroundColor = props.backgroundColor || "#000000";
  const tickRef = useRef(0);
  const particlePropsRef = useRef(new Float32Array(particlePropsLength));

  const center = useMemo(() => [0, 0], []);
  const noise3D = createNoise3D();

  const initParticle = useCallback((i: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const x = Math.random() * canvas.width;
    const y = center[1] + Math.random() * rangeY * 2 - rangeY;
    const vx = 0;
    const vy = 0;
    const life = 0;
    const ttl = baseTTL + Math.random() * rangeTTL;
    const speed = baseSpeed + Math.random() * rangeSpeed;
    const radius = baseRadius + Math.random() * rangeRadius;
    const hue = baseHue + Math.random() * rangeHue;

    particlePropsRef.current.set([x, y, vx, vy, life, ttl, speed, radius, hue], i);
  }, [center, rangeY, baseTTL, rangeTTL, baseSpeed, rangeSpeed, baseRadius, rangeRadius, baseHue, rangeHue]);

  const initParticles = useCallback(() => {
    tickRef.current = 0;
    particlePropsRef.current = new Float32Array(particlePropsLength);

    for (let i = 0; i < particlePropsLength; i += particlePropCount) {
      initParticle(i);
    }
  }, [particlePropsLength, particlePropCount, initParticle]);

  const drawParticle = useCallback((x: number, y: number, x2: number, y2: number, life: number, ttl: number, radius: number, hue: number, ctx: CanvasRenderingContext2D) => {
    ctx.save();
    ctx.lineCap = "round";
    ctx.lineWidth = radius;
    ctx.strokeStyle = `hsla(${hue},100%,60%,${fadeInOut(life, ttl)})`;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
  }, []);

  const updateParticle = useCallback((i: number, ctx: CanvasRenderingContext2D) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const particleProps = particlePropsRef.current;
    const x = particleProps[i];
    const y = particleProps[i + 1];
    const n = noise3D(x * xOff, y * yOff, tickRef.current * zOff) * noiseSteps * Math.PI * 2;
    const vx = lerp(particleProps[i + 2], Math.cos(n), 0.5);
    const vy = lerp(particleProps[i + 3], Math.sin(n), 0.5);
    const life = particleProps[i + 4];
    const ttl = particleProps[i + 5];
    const speed = particleProps[i + 6];
    const x2 = x + vx * speed;
    const y2 = y + vy * speed;
    const radius = particleProps[i + 7];
    const hue = particleProps[i + 8];

    drawParticle(x, y, x2, y2, life, ttl, radius, hue, ctx);

    particleProps[i] = x2;
    particleProps[i + 1] = y2;
    particleProps[i + 2] = vx;
    particleProps[i + 3] = vy;
    particleProps[i + 4] = life + 1;

    (x2 > canvas.width || x2 < 0 || y2 > canvas.height || y2 < 0 || life > ttl) && initParticle(i);
  }, [initParticle, noise3D, drawParticle]);

 
  const drawParticles = useCallback((ctx: CanvasRenderingContext2D) => {
    for (let i = 0; i < particlePropsLength; i += particlePropCount) {
      updateParticle(i, ctx);
    }
  }, [particlePropsLength, particlePropCount, updateParticle]);

  const renderGlow = useCallback((canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
    ctx.save();
    ctx.filter = "blur(8px) brightness(200%)";
    ctx.globalCompositeOperation = "lighter";
    ctx.drawImage(canvas, 0, 0);
    ctx.restore();

    ctx.save();
    ctx.filter = "blur(4px) brightness(200%)";
    ctx.globalCompositeOperation = "lighter";
    ctx.drawImage(canvas, 0, 0);
    ctx.restore();
  }, []);

  const renderToScreen = useCallback((canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
    ctx.save();
    ctx.globalCompositeOperation = "lighter";
    ctx.drawImage(canvas, 0, 0);
    ctx.restore();
  }, []);

  const draw = useCallback((canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
    tickRef.current++;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    drawParticles(ctx);
    renderGlow(canvas, ctx);
    renderToScreen(canvas, ctx);
    window.requestAnimationFrame(() => draw(canvas, ctx));
  }, [backgroundColor, drawParticles, renderGlow, renderToScreen]);

 
  const fadeInOut = (t: number, m: number): number => {
    const hm = 0.5 * m;
    return Math.abs(((t + hm) % m) - hm) / hm;
  };

  const lerp = (n1: number, n2: number, speed: number): number =>
    (1 - speed) * n1 + speed * n2;



  const resize = useCallback((canvas: HTMLCanvasElement) => {
    const { innerWidth, innerHeight } = window;
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    center[0] = 0.5 * canvas.width;
    center[1] = 0.5 * canvas.height;
  }, [center]);

  const setup = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (canvas && container) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        resize(canvas);
        initParticles();
        draw(canvas, ctx);
      }
    }
  }, [draw, initParticles, resize]);

  useEffect(() => {
    setup();
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        resize(canvas);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setup, resize]);

  return (
    <div
      ref={containerRef}
      className={props.containerClassName}
      style={{ position: 'relative', overflow: 'hidden', width: '100%', height: '100%' }}
    >
      <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0 }} />
      {props.children && <div className={props.className}>{props.children}</div>}
    </div>
  );
};

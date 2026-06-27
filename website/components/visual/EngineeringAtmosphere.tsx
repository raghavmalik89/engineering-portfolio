"use client";

import { useEffect, useRef } from "react";

// Manual tuning constants for the Engineering Atmosphere Layer.
const PARTICLE_COUNT = 200;
const PARTICLE_SPEED = 0.2;
const PARTICLE_OPACITY = { min: 0.32, max: 0.7 };
const CONNECTION_DISTANCE = 92;
const HERO_DENSITY_BIAS = 0.42;
const MAX_DEVICE_PIXEL_RATIO = 1.75;
const COLORS = {
  mainCopper: "#C8B38A",
  softHighlight: "#E6D7BE",
  deepCopper: "#C8B38A",
} as const;

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  color: string;
};

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const randomBetween = (min: number, max: number) =>
  min + Math.random() * (max - min);

const pickColor = () => {
  const roll = Math.random();

  if (roll > 0.82) {
    return COLORS.softHighlight;
  }

  if (roll < 0.28) {
    return COLORS.deepCopper;
  }

  return COLORS.mainCopper;
};

const createParticle = (width: number, height: number): Particle => {
  const biasedToHeroVisual = Math.random() < HERO_DENSITY_BIAS;
  const x = biasedToHeroVisual
    ? randomBetween(width * 0.48, width * 0.98)
    : randomBetween(width * 0.02, width * 0.98);
  const y = biasedToHeroVisual
    ? randomBetween(height * 0.06, height * 0.72)
    : randomBetween(height * 0.04, height * 0.88);
  const speed = randomBetween(PARTICLE_SPEED * 0.35, PARTICLE_SPEED);
  const angle = randomBetween(-Math.PI, Math.PI);

  return {
    x,
    y,
    vx: Math.cos(angle) * speed,
    vy: Math.sin(angle) * speed,
    radius: randomBetween(0.85, 2.35),
    opacity: randomBetween(PARTICLE_OPACITY.min, PARTICLE_OPACITY.max),
    color: pickColor(),
  };
};

const hexToRgb = (hex: string) => {
  const value = hex.replace("#", "");
  const number = Number.parseInt(value, 16);

  return {
    r: (number >> 16) & 255,
    g: (number >> 8) & 255,
    b: number & 255,
  };
};

const drawParticle = (
  context: CanvasRenderingContext2D,
  particle: Particle,
) => {
  context.globalAlpha = particle.opacity;
  context.fillStyle = particle.color;
  context.beginPath();
  context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
  context.fill();
};

const drawConnection = (
  context: CanvasRenderingContext2D,
  first: Particle,
  second: Particle,
  distance: number,
) => {
  const strength = Math.max(0, 1 - distance / CONNECTION_DISTANCE);
  const rgb = hexToRgb(COLORS.mainCopper);

  context.globalAlpha = strength * 0.1;
  context.strokeStyle = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
  context.lineWidth = 0.6;
  context.beginPath();
  context.moveTo(first.x, first.y);
  context.lineTo(second.x, second.y);
  context.stroke();
};

export function EngineeringAtmosphere() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");

    if (!context) {
      return;
    }

    let animationFrame = 0;
    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    let reducedMotion = prefersReducedMotion();

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const ratio = Math.min(
        window.devicePixelRatio || 1,
        MAX_DEVICE_PIXEL_RATIO,
      );

      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * ratio);
      canvas.height = Math.floor(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      particles = Array.from({ length: PARTICLE_COUNT }, () =>
        createParticle(width, height),
      );
    };

    const clear = () => {
      context.globalAlpha = 1;
      context.clearRect(0, 0, width, height);
    };

    const draw = () => {
      clear();

      for (let index = 0; index < particles.length; index += 1) {
        const particle = particles[index];

        if (!reducedMotion) {
          particle.x += particle.vx;
          particle.y += particle.vy;

          if (particle.x < -12) particle.x = width + 12;
          if (particle.x > width + 12) particle.x = -12;
          if (particle.y < -12) particle.y = height + 12;
          if (particle.y > height + 12) particle.y = -12;
        }

        drawParticle(context, particle);
      }

      for (let index = 0; index < particles.length; index += 1) {
        const first = particles[index];

        for (let nextIndex = index + 1; nextIndex < particles.length; nextIndex += 1) {
          const second = particles[nextIndex];
          const dx = first.x - second.x;
          const dy = first.y - second.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < CONNECTION_DISTANCE && Math.random() > 0.82) {
            drawConnection(context, first, second, distance);
          }
        }
      }

      context.globalAlpha = 1;

      if (!reducedMotion) {
        animationFrame = window.requestAnimationFrame(draw);
      }
    };

    const handleMotionChange = (event: MediaQueryListEvent) => {
      reducedMotion = event.matches;
      window.cancelAnimationFrame(animationFrame);
      draw();
    };

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    resize();
    draw();
    window.addEventListener("resize", resize);
    mediaQuery.addEventListener("change", handleMotionChange);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      mediaQuery.removeEventListener("change", handleMotionChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}

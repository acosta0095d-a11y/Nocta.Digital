"use client";

import { useEffect, useRef } from "react";

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
};

const NODE_COUNT = 42;
const MAX_LINK_DISTANCE = 72;
const SPEED = 0.5;

export default function LogoPlexus() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (!parent) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let centerX = 0;
    let centerY = 0;
    let radius = 0;
    let rafId = 0;
    let running = false;

    const nodes: Node[] = [];

    const rand = (min: number, max: number) => Math.random() * (max - min) + min;

    const resetNodes = () => {
      nodes.length = 0;
      for (let i = 0; i < NODE_COUNT; i += 1) {
        const angle = rand(0, Math.PI * 2);
        const r = Math.sqrt(Math.random()) * radius;
        nodes.push({
          x: centerX + Math.cos(angle) * r,
          y: centerY + Math.sin(angle) * r,
          vx: Math.cos(angle + Math.PI / 2) * rand(0.15, SPEED),
          vy: Math.sin(angle + Math.PI / 2) * rand(0.15, SPEED),
          size: rand(1.1, 2.2),
        });
      }
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = parent.clientWidth;
      height = parent.clientHeight;
      centerX = width / 2;
      centerY = height / 2;
      radius = Math.min(width, height) * 0.46;

      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      resetNodes();
    };

    const reflectInsideCircle = (node: Node) => {
      const dx = node.x - centerX;
      const dy = node.y - centerY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist <= radius) return;

      const nx = dx / dist;
      const ny = dy / dist;

      node.x = centerX + nx * radius;
      node.y = centerY + ny * radius;

      const dot = node.vx * nx + node.vy * ny;
      node.vx -= 2 * dot * nx;
      node.vy -= 2 * dot * ny;
    };

    const draw = () => {
      if (!running) return;

      ctx.clearRect(0, 0, width, height);

      ctx.save();
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.clip();

      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;
        reflectInsideCircle(node);
      }

      for (let i = 0; i < nodes.length; i += 1) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j += 1) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 > MAX_LINK_DISTANCE * MAX_LINK_DISTANCE) continue;

          const dist = Math.sqrt(d2);
          const alpha = 1 - dist / MAX_LINK_DISTANCE;
          ctx.strokeStyle = `rgba(235, 245, 255, ${0.06 + alpha * 0.35})`;
          ctx.lineWidth = 0.5 + alpha * 0.6;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      for (const node of nodes) {
        ctx.beginPath();
        ctx.fillStyle = "rgba(250, 255, 255, 0.85)";
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
      rafId = requestAnimationFrame(draw);
    };

    const start = () => {
      if (running) return;
      running = true;
      draw();
    };

    const stop = () => {
      running = false;
      cancelAnimationFrame(rafId);
    };

    resize();

    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) start();
        else stop();
      },
      { threshold: 0.1 }
    );
    visibilityObserver.observe(parent);

    const resizeObserver = new ResizeObserver(() => resize());
    resizeObserver.observe(parent);

    return () => {
      stop();
      visibilityObserver.disconnect();
      resizeObserver.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" aria-hidden />;
}

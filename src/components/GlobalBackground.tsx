import React, { useEffect, useRef } from "react";

interface Point3D {
  x: number;
  y: number;
  z: number;
}

interface Shape3D {
  id: string;
  cx: number;
  cy: number;
  cz: number;
  rotX: number;
  rotY: number;
  rotZ: number;
  vRotX: number;
  vRotY: number;
  vRotZ: number;
  radius: number;
  color: string;
  glowColor: string;
  vertices: Point3D[];
  edges: [number, number][];
  projX: Float32Array;
  projY: Float32Array;
  projZ: Float32Array;
  projScale: Float32Array;
}

interface Particle3D {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  radius: number;
  color: string;
  alpha: number;
  pulseSpeed: number;
  pulsePhase: number;
}

const Canvas3D = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let isRunning = true;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    let width = window.innerWidth;
    let height = window.innerHeight;

    const resize = () => {
      width = window.innerWidth || document.documentElement.clientWidth || 1280;
      height = window.innerHeight || document.documentElement.clientHeight || 720;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
    };
    resize();

    let scrollY = window.scrollY || 0;
    let smoothScrollY = window.scrollY || 0;

    const onResize = () => resize();
    const onScroll = () => {
      scrollY = window.scrollY || 0;
    };

    window.addEventListener("resize", onResize, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });

    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
    };

    const onMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    const onVisibility = () => {
      if (document.hidden) {
        isRunning = false;
      } else if (!isRunning) {
        isRunning = true;
        lastTime = 0;
        animId = requestAnimationFrame(render);
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    // ── 3D Geometry Generators ──
    const createIcosahedron = (scale: number): { vertices: Point3D[]; edges: [number, number][] } => {
      const phi = (1 + Math.sqrt(5)) / 2;
      const rawVerts: Point3D[] = [
        { x: -1, y: phi, z: 0 },
        { x: 1, y: phi, z: 0 },
        { x: -1, y: -phi, z: 0 },
        { x: 1, y: -phi, z: 0 },
        { x: 0, y: -1, z: phi },
        { x: 0, y: 1, z: phi },
        { x: 0, y: -1, z: -phi },
        { x: 0, y: 1, z: -phi },
        { x: phi, y: 0, z: -1 },
        { x: phi, y: 0, z: 1 },
        { x: -phi, y: 0, z: -1 },
        { x: -phi, y: 0, z: 1 },
      ].map((v) => {
        const len = Math.sqrt(v.x * v.x + v.y * v.y + v.z * v.z);
        return { x: (v.x / len) * scale, y: (v.y / len) * scale, z: (v.z / len) * scale };
      });

      const edges: [number, number][] = [];
      const maxDist = scale * 1.15;
      for (let i = 0; i < rawVerts.length; i++) {
        for (let j = i + 1; j < rawVerts.length; j++) {
          const dx = rawVerts[i].x - rawVerts[j].x;
          const dy = rawVerts[i].y - rawVerts[j].y;
          const dz = rawVerts[i].z - rawVerts[j].z;
          if (Math.sqrt(dx * dx + dy * dy + dz * dz) <= maxDist) {
            edges.push([i, j]);
          }
        }
      }
      return { vertices: rawVerts, edges };
    };

    const createOctahedron = (scale: number): { vertices: Point3D[]; edges: [number, number][] } => ({
      vertices: [
        { x: scale, y: 0, z: 0 },
        { x: -scale, y: 0, z: 0 },
        { x: 0, y: scale, z: 0 },
        { x: 0, y: -scale, z: 0 },
        { x: 0, y: 0, z: scale },
        { x: 0, y: 0, z: -scale },
      ],
      edges: [
        [0, 2], [0, 3], [0, 4], [0, 5],
        [1, 2], [1, 3], [1, 4], [1, 5],
        [2, 4], [4, 3], [3, 5], [5, 2],
      ],
    });

    const createCube = (scale: number): { vertices: Point3D[]; edges: [number, number][] } => {
      const h = scale / 2;
      return {
        vertices: [
          { x: -h, y: -h, z: -h },
          { x: h, y: -h, z: -h },
          { x: h, y: h, z: -h },
          { x: -h, y: h, z: -h },
          { x: -h, y: -h, z: h },
          { x: h, y: -h, z: h },
          { x: h, y: h, z: h },
          { x: -h, y: h, z: h },
        ],
        edges: [
          [0, 1], [1, 2], [2, 3], [3, 0],
          [4, 5], [5, 6], [6, 7], [7, 4],
          [0, 4], [1, 5], [2, 6], [3, 7],
        ],
      };
    };

    const createRing = (radius: number, segments: number): { vertices: Point3D[]; edges: [number, number][] } => {
      const vertices: Point3D[] = [];
      const edges: [number, number][] = [];
      for (let i = 0; i < segments; i++) {
        const theta = (i / segments) * Math.PI * 2;
        vertices.push({ x: Math.cos(theta) * radius, y: Math.sin(theta) * radius, z: 0 });
        edges.push([i, (i + 1) % segments]);
      }
      return { vertices, edges };
    };

    const icoGeom = createIcosahedron(115);
    const octGeom = createOctahedron(95);
    const cubeGeom = createCube(130);
    const outerRingGeom = createRing(165, 24);
    const innerRingGeom = createRing(130, 20);

    const makeShape = (
      id: string,
      cx: number,
      cy: number,
      cz: number,
      rotX: number,
      rotY: number,
      rotZ: number,
      vRotX: number,
      vRotY: number,
      vRotZ: number,
      radius: number,
      color: string,
      glowColor: string,
      geom: { vertices: Point3D[]; edges: [number, number][] }
    ): Shape3D => {
      const vCount = geom.vertices.length;
      return {
        id,
        cx,
        cy,
        cz,
        rotX,
        rotY,
        rotZ,
        vRotX,
        vRotY,
        vRotZ,
        radius,
        color,
        glowColor,
        vertices: geom.vertices,
        edges: geom.edges,
        projX: new Float32Array(vCount),
        projY: new Float32Array(vCount),
        projZ: new Float32Array(vCount),
        projScale: new Float32Array(vCount),
      };
    };

    const shapes: Shape3D[] = [
      makeShape("hero-ico", 0.36, -0.22, 120, 0.3, 0.5, 0.2, 0.0016, 0.0022, 0.0012, 115, "6, 182, 212", "rgba(6, 182, 212, 0.4)", icoGeom),
      makeShape("hero-oct", -0.38, -0.15, 100, 0.8, 0.4, 0.3, -0.0016, 0.0018, 0.0012, 95, "99, 102, 241", "rgba(99, 102, 241, 0.4)", octGeom),
      makeShape("gyro-outer", 0.38, 0.28, 180, 1.1, 0.6, 0.2, 0.0012, -0.0016, 0.0014, 165, "56, 189, 248", "rgba(56, 189, 248, 0.4)", outerRingGeom),
      makeShape("gyro-inner", 0.38, 0.28, 180, 0.4, 1.3, -0.4, -0.0014, 0.0018, -0.0012, 130, "168, 85, 247", "rgba(168, 85, 247, 0.4)", innerRingGeom),
      makeShape("lower-cube", -0.35, 0.35, 140, 0.5, 0.7, 0.2, 0.0014, 0.0014, -0.0014, 90, "20, 184, 166", "rgba(20, 184, 166, 0.4)", cubeGeom),
    ];

    // ── Starry Plexus Particles ──
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 36 : 60;
    const particles: Particle3D[] = [];
    const colorPalette = ["6, 182, 212", "56, 189, 248", "99, 102, 241", "168, 85, 247"];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: (Math.random() - 0.5) * width * 1.4,
        y: (Math.random() - 0.5) * height * 1.5,
        z: Math.random() * 800 + 60,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        vz: (Math.random() - 0.5) * 0.25,
        radius: Math.random() * 2 + 1.2,
        color: colorPalette[Math.floor(Math.random() * colorPalette.length)],
        alpha: Math.random() * 0.45 + 0.35,
        pulseSpeed: Math.random() * 0.02 + 0.015,
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }

    const projPX = new Float32Array(particleCount);
    const projPY = new Float32Array(particleCount);
    const projPR = new Float32Array(particleCount);
    const projPA = new Float32Array(particleCount);
    const fov = 420;

    let time = 0;
    let lastTime = 0;

    const render = (now: number) => {
      if (!isRunning) return;

      if (!lastTime) lastTime = now;
      const dt = (now - lastTime) / 1000;
      lastTime = now;

      const clampedDt = Math.min(Math.max(dt, 0.008), 0.033);
      const timeScale = clampedDt / 0.01667;

      time += clampedDt * 0.75;
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;
      smoothScrollY += (scrollY - smoothScrollY) * 0.08;

      const normMX = (mouse.x - width / 2) / (width / 2 || 1);
      const normMY = (mouse.y - height / 2) / (height / 2 || 1);
      const tiltX = normMY * -0.15;
      const tiltY = normMX * 0.15;
      const scrollOffset = (smoothScrollY % height) * 0.1;

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, width, height);

      const boundX = (width * 1.4) / 2;
      const boundY = (height * 1.5) / 2;
      const pShiftX = normMX * 30;
      const pShiftY = normMY * 30;

      // Update and project particles
      for (let i = 0; i < particleCount; i++) {
        const p = particles[i];
        p.x += p.vx * timeScale;
        p.y += p.vy * timeScale;
        p.z += p.vz * timeScale;

        if (p.x < -boundX) p.x = boundX;
        if (p.x > boundX) p.x = -boundX;
        if (p.y < -boundY) p.y = boundY;
        if (p.y > boundY) p.y = -boundY;
        if (p.z < 60) p.z = 860;
        if (p.z > 860) p.z = 60;

        const depth = p.z + 350;
        const scale = fov / depth;

        projPX[i] = width / 2 + (p.x + pShiftX) * scale;
        projPY[i] = height / 2 + (p.y - scrollOffset + pShiftY) * scale;
        p.pulsePhase += p.pulseSpeed * timeScale;
        projPA[i] = p.alpha * (0.8 + Math.sin(p.pulsePhase) * 0.28) * Math.min(1.2, scale * 1.5);
        projPR[i] = Math.max(0.8, p.radius * scale);
      }

      // Draw particle connections (plexus lines)
      const maxConnectDistSq = 12500;
      ctx.lineWidth = 0.75;
      ctx.strokeStyle = "rgba(6, 182, 212, 0.15)";
      ctx.beginPath();
      const activeLineCount = isMobile ? Math.min(particleCount, 24) : particleCount;
      for (let i = 0; i < activeLineCount; i++) {
        const x1 = projPX[i];
        const y1 = projPY[i];
        for (let j = i + 1; j < activeLineCount; j++) {
          const dx = x1 - projPX[j];
          const dy = y1 - projPY[j];
          if (dx * dx + dy * dy < maxConnectDistSq) {
            ctx.moveTo(x1, y1);
            ctx.lineTo(projPX[j], projPY[j]);
          }
        }
      }
      ctx.stroke();

      // Draw particle points
      for (let i = 0; i < particleCount; i++) {
        const px = projPX[i];
        const py = projPY[i];
        const r = projPR[i];
        const a = projPA[i];
        const color = particles[i].color;

        ctx.beginPath();
        ctx.arc(px, py, r * 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${a * 0.25})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(px, py, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${a})`;
        ctx.fill();
      }

      // ── Project and Render 3D Polyhedra ──
      const renderCount = isMobile ? 2 : shapes.length;
      for (let sIdx = 0; sIdx < renderCount; sIdx++) {
        const shape = shapes[sIdx];
        shape.rotX += shape.vRotX * timeScale;
        shape.rotY += shape.vRotY * timeScale;
        shape.rotZ += shape.vRotZ * timeScale;

        const currentRotX = shape.rotX + tiltX;
        const currentRotY = shape.rotY + tiltY;
        const currentRotZ = shape.rotZ;

        const floatBob = Math.sin(time + sIdx * 1.4) * 14;
        const originX = width / 2 + shape.cx * width + normMX * 18;
        const originY = height / 2 + shape.cy * height + floatBob + normMY * 12 - scrollOffset * 0.18;

        const cosX = Math.cos(currentRotX);
        const sinX = Math.sin(currentRotX);
        const cosY = Math.cos(currentRotY);
        const sinY = Math.sin(currentRotY);
        const cosZ = Math.cos(currentRotZ);
        const sinZ = Math.sin(currentRotZ);

        const vLen = shape.vertices.length;
        for (let vIdx = 0; vIdx < vLen; vIdx++) {
          const v = shape.vertices[vIdx];

          // Rotate around Y
          const x1 = v.x * cosY - v.z * sinY;
          const z1 = v.z * cosY + v.x * sinY;

          // Rotate around X
          const y2 = v.y * cosX - z1 * sinX;
          const z2 = z1 * cosX + v.y * sinX;

          // Rotate around Z
          const x3 = x1 * cosZ - y2 * sinZ;
          const y3 = y2 * cosZ + x1 * sinZ;

          const depth = z2 + shape.cz + 350;
          const projScale = fov / Math.max(10, depth);

          shape.projX[vIdx] = originX + x3 * projScale;
          shape.projY[vIdx] = originY + y3 * projScale;
          shape.projZ[vIdx] = z2;
          shape.projScale[vIdx] = projScale;
        }

        // Draw edges (outer glow + core bright line)
        ctx.beginPath();
        for (let eIdx = 0; eIdx < shape.edges.length; eIdx++) {
          const [u, v] = shape.edges[eIdx];
          ctx.moveTo(shape.projX[u], shape.projY[u]);
          ctx.lineTo(shape.projX[v], shape.projY[v]);
        }
        ctx.lineWidth = 3;
        ctx.strokeStyle = `rgba(${shape.color}, 0.25)`;
        ctx.stroke();

        ctx.lineWidth = 1.35;
        ctx.strokeStyle = `rgba(${shape.color}, 0.95)`;
        ctx.stroke();

        // Draw glowing vertex nodes
        ctx.beginPath();
        for (let vIdx = 0; vIdx < vLen; vIdx++) {
          const vx = shape.projX[vIdx];
          const vy = shape.projY[vIdx];
          const rad = Math.max(2.8, 5 * shape.projScale[vIdx]);
          ctx.moveTo(vx + rad, vy);
          ctx.arc(vx, vy, rad, 0, Math.PI * 2);
        }
        ctx.fillStyle = `rgba(${shape.color}, 0.35)`;
        ctx.fill();

        ctx.beginPath();
        for (let vIdx = 0; vIdx < vLen; vIdx++) {
          const vx = shape.projX[vIdx];
          const vy = shape.projY[vIdx];
          const rad = Math.max(1.5, 2.5 * shape.projScale[vIdx]);
          ctx.moveTo(vx + rad, vy);
          ctx.arc(vx, vy, rad, 0, Math.PI * 2);
        }
        ctx.fillStyle = `rgba(${shape.color}, 1.0)`;
        ctx.fill();
      }

      ctx.restore();
      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      isRunning = false;
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none w-full h-full block"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  );
};

export const GlobalBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#070a13] transform-gpu will-change-transform">
      {/* Dynamic 3D Math Canvas */}
      <Canvas3D />

      {/* 3D Orbiting Gyroscopic Rings (Top Right) */}
      <div
        className="absolute -top-16 -right-16 w-[440px] h-[440px] pointer-events-none hidden md:block transform-gpu will-change-transform"
        style={{ perspective: "1000px" }}
      >
        <div className="w-full h-full rounded-full border border-dashed border-cyan-400/40 animate-orbit-3d shadow-[0_0_35px_rgba(6,182,212,0.2)] relative will-change-transform">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_12px_#06b6d4]" />
        </div>
        <div className="absolute inset-10 rounded-full border border-indigo-400/40 animate-orbit-3d-reverse shadow-[0_0_30px_rgba(99,102,241,0.18)] will-change-transform">
          <div className="absolute bottom-0 right-1/4 w-3 h-3 rounded-full bg-indigo-400 shadow-[0_0_10px_#6366f1]" />
        </div>
      </div>

      {/* 3D Orbiting Gyroscopic Rings (Middle Left) */}
      <div
        className="absolute top-[55%] -left-24 w-[380px] h-[380px] pointer-events-none hidden md:block"
        style={{ perspective: "1000px" }}
      >
        <div className="w-full h-full rounded-full border border-teal-400/35 animate-orbit-3d shadow-[0_0_35px_rgba(20,184,166,0.18)] relative will-change-transform">
          <div className="absolute bottom-0 left-1/3 w-3.5 h-3.5 rounded-full bg-teal-400 shadow-[0_0_12px_#2dd4bf]" />
        </div>
        <div className="absolute inset-8 rounded-full border border-dashed border-sky-400/30 animate-orbit-3d-reverse shadow-[0_0_25px_rgba(56,189,248,0.15)] will-change-transform" />
      </div>

      {/* Architectural Column Lines & Dot Grid Pattern */}
      <div className="absolute inset-0 mubbits-columns-bg opacity-30 max-w-7xl mx-auto pointer-events-none transform-gpu" />
      <div className="absolute inset-0 dot-grid-bg opacity-25 pointer-events-none transform-gpu" />

      {/* Atmospheric Radial Gradients */}
      <div
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] sm:w-[1080px] h-[460px] rounded-full blur-[80px] pointer-events-none transform-gpu will-change-transform"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(6, 182, 212, 0.22) 0%, rgba(99, 102, 241, 0.12) 45%, transparent 75%)",
        }}
      />
      <div
        className="absolute top-[25%] -right-32 w-[520px] h-[520px] rounded-full blur-[90px] pointer-events-none transform-gpu will-change-transform"
        style={{
          background:
            "radial-gradient(circle at center, rgba(99, 102, 241, 0.18) 0%, rgba(168, 85, 247, 0.08) 50%, transparent 75%)",
        }}
      />
      <div
        className="absolute top-[60%] -left-32 w-[520px] h-[520px] rounded-full blur-[90px] pointer-events-none transform-gpu will-change-transform"
        style={{
          background:
            "radial-gradient(circle at center, rgba(6, 182, 212, 0.16) 0%, rgba(20, 184, 166, 0.08) 50%, transparent 75%)",
        }}
      />
    </div>
  );
};

export default GlobalBackground;

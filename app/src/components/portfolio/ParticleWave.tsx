"use client";

import { useEffect, useRef, useState } from "react";

interface ParticleWaveProps {
  className?: string;
  themeColor?: "reference" | "solar" | "cyber";
}

// Crisp circular particle texture from reference
const PARTICLE_TEXTURE_BASE64 =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAb1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8v0wLRAAAAJHRSTlMAC/goGvDhmwcExrVjWzrm29TRqqSKenRXVklANSIUE8mRkGpv+HOfAAABCElEQVQ4y4VT13LDMAwLrUHteO+R9f/fWMfO6dLaPeKVEECRxOULWsEGpS9nULDwia2Y+ALqUNbAWeg775zv+sA4/FFRMxt8U2FZFCVWjR/YrH4/H9sarclSKdPMWKzb8VsEeHB3m0shkhVCyNzeXeAQ9Xl4opEieX2QCGnwGbj6GMyjw9t1K0fK9YZunPXeAGsfJtYjwzxaBnozGGorYz0ypK2HzQSYx1y8DgSRo2ewOiyh2QWOEk1Y9OrQV0a8TiBM1a8eMHWYnRMy7CZ4t1CmyRkhSUvP3gRXyHOCLBxNoC3IJv//ZrJ/kxxUHPUB+6jJZZHrpg6GOjnqaOmzp4NDR48OLxn/H27SRQ08S0ZJAAAAAElFTkSuQmCC";

export function ParticleWave({ className = "", themeColor = "reference" }: ParticleWaveProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    let gl: WebGLRenderingContext | null = null;
    try {
      gl =
        (canvas.getContext("webgl", { antialias: true, alpha: true }) as WebGLRenderingContext | null) ||
        (canvas.getContext("experimental-webgl", { antialias: true, alpha: true }) as WebGLRenderingContext | null);
    } catch {
      gl = null;
    }

    let animationFrameId: number;
    let destroyed = false;

    // IF WEBGL IS AVAILABLE: Full GPU-accelerated vertex shader wave
    if (gl) {
      const vsSource = `
        #define M_PI 3.1415926535897932384626433832795
        precision highp float;

        attribute vec4 a_position;
        attribute vec4 a_color;

        uniform float u_time;
        uniform float u_size;
        uniform float u_speed;
        uniform vec3 u_field;
        uniform mat4 u_projection;
        uniform vec2 u_mouse;

        varying vec4 v_color;

        void main() {
          vec3 pos = a_position.xyz;

          // Undulating sine & cosine 3D wave matching swayamdev.in
          pos.y += (
            cos(pos.x / u_field.x * M_PI * 8.0 + u_time * u_speed) +
            sin(pos.z / u_field.z * M_PI * 8.0 + u_time * u_speed)
          ) * u_field.y;

          // Subtle interactive mouse elevation
          float dist = length(pos.xz - vec2(u_mouse.x * u_field.x * 0.4, u_mouse.y * u_field.z * 0.4));
          pos.y += exp(-dist * 0.02) * 8.0;

          gl_Position = u_projection * vec4( pos.xyz, a_position.w );
          gl_PointSize = ( u_size / gl_Position.w ) * 100.0;

          v_color = a_color;
        }
      `;

      const fsSource = `
        precision highp float;
        uniform sampler2D u_texture;
        varying vec4 v_color;

        void main() {
          gl_FragColor = v_color * texture2D(u_texture, gl_PointCoord);
        }
      `;

      function createShader(glCtx: WebGLRenderingContext, type: number, src: string) {
        const shader = glCtx.createShader(type);
        if (!shader) return null;
        glCtx.shaderSource(shader, src);
        glCtx.compileShader(shader);
        return shader;
      }

      const vs = createShader(gl, gl.VERTEX_SHADER, vsSource);
      const fs = createShader(gl, gl.FRAGMENT_SHADER, fsSource);
      if (!vs || !fs) return;

      const program = gl.createProgram();
      if (!program) return;
      gl.attachShader(program, vs);
      gl.attachShader(program, fs);
      gl.linkProgram(program);
      gl.useProgram(program);

      // Uniforms
      const uTimeLoc = gl.getUniformLocation(program, "u_time");
      const uSizeLoc = gl.getUniformLocation(program, "u_size");
      const uSpeedLoc = gl.getUniformLocation(program, "u_speed");
      const uFieldLoc = gl.getUniformLocation(program, "u_field");
      const uProjLoc = gl.getUniformLocation(program, "u_projection");
      const uMouseLoc = gl.getUniformLocation(program, "u_mouse");
      const uTextureLoc = gl.getUniformLocation(program, "u_texture");

      const aPosLoc = gl.getAttribLocation(program, "a_position");
      const aColLoc = gl.getAttribLocation(program, "a_color");

      const posBuffer = gl.createBuffer();
      const colBuffer = gl.createBuffer();

      // Camera defaults from swayamdev.in
      const camera = { fov: 60, near: 1, far: 10000, aspect: 1, z: 100 };

      function setProjection(aspect: number) {
        camera.aspect = aspect;
        const a = camera.fov * (Math.PI / 180);
        const t = Math.tan(0.5 * Math.PI - 0.5 * a);
        const i = 1 / (camera.near - camera.far);
        const n = [
          t / camera.aspect, 0, 0, 0,
          0, t, 0, 0,
          0, 0, (camera.near + camera.far) * i, -1,
          0, 0, camera.near * camera.far * i * 2, 0,
        ];
        n[14] += camera.z;
        n[15] += camera.z;
        return n;
      }

      // Load particle texture
      const tex = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, tex);
      gl.texImage2D(
        gl.TEXTURE_2D,
        0,
        gl.RGBA,
        1,
        1,
        0,
        gl.RGBA,
        gl.UNSIGNED_BYTE,
        new Uint8Array([255, 255, 255, 255])
      );

      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = () => {
        if (!gl || destroyed) return;
        gl.bindTexture(gl.TEXTURE_2D, tex);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      };
      img.src = PARTICLE_TEXTURE_BASE64;

      gl.uniform1i(uTextureLoc, 0);
      gl.uniform1f(uSpeedLoc, 5.0);

      let particleCount = 0;
      const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

      function resize() {
        if (!container || !canvas || !gl || destroyed) return;
        const w = container.offsetWidth || window.innerWidth;
        const h = container.offsetHeight || window.innerHeight;
        const dpr = Math.min(window.devicePixelRatio || 1, 2);

        canvas.width = w * dpr;
        canvas.height = h * dpr;
        canvas.style.width = `${w}px`;
        canvas.style.height = `${h}px`;

        gl.viewport(0, 0, w * dpr, h * dpr);
        gl.clearColor(0, 0, 0, 0);

        const aspect = w / h;
        const proj = setProjection(aspect);
        gl.uniformMatrix4fv(uProjLoc, false, new Float32Array(proj));

        const baseSize = 2.5;
        gl.uniform1f(uSizeLoc, (h / 400) * baseSize * dpr);

        const fieldW = (w / h) * 400;
        const fieldH = 400;
        const amplitude = 3.2;
        const step = 5;

        gl.uniform3f(uFieldLoc, fieldW, amplitude, fieldH);

        const isLight = document.documentElement.classList.contains("light");
        if (isLight) {
          gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
        } else {
          gl.blendFunc(gl.SRC_ALPHA, gl.ONE);
        }

        const positions: number[] = [];
        const colors: number[] = [];

        for (let s = 0; s < fieldW; s += step) {
          for (let e = 0; e < fieldH; e += step) {
            // Lowered y coordinate from -30 to -62 so wave sits on the bottom floor
            positions.push(-fieldW / 2 + s, -62, -fieldH / 2 + e);

            const nx = s / fieldW;
            const nz = e / fieldH;

            if (isLight) {
              if (themeColor === "solar") {
                colors.push(0.85 * nx + 0.1, 0.45 * (1 - nx) + 0.05, 0.05, 0.35 + nz * 0.55);
              } else if (themeColor === "cyber") {
                colors.push(0.02, 0.55 * (1 - nx) + 0.1, 0.6, 0.35 + nz * 0.55);
              } else {
                const r = Math.pow(nx, 2) * 0.85;
                const g = 0.5 * (1 - nx) + 0.1;
                const b = 0.8;
                const a = 0.35 + nz * 0.55;
                colors.push(r, g, b, a);
              }
            } else {
              // Exact reference dark mode color schemes
              if (themeColor === "solar") {
                // Solar Amber: Deep gold to cyan depth
                colors.push(0.95 * nx + 0.1, 0.65 * (1 - nx) + 0.2, 0.2 * nz, 0.4 + nz * 0.6);
              } else if (themeColor === "cyber") {
                // Cyber Cyan & Emerald
                colors.push(0.05, 0.85 * (1 - nx) + 0.15, 0.9, 0.35 + nz * 0.65);
              } else {
                // Reference exact color scheme
                const r = Math.pow(nx, 3) * 0.9;
                const g = 1.0 - nx * 0.7;
                const b = 0.5 + nx * 0.5;
                const a = nz;
                colors.push(r, g, b, a);
              }
            }
          }
        }

        particleCount = positions.length / 3;

        gl.bindBuffer(gl.ARRAY_BUFFER, posBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
        gl.enableVertexAttribArray(aPosLoc);
        gl.vertexAttribPointer(aPosLoc, 3, gl.FLOAT, false, 0, 0);

        gl.bindBuffer(gl.ARRAY_BUFFER, colBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
        gl.enableVertexAttribArray(aColLoc);
        gl.vertexAttribPointer(aColLoc, 4, gl.FLOAT, false, 0, 0);

        setIsReady(true);
      }

      resize();

      // Observe class changes on html for instant dark/light wave updates
      const themeObserver = new MutationObserver(() => {
        if (!destroyed) resize();
      });
      themeObserver.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["class"],
      });

      const handleMouseMove = (e: MouseEvent) => {
        const w = container.offsetWidth || window.innerWidth;
        const h = container.offsetHeight || window.innerHeight;
        mouse.targetX = (e.clientX / w) * 2 - 1;
        mouse.targetY = (e.clientY / h) * 2 - 1;
      };

      window.addEventListener("resize", resize);
      window.addEventListener("mousemove", handleMouseMove);

      const startTime = performance.now();

      function loop() {
        if (destroyed || !gl) return;
        const now = performance.now();
        const time = (now - startTime) / 5000;

        mouse.x += (mouse.targetX - mouse.x) * 0.05;
        mouse.y += (mouse.targetY - mouse.y) * 0.05;

        gl.uniform1f(uTimeLoc, time);
        gl.uniform2f(uMouseLoc, mouse.x, mouse.y);

        gl.clear(gl.COLOR_BUFFER_BIT);
        if (particleCount > 0) {
          gl.drawArrays(gl.POINTS, 0, particleCount);
        }

        animationFrameId = requestAnimationFrame(loop);
      }

      loop();

      return () => {
        destroyed = true;
        cancelAnimationFrame(animationFrameId);
        themeObserver.disconnect();
        window.removeEventListener("resize", resize);
        window.removeEventListener("mousemove", handleMouseMove);
        if (gl) {
          if (posBuffer) gl.deleteBuffer(posBuffer);
          if (colBuffer) gl.deleteBuffer(colBuffer);
          if (tex) gl.deleteTexture(tex);
          if (vs) gl.deleteShader(vs);
          if (fs) gl.deleteShader(fs);
          if (program) gl.deleteProgram(program);
        }
      };
    } else {
      // 2D CANVAS PERSPECTIVE FALLBACK (For non-WebGL or software environments)
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      let w = (canvas.width = container.offsetWidth || window.innerWidth);
      let h = (canvas.height = container.offsetHeight || window.innerHeight);

      const handleResize = () => {
        w = canvas.width = container.offsetWidth || window.innerWidth;
        h = canvas.height = container.offsetHeight || window.innerHeight;
      };
      window.addEventListener("resize", handleResize);

      let stepTime = 0;
      function draw2D() {
        if (destroyed || !ctx) return;
        stepTime += 0.02;
        ctx.clearRect(0, 0, w, h);

        const isLight = document.documentElement.classList.contains("light");
        const rows = 36;
        const cols = 55;
        const horizon = h * 0.60;

        for (let r = 0; r < rows; r++) {
          const depth = (r + 1) / rows;
          const yBase = horizon + Math.pow(depth, 1.6) * (h - horizon);
          const pointSize = Math.max(1, depth * 3.5);

          for (let c = 0; c < cols; c++) {
            const xPercent = (c - cols / 2) / (cols / 2);
            const spread = xPercent * (w * 0.5) * (0.3 + depth * 0.7);
            const x = w * 0.5 + spread;

            const wave = Math.sin(xPercent * 6 + stepTime * 2.5) * Math.cos(depth * 8 + stepTime * 2.5);
            const y = yBase + wave * 18 * depth;

            ctx.beginPath();
            ctx.arc(x, y, pointSize, 0, Math.PI * 2);

            if (isLight) {
              if (themeColor === "solar") {
                ctx.fillStyle = `rgba(180, 83, 9, ${0.25 + depth * 0.7})`;
              } else if (themeColor === "cyber") {
                ctx.fillStyle = `rgba(5, 150, 105, ${0.25 + depth * 0.7})`;
              } else {
                ctx.fillStyle = `rgba(2, 132, 199, ${0.25 + depth * 0.75})`;
              }
            } else {
              if (themeColor === "solar") {
                ctx.fillStyle = `rgba(245, 158, 11, ${0.15 + depth * 0.7})`;
              } else if (themeColor === "cyber") {
                ctx.fillStyle = `rgba(16, 185, 129, ${0.15 + depth * 0.7})`;
              } else {
                // Cyan to coral
                const rCol = Math.floor(depth * 244);
                const gCol = Math.floor(180 + (1 - depth) * 60);
                const bCol = 255;
                ctx.fillStyle = `rgba(${rCol}, ${gCol}, ${bCol}, ${0.18 + depth * 0.75})`;
              }
            }
            ctx.fill();
          }
        }
        animationFrameId = requestAnimationFrame(draw2D);
      }

      draw2D();

      return () => {
        destroyed = true;
        cancelAnimationFrame(animationFrameId);
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [themeColor]);

  return (
    <div
      ref={containerRef}
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="absolute inset-0 size-full block transition-opacity duration-700" />
    </div>
  );
}

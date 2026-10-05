import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// Procedural Earth surface texture
function createEarthTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');
  if (!ctx) return new THREE.CanvasTexture(canvas);

  // Deep dark ocean
  ctx.fillStyle = '#060e22';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Continents in emerald & golden amber
  ctx.fillStyle = '#10b981';

  // Rough continent landmass shapes
  const continents = [
    // North America
    [[180, 80], [280, 70], [320, 150], [240, 200], [170, 150]],
    // South America
    [[240, 240], [320, 250], [300, 380], [260, 420], [230, 310]],
    // Eurasia
    [[480, 60], [750, 70], [800, 180], [600, 200], [500, 120]],
    // Africa
    [[470, 180], [580, 200], [560, 360], [500, 380], [450, 250]],
    // Australia
    [[750, 300], [840, 310], [820, 390], [740, 380]],
  ];

  continents.forEach((pts) => {
    ctx.beginPath();
    ctx.moveTo(pts[0][0], pts[0][1]);
    for (let i = 1; i < pts.length; i++) {
      ctx.lineTo(pts[i][0], pts[i][1]);
    }
    ctx.closePath();
    ctx.fill();
  });

  // Secondary gold-tinted terrain highlights
  ctx.fillStyle = '#f59e0b';
  ctx.globalAlpha = 0.4;
  ctx.beginPath();
  ctx.arc(230, 130, 40, 0, Math.PI * 2);
  ctx.arc(620, 120, 60, 0, Math.PI * 2);
  ctx.arc(520, 280, 40, 0, Math.PI * 2);
  ctx.fill();
  ctx.globalAlpha = 1.0;

  return new THREE.CanvasTexture(canvas);
}

export const EarthCanvas: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    } catch {
      setHasWebGL(false);
      return;
    }

    const width = container.clientWidth || 550;
    const height = container.clientHeight || 550;

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(-2, 3, 5);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1.8;
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;

    // Lighting matching Screenshot 7
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 1.8);
    dirLight1.position.set(5, 8, 5);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x915eff, 1.2);
    dirLight2.position.set(-5, -3, -4);
    scene.add(dirLight2);

    // Master Planet Group
    const earthGroup = new THREE.Group();
    scene.add(earthGroup);

    // 1. Inner Earth Globe
    const earthTexture = createEarthTexture();
    const globeGeo = new THREE.SphereGeometry(1.65, 64, 64);
    const globeMat = new THREE.MeshStandardMaterial({
      map: earthTexture,
      roughness: 0.4,
      metalness: 0.2,
      emissive: 0x050d1a,
      emissiveIntensity: 0.5,
    });
    const globe = new THREE.Mesh(globeGeo, globeMat);
    earthGroup.add(globe);

    // Atmospheric Glow rim
    const atmoGeo = new THREE.SphereGeometry(1.68, 32, 32);
    const atmoMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.15,
      side: THREE.BackSide,
    });
    const atmo = new THREE.Mesh(atmoGeo, atmoMat);
    earthGroup.add(atmo);

    // 2. Swirling Orbital Shell Bands (Matching Screenshot 7)
    // Horizontal curved ribbons wrapping around the globe
    const bandGroup = new THREE.Group();
    earthGroup.add(bandGroup);

    // Colors transitioning from pale pink/lavender at top to soft pastel blue at bottom
    const bandConfigs = [
      { y: 1.5, r: 1.1, tube: 0.16, color: 0xfbcfe8, arc: Math.PI * 1.5, rotX: 0.15, rotY: 0.2 },
      { y: 1.1, r: 1.6, tube: 0.18, color: 0xf9a8d4, arc: Math.PI * 1.7, rotX: 0.2, rotY: 0.8 },
      { y: 0.6, r: 1.9, tube: 0.21, color: 0xf472b6, arc: Math.PI * 1.8, rotX: 0.1, rotY: 1.5 },
      { y: 0.1, r: 2.1, tube: 0.23, color: 0xe9d5ff, arc: Math.PI * 1.85, rotX: 0.05, rotY: 2.3 },
      { y: -0.4, r: 2.05, tube: 0.21, color: 0xc4b5fd, arc: Math.PI * 1.75, rotX: -0.1, rotY: 3.1 },
      { y: -0.9, r: 1.8, tube: 0.19, color: 0x93c5fd, arc: Math.PI * 1.65, rotX: -0.2, rotY: 4.0 },
      { y: -1.3, r: 1.4, tube: 0.16, color: 0x60a5fa, arc: Math.PI * 1.45, rotX: -0.3, rotY: 4.8 },
    ];

    bandConfigs.forEach((cfg) => {
      const torusGeo = new THREE.TorusGeometry(cfg.r, cfg.tube, 20, 80, cfg.arc);
      const torusMat = new THREE.MeshStandardMaterial({
        color: cfg.color,
        roughness: 0.25,
        metalness: 0.15,
      });
      const torusMesh = new THREE.Mesh(torusGeo, torusMat);
      torusMesh.position.y = cfg.y;
      torusMesh.rotation.x = Math.PI / 2 + cfg.rotX;
      torusMesh.rotation.z = cfg.rotY;
      bandGroup.add(torusMesh);
    });

    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      globe.rotation.y += 0.003;
      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width: w, height: h } = entry.contentRect;
        if (w > 0 && h > 0) {
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
          renderer.setSize(w, h);
        }
      }
    });

    resizeObserver.observe(container);

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      controls.dispose();
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  if (!hasWebGL) {
    return (
      <div className="w-full h-full flex items-center justify-center p-8 text-center text-[#aaa6c3]">
        Interactive 3D Earth
      </div>
    );
  }

  return (
    <div className="w-full h-[400px] sm:h-[500px] xl:h-[580px] relative cursor-grab active:cursor-grabbing">
      <div ref={mountRef} className="w-full h-full" />
    </div>
  );
};

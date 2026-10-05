import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export const OrbitalSphereCanvas: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });
    } catch {
      setHasWebGL(false);
      return;
    }

    const width = container.clientWidth || 400;
    const height = container.clientHeight || 380;

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 5.5);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1.0;
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.5);
    dirLight.position.set(4, 5, 4);
    scene.add(dirLight);

    const pointLight1 = new THREE.PointLight(0x9b5cff, 3, 10);
    pointLight1.position.set(-3, 2, 3);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x6e42d9, 2, 10);
    pointLight2.position.set(3, -2, -2);
    scene.add(pointLight2);

    // Group
    const outerGroup = new THREE.Group();
    scene.add(outerGroup);

    // Central Wireframe Sphere
    const coreGeo = new THREE.SphereGeometry(0.9, 32, 32);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x160e29,
      emissive: 0x6e42d9,
      emissiveIntensity: 0.6,
      roughness: 0.2,
      metalness: 0.8,
      wireframe: true,
    });
    const core = new THREE.Mesh(coreGeo, coreMat);
    outerGroup.add(core);

    // Ring 1
    const ring1Geo = new THREE.TorusGeometry(1.5, 0.08, 16, 100);
    const ring1Mat = new THREE.MeshStandardMaterial({
      color: 0x9b5cff,
      emissive: 0x9b5cff,
      emissiveIntensity: 0.5,
      metalness: 0.9,
      roughness: 0.1,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.set(0.4, 0.2, 0);
    outerGroup.add(ring1);

    // Ring 2
    const ring2Geo = new THREE.TorusGeometry(1.75, 0.06, 16, 100);
    const ring2Mat = new THREE.MeshStandardMaterial({
      color: 0xb78af7,
      emissive: 0x6e42d9,
      emissiveIntensity: 0.4,
      metalness: 0.8,
      roughness: 0.2,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.set(-0.6, 0.8, 0.3);
    outerGroup.add(ring2);

    // Ring 3
    const ring3Geo = new THREE.TorusGeometry(2.0, 0.09, 16, 100);
    const ring3Mat = new THREE.MeshStandardMaterial({
      color: 0x6e42d9,
      emissive: 0x43228c,
      emissiveIntensity: 0.5,
      metalness: 0.9,
      roughness: 0.15,
    });
    const ring3 = new THREE.Mesh(ring3Geo, ring3Mat);
    ring3.rotation.set(1.2, -0.4, 0.6);
    outerGroup.add(ring3);

    // Arches
    const arch1Geo = new THREE.TorusGeometry(1.3, 0.12, 16, 60, Math.PI * 1.4);
    const arch1Mat = new THREE.MeshStandardMaterial({ color: 0xec4899, roughness: 0.3, metalness: 0.7 });
    const arch1 = new THREE.Mesh(arch1Geo, arch1Mat);
    arch1.rotation.set(0.9, 0.9, 0);
    outerGroup.add(arch1);

    const arch2Geo = new THREE.TorusGeometry(1.6, 0.14, 16, 60, Math.PI * 1.2);
    const arch2Mat = new THREE.MeshStandardMaterial({ color: 0x38bdf8, roughness: 0.3, metalness: 0.7 });
    const arch2 = new THREE.Mesh(arch2Geo, arch2Mat);
    arch2.rotation.set(-1.1, 0.5, 1.2);
    outerGroup.add(arch2);

    // Particles
    const particleGroup = new THREE.Group();
    outerGroup.add(particleGroup);
    const pGeo = new THREE.SphereGeometry(0.04, 12, 12);
    for (let i = 0; i < 16; i++) {
      const angle = (i / 16) * Math.PI * 2;
      const radius = 2.3 + Math.sin(i) * 0.3;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(i * 2) * 0.6;
      const z = Math.sin(angle) * radius;

      const pMat = new THREE.MeshBasicMaterial({ color: i % 2 === 0 ? 0x9b5cff : 0xb78af7 });
      const pMesh = new THREE.Mesh(pGeo, pMat);
      pMesh.position.set(x, y, z);
      particleGroup.add(pMesh);
    }

    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      outerGroup.rotation.y += delta * 0.2;
      outerGroup.rotation.x = Math.sin(time * 0.4) * 0.15;
      ring1.rotation.z += delta * 0.4;
      ring2.rotation.x += delta * 0.3;
      ring3.rotation.y -= delta * 0.4;
      core.rotation.y -= delta * 0.15;

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
      <div className="w-full h-full min-h-[350px] flex items-center justify-center p-6 text-center">
        <div className="w-48 h-48 rounded-full border-2 border-dashed border-[#9B5CFF]/30 flex items-center justify-center text-[#9B5CFF]">
          <span className="text-xs font-mono">Interactive Sphere</span>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-[360px] sm:h-[440px] relative cursor-grab active:cursor-grabbing">
      <div ref={mountRef} className="w-full h-full" />
    </div>
  );
};

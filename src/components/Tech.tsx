import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

interface TechItem {
  name: string;
  color: string;
  iconSvg: string;
}

const technologies: TechItem[] = [
  // Row 1
  {
    name: 'HTML 5',
    color: '#E34F26',
    iconSvg: `<svg viewBox="0 0 100 100" fill="none"><path d="M15 10L22 80L50 90L78 80L85 10H15Z" fill="#E34F26"/><path d="M50 16V83.5L72 75.5L77.5 16H50Z" fill="#EF652A"/><path d="M30 32H70L68 46H50V56H67L65 70L50 74L35 70L34 58H44L44.5 64L50 65.5L55.5 64L56 56H30V32Z" fill="#FFFFFF"/></svg>`,
  },
  {
    name: 'CSS 3',
    color: '#1572B6',
    iconSvg: `<svg viewBox="0 0 100 100" fill="none"><path d="M15 10L22 80L50 90L78 80L85 10H15Z" fill="#1572B6"/><path d="M50 16V83.5L72 75.5L77.5 16H50Z" fill="#33A9DC"/><path d="M30 32H70L68 46H50V56H67L65 70L50 74L35 70L34 58H44L44.5 64L50 65.5L55.5 64L56 56H30V32Z" fill="#FFFFFF"/></svg>`,
  },
  {
    name: 'JavaScript',
    color: '#F7DF1E',
    iconSvg: `<svg viewBox="0 0 100 100" fill="none"><rect width="100" height="100" rx="12" fill="#F7DF1E"/><path d="M28 40V68C28 75 32 78 38 78C42 78 45 76 47 73L42 69C41 71 39 72 38 72C35 72 34 70 34 67V40H28ZM54 40V78H60V64H69C76 64 80 60 80 52C80 44 76 40 69 40H54ZM60 46H68C72 46 74 48 74 52C74 56 72 58 68 58H60V46Z" fill="#000000"/></svg>`,
  },
  {
    name: 'TypeScript',
    color: '#3178C6',
    iconSvg: `<svg viewBox="0 0 100 100" fill="none"><rect width="100" height="100" rx="12" fill="#3178C6"/><path d="M25 35H55V42H43V75H37V42H25V35ZM58 65C60 70 65 75 73 75C80 75 85 71 85 65C85 58 78 56 72 54C64 51 60 48 60 43C60 37 65 33 72 33C78 33 83 36 85 41L80 44C78 41 75 39 72 39C68 39 65 41 65 43C65 46 68 48 74 50C82 53 87 56 87 64C87 72 80 77 72 77C63 77 57 71 55 64L58 65Z" fill="#FFFFFF"/></svg>`,
  },
  {
    name: 'React JS',
    color: '#61DAFB',
    iconSvg: `<svg viewBox="0 0 100 100" fill="none"><ellipse cx="50" cy="50" rx="42" ry="16" stroke="#61DAFB" strokeWidth="5" transform="rotate(30 50 50)"/><ellipse cx="50" cy="50" rx="42" ry="16" stroke="#61DAFB" strokeWidth="5" transform="rotate(90 50 50)"/><ellipse cx="50" cy="50" rx="42" ry="16" stroke="#61DAFB" strokeWidth="5" transform="rotate(150 50 50)"/><circle cx="50" cy="50" r="7" fill="#61DAFB"/></svg>`,
  },
  {
    name: 'Redux Toolkit',
    color: '#764ABC',
    iconSvg: `<svg viewBox="0 0 100 100" fill="none"><path d="M50 15L78 31V69L50 85L22 69V31L50 15Z" stroke="#764ABC" strokeWidth="6" fill="#1b1236"/><circle cx="50" cy="35" r="7" fill="#764ABC"/><circle cx="35" cy="62" r="7" fill="#764ABC"/><circle cx="65" cy="62" r="7" fill="#764ABC"/><line x1="50" y1="35" x2="35" y2="62" stroke="#764ABC" strokeWidth="4"/><line x1="50" y1="35" x2="65" y2="62" stroke="#764ABC" strokeWidth="4"/><line x1="35" y1="62" x2="65" y2="62" stroke="#764ABC" strokeWidth="4"/></svg>`,
  },
  {
    name: 'Tailwind CSS',
    color: '#38BDF8',
    iconSvg: `<svg viewBox="0 0 100 100" fill="none"><path d="M25 45C28 35 36 30 46 32C56 34 60 44 65 46C70 48 76 45 80 40C77 50 69 55 59 53C49 51 45 41 40 39C35 37 29 40 25 45ZM10 65C13 55 21 50 31 52C41 54 45 64 50 66C55 68 61 65 65 60C62 70 54 75 44 73C34 71 30 61 25 59C20 57 14 60 10 65Z" fill="#38BDF8"/></svg>`,
  },

  // Row 2
  {
    name: 'Node JS',
    color: '#339933',
    iconSvg: `<svg viewBox="0 0 100 100" fill="none"><path d="M50 15L85 35V65L50 85L15 65V35L50 15Z" fill="#339933"/><text x="50" y="58" font-size="28" font-family="sans-serif" font-weight="bold" fill="#ffffff" text-anchor="middle">JS</text></svg>`,
  },
  {
    name: 'MongoDB',
    color: '#47A248',
    iconSvg: `<svg viewBox="0 0 100 100" fill="none"><path d="M50 10C50 10 20 40 20 62C20 78 33 90 50 90C67 90 80 78 80 62C80 40 50 10 50 10Z" fill="#47A248"/><path d="M50 10V90C67 90 80 78 80 62C80 40 50 10 50 10Z" fill="#4CAF50"/><path d="M50 25V80" stroke="#ffffff" strokeWidth="3"/></svg>`,
  },
  {
    name: 'Three JS',
    color: '#FFFFFF',
    iconSvg: `<svg viewBox="0 0 100 100" fill="none"><polygon points="50,15 85,75 15,75" stroke="#000000" strokeWidth="6" fill="#ffffff"/><polygon points="50,15 50,75 15,75" fill="#e5e5e5"/><line x1="50" y1="15" x2="50" y2="75" stroke="#000000" strokeWidth="4"/><line x1="32" y1="45" x2="68" y2="45" stroke="#000000" strokeWidth="4"/></svg>`,
  },
  {
    name: 'git',
    color: '#F05032',
    iconSvg: `<svg viewBox="0 0 100 100" fill="none"><rect x="15" y="15" width="70" height="70" rx="14" transform="rotate(45 50 50)" fill="#F05032"/><circle cx="40" cy="40" r="7" fill="#ffffff"/><circle cx="60" cy="60" r="7" fill="#ffffff"/><circle cx="40" cy="60" r="7" fill="#ffffff"/><line x1="40" y1="40" x2="40" y2="60" stroke="#ffffff" strokeWidth="5"/><line x1="40" y1="60" x2="60" y2="60" stroke="#ffffff" strokeWidth="5"/></svg>`,
  },
  {
    name: 'figma',
    color: '#F24E1E',
    iconSvg: `<svg viewBox="0 0 100 100" fill="none"><circle cx="65" cy="50" r="15" fill="#1ABCFE"/><path d="M35 20H50V50H35C27 50 20 43 20 35C20 27 27 20 35 20Z" fill="#F24E1E"/><path d="M50 20H65C73 20 80 27 80 35C80 43 73 50 65 50H50V20Z" fill="#FF7262"/><path d="M35 50H50V80H35C27 80 20 73 20 65C20 57 27 50 35 50Z" fill="#0ACF83"/><circle cx="35" cy="65" r="15" fill="#A259FF"/></svg>`,
  },
  {
    name: 'docker',
    color: '#2496ED',
    iconSvg: `<svg viewBox="0 0 100 100" fill="none"><path d="M85 55C82 48 74 47 70 48C68 42 62 40 56 42V35H64V43H56V48H48V42H40V48H32V42H24V55C15 58 15 70 25 72C40 76 75 75 85 64C90 58 87 56 85 55Z" fill="#2496ED"/></svg>`,
  },
];

// Single Interactive 3D Decal Ball Component matching Video at 00:28 - 00:39
const Ball3D: React.FC<{ tech: TechItem }> = ({ tech }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    } catch {
      return;
    }

    const size = 115;
    renderer.setSize(size, size);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.z = 6.2;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1.2;
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;

    // Ambient + Directional lighting for soft metallic faceting
    const ambient = new THREE.AmbientLight(0xffffff, 0.85);
    scene.add(ambient);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.5);
    dirLight.position.set(3, 4, 5);
    scene.add(dirLight);

    const backLight = new THREE.DirectionalLight(0x915eff, 0.8);
    backLight.position.set(-3, -3, -2);
    scene.add(backLight);

    // 1. Multi-faceted Icosahedron
    const geo = new THREE.IcosahedronGeometry(2.1, 1);
    const mat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.15,
      metalness: 0.25,
      flatShading: true,
    });
    const mesh = new THREE.Mesh(geo, mat);
    scene.add(mesh);

    // 2. Decal Canvas Texture for Logo
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const img = new Image();
      const svgBlob = new Blob([tech.iconSvg], { type: 'image/svg+xml;charset=utf-8' });
      const URL = window.URL || window.webkitURL || window;
      const blobURL = URL.createObjectURL(svgBlob);

      img.onload = () => {
        ctx.clearRect(0, 0, 256, 256);
        ctx.drawImage(img, 38, 38, 180, 180);
        const texture = new THREE.CanvasTexture(canvas);

        const decalPlaneGeo = new THREE.PlaneGeometry(2.2, 2.2);
        const decalMat = new THREE.MeshBasicMaterial({
          map: texture,
          transparent: true,
          depthTest: true,
        });
        const decal = new THREE.Mesh(decalPlaneGeo, decalMat);
        decal.position.set(0, 0, 2.12);
        mesh.add(decal);
        URL.revokeObjectURL(blobURL);
      };
      img.src = blobURL;
    }

    let reqId: number;

    const animate = () => {
      reqId = requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(reqId);
      controls.dispose();
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geo.dispose();
      mat.dispose();
      renderer.dispose();
    };
  }, [tech]);

  return (
    <div
      ref={mountRef}
      className="w-28 h-28 flex items-center justify-center cursor-grab active:cursor-grabbing hover:scale-110 transition-transform"
      title={tech.name}
    />
  );
};

export const Tech: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-16 py-16 relative z-10">
      {/* Exact 3D Tech Ball Rows matching Video at 00:28 - 00:39 */}
      <div className="flex flex-row flex-wrap justify-center gap-10 max-w-5xl mx-auto">
        {technologies.map((tech) => (
          <div key={tech.name} className="flex flex-col items-center">
            <Ball3D tech={tech} />
          </div>
        ))}
      </div>
    </section>
  );
};

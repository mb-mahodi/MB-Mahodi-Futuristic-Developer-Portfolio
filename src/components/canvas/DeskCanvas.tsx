import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import desktopImage from './Desktop image.png';

// Procedural texture for high-fidelity VS Code screen
function createVSCodeTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 1280;
  canvas.height = 720;
  const ctx = canvas.getContext('2d');
  if (!ctx) return new THREE.CanvasTexture(canvas);

  // Background
  ctx.fillStyle = '#181824';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // 1. LEFT SIDEBAR (Explorer)
  const sidebarW = 240;
  ctx.fillStyle = '#11101a';
  ctx.fillRect(0, 0, sidebarW, canvas.height);

  // Top Explorer title
  ctx.fillStyle = '#9b92b3';
  ctx.font = 'bold 13px sans-serif';
  ctx.fillText('EXPLORER', 18, 28);

  ctx.fillStyle = '#6e6587';
  ctx.font = 'bold 11px sans-serif';
  ctx.fillText('▾ PORTFOLIO-3D', 18, 56);

  const files = [
    { name: '  ▾ src', isFolder: true, color: '#bca6ff' },
    { name: '    ▾ components', isFolder: true, color: '#bca6ff' },
    { name: '      ▾ canvas', isFolder: true, color: '#bca6ff' },
    { name: '        ⚛ DeskCanvas.tsx', isFolder: false, color: '#38bdf8', active: true },
    { name: '        ⚛ EarthCanvas.tsx', isFolder: false, color: '#61dafb' },
    { name: '        ⚛ StarsCanvas.tsx', isFolder: false, color: '#61dafb' },
    { name: '      ⚛ Hero.tsx', isFolder: false, color: '#61dafb' },
    { name: '      ⚛ Navbar.tsx', isFolder: false, color: '#61dafb' },
    { name: '      ⚛ Overview.tsx', isFolder: false, color: '#61dafb' },
    { name: '      ⚛ Experience.tsx', isFolder: false, color: '#61dafb' },
    { name: '      ⚛ Projects.tsx', isFolder: false, color: '#61dafb' },
    { name: '      ⚛ Footer.tsx', isFolder: false, color: '#61dafb' },
    { name: '    # index.css', isFolder: false, color: '#42a5f5' },
    { name: '    ⚛ App.tsx', isFolder: false, color: '#61dafb' },
  ];

  let fileY = 82;
  files.forEach((file) => {
    if (file.active) {
      ctx.fillStyle = '#221d36';
      ctx.fillRect(8, fileY - 14, sidebarW - 16, 20);
    }
    ctx.fillStyle = file.color;
    ctx.font = '12px monospace';
    ctx.fillText(file.name, 16, fileY);
    fileY += 21;
  });

  // 2. TOP TABS BAR (Matching user's screenshot: Hero.tsx, Footer.tsx, Overview.tsx, DeskCanvas.tsx)
  const mainX = sidebarW;
  ctx.fillStyle = '#141220';
  ctx.fillRect(mainX, 0, canvas.width - mainX, 36);

  // Inactive Tabs
  ctx.fillStyle = '#7a7294';
  ctx.font = '12px monospace';
  ctx.fillText('Hero.tsx', mainX + 20, 23);
  ctx.fillText('Footer.tsx', mainX + 110, 23);
  ctx.fillText('Overview.tsx', mainX + 210, 23);

  // Active Tab: DeskCanvas.tsx
  const activeTabX = mainX + 320;
  ctx.fillStyle = '#1e1a30';
  ctx.fillRect(activeTabX, 0, 180, 36);
  ctx.fillStyle = '#915eff';
  ctx.fillRect(activeTabX, 0, 180, 2);

  ctx.fillStyle = '#38bdf8';
  ctx.font = '12px monospace';
  ctx.fillText('DeskCanvas.tsx', activeTabX + 14, 23);
  ctx.fillStyle = '#aaa4bb';
  ctx.fillText('×', activeTabX + 160, 22);

  // Breadcrumbs Bar
  ctx.fillStyle = '#181824';
  ctx.fillRect(mainX, 36, canvas.width - mainX, 24);
  ctx.fillStyle = '#746b8f';
  ctx.font = '11px monospace';
  ctx.fillText('src  >  components  >  canvas  >  DeskCanvas.tsx', mainX + 18, 52);

  // 3. CODE EDITOR AREA (Exact code from user screenshot)
  const codeLines = [
    { num: '247', tokens: [{ text: 'export const ', c: '#569cd6' }, { text: 'DeskCanvas', c: '#4ec9b0' }, { text: ': React.FC = () => {', c: '#dcdcaa' }] },
    { num: '248', tokens: [{ text: '  useEffect', c: '#dcdcaa' }, { text: '(() => {', c: '#ffd700' }] },
    { num: '350', tokens: [{ text: '    // Left Prong', c: '#6a9955' }] },
    { num: '351', tokens: [{ text: '    const ', c: '#569cd6' }, { text: 'prong1 = ', c: '#9cdcfe' }, { text: 'new THREE.Mesh', c: '#4ec9b0' }, { text: '(prong1Geo, standMat);', c: '#dcdcaa' }] },
    { num: '352', tokens: [{ text: '    prong1.position.set', c: '#dcdcaa' }, { text: '(-0.25, 0.11, -0.2);', c: '#b5cea8' }] },
    { num: '353', tokens: [{ text: '    prong1.rotation.y = 0.35;', c: '#b5cea8' }] },
    { num: '354', tokens: [{ text: '    monitorGroup.add(prong1);', c: '#9cdcfe' }] },
    { num: '355', tokens: [] },
    { num: '356', tokens: [{ text: '    // Right Prong', c: '#6a9955' }] },
    { num: '357', tokens: [{ text: '    const ', c: '#569cd6' }, { text: 'prong2 = ', c: '#9cdcfe' }, { text: 'new THREE.Mesh', c: '#4ec9b0' }, { text: '(prong1Geo, standMat);', c: '#dcdcaa' }] },
    { num: '358', tokens: [{ text: '    prong2.position.set', c: '#dcdcaa' }, { text: '(0.25, 0.11, -0.2);', c: '#b5cea8' }] },
    { num: '359', tokens: [{ text: '    monitorGroup.add(prong2);', c: '#9cdcfe' }] },
    { num: '360', tokens: [] },
    { num: '361', tokens: [{ text: '    // Stand Vertical Stem', c: '#6a9955' }] },
    { num: '362', tokens: [{ text: '    const ', c: '#569cd6' }, { text: 'stemGeo = ', c: '#9cdcfe' }, { text: 'new THREE.BoxGeometry', c: '#4ec9b0' }, { text: '(0.12, 1.4, 0.14);', c: '#b5cea8' }] },
    { num: '363', tokens: [{ text: '    const ', c: '#569cd6' }, { text: 'stem = ', c: '#9cdcfe' }, { text: 'new THREE.Mesh', c: '#4ec9b0' }, { text: '(stemGeo, standMat);', c: '#dcdcaa' }] },
    { num: '364', tokens: [{ text: '    stem.position.set', c: '#dcdcaa' }, { text: '(0, 0.78, -0.55);', c: '#b5cea8' }] },
    { num: '368', tokens: [{ text: '    // Monitor Bezel Frame', c: '#6a9955' }] },
    { num: '369', tokens: [{ text: '    const ', c: '#569cd6' }, { text: 'monitorFrameGeo = ', c: '#9cdcfe' }, { text: 'new THREE.BoxGeometry', c: '#4ec9b0' }, { text: '(3.6, 2.05, 0.09);', c: '#b5cea8' }] },
    { num: '370', tokens: [{ text: '    const ', c: '#569cd6' }, { text: 'monitorFrameMat = ', c: '#9cdcfe' }, { text: 'new THREE.MeshStandardMaterial', c: '#4ec9b0' }, { text: '({', c: '#dcdcaa' }] },
    { num: '371', tokens: [{ text: '      color: ', c: '#9cdcfe' }, { text: '0x090712, ', c: '#b5cea8' }, { text: 'metalness: 0.8', c: '#b5cea8' }] },
  ];

  let codeY = 84;
  codeLines.forEach((line) => {
    // Line number
    ctx.fillStyle = '#5c5478';
    ctx.font = '13px monospace';
    ctx.fillText(line.num, mainX + 16, codeY);

    // Code tokens
    let tokenX = mainX + 54;
    line.tokens.forEach((t) => {
      ctx.fillStyle = t.c;
      ctx.font = '13px monospace';
      ctx.fillText(t.text, tokenX, codeY);
      tokenX += ctx.measureText(t.text).width;
    });

    codeY += 21;
  });

  // 4. BOTTOM TERMINAL PANEL
  const termY = 480;
  ctx.fillStyle = '#100e1a';
  ctx.fillRect(mainX, termY, canvas.width - mainX, canvas.height - termY);

  // Terminal Tab Headers
  ctx.fillStyle = '#141220';
  ctx.fillRect(mainX, termY, canvas.width - mainX, 28);
  ctx.fillStyle = '#7a7294';
  ctx.font = '11px sans-serif';
  ctx.fillText('PROBLEMS', mainX + 20, termY + 18);
  ctx.fillText('OUTPUT', mainX + 100, termY + 18);
  ctx.fillText('DEBUG CONSOLE', mainX + 170, termY + 18);

  ctx.fillStyle = '#915eff';
  ctx.fillText('TERMINAL', mainX + 285, termY + 18);
  ctx.fillRect(mainX + 285, termY + 26, 60, 2);

  // Terminal log lines (with green/cyan [vite] hmr updates)
  const logs = [
    '22:49:40 [vite] hmr update /src/components/canvas/Computers.jsx (x58)',
    '22:50:51 [vite] hmr update /src/components/canvas/Computers.jsx (x17)',
    '22:51:02 [vite] hmr update /src/components/Hero.jsx',
    '22:51:34 [vite] hmr update /src/components/canvas/Computers.jsx',
    '22:52:00 [vite] hmr update /src/components/canvas/Computers.jsx (x2)',
  ];

  let logY = termY + 50;
  logs.forEach((log) => {
    ctx.fillStyle = '#8f88a8';
    ctx.font = '12px monospace';
    ctx.fillText(log.substring(0, 8), mainX + 20, logY);

    ctx.fillStyle = '#38bdf8';
    ctx.fillText('[vite]', mainX + 90, logY);

    ctx.fillStyle = '#34d399';
    ctx.fillText('hmr update', mainX + 140, logY);

    ctx.fillStyle = '#c49eff';
    ctx.fillText(log.substring(25), mainX + 225, logY);

    logY += 20;
  });

  // 5. VERY BOTTOM STATUS BAR
  ctx.fillStyle = '#915eff';
  ctx.fillRect(0, canvas.height - 22, canvas.width, 22);
  ctx.fillStyle = '#050816';
  ctx.font = 'bold 11px monospace';
  ctx.fillText('  main*  ⚡ 0 ⊗ 0   MB Mahodi Core', 12, canvas.height - 7);
  ctx.fillText('Ln 56, Col 1   Spaces: 2   UTF-8   JavaScript React', canvas.width - 340, canvas.height - 7);

  const texture = new THREE.CanvasTexture(canvas);
  texture.anisotropy = 8;
  return texture;
}

// Procedural geometric cracked laser lines for gaming mousepad
function createLaserMousepadTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');
  if (!ctx) return new THREE.CanvasTexture(canvas);

  // Dark violet background
  ctx.fillStyle = '#110a22';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Glowing laser polygon crack lines (matching reference)
  ctx.strokeStyle = '#915eff';
  ctx.lineWidth = 4;
  ctx.shadowColor = '#915eff';
  ctx.shadowBlur = 10;

  const lines = [
    [[50, 256], [200, 180], [312, 256], [462, 190]],
    [[200, 180], [256, 70], [380, 100]],
    [[312, 256], [256, 420], [160, 390]],
    [[200, 180], [140, 320], [50, 256]],
    [[312, 256], [390, 340], [462, 190]],
    [[256, 70], [312, 256]],
    [[140, 320], [256, 420]],
  ];

  lines.forEach((pts) => {
    ctx.beginPath();
    ctx.moveTo(pts[0][0], pts[0][1]);
    for (let i = 1; i < pts.length; i++) {
      ctx.lineTo(pts[i][0], pts[i][1]);
    }
    ctx.stroke();
  });

  // Secondary cyan & pink accent lines
  ctx.strokeStyle = '#ec4899';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(100, 100);
  ctx.lineTo(200, 180);
  ctx.lineTo(256, 256);
  ctx.lineTo(390, 340);
  ctx.stroke();

  ctx.strokeStyle = '#38bdf8';
  ctx.beginPath();
  ctx.moveTo(256, 256);
  ctx.lineTo(312, 256);
  ctx.lineTo(380, 100);
  ctx.stroke();

  return new THREE.CanvasTexture(canvas);
}

export const DeskCanvas: React.FC = () => {
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
        powerPreference: 'high-performance',
      });
    } catch {
      setHasWebGL(false);
      return;
    }

    const width = container.clientWidth || 800;
    const height = container.clientHeight || 550;

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();

    const isMobile = width < 768;
    const camera = new THREE.PerspectiveCamera(isMobile ? 50 : 42, width / height, 0.1, 100);
    // Camera angle matching reference screenshot on laptop screen
    camera.position.set(0, 2.5, isMobile ? 6.2 : 10.0);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, -0.55, 0);
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.maxPolarAngle = Math.PI / 2.05;
    controls.minPolarAngle = Math.PI / 3.8;
    controls.maxAzimuthAngle = Math.PI / 3.2;
    controls.minAzimuthAngle = -Math.PI / 3.2;
    controls.rotateSpeed = 0.55;
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;

    // LIGHTING MATCHING REFERENCE
    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x050816, 0.6);
    scene.add(hemiLight);

    const spotLight = new THREE.SpotLight(0xffffff, 2.5);
    spotLight.position.set(0, 8, 3);
    spotLight.angle = 0.6;
    spotLight.penumbra = 0.8;
    scene.add(spotLight);

    // Purple atmospheric lighting
    const purpleLightLeft = new THREE.PointLight(0x915eff, 3.5, 12);
    purpleLightLeft.position.set(-4, 3, 2);
    scene.add(purpleLightLeft);

    const purpleLightRight = new THREE.PointLight(0x6e42d9, 3.0, 10);
    purpleLightRight.position.set(4, 2, -1);
    scene.add(purpleLightRight);

    // MASTER SETUP GROUP (Scaled to fit neatly inside canvas with safe padding)
    const setupGroup = new THREE.Group();
    const modelScale = isMobile ? 0.52 : 1.50;
    setupGroup.scale.set(modelScale, modelScale, modelScale);
    const basePosY = isMobile ? -0.7 : -1.5;
    setupGroup.position.set(0, basePosY, 0);
    scene.add(setupGroup);

    // 1. DESK PLATFORM (Floating textured dark slab)
    const deskGeo = new THREE.BoxGeometry(7.8, 0.18, 3.5);
    const deskMat = new THREE.MeshStandardMaterial({
      color: 0x12101b,
      roughness: 0.35,
      metalness: 0.7,
    });
    const desk = new THREE.Mesh(deskGeo, deskMat);
    desk.receiveShadow = true;
    setupGroup.add(desk);

    // Desk Front Edge Bevel
    const edgeGeo = new THREE.BoxGeometry(7.8, 0.02, 0.02);
    const edgeMat = new THREE.MeshBasicMaterial({ color: 0x915eff });
    const edge = new THREE.Mesh(edgeGeo, edgeMat);
    edge.position.set(0, 0.09, 1.75);
    setupGroup.add(edge);

    // 2. ULTRA-WIDE MONITOR (Centered slightly to left)
    const monitorGroup = new THREE.Group();
    monitorGroup.position.set(-0.4, 0, 0.1);
    setupGroup.add(monitorGroup);

    // Dual-Prong Angled Stand (Like Gigabyte/Asus gaming monitor)
    const standMat = new THREE.MeshStandardMaterial({ color: 0x1c172e, metalness: 0.9, roughness: 0.2 });

    // Left Prong
    const prong1Geo = new THREE.BoxGeometry(0.06, 0.04, 0.7);
    const prong1 = new THREE.Mesh(prong1Geo, standMat);
    prong1.position.set(-0.25, 0.11, -0.2);
    prong1.rotation.y = 0.35;
    monitorGroup.add(prong1);

    // Right Prong
    const prong2 = new THREE.Mesh(prong1Geo, standMat);
    prong2.position.set(0.25, 0.11, -0.2);
    prong2.rotation.y = -0.35;
    monitorGroup.add(prong2);

    // Stand Vertical Stem
    const stemGeo = new THREE.BoxGeometry(0.12, 1.4, 0.14);
    const stem = new THREE.Mesh(stemGeo, standMat);
    stem.position.set(0, 0.78, -0.55);
    stem.rotation.x = -0.05;
    monitorGroup.add(stem);

    // Monitor Bezel Frame
    const monitorFrameGeo = new THREE.BoxGeometry(3.6, 2.05, 0.09);
    const monitorFrameMat = new THREE.MeshStandardMaterial({
      color: 0x090712,
      metalness: 0.8,
      roughness: 0.2,
    });
    const monitorFrame = new THREE.Mesh(monitorFrameGeo, monitorFrameMat);
    monitorFrame.position.set(0, 1.45, -0.35);
    monitorGroup.add(monitorFrame);

    // =========================================================================
    // 🖥️ MONITOR DISPLAY IMAGE / SCREEN (লাইন ৩৮৯)
    // =========================================================================
    // ব্যবহারকারীর আপলোড করা ছবি এখানে বসানো হয়েছে:
    const customScreenImageUrl = desktopImage;

    const vsCodeTexture = createVSCodeTexture();
    const screenGeo = new THREE.PlaneGeometry(3.5, 1.95);
    const screenMat = new THREE.MeshBasicMaterial({ map: vsCodeTexture });

    if (customScreenImageUrl) {
      const textureLoader = new THREE.TextureLoader();
      textureLoader.load(customScreenImageUrl, (texture) => {
        texture.colorSpace = THREE.SRGBColorSpace;
        screenMat.map = texture;
        screenMat.needsUpdate = true;
      });
    }

    const screen = new THREE.Mesh(screenGeo, screenMat);
    screen.position.set(0, 1.45, -0.3);
    monitorGroup.add(screen);

    // Tiny Center Logo On Bottom Bezel ("MB MAHODI")
    const logoGeo = new THREE.BoxGeometry(0.25, 0.03, 0.01);
    const logoMat = new THREE.MeshBasicMaterial({ color: 0x915eff });
    const logo = new THREE.Mesh(logoGeo, logoMat);
    logo.position.set(0, 0.45, -0.3);
    monitorGroup.add(logo);

    // Monitor Backlight Aura
    const monitorBacklight = new THREE.PointLight(0x915eff, 3.5, 6);
    monitorBacklight.position.set(0, 1.45, -0.8);
    monitorGroup.add(monitorBacklight);

    // 3. DESKTOP SPEAKERS (Left and Right with Glowing Rainbow RGB Rings)
    const speakerMat = new THREE.MeshStandardMaterial({ color: 0x120e22, metalness: 0.8, roughness: 0.3 });
    const ringGeo = new THREE.RingGeometry(0.08, 0.16, 32);

    // RGB Gradient Cone Ring Materials
    const rgbRingMat = new THREE.MeshBasicMaterial({ color: 0x915eff, side: THREE.DoubleSide });
    const rgbRingMat2 = new THREE.MeshBasicMaterial({ color: 0x38bdf8, side: THREE.DoubleSide });

    // Left Speaker
    const spL = new THREE.Group();
    spL.position.set(-2.5, 0.45, 0.2);
    setupGroup.add(spL);

    const spBodyGeo = new THREE.BoxGeometry(0.38, 0.72, 0.38);
    const spLBody = new THREE.Mesh(spBodyGeo, speakerMat);
    spL.add(spLBody);

    const spLRing = new THREE.Mesh(ringGeo, rgbRingMat);
    spLRing.position.set(0, 0.05, 0.195);
    spL.add(spLRing);

    const spLCenter = new THREE.Mesh(new THREE.CircleGeometry(0.07, 16), new THREE.MeshBasicMaterial({ color: 0x050816 }));
    spLCenter.position.set(0, 0.05, 0.196);
    spL.add(spLCenter);

    // Right Speaker
    const spR = new THREE.Group();
    spR.position.set(1.4, 0.45, 0.2);
    setupGroup.add(spR);

    const spRBody = new THREE.Mesh(spBodyGeo, speakerMat);
    spR.add(spRBody);

    const spRRing = new THREE.Mesh(ringGeo, rgbRingMat2);
    spRRing.position.set(0, 0.05, 0.195);
    spR.add(spRRing);

    const spRCenter = new THREE.Mesh(new THREE.CircleGeometry(0.07, 16), new THREE.MeshBasicMaterial({ color: 0x050816 }));
    spRCenter.position.set(0, 0.05, 0.196);
    spR.add(spRCenter);

    // 4. MECHANICAL KEYBOARD
    const kbGroup = new THREE.Group();
    kbGroup.position.set(-0.4, 0.13, 0.95);
    setupGroup.add(kbGroup);

    const kbBaseGeo = new THREE.BoxGeometry(1.65, 0.06, 0.58);
    const kbBaseMat = new THREE.MeshStandardMaterial({ color: 0x141026, metalness: 0.7, roughness: 0.3 });
    const kbBase = new THREE.Mesh(kbBaseGeo, kbBaseMat);
    kbGroup.add(kbBase);

    // RGB Underglow Strip
    const kbGlowGeo = new THREE.BoxGeometry(1.69, 0.015, 0.62);
    const kbGlowMat = new THREE.MeshBasicMaterial({ color: 0x915eff });
    const kbGlow = new THREE.Mesh(kbGlowGeo, kbGlowMat);
    kbGlow.position.set(0, -0.02, 0);
    kbGroup.add(kbGlow);

    // Keycaps Surface
    const keysGeo = new THREE.BoxGeometry(1.58, 0.02, 0.52);
    const keysMat = new THREE.MeshStandardMaterial({ color: 0x211b3b, roughness: 0.5 });
    const keys = new THREE.Mesh(keysGeo, keysMat);
    keys.position.set(0, 0.04, 0);
    kbGroup.add(keys);

    // 5. GEOMETRIC LASER MOUSEPAD & RED/PINK GAMING MOUSE
    const mpGroup = new THREE.Group();
    mpGroup.position.set(1.0, 0.1, 0.95);
    setupGroup.add(mpGroup);

    const mousepadTexture = createLaserMousepadTexture();
    const mpGeo = new THREE.BoxGeometry(0.85, 0.015, 0.68);
    const mpMat = new THREE.MeshStandardMaterial({ map: mousepadTexture, roughness: 0.6 });
    const mp = new THREE.Mesh(mpGeo, mpMat);
    mpGroup.add(mp);

    // Gaming Mouse (Red/Pink illuminated shell like screenshot)
    const mouseGroup = new THREE.Group();
    mouseGroup.position.set(0.05, 0.06, 0);
    mpGroup.add(mouseGroup);

    const mouseBodyGeo = new THREE.BoxGeometry(0.16, 0.07, 0.28);
    const mouseBodyMat = new THREE.MeshStandardMaterial({
      color: 0xe11d48, // Vibrant gaming crimson/pink
      emissive: 0x9f1239,
      emissiveIntensity: 0.5,
      roughness: 0.3,
      metalness: 0.4,
    });
    const mouseBody = new THREE.Mesh(mouseBodyGeo, mouseBodyMat);
    mouseGroup.add(mouseBody);

    const mouseGlowGeo = new THREE.BoxGeometry(0.025, 0.01, 0.18);
    const mouseGlowMat = new THREE.MeshBasicMaterial({ color: 0xff4d88 });
    const mouseGlow = new THREE.Mesh(mouseGlowGeo, mouseGlowMat);
    mouseGlow.position.set(0, 0.038, 0);
    mouseGroup.add(mouseGlow);

    // 6. HIGH-END PC GAMING TOWER (Right side with dual RGB intake fans & antennae)
    const pcGroup = new THREE.Group();
    pcGroup.position.set(2.4, 1.15, 0.1);
    setupGroup.add(pcGroup);

    // Tower Outer Chassis
    const towerGeo = new THREE.BoxGeometry(0.95, 2.1, 1.8);
    const towerMat = new THREE.MeshStandardMaterial({
      color: 0x0a0815,
      metalness: 0.9,
      roughness: 0.2,
    });
    const tower = new THREE.Mesh(towerGeo, towerMat);
    pcGroup.add(tower);

    // Front Panel
    const frontPanelGeo = new THREE.BoxGeometry(0.92, 2.05, 0.04);
    const frontPanelMat = new THREE.MeshStandardMaterial({ color: 0x130e24, metalness: 0.8, roughness: 0.4 });
    const frontPanel = new THREE.Mesh(frontPanelGeo, frontPanelMat);
    frontPanel.position.set(0, 0, 0.91);
    pcGroup.add(frontPanel);

    // Front Dual RGB Halo Intake Fans (Matching AORUS style)
    const pcFans: THREE.Mesh[] = [];
    const pcFanGeo = new THREE.RingGeometry(0.12, 0.32, 32);

    const fanColors = [0x915eff, 0xec4899];
    [0.35, -0.35].forEach((y, i) => {
      // Outer illuminated ring
      const ringMat = new THREE.MeshBasicMaterial({ color: fanColors[i], side: THREE.DoubleSide });
      const fanMesh = new THREE.Mesh(pcFanGeo, ringMat);
      fanMesh.position.set(0, y, 0.94);
      pcGroup.add(fanMesh);
      pcFans.push(fanMesh);

      // Inner emblem/hub
      const hubMat = new THREE.MeshBasicMaterial({ color: 0x050816, side: THREE.DoubleSide });
      const hubMesh = new THREE.Mesh(new THREE.CircleGeometry(0.11, 24), hubMat);
      hubMesh.position.set(0, y, 0.945);
      pcGroup.add(hubMesh);

      // AORUS-style small glowing falcon/arrow emblem
      const emblem = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.06, 0.01), new THREE.MeshBasicMaterial({ color: 0xffffff }));
      emblem.position.set(0, y, 0.95);
      emblem.rotation.z = Math.PI / 4;
      pcGroup.add(emblem);
    });

    // Front Panel Power Button & Ports
    const btnGeo = new THREE.CircleGeometry(0.03, 16);
    const btnMat = new THREE.MeshBasicMaterial({ color: 0x915eff });
    const pwrBtn = new THREE.Mesh(btnGeo, btnMat);
    pwrBtn.position.set(0, 0.82, 0.94);
    pcGroup.add(pwrBtn);

    // Dual Wi-Fi Antennae on Top Rear
    const antMat = new THREE.MeshStandardMaterial({ color: 0x141026, metalness: 0.9 });
    const antGeo = new THREE.CylinderGeometry(0.02, 0.02, 0.7, 8);

    const ant1 = new THREE.Mesh(antGeo, antMat);
    ant1.position.set(-0.2, 1.35, -0.65);
    ant1.rotation.x = -0.35;
    ant1.rotation.z = -0.15;
    pcGroup.add(ant1);

    const ant2 = new THREE.Mesh(antGeo, antMat);
    ant2.position.set(0.2, 1.35, -0.65);
    ant2.rotation.x = -0.35;
    ant2.rotation.z = 0.15;
    pcGroup.add(ant2);

    // Tempered Glass Left Side Panel
    const glassGeo = new THREE.BoxGeometry(0.02, 1.9, 1.6);
    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0x221342,
      transmission: 0.85,
      transparent: true,
      roughness: 0.08,
      metalness: 0.1,
    });
    const glass = new THREE.Mesh(glassGeo, glassMat);
    glass.position.set(-0.485, 0, 0);
    pcGroup.add(glass);

    // Internal Motherboard & GPU Light (Purple/Pink Neon Glow)
    const pcInternalLight = new THREE.PointLight(0xa855f7, 4.5, 3.0);
    pcInternalLight.position.set(-0.15, 0.2, 0);
    pcGroup.add(pcInternalLight);

    const pcPinkLight = new THREE.PointLight(0xec4899, 3.0, 2.5);
    pcPinkLight.position.set(-0.15, -0.3, 0);
    pcGroup.add(pcPinkLight);

    const gpuGlow = new THREE.Mesh(
      new THREE.BoxGeometry(0.25, 0.03, 0.9),
      new THREE.MeshBasicMaterial({ color: 0xec4899 })
    );
    gpuGlow.position.set(-0.15, 0.05, 0);
    pcGroup.add(gpuGlow);

    // ANIMATION LOOP
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Gentle floating oscillation
      setupGroup.position.y = basePosY + Math.sin(elapsedTime * 0.9) * 0.03;

      // Rotating fans & dynamic RGB glow cycle
      pcFans.forEach((fan) => {
        fan.rotation.z += 0.06;
      });

      // Subtle RGB speaker color rotation
      const hue1 = (elapsedTime * 0.12) % 1;
      const hue2 = (elapsedTime * 0.12 + 0.5) % 1;
      rgbRingMat.color.setHSL(hue1, 0.9, 0.6);
      rgbRingMat2.color.setHSL(hue2, 0.9, 0.6);

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
      <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-[#100C1D]/60 rounded-2xl border border-[#915eff]/20 backdrop-blur-md">
        <h3 className="text-lg font-semibold text-[#F7F4FF] mb-1">Interactive 3D Workstation</h3>
        <p className="text-xs text-[#AAA4BB] max-w-sm">
          High-performance developer desk setup with RGB telemetry.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full relative cursor-grab active:cursor-grabbing">
      <div ref={mountRef} className="w-full h-full" />
    </div>
  );
};

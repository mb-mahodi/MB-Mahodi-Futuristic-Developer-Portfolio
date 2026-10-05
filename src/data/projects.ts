import { ProjectItem } from '../types';

export const projectsData: ProjectItem[] = [
  {
    id: 'robotic-science-club',
    title: 'Robotic Science Club Portal',
    category: 'Web',
    description:
      'A comprehensive interactive hub for the Robotics Science Club, featuring team member rosters, event schedules, hardware inventory tracking, and project showcase galleries.',
    features: [
      'Interactive hardware inventory tracker for lab microcontrollers',
      'Dynamic workshop registration and real-time team announcements',
      'Dark futuristic UI tailored to high-tech science club identity',
    ],
    tags: [
      { name: 'React', color: '#61DAFB' },
      { name: 'Tailwind CSS', color: '#38BDF8' },
      { name: 'TypeScript', color: '#3178C6' },
      { name: 'IoT Telemetry', color: '#10B981' },
    ],
    imageGradient: 'linear-gradient(135deg, #100C1D 0%, #1e1035 50%, #07060D 100%)',
    iconName: 'Bot',
    liveUrl: 'https://example.com/demo-robotic-club',
    sourceCodeUrl: 'https://github.com/example/robotic-science-club',
    isPlaceholderUrl: true,
  },
  {
    id: 'ar-historical-storytelling',
    title: 'AR ChronoLens: Historical Storytelling',
    category: 'Creative Tech',
    description:
      'An augmented spatial storytelling web experience that overlays historical artifacts, interactive voice narrations, and 3D reconstructed monuments into real-world coordinates.',
    features: [
      'Spatial WebGL scene reconstruction of historical artifacts',
      'Interactive timeline scrubbing synced with 3D audio narration',
      'Optimized lightweight asset streaming for mobile browser AR',
    ],
    tags: [
      { name: 'Three.js', color: '#9B5CFF' },
      { name: 'WebXR / AR', color: '#EC4899' },
      { name: 'TypeScript', color: '#3178C6' },
      { name: 'Spatial Audio', color: '#F59E0B' },
    ],
    imageGradient: 'linear-gradient(135deg, #130a2a 0%, #2a1154 50%, #07060D 100%)',
    iconName: 'Compass',
    liveUrl: 'https://example.com/demo-chronolens',
    sourceCodeUrl: 'https://github.com/example/ar-chronolens',
    isPlaceholderUrl: true,
  },
  {
    id: 'autonomous-rover-vision',
    title: 'Autonomous Rover & Vision Pilot',
    category: 'Robotics',
    description:
      'An autonomous dual-wheeled robotic rover built with ESP32-CAM and ultrasonic obstacle evasion algorithms, coupled with a browser-based telemetry control dashboard.',
    features: [
      'Real-time low-latency video feed streaming over local WebSockets',
      'Autonomous obstacle avoidance utilizing dual HC-SR04 sonar sensors',
      'Virtual joystick control interface with motor speed PWM throttling',
    ],
    tags: [
      { name: 'ESP32 / C++', color: '#E7352C' },
      { name: 'Computer Vision', color: '#9B5CFF' },
      { name: 'WebSockets', color: '#10B981' },
      { name: 'Robotics', color: '#00979D' },
    ],
    imageGradient: 'linear-gradient(135deg, #0d1224 0%, #171d3d 50%, #07060D 100%)',
    iconName: 'Navigation',
    liveUrl: 'https://example.com/demo-rover-pilot',
    sourceCodeUrl: 'https://github.com/example/rover-vision-pilot',
    isPlaceholderUrl: true,
  },
  {
    id: 'ai-neural-synthesizer',
    title: 'NeuroSynth: AI Pattern Lab',
    category: 'AI',
    description:
      'An exploratory machine intelligence sandbox visualizing neural network activation patterns and synthesizing algorithmic music inspired by sensory data inputs.',
    features: [
      'Interactive canvas rendering real-time tensor weight matrix flows',
      'Audio synthesis engine driven by algorithmic frequency modulations',
      'Modern dark purple cyber aesthetic with 60fps WebGL particle shaders',
    ],
    tags: [
      { name: 'Gemini AI API', color: '#4285F4' },
      { name: 'Web Audio API', color: '#F59E0B' },
      { name: 'React', color: '#61DAFB' },
      { name: 'Three.js', color: '#9B5CFF' },
    ],
    imageGradient: 'linear-gradient(135deg, #1a0826 0%, #31134a 50%, #07060D 100%)',
    iconName: 'Brain',
    liveUrl: 'https://example.com/demo-neurosynth',
    sourceCodeUrl: 'https://github.com/example/neurosynth-lab',
    isPlaceholderUrl: true,
  },
];

import { ProjectMetadata, NavigationItem, OverviewCardItem } from '../types';

export const portfolioConfig: ProjectMetadata = {
  title: 'MB Mahodi — Futuristic 3D Developer Portfolio',
  name: 'MB Mahodi',
  role: 'Visionary Developer, Robotics Enthusiast & Creative Technologist',
  brandTagline: 'THE VISIONARY SYNTHESIZER',
  subtitle: 'I transform ideas into intelligent, interactive experiences.',
  description:
    'Bridging the physical and digital frontiers through web engineering, embedded robotics, neural computing, and immersive spatial web technologies.',
  version: '2.0.0',
  phase: 'Production Portfolio',
};

export const navItems: NavigationItem[] = [
  { id: 'about', label: 'About', href: '#about' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'testimonials', label: 'Testimonials', href: '#testimonials' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export const overviewCards: OverviewCardItem[] = [
  {
    id: 'web-dev',
    title: 'Web Development',
    iconName: 'Code',
    description:
      'Architecting responsive, high-performance web applications using modern React, TypeScript, Tailwind, and cutting-edge frontend tooling.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Next.js'],
  },
  {
    id: 'robotics-hardware',
    title: 'Robotics & Electronics',
    iconName: 'Cpu',
    description:
      'Designing embedded microcontrollers, sensor integration networks, autonomous rovers, and real-time robotic hardware telemetry.',
    tags: ['Arduino', 'ESP32', 'Raspberry Pi', 'Sensors', 'Actuators'],
  },
  {
    id: 'ai-experiments',
    title: 'Artificial Intelligence',
    iconName: 'Brain',
    description:
      'Exploring computer vision, generative AI interfaces, predictive modeling, and intelligent autonomous decision engines.',
    tags: ['Machine Learning', 'Computer Vision', 'PyTorch', 'Gemini API'],
  },
  {
    id: 'creative-problem-solving',
    title: 'Creative Problem Solving',
    iconName: 'Sparkles',
    description:
      'Synthesizing hardware engineering and spatial computing to build unconventional tools, interactive 3D simulations, and intuitive UI.',
    tags: ['Three.js', 'Spatial UI', 'Simulation', 'Prototyping'],
  },
];

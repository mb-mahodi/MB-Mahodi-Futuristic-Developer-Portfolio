import { SkillItem } from '../types';

export const skillsData: SkillItem[] = [
  // Frontend Development
  { name: 'React', category: 'Frontend', level: 92, iconName: 'Atom', color: '#61DAFB' },
  { name: 'TypeScript', category: 'Frontend', level: 90, iconName: 'FileCode2', color: '#3178C6' },
  { name: 'Tailwind CSS', category: 'Frontend', level: 95, iconName: 'Palette', color: '#38BDF8' },
  { name: 'Three.js / R3F', category: 'Frontend', level: 85, iconName: 'Box', color: '#9B5CFF' },
  { name: 'Framer Motion', category: 'Frontend', level: 88, iconName: 'Sparkles', color: '#E11D48' },
  { name: 'HTML5 / CSS3', category: 'Frontend', level: 96, iconName: 'Layout', color: '#E44D26' },

  // Programming Languages
  { name: 'JavaScript (ES6+)', category: 'Programming', level: 94, iconName: 'Code2', color: '#F7DF1E' },
  { name: 'Python', category: 'Programming', level: 88, iconName: 'Terminal', color: '#3776AB' },
  { name: 'C / C++', category: 'Programming', level: 82, iconName: 'Binary', color: '#00599C' },
  { name: 'SQL', category: 'Programming', level: 78, iconName: 'Database', color: '#336791' },

  // Robotics & Electronics
  { name: 'Arduino Prototyping', category: 'Robotics & Hardware', level: 90, iconName: 'Cpu', color: '#00979D' },
  { name: 'ESP32 / Microcontrollers', category: 'Robotics & Hardware', level: 86, iconName: 'Microchip', color: '#E7352C' },
  { name: 'Sensor Integration', category: 'Robotics & Hardware', level: 88, iconName: 'Radio', color: '#10B981' },
  { name: 'Motor Drivers & Actuators', category: 'Robotics & Hardware', level: 84, iconName: 'Gauge', color: '#F59E0B' },
  { name: 'Circuit Design & Schematics', category: 'Robotics & Hardware', level: 80, iconName: 'GitFork', color: '#8B5CF6' },

  // AI & Machine Learning
  { name: 'Computer Vision Basics', category: 'AI & Machine Learning', level: 80, iconName: 'ScanEye', color: '#EC4899' },
  { name: 'Neural Networks & ML', category: 'AI & Machine Learning', level: 78, iconName: 'Brain', color: '#9B5CFF' },
  { name: 'Gemini / Generative AI SDK', category: 'AI & Machine Learning', level: 86, iconName: 'Sparkle', color: '#4285F4' },
  { name: 'TensorFlow / PyTorch', category: 'AI & Machine Learning', level: 74, iconName: 'Layers', color: '#EE4C2C' },

  // Development Tools
  { name: 'Git & GitHub', category: 'Dev Tools', level: 92, iconName: 'GitBranch', color: '#F05032' },
  { name: 'Vite / Modern Bundlers', category: 'Dev Tools', level: 90, iconName: 'Zap', color: '#646CFF' },
  { name: 'VS Code & Linux CLI', category: 'Dev Tools', level: 92, iconName: 'TerminalSquare', color: '#007ACC' },
  { name: 'Postman / API Testing', category: 'Dev Tools', level: 84, iconName: 'Send', color: '#FF6C37' },
];

export const skillCategories = [
  'All',
  'Frontend',
  'Programming',
  'Robotics & Hardware',
  'AI & Machine Learning',
  'Dev Tools',
] as const;

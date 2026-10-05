import { ExperienceItem } from '../types';

export const experiences: ExperienceItem[] = [
  {
    id: 'exp-robotics-club',
    title: 'Lead Technical Member & Robotics Mentor',
    organization: 'Robotics Science Club',
    iconName: 'Bot',
    date: '2023 - Present',
    location: 'Science Club Lab',
    points: [
      'Led student teams in prototyping autonomous mobile rovers equipped with ultrasonic distance sensors and infrared line-following algorithms.',
      'Designed circuit schematics and programmed microcontrollers (Arduino/ESP32) for inter-school robotic competitions.',
      'Authored technical starter documentation for new club recruits on C++ embedded programming and basic robotics kinematics.',
    ],
    tags: ['Robotics', 'C++', 'Arduino', 'Sensor Fusion', 'Team Leadership'],
  },
  {
    id: 'exp-science-fair',
    title: 'Science Fair Exhibitor & Innovation Finalist',
    organization: 'Regional Science & Technology Fair',
    iconName: 'Award',
    date: '2023 - 2024',
    location: 'Innovation Exhibition Center',
    points: [
      'Presented an experimental hardware-software prototype addressing real-world environmental monitoring and automated sensor alerts.',
      'Delivered live demonstrations to judging panels, explaining circuit architecture, sensor calibration, and real-time data visualization.',
      'Recognized for exceptional engineering rigor, originality in prototype fabrication, and creative technical execution.',
    ],
    tags: ['Science Fair', 'Hardware Prototype', 'Telemetry', 'Public Presentation'],
  },
  {
    id: 'exp-personal-projects',
    title: 'Independent Hardware & Software Technologist',
    organization: 'Personal Technology Lab',
    iconName: 'Cpu',
    date: '2022 - Present',
    location: 'Remote Workstation',
    points: [
      'Built custom IoT sensor nodes logging environmental metrics to web dashboards with real-time WebSockets.',
      'Engineered multi-threaded automation scripts and microcontroller firmware for home automation and robotics testing.',
      'Iterated on rapid hardware prototyping using breadboards, solderable perfboards, and modular electronic sub-assemblies.',
    ],
    tags: ['IoT', 'Microcontrollers', 'Automation', 'Embedded C++', 'Python'],
  },
  {
    id: 'exp-web-ai',
    title: 'Web Engineering & AI Experiments Specialist',
    organization: 'Independent Digital Exploration',
    iconName: 'Globe',
    date: '2023 - Present',
    location: 'Virtual Workshop',
    points: [
      'Engineered interactive 3D web interfaces utilizing Three.js and React Three Fiber to push boundaries in browser spatial experiences.',
      'Integrated AI models and vision endpoints into intuitive web user interfaces for smart document and image reasoning.',
      'Maintained modular, typed codebases emphasizing responsive design, performance optimization, and accessible interactions.',
    ],
    tags: ['React', 'TypeScript', 'Three.js', 'Machine Learning', 'Tailwind CSS'],
  },
];

export interface VisionCardItem {
  id: string;
  title: string;
  description: string;
  iconName: 'robotics' | 'ai' | 'creativeTech' | 'webDev';
  badge: string;
}

export const aboutData = {
  eyebrow: 'ABOUT THE VISIONARY',
  heading: 'The Visionary Synthesizer',
  pipeline: ['Ideas', 'Perspective', 'Technology', 'Creation'],
  introPrimary:
    'MB Mahodi is a curious creator exploring the intersection of technology, robotics, artificial intelligence, and creative thinking.',
  introSecondary:
    'Instead of seeing technology as a collection of tools, I see it as a way to turn unusual ideas into meaningful experiences.',
  thinkStatement: {
    initial: 'Think ordinary.',
    transformed: 'Think beyond ordinary.',
  },
  visionCards: [
    {
      id: 'robotics',
      title: 'Robotics',
      description:
        'Exploring the relationship between electronics, mechanics, programming, and intelligent machines.',
      iconName: 'robotics',
      badge: 'Hardware & Code',
    },
    {
      id: 'ai',
      title: 'Artificial Intelligence',
      description:
        'Experimenting with intelligent systems, local AI, automation, and human-AI interaction.',
      iconName: 'ai',
      badge: 'Machine Cognition',
    },
    {
      id: 'creative-technology',
      title: 'Creative Technology',
      description:
        'Turning unconventional ideas into interactive digital experiences.',
      iconName: 'creativeTech',
      badge: 'Spatial & Sensory',
    },
    {
      id: 'web-development',
      title: 'Web Development',
      description:
        'Building modern interfaces where design, interaction, and technology work together.',
      iconName: 'webDev',
      badge: 'Modern Interfaces',
    },
  ] as VisionCardItem[],
};

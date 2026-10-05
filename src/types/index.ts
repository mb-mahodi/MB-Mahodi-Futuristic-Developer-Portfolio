/**
 * MB Mahodi — Futuristic Developer Portfolio
 * Comprehensive Type Definitions
 */

export interface ProjectMetadata {
  title: string;
  name: string;
  role: string;
  brandTagline: string;
  subtitle: string;
  description: string;
  version: string;
  phase: string;
}

export interface NavigationItem {
  id: string;
  label: string;
  href: string;
}

export interface OverviewCardItem {
  id: string;
  title: string;
  iconName: string;
  description: string;
  tags: string[];
}

export interface ExperienceItem {
  id: string;
  title: string;
  organization: string;
  iconName: string;
  date: string;
  location?: string;
  points: string[];
  tags: string[];
}

export interface SkillItem {
  name: string;
  iconName: string;
  level: number; // 0 to 100 percentage
  category: 'Frontend' | 'Programming' | 'Robotics & Hardware' | 'AI & Machine Learning' | 'Dev Tools';
  color?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Web' | 'Robotics' | 'AI' | 'Creative Tech';
  description: string;
  features: string[];
  tags: { name: string; color: string }[];
  imageGradient: string;
  iconName: string;
  liveUrl?: string;
  sourceCodeUrl?: string;
  isPlaceholderUrl?: boolean;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  name: string;
  role: string;
  companyOrAffiliation: string;
  isPlaceholder: boolean;
  avatarColor: string;
}

export interface ContactInfo {
  email: string;
  github: string;
  linkedin: string;
  twitter: string;
  location: string;
  status: string;
}

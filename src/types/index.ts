export interface Project {
  id: string;
  title: string;
  description: string | string[];
  image: string;
  url?: string;
  github?: string;
  techStack: { name: string; icon: string }[];
}

export interface Experience {
  id: string;
  title: string;
  description: string | string[];
  icon: string;
}

export interface Education {
  id: string;
  degree: string;
  period: string;
  score: string;
  institution: string;
  highlighted?: boolean;
}

export interface TimelineEntry {
  year: string;
  content: string;
  images: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Stat {
  value: number;
  suffix?: string;
  label: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface DetailedTimelineEntry {
  title: string;
  year?: string;
  description: string;
}

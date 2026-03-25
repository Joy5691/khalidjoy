export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  category: 'Full Stack' | 'AI/ML' | 'Mobile' | 'Hardware/IoT' | 'Web' | 'Other';
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  gpa?: string;
  details?: string[];
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface Achievement {
  title: string;
  description?: string;
  year?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string; // Lucide icon name mapping
}

export interface VideoProject {
  id: string;
  title: string;
  description: string;
  videoUrl: string; // Embed link or direct video file
  thumbnail?: string;
}
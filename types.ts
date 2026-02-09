
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  metrics?: { label: string; value: string }[];
  link?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'Languages' | 'ML/DL' | 'Tools' | 'Cloud' | 'Scientific' | 'Visualization';
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export interface Education {
  degree: string;
  institution: string;
  year?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  id?: string;
}

import { Project, Experience, Education, SkillCategory, Achievement, SocialLink, VideoProject } from './types';

export const PERSONAL_INFO = {
  name: "Khalid Mahmud Joy",
  title: "CSE Student & Full Stack Developer",
  location: "Dhaka, Bangladesh",
  email: "kmjoy569@gmail.com",
  phone: "+8801536117354",
  about: "Dynamic and results-driven Computer Science student graduating in 2026. Proficient in full-stack development, AI/ML, and IoT. I excel in creating intuitive solutions, from Android apps to Object Detection models. Recognized as 'Best Campus Ambassador 2024' for leadership and community building.",
  resumeLink: "Khalid_Mahmud_Joy_Resume.pdf", // Updated to the uploaded resume file
  photoUrl: "JOY.jpeg" // Updated to use the provided photo
};

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "GitHub", url: "https://github.com/Joy5691/", icon: "github" },
  { platform: "LinkedIn", url: "https://linkedin.com/in/khalid-mahmud-joy-4a0418278/", icon: "linkedin" },
  { platform: "Email", url: "mailto:kmjoy569@gmail.com", icon: "mail" },
];

export const SKILLS: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["C", "C++", "Java", "JavaScript", "TypeScript", "Python", "SQL"]
  },
  {
    name: "Web & Mobile",
    skills: ["React.js", "Node.js", "Express.js", "Oracle APEX", "HTML/CSS", "Android Studio (Java/XML)"]
  },
  {
    name: "AI & Data",
    skills: ["PyTorch", "TensorFlow", "Keras", "YOLOv11", "Scikit-learn", "Transfer Learning", "Jupyter"]
  },
  {
    name: "Tools & DevOps",
    skills: ["Git", "Docker", "VS Code", "Firebase", "MongoDB", "Cisco Packet Tracer", "Linux"]
  },
  {
    name: "Design",
    skills: ["Adobe Photoshop", "Adobe Illustrator", "AutoCAD", "Premiere Pro"]
  }
];

export const EXPERIENCE: Experience[] = [
  {
    role: "Assistant General Secretary",
    company: "East West University Computer Programming Club",
    period: "09/2025 - Present",
    description: [
      "Organized 8+ major technical events engaging 500+ participants.",
      "Managed partnerships and promotional strategies for ICPC Dhaka Preliminary 2024."
    ]
  },
  {
    role: "Campus Ambassador",
    company: "Caretutors",
    period: "01/2024 - 12/2024",
    description: [
      "Awarded 'Best Campus Ambassador of the Year 2024' out of 50+ peers.",
      "Drove a 30% increase in event attendance through strategic outreach."
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    degree: "B.Sc. Computer Science and Engineering",
    institution: "East West University",
    location: "Dhaka, Bangladesh",
    period: "Expected 04/2026",
    gpa: "3.51/4.00",
    details: ["Data Structures", "OOP", "OS", "Machine Learning", "Mobile Programming"]
  },
  {
    degree: "Higher Secondary Certificate (Science)",
    institution: "RAJUK Uttara Model College",
    location: "Dhaka",
    period: "01/2020",
    gpa: "5.00/5.00"
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Full-Stack IoT Dashboard",
    description: "Real-time monitoring dashboard handling 10K+ sensor logs/hr. Features WebSocket updates, JWT auth, and 99.5% uptime.",
    technologies: ["React", "Node.js", "MongoDB", "Firebase", "WebSockets"],
    category: "Full Stack"
  },
  {
    title: "CNG Object Detection Model",
    description: "Custom YOLOv11 model trained on 2,500+ self-annotated images for accurate CNG vehicle recognition.",
    technologies: ["YOLOv11", "Roboflow", "Python", "Computer Vision"],
    category: "AI/ML"
  },
  {
    title: "DoctorDesk",
    description: "Android app for booking doctor appointments. Features XML-based UI, SQLite integration, and specialization filters.",
    technologies: ["Android Studio", "Java", "XML", "SQLite"],
    category: "Mobile"
  },
  {
    title: "RetroRides",
    description: "Automobile management system for vehicle listing and purchasing using Oracle APEX.",
    technologies: ["Oracle APEX", "SQL", "PL/SQL"],
    category: "Web"
  },
  {
    title: "Olympic Games Webpage",
    description: "A comprehensive data management system for Olympic Games built with Oracle APEX, featuring athlete tracking and result analytics.",
    technologies: ["Oracle APEX", "SQL", "Relational Database"],
    category: "Web"
  },
  {
    title: "Digital Water Level Display",
    description: "Simulated hardware logic using encoders, gates, and 7-segment decoders to prevent tank overflow.",
    technologies: ["Digital Logic", "Circuit Design"],
    category: "Hardware/IoT"
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  { title: "Medha Lalon Scholarship", year: "2024-2026", description: "Merit-based scholarship for academic excellence." },
  { title: "Best Campus Ambassador", year: "2024", description: "Recognized as top ambassador among 50+ peers at Caretutors." },
  { title: "1st Place - Rubik's Cube Competition", year: "EWUEC", description: "Champion in speedcubing tournament." },
  { title: "1st Place - Pi Digit Memorization", year: "EWUEC", description: "Memorized and recited highest number of Pi digits." },
  { title: "2nd Place - IQ & Analytical Test", year: "EWUSC", description: "Runner-up in university-wide analytical skills contest." },
  { title: "2nd Place - Ad Making Competition", year: "Rajuk & St. Joseph", description: "Secured runner-up position in advertisement making contests at both Rajuk Uttara Model College and St. Joseph Higher Secondary School." }
];

export const VIDEO_PROJECTS: VideoProject[] = [
  {
    id: "v1",
    title: "Cinematic Tech Review",
    description: "A fast-paced, high-energy tech review featuring complex transitions and color grading.",
    videoUrl: "https://www.youtube.com/embed/s7tLiywHvoc", 
  },
  {
    id: "v2",
    title: "Event Highlights 2024",
    description: "Official highlight reel for the University Computer Programming Club annual fest.",
    videoUrl: "https://www.youtube.com/embed/YMrcruEmnus", 
  },
  {
    id: "v3",
    title: "Short Film: The Code",
    description: "An award-winning short film exploring the life of a developer.",
    videoUrl: "https://www.youtube.com/embed/xKXibwjc1S8", 
  }
];
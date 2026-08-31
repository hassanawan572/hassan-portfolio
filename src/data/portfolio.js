export const profile = {
  name: "Hassan Anjum",
  eyebrow: "PROBLEM SOLVER. CREATIVE MIND. RELIABLE RESULT.",
  role: "Full Stack AI Developer",
  intro: "Let's connect and create something impactful.",
  email: "hassanawan1870@gmail.com",
  github: "https://github.com/hassanawan572", // TODO: add your GitHub URL
  linkedin: "https://www.linkedin.com/in/hassan-awan-k",// TODO: add your LinkedIn URL
  resumeUrl: "/resume.pdf", // drop your resume PDF in /public and update this if renamed
  heroImage: "/hero-portrait.png", // drop your hero image in /public and update this if renamed
};
export const heroSkills = [
  ["REACT | NEXT", "REACT NATIVE", "DJANGO"],
  ["LLM", "RAG", "n8n"],
];
export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const about = {
  heading: "About",
  title: "Full-Stack AI Developer",
  paragraphs: [
    "Full-Stack AI Developer focused on building Responsive, Scalable, and AI-powered applications using React, Next.js, and React Native, with a strong backend focus on Django and Python.",
    "I work with a wide range of database technologies, including Firebase, MongoDB, and SQL, and develop robust APIs and backend systems designed for performance, Scalability, and Reliability.",
    "My expertise also extends to AI-powered application development, including LLM integrations, Retrieval-Augmented Generation (RAG), and intelligent automation workflows using n8n. I combine modern full-stack technologies with AI to create efficient, intelligent, and practical solutions for real-world applications.",
  ],
};
export const education = {
  degree: "BS Computer Science",
  institution: "Superior University, Lahore",
  period: "2022 — 2026",
};
export const experience = [
  {
    role: "Outbound Sales & Dispatch Agent",
    org: "Nationwide Enterprises",
    period: "Dec-2024__Sep-2025 ", // TODO: add dates
    description: "Handled outbound sales and dispatch coordination.",
  },
  {
    role: "Lecturer",
    org: "City Science Academy",
    period: "Apr-2024__Dec-2024", // TODO: add dates
    description: "Teach Computer Science and mathamatics Subjects to Matric and Intermediate Classes.",
  },
  {
    role: "Freelance Developer",
    org: "Self-employed",
    period: "Mar-2023_Nov_2023", // TODO: add dates
    description: "Delivered React-native based applications for freelance clients on project basis.",
  },
  
];

export const projectCategories = ["All", "Full Stack", "Mobile", "Web"];

export const projects = [
  {
    title: "Khan's Store",
    category: "Full Stack",
    stack: ["React", "Django", "Postgree-SQL", "JWT", "Tailwind CSS"],
    description:
      "An E-Commerce web Based Application using React and Tailwind css for frontend UI with JWT Authentication and Backend focused on Django Rest Framework with APi's to handle the complete backend architecture .",
    link: "",
  },
  {
    title: "X Chat",
    category: "AI Chatbot",
    stack: ["React", "Django", "Gemini LLM","Postgree-SQL", ],
    description:
      "Developed a Real-time chatbot using Gemini's LLM which handle the user responses with Google Gemini's using its APi",
    link: "",
  },
  {
    title: "NIMO",
    category: "Mobile",
    stack: ["React-Native", "Firebase", "Socket IO"],
    description: "A real-time chat messaging cross platform mobile application.",
    link: "",
  },
  {
    title: "Portfolio",
    category: "Web Based",
    stack: ["Next", "Tailwind css", ],
    description: "Developed a portfolio project using Next js and tailwind css for my representation",
    link: "https://hassan-portfolio-psi-two.vercel.app",
  },
];


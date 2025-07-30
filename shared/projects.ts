export interface Project {
  id: string
  title: string
  description: string
  fullDescription: string
  stats: string
  tech: string[]
  category: 'gamedev' | 'development'
  images?: string[]
  links?: {
    title: string
    url: string
    type: 'external' | 'demo' | 'github'
  }[]
  challenges?: string[]
  achievements?: string[]
  year?: string
}

export const projects: Project[] = [
  {
    id: "slice-platformer",
    title: "3D+2D Slice Platformer",
    description: "Unique concept: slice 3D world with a plane and play in the created 2D slice to solve puzzles. Diploma qualification project.",
    fullDescription: "This innovative game represents a groundbreaking approach to platformer design, combining 3D and 2D gameplay in a unique mechanic. Players navigate a 3D world but can slice through it with a cutting plane, creating 2D cross-sections that become separate playable levels. This mechanic was developed as my qualification project for my diploma in short cycle professional higher education.",
    stats: "Qualification Project",
    tech: ["Unity", "C#", "3D Physics", "Procedural Generation", "Custom Shaders"],
    category: "gamedev",
    challenges: [
      "Implementing real-time 3D mesh slicing algorithms",
      "Creating seamless transitions between 3D and 2D gameplay",
      "Optimizing performance for complex geometry operations",
      "Designing intuitive controls for spatial navigation"
    ],
    achievements: [
      "Successfully defended as diploma qualification project",
      "Received high marks for innovation and technical implementation",
      "Demonstrated advanced understanding of 3D mathematics and game physics",
      "Created a unique gameplay mechanic not seen in commercial games"
    ],
    year: "2023"
  },
  {
    id: "popular-itch-game",
    title: "Popular Game on Itch.io",
    description: "Published Unity game with significant traction in the community.",
    fullDescription: "This project gained significant attention on Itch.io, accumulating over 14,000 views and 659 downloads. While slightly NSFW in nature, it demonstrates my ability to create engaging content that resonates with audiences and achieves organic growth through quality gameplay and presentation.",
    stats: "14,000 views • 659 downloads",
    tech: ["Unity", "C#", "Game Design", "UI/UX", "Marketing"],
    category: "gamedev",
    links: [
      {
        title: "View on Itch.io",
        url: "#",
        type: "external"
      }
    ],
    achievements: [
      "Reached over 14,000 views organically",
      "Achieved 659 downloads with positive community feedback",
      "Demonstrated market understanding and player engagement",
      "Successfully managed content creation and distribution"
    ],
    year: "2023"
  },
  {
    id: "witch-cafe",
    title: "Witch Cafe",
    description: "Funny cooking simulation mobile game prototype with magical elements.",
    fullDescription: "A charming mobile cooking simulation game featuring a witch who runs a magical cafe. Players prepare mystical recipes, serve supernatural customers, and manage their enchanted establishment. The prototype showcases engaging gameplay loops, colorful art direction, and intuitive mobile controls.",
    stats: "Mobile Prototype",
    tech: ["Unity", "Mobile Development", "UI Design", "Animation", "Touch Controls"],
    category: "gamedev",
    challenges: [
      "Designing intuitive touch controls for cooking mechanics",
      "Creating appealing art style suitable for mobile devices",
      "Balancing gameplay complexity with mobile user attention spans",
      "Optimizing for various Android device specifications"
    ],
    year: "2022"
  },
  {
    id: "finger-saw-combat",
    title: "Finger Saw Combat",
    description: "Touch-based action game where players eliminate enemies using a saw attached to their finger.",
    fullDescription: "An intense mobile action game featuring unique touch-based combat mechanics. Players control a character with a saw attached to their finger, using touch gestures to slice through enemies in fast-paced combat scenarios. The game emphasizes quick reflexes and strategic positioning.",
    stats: "Touch Controls",
    tech: ["Unity", "Touch Input", "Mobile Gaming", "Physics Simulation", "Particle Effects"],
    category: "gamedev",
    challenges: [
      "Implementing precise touch-to-game-world translation",
      "Creating satisfying physics-based destruction",
      "Balancing difficulty progression for mobile play sessions",
      "Designing clear visual feedback for touch interactions"
    ],
    year: "2022"
  },
  {
    id: "google-play-game",
    title: "Google Play Game",
    description: "Currently in development for Android platform.",
    fullDescription: "A mobile game currently in active development for release on Google Play Store. This project represents my latest work in mobile game development, incorporating lessons learned from previous projects and modern mobile gaming trends.",
    stats: "In Development",
    tech: ["Unity", "Android", "Mobile Publishing", "Google Play Services", "Analytics"],
    category: "gamedev",
    year: "2024"
  },
  {
    id: "accenture-bootcamp",
    title: "Accenture Java Bootcamp Project",
    description: "Frontend development for an image guessing game. Participated in intensive Java bootcamp program.",
    fullDescription: "During my participation in the Accenture Java bootcamp, I contributed to the frontend development of an interactive image guessing game. This project provided hands-on experience with professional development practices, team collaboration, and modern web technologies in a corporate environment.",
    stats: "Live & Hosted",
    tech: ["Java", "Frontend Development", "Team Collaboration", "Agile Methodology", "Version Control"],
    category: "development",
    links: [
      {
        title: "View Live Project",
        url: "#",
        type: "demo"
      }
    ],
    achievements: [
      "Successfully completed intensive Java bootcamp program",
      "Delivered working frontend for team project",
      "Gained experience with professional development workflows",
      "Project is live and hosted for public access"
    ],
    year: "2023"
  },
  {
    id: "fullstack-applications",
    title: "Full-Stack Web Applications",
    description: "Developed various web applications using modern frameworks and backend technologies.",
    fullDescription: "A collection of full-stack web applications demonstrating proficiency in both frontend and backend development. These projects showcase my ability to work with modern frameworks like React for frontend and SpringBoot/Laravel for backend development, creating complete, functional web solutions.",
    stats: "Multiple Projects",
    tech: ["SpringBoot", "Laravel", "React", "JavaScript", "Database Design", "API Development"],
    category: "development",
    challenges: [
      "Implementing secure authentication and authorization",
      "Designing scalable database schemas",
      "Creating responsive and accessible user interfaces",
      "Integrating complex business logic across full stack"
    ],
    year: "2022-2024"
  },
  {
    id: "cli-tools",
    title: "Command Line Tools",
    description: "Created various CLI programs and utilities for automation and system administration.",
    fullDescription: "A comprehensive suite of command-line tools and utilities developed across multiple programming languages. These tools demonstrate my systems programming skills and ability to create efficient, practical solutions for automation and administrative tasks.",
    stats: "Multiple Utilities",
    tech: ["C++", "Python", "Java", "System Programming", "Automation", "Shell Scripting"],
    category: "development",
    achievements: [
      "Created tools actively used in development workflows",
      "Demonstrated cross-platform compatibility",
      "Implemented efficient algorithms for system operations",
      "Provided clean, maintainable code architecture"
    ],
    year: "2021-2024"
  }
]

export function getProjectById(id: string): Project | undefined {
  return projects.find(project => project.id === id)
}

export function getProjectsByCategory(category: 'gamedev' | 'development'): Project[] {
  return projects.filter(project => project.category === category)
}

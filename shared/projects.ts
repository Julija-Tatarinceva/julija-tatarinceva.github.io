export interface Project {
  id: string
  title: string
  description: string
  fullDescription: string
  stats: string
  tech: string[]
  category: 'gamedev' | 'development' | 'applications'
  images?: string[]
  screenshots?: string[]
  videoDemo?: string
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
    title: "Aboulia",
    description: "Unique concept: slice 3D world with a plane and play in the created 2D slice to solve puzzles. Diploma qualification project.",
    fullDescription: "This innovative game represents a new experimental approach to platformer design, combining 3D and 2D gameplay in a unique mechanic. Players navigate a 3D world but are restricted to X & Z axis, so in order to move along Y axis, they can slice through the world with a cutting plane, creating 2D cross-sections that become separate playable levels. This mechanic was developed as my qualification project for my diploma in short cycle professional higher education.",
    stats: "Qualification Project",
    tech: ["Unity", "C#", "3D Physics", "Procedural Generation"],
    category: "gamedev",
    links: [
      {
        title: "View on Itch.io",
        url: "https://gentle-shark.itch.io/aboulia",
        type: "external"
      }
    ],
    challenges: [
      "Implementing real-time 3D mesh slicing algorithms",
      "Creating seamless transitions between 3D and 2D gameplay",
      "Optimizing performance for complex geometry operations",
      "Designing intuitive controls for spatial navigation",
      "Finding balance between realistic geometry slicing and enjoyable gameplay"
    ],
    achievements: [
      "Successfully defended as diploma qualification project",
      "Demonstrated good understanding of 3D mathematics and game physics",
      "Created a unique gameplay mechanic not seen in commercial games",
      "Achieved ability to scale the game by simply creating new levels within the Unity scene editor"
    ],
    year: "2024",
    screenshots: [
      "placeholder.svg"
    ]
  },
  {
    id: "popular-itch-game",
    title: "Catch 'em all!",
    description: "Published Unity game with some traction in the community.",
    fullDescription: "This project gained some attention on Itch.io, accumulating over 14,000 views and 659 downloads. While slightly NSFW and humorous in nature, it demonstrates my ability to create engaging content that resonates with audiences and achieves organic growth through quality gameplay and presentation.",
    stats: "14,000 views • 659 downloads",
    tech: ["Unity", "C#", "Game Design", "UI/UX"],
    category: "gamedev",
    links: [
      {
        title: "View on Itch.io",
        url: "https://gentle-shark.itch.io/catch-em-all",
        type: "external"
      }
    ],
    achievements: [
      "Reached over 14,000 views organically",
      "Achieved 659 downloads with positive community feedback",
      "Demonstrated market understanding and player engagement",
      "Successfully managed content creation and distribution"
    ],
    year: "2022",
    screenshots: [
      "placeholder.svg"
    ]
  },
  {
    id: "witch-cafe",
    title: "Witch Cafe",
    description: "Funny cooking simulation mobile game prototype with magical elements.",
    fullDescription: "A charming mobile cooking simulation game featuring a witch who runs a magical cafe. Players prepare mystical recipes, serve supernatural customers, and manage their enchanted establishment. The prototype showcases engaging gameplay loops, colorful art direction, and intuitive mobile controls.",
    stats: "Mobile Prototype",
    tech: ["Unity", "Mobile Development", "UI Design", "Touch Controls"],
    category: "gamedev",
    challenges: [
      "Designing intuitive touch controls for cooking mechanics",
      "Balancing gameplay complexity with mobile user attention spans",
      "Optimizing for various Android device specifications"
    ],
    year: "2024",
    screenshots: [
      "placeholder.svg"
    ]
  },
  {
    id: "finger-saw-combat",
    title: "BALLZ",
    description: "Touch-based action game where players eliminate enemies using a saw attached to their finger.",
    fullDescription: "An intense mobile action game featuring unique touch-based combat mechanics. Players control a character with a saw attached to their finger, using touch gestures to slice through enemies in fast-paced combat scenarios. The game emphasizes quick reflexes and strategic positioning.",
    stats: "Touch Controls",
    tech: ["Unity", "Touch Input", "Mobile Gaming"],
    category: "gamedev",
    challenges: [
      "Implementing precise touch-to-game-world translation",
      "Creating satisfying physics-based destruction",
      "Balancing difficulty progression for mobile play sessions",
      "Designing clear visual feedback for touch interactions"
    ],
    year: "2022",
    screenshots: [
      "placeholder.svg"
    ]
  },
  {
    id: "google-play-game",
    title: "Hungry Me",
    description: "Currently in development for Android platform.",
    fullDescription: "A mobile game currently in active development for release on Google Play Store. This project represents my latest work in mobile game development, incorporating lessons learned from previous projects and modern mobile gaming trends.",
    stats: "In Development",
    tech: ["Unity", "Android", "Mobile Publishing", "Google Play Services", "Analytics"],
    category: "gamedev",
    year: "2024",
    screenshots: [
      "placeholder.svg"
    ]
  },
  {
    id: "accenture-bootcamp",
    title: "CanAIGuess - Accenture Java Bootcamp Project",
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
    year: "2023",
    screenshots: [
      "placeholder.svg"
    ]
  },
  // {
  //   id: "fullstack-applications",
  //   title: "Full-Stack Web Applications",
  //   description: "Developed various web applications using modern frameworks and backend technologies.",
  //   fullDescription: "A collection of full-stack web applications demonstrating proficiency in both frontend and backend development. These projects showcase my ability to work with modern frameworks like React for frontend and SpringBoot/Laravel for backend development, creating complete, functional web solutions.",
  //   stats: "Multiple Projects",
  //   tech: ["SpringBoot", "Laravel", "React", "JavaScript", "Database Design", "API Development"],
  //   category: "development",
  //   challenges: [
  //     "Implementing secure authentication and authorization",
  //     "Designing scalable database schemas",
  //     "Creating responsive and accessible user interfaces",
  //     "Integrating complex business logic across full stack"
  //   ],
  //   year: "2022-2024",
  //   screenshots: [
  //     "placeholder.svg"
  //   ]
  // },
  // {
  //   id: "cli-tools",
  //   title: "Command Line Tools",
  //   description: "Created various CLI programs and utilities for automation and system administration.",
  //   fullDescription: "A comprehensive suite of command-line tools and utilities developed across multiple programming languages. These tools demonstrate my systems programming skills and ability to create efficient, practical solutions for automation and administrative tasks.",
  //   stats: "Multiple Utilities",
  //   tech: ["C++", "Python", "Java", "System Programming", "Automation", "Shell Scripting"],
  //   category: "development",
  //   achievements: [
  //     "Created tools actively used in development workflows",
  //     "Demonstrated cross-platform compatibility",
  //     "Implemented efficient algorithms for system operations",
  //     "Provided clean, maintainable code architecture"
  //   ],
  //   year: "2021-2024",
  //   screenshots: [
  //     "placeholder.svg"
  //   ]
  // },
  {
    id: "python-3d-viewer",
    title: "Python 3D Object Viewer",
    description: "Advanced 3D object viewer supporting multiple file formats with Python-based rendering and manipulation.",
    fullDescription: "A sophisticated 3D object viewer application built with Python, capable of loading and displaying various 3D file formats. The application features interactive camera controls, object manipulation, lighting controls, and support for different rendering modes. This project demonstrates advanced 3D programming concepts and Python's capabilities in graphics programming.",
    stats: "Multiple Formats Supported",
    tech: ["Python", "OpenGL", "3D Graphics", "File Parsing", "GUI", "Mathematical Computing"],
    category: "applications",
    challenges: [
      "Implementing efficient 3D file format parsers",
      "Creating smooth camera controls and object manipulation",
      "Optimizing rendering performance for large models",
      "Building intuitive user interface for 3D navigation"
    ],
    achievements: [
      "Successfully supports multiple 3D file formats",
      "Implemented real-time 3D rendering with Python",
      "Created intuitive controls for 3D object manipulation",
      "Demonstrated advanced mathematical and graphics programming skills"
    ],
    year: "2024",
    screenshots: [
      "placeholder.svg"
    ]
  },
  {
    id: "laravel-fighting-game",
    title: "Laravel Fighting Game",
    description: "Web-based RPG fighting game with guilds, experience system, and enemy battles built with Laravel framework.",
    fullDescription: "A comprehensive web-based RPG game featuring turn-based combat, character progression, guild systems, and enemy encounters. Players can create characters, join guilds, battle various enemies to gain experience and level up, and participate in guild activities. The game includes a complete backend with user management, character stats, inventory systems, and battle mechanics.",
    stats: "Full RPG System",
    tech: ["Laravel", "PHP", "MySQL", "Web Development", "Game Logic", "Authentication", "Session Management"],
    category: "development",
    challenges: [
      "Implementing complex turn-based battle mechanics",
      "Designing balanced character progression systems",
      "Creating efficient database schemas for game data",
      "Managing real-time updates for multiplayer guild features"
    ],
    achievements: [
      "Built complete RPG system with Laravel framework",
      "Implemented complex game mechanics in web environment",
      "Created engaging guild and social features",
      "Demonstrated full-stack web development with game logic"
    ],
    year: "2023",
    screenshots: [
      "placeholder.svg"
    ]
  },
  {
    id: "css-design-project",
    title: "Responsive CSS Design Project",
    description: "University final project featuring responsive design, light/dark themes, and minimalistic animated interface.",
    fullDescription: "A comprehensive CSS design project created for university coursework, showcasing advanced front-end development skills. The project features a fully responsive design that works seamlessly across devices, complete light and dark theme implementation, and subtle but effective animations that enhance user experience. The minimalistic approach emphasizes clean design principles while maintaining functionality and accessibility.",
    stats: "University Final Project",
    tech: ["CSS3", "HTML5", "Responsive Design", "Animations", "Theme Switching", "Cross-browser Compatibility"],
    category: "development",
    links: [
      {
        title: "View Live Demo",
        url: "https://julija-tatarinceva.github.io/dizains-galadarbs/",
        type: "demo"
      }
    ],
    challenges: [
      "Creating seamless responsive design across all device sizes",
      "Implementing smooth theme transitions without JavaScript",
      "Designing subtle animations that enhance rather than distract",
      "Ensuring cross-browser compatibility and accessibility"
    ],
    achievements: [
      "Successfully completed as university final project",
      "Implemented complete responsive design system",
      "Created smooth light/dark theme switching",
      "Demonstrated advanced CSS animation and design skills",
      "Project hosted and publicly accessible"
    ],
    year: "2023",
    screenshots: [
      "placeholder.svg"
    ]
  }
]

export function getProjectById(id: string): Project | undefined {
  return projects.find(project => project.id === id)
}

export function getProjectsByCategory(category: 'gamedev' | 'development' | 'applications'): Project[] {
  return projects.filter(project => project.category === category)
}

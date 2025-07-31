import { useState } from "react"
import { Link } from "react-router-dom"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { AnimatedBackground } from "@/components/animated-background"
import { ExternalLink, Github, Linkedin, Mail, Gamepad2, Code, Server, Award, Languages, Building2, ArrowRight, Terminal, Gamepad, PenTool } from "lucide-react"
import { getProjectsByCategory } from "@shared/projects"

export default function Index() {
  const [activeTab, setActiveTab] = useState("gamedev")

  const skills = {
    gamedev: ["Unity", "C#", "3D/2D Game Design", "Mobile Game Development", "Game Physics", "UI/UX for Games"],
    backend: ["SpringBoot", "Laravel", "Java", "PHP", "API Development", "Database Design"],
    frontend: ["React", "JavaScript", "HTML5", "CSS3", "Responsive Design", "Modern UI/UX"],
    programming: ["C++", "C#", "Python", "Java", "Command Line Tools", "Algorithm Design"],
    applications: ["Python", "Desktop Applications", "Automation", "3D Graphics", "GUI Development", "System Tools"]
  }

  const gamedevProjects = getProjectsByCategory('gamedev')
  const developmentProjects = getProjectsByCategory('development')
  const applicationProjects = getProjectsByCategory('applications')

  const experience = [
    {
      title: "Project Manager Assistant Intern",
      description: "Worked as an assistant to project manager, gaining experience with project management tools and documentation.",
      skills: ["Jira", "Project Documentation", "Team Coordination", "Process Management"]
    },
    {
      title: "Game Developer",
      description: "Published 5 games on various platforms including Itch.io and Google Play, showcasing diverse game concepts.",
      skills: ["Unity Engine", "C# Programming", "Game Design", "Mobile Development"]
    },
    {
      title: "Full-Stack Developer",
      description: "Developed web applications using modern technologies and participated in professional bootcamp programs.",
      skills: ["SpringBoot", "Laravel", "React", "Java", "JavaScript"]
    }
  ]

  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      
      {/* Header */}
      <header className="relative z-10 border-b border-border/40 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-sm">
              JT
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="hidden sm:flex items-center gap-2" title="Where games go to have fun">
              <Gamepad className="w-4 h-4" />
              Itch.io Portfolio
            </Button>
            <Button variant="outline" size="sm" className="hidden sm:flex items-center gap-2" title="Code that actually works (sometimes)">
              <Github className="w-4 h-4" />
              GitHub
            </Button>
            <Button variant="outline" size="sm" className="hidden md:flex items-center gap-2" title="Русские тексты и прочие литературные приключения">
              <PenTool className="w-4 h-4" />
              Писательство
            </Button>
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Linkedin className="w-4 h-4" />
              <span className="hidden sm:inline">LinkedIn</span>
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_200%] animate-pulse p-1">
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center text-4xl font-bold text-primary">
                JT
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
              Jūlija <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Tatarinceva</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Game Developer • Full-Stack Engineer • Creative Problem Solver
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <Badge variant="secondary" className="flex items-center gap-1">
                <Languages className="w-3 h-3" />
                Russian
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-1">
                <Languages className="w-3 h-3" />
                English
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-1">
                <Languages className="w-3 h-3" />
                Latvian
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative z-10 py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8 bg-background/50 backdrop-blur-sm">
              <TabsTrigger value="gamedev" className="flex items-center gap-2">
                <Gamepad2 className="w-4 h-4" />
                Game Development
              </TabsTrigger>
              <TabsTrigger value="webdev" className="flex items-center gap-2">
                <Code className="w-4 h-4" />
                Web Development
              </TabsTrigger>
              <TabsTrigger value="applications" className="flex items-center gap-2">
                <Terminal className="w-4 h-4" />
                Applications
              </TabsTrigger>
              <TabsTrigger value="experience" className="flex items-center gap-2">
                <Building2 className="w-4 h-4" />
                Experience
              </TabsTrigger>
            </TabsList>

            <TabsContent value="gamedev" className="space-y-6">
              {/* Skills and Stats Panel */}
              <Card className="bg-background/60 backdrop-blur-md border-border/50 p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Game Development Overview</h3>
                  <p className="text-muted-foreground text-sm">Skills, technologies, and platform presence in game development</p>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  <Card className="bg-background/40 backdrop-blur-sm border-border/30">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Gamepad2 className="w-5 h-5 text-primary" />
                        Game Development Skills
                      </CardTitle>
                      <CardDescription>Technologies and frameworks I work with</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {skills.gamedev.map((skill) => (
                          <Badge key={skill} variant="outline">{skill}</Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-background/40 backdrop-blur-sm border-border/30">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Award className="w-5 h-5 text-accent" />
                        Platform Presence
                      </CardTitle>
                      <CardDescription>Published games and platforms</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span>Itch.io Games</span>
                        <Badge>5 Published</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Google Play</span>
                        <Badge variant="outline">1 In Development</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Most Popular</span>
                        <Badge variant="secondary">14k+ Views</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </Card>

              {/* Projects Panel */}
              <Card className="bg-background/60 backdrop-blur-md border-border/50 p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Game Development Projects</h3>
                  <p className="text-muted-foreground text-sm">A showcase of my game development work and published titles</p>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  {gamedevProjects.map((project) => (
                    <Link key={project.id} to={`/project/${project.id}`}>
                      <Card className="bg-background/50 backdrop-blur-sm border-border/40 hover:border-primary/40 transition-all duration-300 hover:scale-[1.02] cursor-pointer group relative overflow-hidden">
                        {/* Game Development Pattern - Tech Diagonal Lines with Nodes */}
                        <div className="absolute bottom-2 right-2 w-16 h-12 opacity-8 pointer-events-none">
                          <svg viewBox="0 0 64 48" className="w-full h-full text-primary">
                            <g stroke="currentColor" fill="currentColor" strokeWidth="0.5" opacity="0.6">
                              <path d="M10,40 L20,30" fill="none" />
                              <path d="M25,40 L35,30" fill="none" />
                              <path d="M40,40 L50,30" fill="none" />
                              <path d="M15,45 L25,35" fill="none" strokeWidth="0.4" opacity="0.5" />
                              <path d="M30,45 L40,35" fill="none" strokeWidth="0.4" opacity="0.5" />
                              <path d="M45,45 L55,35" fill="none" strokeWidth="0.4" opacity="0.5" />
                              <circle cx="20" cy="30" r="0.8" />
                              <circle cx="35" cy="30" r="0.8" />
                              <circle cx="50" cy="30" r="0.8" />
                              <path d="M20,30 L25,35" fill="none" strokeWidth="0.3" opacity="0.4" />
                              <path d="M35,30 L40,35" fill="none" strokeWidth="0.3" opacity="0.4" />
                              <path d="M25,35 L30,40" fill="none" strokeWidth="0.3" opacity="0.3" />
                            </g>
                          </svg>
                        </div>
                        <CardHeader>
                          <CardTitle className="text-lg flex items-center justify-between relative z-10">
                            {project.title}
                            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </CardTitle>
                          <CardDescription className="relative z-10">{project.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="relative z-10">
                          <div className="flex flex-wrap gap-2 mb-3">
                            {project.tech.slice(0, 4).map((tech) => (
                              <Badge key={tech} variant="secondary" className="text-xs">{tech}</Badge>
                            ))}
                            {project.tech.length > 4 && (
                              <Badge variant="outline" className="text-xs">+{project.tech.length - 4} more</Badge>
                            )}
                          </div>
                          <Badge variant="outline" className="text-primary">{project.stats}</Badge>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="webdev" className="space-y-6">
              {/* Skills Panel */}
              <Card className="bg-background/60 backdrop-blur-md border-border/50 p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Technical Skills</h3>
                  <p className="text-muted-foreground text-sm">Core technologies and programming languages I work with</p>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  <Card className="bg-background/40 backdrop-blur-sm border-border/30">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Server className="w-5 h-5 text-primary" />
                        Backend
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {skills.backend.map((skill) => (
                          <Badge key={skill} variant="outline">{skill}</Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-background/40 backdrop-blur-sm border-border/30">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Code className="w-5 h-5 text-accent" />
                        Frontend
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {skills.frontend.map((skill) => (
                          <Badge key={skill} variant="outline">{skill}</Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </Card>

              {/* Projects Panel */}
              <Card className="bg-background/60 backdrop-blur-md border-border/50 p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Web Development Projects</h3>
                  <p className="text-muted-foreground text-sm">Full-stack applications, tools, and web development work</p>
                </div>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {developmentProjects.map((project) => (
                    <Link key={project.id} to={`/project/${project.id}`}>
                      <Card className="bg-background/50 backdrop-blur-sm border-border/40 hover:border-primary/40 transition-all duration-300 hover:scale-[1.02] cursor-pointer group relative overflow-hidden">
                        {/* Web Development Pattern - Network Curves with Connection Points */}
                        <div className="absolute bottom-2 right-2 w-16 h-12 opacity-8 pointer-events-none">
                          <svg viewBox="0 0 64 48" className="w-full h-full text-accent">
                            <g stroke="currentColor" fill="currentColor" strokeWidth="0.5" opacity="0.6">
                              <path d="M10,35 Q20,30 30,35" fill="none" />
                              <path d="M30,35 Q40,30 50,35" fill="none" />
                              <path d="M15,40 Q25,35 35,40" fill="none" strokeWidth="0.4" opacity="0.5" />
                              <path d="M35,40 Q45,35 55,40" fill="none" strokeWidth="0.4" opacity="0.5" />
                              <path d="M12,30 Q18,28 24,30" fill="none" strokeWidth="0.3" opacity="0.4" />
                              <rect x="29" y="34" width="2" height="2" rx="0.5" />
                              <rect x="49" y="34" width="2" height="2" rx="0.5" />
                              <rect x="14" y="39" width="1.5" height="1.5" rx="0.3" opacity="0.4" />
                              <path d="M30,37 L35,40" fill="none" strokeWidth="0.3" opacity="0.4" />
                              <path d="M50,37 L54,39" fill="none" strokeWidth="0.3" opacity="0.3" />
                            </g>
                          </svg>
                        </div>
                        <CardHeader>
                          <CardTitle className="text-lg flex items-center justify-between relative z-10">
                            {project.title}
                            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </CardTitle>
                          <CardDescription className="relative z-10">{project.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="relative z-10">
                          <div className="flex flex-wrap gap-2 mb-3">
                            {project.tech.slice(0, 4).map((tech) => (
                              <Badge key={tech} variant="secondary" className="text-xs">{tech}</Badge>
                            ))}
                            {project.tech.length > 4 && (
                              <Badge variant="outline" className="text-xs">+{project.tech.length - 4} more</Badge>
                            )}
                          </div>
                          <Badge variant="outline" className="text-primary">{project.stats}</Badge>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="applications" className="space-y-6">
              {/* Skills Panel */}
              <Card className="bg-background/60 backdrop-blur-md border-border/50 p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Application Development</h3>
                  <p className="text-muted-foreground text-sm">Desktop applications, automation tools, and system utilities</p>
                </div>
                <div className="grid gap-6 md:grid-cols-3">
                  <Card className="bg-background/40 backdrop-blur-sm border-border/30">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Terminal className="w-5 h-5 text-primary" />
                        Application Skills
                      </CardTitle>
                      <CardDescription>Technologies used for application development</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {skills.applications.map((skill) => (
                          <Badge key={skill} variant="outline">{skill}</Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-background/40 backdrop-blur-sm border-border/30">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Github className="w-5 h-5 text-primary" />
                        Programming Languages
                      </CardTitle>
                      <CardDescription>Core programming languages and tools</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {skills.programming.map((skill) => (
                          <Badge key={skill} variant="outline">{skill}</Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-background/40 backdrop-blur-sm border-border/30">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Award className="w-5 h-5 text-accent" />
                        Application Types
                      </CardTitle>
                      <CardDescription>Scope of application development work</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span>3D Graphics Tools</span>
                        <Badge>OpenGL</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Automation Scripts</span>
                        <Badge variant="outline">Selenium</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Desktop GUIs</span>
                        <Badge variant="secondary">Cross-platform</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </Card>

              {/* Projects Panel */}
              <Card className="bg-background/60 backdrop-blur-md border-border/50 p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Application Projects</h3>
                  <p className="text-muted-foreground text-sm">Desktop applications, tools, and automation projects</p>
                </div>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {applicationProjects.map((project) => (
                    <Link key={project.id} to={`/project/${project.id}`}>
                      <Card className="bg-background/50 backdrop-blur-sm border-border/40 hover:border-primary/40 transition-all duration-300 hover:scale-[1.02] cursor-pointer group relative overflow-hidden">
                        {/* Applications Pattern - Placeholder for now */}
                        <div className="absolute bottom-2 right-2 w-16 h-12 opacity-8 pointer-events-none">
                          <svg viewBox="0 0 64 48" className="w-full h-full text-primary">
                            {/* Geometric circuit-like pattern */}
                            <g stroke="currentColor" fill="none" strokeWidth="0.5" opacity="0.6">
                              <path d="M8,8 L16,8 L16,16 L24,16 L24,8 L32,8" />
                              <path d="M32,16 L40,16 L40,24 L48,24 L48,16 L56,16" />
                              <path d="M8,24 L16,24 L16,32 L24,32 L24,40 L32,40" />
                              <path d="M40,32 L48,32 L48,40 L56,40" />
                              <circle cx="16" cy="8" r="1" fill="currentColor" />
                              <circle cx="24" cy="16" r="1" fill="currentColor" />
                              <circle cx="40" cy="24" r="1" fill="currentColor" />
                              <circle cx="24" cy="32" r="1" fill="currentColor" />
                              <circle cx="48" cy="40" r="1" fill="currentColor" />
                            </g>
                          </svg>
                        </div>

                        <CardHeader>
                          <CardTitle className="text-lg flex items-center justify-between relative z-10">
                            {project.title}
                            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </CardTitle>
                          <CardDescription className="relative z-10">{project.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="relative z-10">
                          <div className="flex flex-wrap gap-2 mb-3">
                            {project.tech.slice(0, 4).map((tech) => (
                              <Badge key={tech} variant="secondary" className="text-xs">{tech}</Badge>
                            ))}
                            {project.tech.length > 4 && (
                              <Badge variant="outline" className="text-xs">+{project.tech.length - 4} more</Badge>
                            )}
                          </div>
                          <Badge variant="outline" className="text-primary">{project.stats}</Badge>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="experience" className="space-y-6">
              <div className="grid gap-6">
                {experience.map((exp, index) => (
                  <Card key={index} className="bg-background/50 backdrop-blur-sm border-border/40">
                    <CardHeader>
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      <CardDescription className="text-base">{exp.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <Badge key={skill} variant="secondary">{skill}</Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-background/50 backdrop-blur-sm border-border/40">
                <CardHeader>
                  <CardTitle>Let's Connect</CardTitle>
                  <CardDescription>Get in touch for collaborations or opportunities</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-4">
                  <Button className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4" />
                    LinkedIn Profile
                    <ExternalLink className="w-3 h-3" />
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Email Contact
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Gamepad2 className="w-4 h-4" />
                    Itch.io Portfolio
                    <ExternalLink className="w-3 h-3" />
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border/40 bg-background/80 backdrop-blur-sm py-8 px-4 mt-20">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            �� 2024 Jūlija Tatarinceva. Game Developer & Full-Stack Engineer.
          </p>
        </div>
      </footer>
    </div>
  )
}

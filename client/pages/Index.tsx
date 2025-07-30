import { useState } from "react"
import { Link } from "react-router-dom"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { AnimatedBackground } from "@/components/animated-background"
import { ExternalLink, Github, Linkedin, Mail, Gamepad2, Code, Server, Award, Languages, Building2, ArrowRight } from "lucide-react"
import { getProjectsByCategory } from "@shared/projects"

export default function Index() {
  const [activeTab, setActiveTab] = useState("gamedev")

  const skills = {
    gamedev: ["Unity", "C#", "3D/2D Game Design", "Mobile Game Development", "Game Physics", "UI/UX for Games"],
    backend: ["SpringBoot", "Laravel", "Java", "PHP", "API Development", "Database Design"],
    frontend: ["React", "JavaScript", "HTML5", "CSS3", "Responsive Design", "Modern UI/UX"],
    programming: ["C++", "C#", "Python", "Java", "Command Line Tools", "Algorithm Design"]
  }

  const gamedevProjects = getProjectsByCategory('gamedev')
  const developmentProjects = getProjectsByCategory('development')

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
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-lg">
              JT
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Jūlija Tatarinceva</h1>
              <p className="text-sm text-muted-foreground">Game Developer & Full-Stack Engineer</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="hidden sm:flex items-center gap-2">
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </Button>
            <Button variant="outline" size="sm" className="hidden sm:flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Contact
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
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-background/50 backdrop-blur-sm">
              <TabsTrigger value="gamedev" className="flex items-center gap-2">
                <Gamepad2 className="w-4 h-4" />
                Game Development
              </TabsTrigger>
              <TabsTrigger value="webdev" className="flex items-center gap-2">
                <Code className="w-4 h-4" />
                Web Development
              </TabsTrigger>
              <TabsTrigger value="experience" className="flex items-center gap-2">
                <Building2 className="w-4 h-4" />
                Experience
              </TabsTrigger>
            </TabsList>

            <TabsContent value="gamedev" className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <Card className="bg-background/50 backdrop-blur-sm border-border/40">
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

                <Card className="bg-background/50 backdrop-blur-sm border-border/40">
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

              <div className="grid gap-4 md:grid-cols-2">
                {gamedevProjects.map((project) => (
                  <Link key={project.id} to={`/project/${project.id}`}>
                    <Card className="bg-background/50 backdrop-blur-sm border-border/40 hover:border-primary/40 transition-all duration-300 hover:scale-[1.02] cursor-pointer group">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center justify-between">
                          {project.title}
                          <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </CardTitle>
                        <CardDescription>{project.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
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
            </TabsContent>

            <TabsContent value="webdev" className="space-y-6">
              <div className="grid gap-6 md:grid-cols-3">
                <Card className="bg-background/50 backdrop-blur-sm border-border/40">
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

                <Card className="bg-background/50 backdrop-blur-sm border-border/40">
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

                <Card className="bg-background/50 backdrop-blur-sm border-border/40">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Github className="w-5 h-5 text-primary" />
                      Programming
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skills.programming.map((skill) => (
                        <Badge key={skill} variant="outline">{skill}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {developmentProjects.map((project) => (
                  <Link key={project.id} to={`/project/${project.id}`}>
                    <Card className="bg-background/50 backdrop-blur-sm border-border/40 hover:border-primary/40 transition-all duration-300 hover:scale-[1.02] cursor-pointer group">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center justify-between">
                          {project.title}
                          <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </CardTitle>
                        <CardDescription>{project.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
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
            © 2024 Jūlija Tatarinceva. Game Developer & Full-Stack Engineer.
          </p>
        </div>
      </footer>
    </div>
  )
}

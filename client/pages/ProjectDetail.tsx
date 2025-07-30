import { useParams, Link } from "react-router-dom"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { AnimatedBackground } from "@/components/animated-background"
import { ArrowLeft, ExternalLink, Github, Calendar, Target, Trophy, Zap } from "lucide-react"
import { getProjectById } from "@shared/projects"

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>()
  const project = id ? getProjectById(id) : undefined

  if (!project) {
    return (
      <div className="min-h-screen relative flex items-center justify-center">
        <AnimatedBackground />
        <div className="relative z-10 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Project Not Found</h1>
          <Link to="/">
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      
      {/* Header */}
      <header className="relative z-10 border-b border-border/40 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-4 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-primary-foreground font-bold">
              JT
            </div>
            <div>
              <h1 className="text-lg font-bold text-foreground">Jūlija Tatarinceva</h1>
              <p className="text-xs text-muted-foreground">Game Developer & Full-Stack Engineer</p>
            </div>
          </Link>
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="ghost" size="sm" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back
              </Button>
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Project Hero */}
      <section className="relative z-10 py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Badge variant="secondary" className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {project.year}
              </Badge>
              <Badge variant="outline">
                {project.category === 'gamedev' ? 'Game Development' : 'Web Development'}
              </Badge>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              {project.title}
            </h1>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              {project.description}
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {project.tech.map((tech) => (
                <Badge key={tech} variant="outline" className="border-primary/30 text-primary">
                  {tech}
                </Badge>
              ))}
            </div>
            {project.links && (
              <div className="flex flex-wrap justify-center gap-4">
                {project.links.map((link, index) => (
                  <Button key={index} className="flex items-center gap-2">
                    {link.type === 'github' && <Github className="w-4 h-4" />}
                    {link.type === 'external' && <ExternalLink className="w-4 h-4" />}
                    {link.type === 'demo' && <Target className="w-4 h-4" />}
                    {link.title}
                  </Button>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="relative z-10 py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Description */}
            <Card className="bg-background/50 backdrop-blur-sm border-border/40">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  Project Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {project.fullDescription}
                </p>
                <div className="mt-6 p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="w-4 h-4 text-primary" />
                    <span className="font-semibold text-foreground">Project Status</span>
                  </div>
                  <Badge variant="secondary" className="text-primary">
                    {project.stats}
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Technical Details */}
            <Card className="bg-background/50 backdrop-blur-sm border-border/40">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-accent" />
                  Technologies Used
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {project.tech.map((tech) => (
                    <div key={tech} className="p-3 rounded-lg bg-muted/50 text-center">
                      <span className="text-sm font-medium text-foreground">{tech}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Challenges & Achievements */}
          <div className="grid gap-8 md:grid-cols-2 mt-8">
            {project.challenges && (
              <Card className="bg-background/50 backdrop-blur-sm border-border/40">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-primary" />
                    Technical Challenges
                  </CardTitle>
                  <CardDescription>Key problems solved during development</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {project.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {project.achievements && (
              <Card className="bg-background/50 backdrop-blur-sm border-border/40">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-accent" />
                    Key Achievements
                  </CardTitle>
                  <CardDescription>Notable accomplishments and outcomes</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {project.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Back to Portfolio */}
          <div className="text-center mt-12">
            <Link to="/">
              <Button size="lg" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

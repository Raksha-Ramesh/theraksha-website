import { NewspaperLayout } from "@/components/newspaper-layout"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Download, Eye, Calendar, FileText, Search, Filter } from "lucide-react"

// Static project data based on your actual projects
const projects = [
  {
    id: 1,
    title: "EEG-Based Emotion Recognition System",
    description:
      "Deep learning model for real-time emotion classification using EEG signals. Achieved 90.78% accuracy using CNN-LSTM architecture. Published in IEEE Access journal.",
    category: "AI/ML Research",
    date: "2024-03-15",
    tags: ["Python", "TensorFlow", "EEG", "Deep Learning", "IEEE Publication"],
    fileType: "pdf",
    fileSize: "3.2 MB",
    status: "Published",
    thumbnail: "/eeg-brain-waves.png",
    downloadUrl: "/project-reports/1.pdf",
    previewUrl: "#",
    reportUrl: "/project-reports/1.pdf",
  },
  {
    id: 2,
    title: "Walmart E-commerce Rate Limiting System",
    description:
      "Backend optimization project that implemented intelligent rate limiting, resulting in $15M annual savings. Improved system reliability and reduced infrastructure costs.",
    category: "Backend Engineering",
    date: "2023-08-22",
    tags: ["Java", "Spring Boot", "Redis", "System Design", "Performance Optimization"],
    fileType: "pdf",
    fileSize: "2.8 MB",
    status: "Published",
    thumbnail: "/system-architecture-diagram.png",
    downloadUrl: "/project-reports/2.pdf",
    previewUrl: "#",
    reportUrl: "/project-reports/2.pdf",
  },
  {
    id: 3,
    title: "AI-Powered Comic Diary Platform",
    description:
      "Interactive storytelling application combining memory recall with machine learning to create personalized comic narratives. Features custom drawing tools and AI-generated content.",
    category: "Full-Stack Development",
    date: "2023-12-10",
    tags: ["React", "Node.js", "OpenAI API", "Canvas API", "MongoDB"],
    fileType: "pdf",
    fileSize: "4.1 MB",
    status: "Published",
    thumbnail: "/ai-comic-diary-interface.png",
    downloadUrl: "/project-reports/3.pdf",
    previewUrl: "#",
    reportUrl: "/project-reports/3.pdf",
  },
  {
    id: 4,
    title: "Insurance Data Processing Pipeline",
    description:
      "GenAI-powered system for processing and analyzing complex insurance documents at Crum & Forster. Automated data extraction and classification workflows.",
    category: "Data Engineering",
    date: "2024-01-20",
    tags: ["Python", "Apache Airflow", "LLMs", "Data Pipeline", "Insurance Tech"],
    fileType: "pdf",
    fileSize: "3.5 MB",
    status: "Published",
    thumbnail: "/data-pipeline-flowchart.png",
    downloadUrl: "/project-reports/4.pdf",
    previewUrl: "#",
    reportUrl: "/project-reports/4.pdf",
  },
  {
    id: 5,
    title: "Custom Operating System - PennOS",
    description:
      "Built a Unix-like operating system from scratch including process scheduling, file system, and shell implementation. Comprehensive systems programming project.",
    category: "Systems Programming",
    date: "2023-05-15",
    tags: ["C", "Assembly", "Operating Systems", "Unix", "Systems Programming"],
    fileType: "pdf",
    fileSize: "5.2 MB",
    status: "Published",
    thumbnail: "/operating-system-terminal.png",
    downloadUrl: "/project-reports/5.pdf",
    previewUrl: "#",
    reportUrl: "/project-reports/5.pdf",
  },
  {
    id: 6,
    title: "Multi-threaded Web Server",
    description:
      "High-performance HTTP server implementation with thread pooling, connection management, and static file serving capabilities. Handles concurrent requests efficiently.",
    category: "Systems Programming",
    date: "2023-04-10",
    tags: ["C", "HTTP", "Multi-threading", "Network Programming", "Performance"],
    fileType: "pdf",
    fileSize: "2.1 MB",
    status: "Published",
    thumbnail: "/placeholder-63p12.png",
    downloadUrl: "/project-reports/6.pdf",
    previewUrl: "#",
    reportUrl: "/project-reports/6.pdf",
  },
]

const categories = [
  "All",
  "AI/ML Research",
  "Backend Engineering",
  "Full-Stack Development",
  "Data Engineering",
  "Systems Programming",
]

export default function ProjectsPage() {
  return (
    <NewspaperLayout>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="newspaper-headline text-5xl mb-2">PROJECT ARCHIVES</h1>
          <p className="newspaper-subhead text-xl text-muted-foreground mb-6">
            A comprehensive collection of technical projects and implementations
          </p>
          <div className="newspaper-divider mb-6"></div>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-wrap gap-4 mb-8">
          <div className="flex-1 min-w-64">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input placeholder="Search projects..." className="pl-10" />
            </div>
          </div>
          <div className="flex gap-2 flex-wrap">
            {categories.map((category) => (
              <Button key={category} variant={category === "All" ? "default" : "outline"} size="sm" className="gap-2">
                <Filter className="w-3 h-3" />
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {projects.map((project) => (
            <Card key={project.id} className="newspaper-border overflow-hidden hover:shadow-lg transition-shadow">
              {/* Project Thumbnail */}
              <div className="aspect-video bg-muted relative overflow-hidden">
                <img
                  src={project.thumbnail || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2">
                  <Badge variant="default">{project.status}</Badge>
                </div>
                <div className="absolute bottom-2 left-2">
                  <Badge variant="outline" className="bg-background/80">
                    <FileText className="w-3 h-3 mr-1" />
                    {project.fileSize}
                  </Badge>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="newspaper-headline text-lg leading-tight">{project.title}</h3>
                </div>

                <div className="flex items-center gap-2 mb-3 text-sm text-muted-foreground">
                  <Calendar className="w-3 h-3" />
                  <span>{new Date(project.date).toLocaleDateString()}</span>
                  <Badge variant="outline" className="text-xs">
                    {project.category}
                  </Badge>
                </div>

                <p className="newspaper-body text-sm mb-4 line-clamp-3">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {project.tags.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{project.tags.length - 3}
                    </Badge>
                  )}
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1 gap-2 bg-transparent" asChild>
                    <a href={project.previewUrl}>
                      <Eye className="w-3 h-3" />
                      Preview
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 gap-2 bg-transparent" asChild>
                    <a href={`/project-reports/${project.id}.pdf`} target="_blank" rel="noopener noreferrer">
                      <FileText className="w-3 h-3" />
                      Report
                    </a>
                  </Button>
                  <Button size="sm" className="flex-1 gap-2" asChild>
                    <a href={project.downloadUrl}>
                      <Download className="w-3 h-3" />
                      Download
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="newspaper-border p-4 text-center">
            <div className="newspaper-headline text-2xl text-primary mb-1">6</div>
            <div className="text-sm text-muted-foreground">Total Projects</div>
          </Card>
          <Card className="newspaper-border p-4 text-center">
            <div className="newspaper-headline text-2xl text-primary mb-1">6</div>
            <div className="text-sm text-muted-foreground">Published</div>
          </Card>
          <Card className="newspaper-border p-4 text-center">
            <div className="newspaper-headline text-2xl text-primary mb-1">2.8K</div>
            <div className="text-sm text-muted-foreground">Total Views</div>
          </Card>
          <Card className="newspaper-border p-4 text-center">
            <div className="newspaper-headline text-2xl text-primary mb-1">20.9MB</div>
            <div className="text-sm text-muted-foreground">Archive Size</div>
          </Card>
        </div>

        {/* Archive Notice */}
        <Card className="newspaper-border p-6 bg-muted/20">
          <div className="text-center">
            <h3 className="newspaper-headline text-xl mb-2">ARCHIVE NOTICE</h3>
            <div className="newspaper-divider mb-4"></div>
            <p className="newspaper-body text-sm mb-4">
              All projects are maintained in our digital archives for research and reference purposes. These
              represent completed projects with full documentation and technical specifications.
            </p>
            <div className="flex justify-center gap-4 text-xs text-muted-foreground">
              <span>Last Updated: {new Date().toLocaleDateString()}</span>
              <span>•</span>
              <span>Archive Version: 1.0</span>
              <span>•</span>
              <span>Contact for Access</span>
            </div>
          </div>
        </Card>
      </div>
    </NewspaperLayout>
  )
}

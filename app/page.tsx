import { NewspaperLayout } from "@/components/newspaper-layout"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, MapPin, Calendar, Coffee, BookA, NotebookPenIcon, YoutubeIcon, TrendingUp, CheckCircle2, BookOpen, Music, CloudLightning } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  return (
    <NewspaperLayout>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Article */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="newspaper-border p-6">
            <div className="mb-6">
              <h2 className="newspaper-headline text-4xl mb-2">MEET THE EDITOR-IN-CHIEF</h2>
              <p className="text-sm font-medium tracking-wide text-muted-foreground mb-2">
                EXCLUSIVE INTERVIEW • FRONT PAGE NEWS
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline">An Amateur Polymath</Badge>
              </div>
              <div className="newspaper-divider"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Photo placeholder */}
              <div className="md:col-span-1">
                <div className="newspaper-border aspect-square relative overflow-hidden hover:bg-muted/80 transition-colors">
                  <Image src="/ProfilePic.JPG" alt="Raksha Ramesh" fill className="object-cover" priority />
                </div>
                <p className="text-xs text-center mt-2 italic">Editor-in-Chief at work</p>

                {/* Quick Stats */}
                <div className="mt-4 space-y-2 text-xs">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3 h-3" />
                    <span>Based in Philadelphia, PA</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3 h-3" />
                    <span>MS CIS @ Penn (Dec 2025)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Coffee className="w-3 h-3" />
                    <span>Powered by curiosity</span>
                  </div>
                </div>
              </div>

              {/* Article content */}
              <div className="md:col-span-2">
                <div className="newspaper-body space-y-4">
                  <p>
                    <span className="float-left text-6xl newspaper-headline leading-none mr-2 mt-1">P</span>
                    eople who know me would tell you I'm a bit too much—too passionate, too intense, too optimistic. But
                    honestly? That's what makes life fun. And it's what's gotten me here.
                  </p>

                  <p>
                    I was deep in med school prep when I had a realization: if I kept going, I might end up diagnosing
                    patients alongside AI. That didn't freak me out, it lit me up. I didn't want to compete with the
                    future. I wanted to build it. So I changed course, and I've been chasing the most interesting
                    problems in tech ever since.
                  </p>

                  <p>
                    Since then, I've worked on EEG models to help doctors make better calls, built backend systems that
                    power Walmart's e-commerce platform, and now I'm using GenAI to untangle messy insurance data at
                    Crum & Forster. Basically: if there's complexity, cross-functionality, or chaos - I'm probably in
                    the middle of it, grinning.
                  </p>

                  <p>
                    I love work that sits at the intersection: where engineering meets empathy, where product meets
                    people, where "how" and "why" go out for coffee. At Penn, where I'm wrapping up my Master's in
                    Computer and Information Science, I'm also a Head TA, PMing five senior project teams and helping
                    them go from "we think this is cool" to "here's our launch link."
                  </p>

                  <p>
                    Along the way, I've stayed rooted in something just as important to me: expanding access. I chaired
                    my university's ACM-W chapter, helping first-year women in tech find their footing. I also
                    volunteered with U&I Trust, where I led a small team teaching English to over 20 girls from
                    underserved communities in India.
                  </p>

                  <p className="font-medium">
                    I learn fast. I go all in. I ask too many questions. And I really, really love connecting the dots.
                    If you're building something meaningful, messy, or just a little magical - say hi!
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Featured Quote */}
          <Card className="newspaper-border p-6 bg-muted/30">
            <blockquote className="text-center">
              <p className="newspaper-headline text-2xl mb-4">
                "Compared to the universe, we are very very small. But we are profoundly capable of very very big things."
              </p>
              <footer className="text-sm text-muted-foreground">
                — Stephen Hawking
              </footer>
            </blockquote>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Social Links */}
          <Card className="newspaper-border p-6">
            <h3 className="newspaper-headline text-xl mb-4">CONNECT WITH THE NEWSROOM</h3>
            <div className="newspaper-divider mb-4"></div>
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start bg-transparent hover:bg-accent/10" asChild>
                <a href="https://github.com/Raksha-Ramesh" className="flex items-center gap-3">
                  <Github className="w-4 h-4" />
                  GitHub Bureau
                </a>
              </Button>
              <Button variant="outline" className="w-full justify-start bg-transparent hover:bg-accent/10" asChild>
                <a href="https://linkedin.com/in/raksharamesh" className="flex items-center gap-3">
                  <Linkedin className="w-4 h-4" />
                  Professional Network
                </a>
              </Button>
              <Button variant="outline" className="w-full justify-start bg-transparent hover:bg-accent/10" asChild>
                <a href="mailto:rakshar@seas.upenn.edu" className="flex items-center gap-3">
                  <Mail className="w-4 h-4" />
                  Press Inquiries
                </a>
              </Button>
              <Button variant="outline" className="w-full justify-start bg-transparent hover:bg-accent/10" asChild>
                <a href="https://rakshathinksthoughts.substack.com" className="flex items-center gap-3">
                  <NotebookPenIcon className="w-4 h-4" />
                  Personal Blog
                </a>
              </Button>

              <Button variant="outline" className="w-full justify-start bg-transparent hover:bg-accent/10" asChild>
                <a href="https://www.youtube.com/@rakshar2171" className="flex items-center gap-3">
                  <YoutubeIcon className="w-4 h-4" />
                  Sponsored Jingles
                </a>
              </Button>
            </div>
          </Card>


          {/* Weather/Status Widget */}
          <Card className="newspaper-border p-6">
            <h3 className="newspaper-headline text-lg mb-4">TODAY'S FORECAST</h3>
            <div className="newspaper-divider mb-4"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 rounded-md border border-border/50 bg-background/40 p-3">
                <TrendingUp className="w-5 h-5 text-muted-foreground mt-0.5" />
                <div className="min-w-0">
                  <p className="text-[11px] uppercase tracking-wide text-muted-foreground">Motivation Level</p>
                  <p className="font-semibold text-foreground">Sky-high</p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-md border border-border/50 bg-background/40 p-3">
                <Coffee className="w-5 h-5 text-muted-foreground mt-0.5" />
                <div className="min-w-0">
                  <p className="text-[11px] uppercase tracking-wide text-muted-foreground">Coffee Status</p>
                  <p className="font-semibold text-foreground">Fully Stocked</p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-md border border-border/50 bg-background/40 p-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <div className="min-w-0">
                  <p className="text-[11px] uppercase tracking-wide text-muted-foreground">Availability</p>
                  <p className="font-semibold text-green-600">Actively Looking</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-md border border-border/50 bg-background/40 p-3">
                <CloudLightning className="w-5 h-5 text-blue-600 mt-0.5" />
                <div className="min-w-0">
                  <p className="text-[11px] uppercase tracking-wide text-muted-foreground">Curiosity</p>
                  <p className="font-semibold text-blue-600">Free-flowing</p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-md border border-border/50 bg-background/40 p-3 sm:col-span-2">
                <BookOpen className="w-5 h-5 text-muted-foreground mt-0.5" />
                <div className="min-w-0">
                  <p className="text-[11px] uppercase tracking-wide text-muted-foreground">Current Read</p>
                  <p className="font-semibold text-foreground">Midnight's Children by Salman Rushdie</p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-md border border-border/50 bg-background/40 p-3 sm:col-span-2">
                <Music className="w-5 h-5 text-muted-foreground mt-0.5" />
                <div className="min-w-0">
                  <p className="text-[11px] uppercase tracking-wide text-muted-foreground">Current Favorite Song</p>
                  <p className="font-semibold text-foreground">Daises by Justin Bieber</p>
                </div>
              </div>
            </div>
          </Card>

        </div>
      </div>
    </NewspaperLayout>
  )
}

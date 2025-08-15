import { NewspaperLayout } from "@/components/newspaper-layout"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar, Clock, MessageCircle, Share2, Search, Bookmark, TrendingUp, User } from "lucide-react"
import Link from "next/link"

// Mock blog posts data
const blogPosts = [
  {
    id: 1,
    title: "The Great Career Pivot: From Stethoscopes to Semicolons",
    excerpt:
      "A candid look at why I traded medical school for machine learning, and why it was the best decision I never planned to make.",
    content: "Full article content would go here...",
    category: "Career",
    date: "2024-01-15",
    readTime: "5 min read",
    featured: true,
    tags: ["Career Change", "Tech", "Personal Growth"],
    comments: 23,
    likes: 156,
    image: "/career-pivot-illustration.png",
  },
  {
    id: 2,
    title: "Why I Built an AI That Draws My Memories",
    excerpt:
      "Exploring the intersection of nostalgia and neural networks, and what happens when you teach a machine to remember.",
    content: "Full article content would go here...",
    category: "Technology",
    date: "2024-01-08",
    readTime: "7 min read",
    featured: false,
    tags: ["AI", "Machine Learning", "Personal Projects"],
    comments: 18,
    likes: 89,
    image: "/ai-memory-comic.png",
  },
  {
    id: 3,
    title: "The Art of Debugging: A Love Letter to Console.log",
    excerpt:
      "In defense of the humble console.log and other debugging techniques that have saved my sanity (and my code).",
    content: "Full article content would go here...",
    category: "Development",
    date: "2024-01-01",
    readTime: "4 min read",
    featured: false,
    tags: ["Debugging", "JavaScript", "Development Tips"],
    comments: 31,
    likes: 203,
    image: "/debugging-console.png",
  },
  {
    id: 4,
    title: "Teaching Code to 20 Girls: What I Learned About Learning",
    excerpt: "Reflections on volunteering with U&I Trust and how teaching others taught me more than I expected.",
    content: "Full article content would go here...",
    category: "Education",
    date: "2023-12-20",
    readTime: "6 min read",
    featured: false,
    tags: ["Education", "Volunteering", "Community"],
    comments: 42,
    likes: 178,
    image: "/teaching-code-community.png",
  },
  {
    id: 5,
    title: "The Future is Not What We Expected (And That's Exciting)",
    excerpt: "Thoughts on AI, automation, and why the future of work might be more human than we think.",
    content: "Full article content would go here...",
    category: "Future Tech",
    date: "2023-12-10",
    readTime: "8 min read",
    featured: false,
    tags: ["Future", "AI", "Work", "Philosophy"],
    comments: 67,
    likes: 234,
    image: "/future-tech-vision.png",
  },
]

const categories = ["All", "Career", "Technology", "Development", "Education", "Future Tech"]
const featuredPost = blogPosts.find((post) => post.featured)
const regularPosts = blogPosts.filter((post) => !post.featured)

export default function EditorialPage() {
  return (
    <NewspaperLayout>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="newspaper-headline text-5xl mb-2">EDITORIAL DESK</h1>
          <p className="newspaper-subhead text-xl text-muted-foreground mb-6">
            Where thoughts become headlines and ideas make front page news
          </p>

          {/* Search and Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input placeholder="Search editorial archives..." className="pl-10 w-64" />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button key={category} variant={category === "All" ? "default" : "outline"} size="sm">
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Article */}
        {featuredPost && (
          <Card className="newspaper-border mb-8 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="aspect-video lg:aspect-auto bg-muted">
                <img
                  src={featuredPost.image || "/placeholder.svg"}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 lg:p-8">
                <div className="flex items-center gap-2 mb-3">
                  <Badge className="bg-destructive text-destructive-foreground">FEATURED</Badge>
                  <Badge variant="outline">{featuredPost.category}</Badge>
                </div>
                <h2 className="newspaper-headline text-3xl mb-4 leading-tight">{featuredPost.title}</h2>
                <p className="newspaper-body text-muted-foreground mb-4">{featuredPost.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(featuredPost.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {featuredPost.readTime}
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="w-4 h-4" />
                    {featuredPost.comments} comments
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <Button asChild>
                    <Link href={`/editorial/${featuredPost.id}`}>Read Full Story</Link>
                  </Button>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="gap-1 bg-transparent">
                      <Bookmark className="w-3 h-3" />
                      Save
                    </Button>
                    <Button variant="outline" size="sm" className="gap-1 bg-transparent">
                      <Share2 className="w-3 h-3" />
                      Share
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Articles */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="newspaper-headline text-2xl">LATEST DISPATCHES</h2>
              <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                <TrendingUp className="w-4 h-4" />
                Trending
              </Button>
            </div>

            {regularPosts.map((post) => (
              <Card key={post.id} className="newspaper-border overflow-hidden hover:shadow-lg transition-shadow">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="aspect-video md:aspect-square bg-muted">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:col-span-2 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline">{post.category}</Badge>
                      <span className="text-xs text-muted-foreground">{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <h3 className="newspaper-headline text-xl mb-2 leading-tight">
                      <Link href={`/editorial/${post.id}`} className="hover:text-primary transition-colors">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="newspaper-body text-sm text-muted-foreground mb-3 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                        <span className="flex items-center gap-1">
                          <MessageCircle className="w-3 h-3" />
                          {post.comments}
                        </span>
                        <span>{post.likes} likes</span>
                      </div>
                      <Button variant="ghost" size="sm" asChild>
                        <Link href={`/editorial/${post.id}`}>Read More</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}

            {/* Load More */}
            <div className="text-center">
              <Button variant="outline" className="gap-2 bg-transparent">
                Load More Articles
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* About the Editor */}
            <Card className="newspaper-border p-6">
              <h3 className="newspaper-headline text-xl mb-4 flex items-center gap-2">
                <User className="w-5 h-5" />
                ABOUT THE EDITOR
              </h3>
              <div className="newspaper-divider mb-4"></div>
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-muted rounded-full mx-auto mb-3 flex items-center justify-center">
                  <User className="w-8 h-8 text-muted-foreground" />
                </div>
                <h4 className="font-medium">Your Name</h4>
                <p className="text-sm text-muted-foreground">Editor-in-Chief</p>
              </div>
              <p className="newspaper-body text-sm text-center">
                Passionate about technology, coffee, and the occasional existential crisis. Writing about the
                intersection of code and life.
              </p>
            </Card>

            {/* Popular Tags */}
            <Card className="newspaper-border p-6">
              <h3 className="newspaper-headline text-xl mb-4">TRENDING TOPICS</h3>
              <div className="newspaper-divider mb-4"></div>
              <div className="flex flex-wrap gap-2">
                {[
                  "Career Change",
                  "AI",
                  "JavaScript",
                  "Personal Growth",
                  "Debugging",
                  "Machine Learning",
                  "Education",
                  "Future Tech",
                  "Development Tips",
                  "Community",
                ].map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs cursor-pointer hover:bg-accent">
                    {tag}
                  </Badge>
                ))}
              </div>
            </Card>

            {/* Newsletter Signup */}
            <Card className="newspaper-border p-6 bg-accent/10">
              <h3 className="newspaper-headline text-xl mb-4">SUBSCRIBE TO THE DAILY</h3>
              <div className="newspaper-divider mb-4"></div>
              <p className="newspaper-body text-sm mb-4">
                Get the latest dispatches from the editorial desk delivered straight to your inbox.
              </p>
              <div className="space-y-3">
                <Input placeholder="Your email address" />
                <Button className="w-full">Subscribe Now</Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2 text-center">
                No spam, just quality content. Unsubscribe anytime.
              </p>
            </Card>

            {/* Archive */}
            <Card className="newspaper-border p-6">
              <h3 className="newspaper-headline text-xl mb-4">ARCHIVE VAULT</h3>
              <div className="newspaper-divider mb-4"></div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>January 2024</span>
                  <span className="text-muted-foreground">3 articles</span>
                </div>
                <div className="flex justify-between">
                  <span>December 2023</span>
                  <span className="text-muted-foreground">2 articles</span>
                </div>
                <div className="flex justify-between">
                  <span>November 2023</span>
                  <span className="text-muted-foreground">4 articles</span>
                </div>
                <div className="flex justify-between">
                  <span>October 2023</span>
                  <span className="text-muted-foreground">1 article</span>
                </div>
              </div>
              <Button variant="outline" size="sm" className="w-full mt-4 bg-transparent">
                View All Archives
              </Button>
            </Card>

            {/* Advertisement Parody */}
            <Card className="newspaper-border p-6 bg-muted/20">
              <div className="text-center">
                <h4 className="newspaper-headline text-sm mb-2">CLASSIFIED</h4>
                <div className="newspaper-divider mb-3"></div>
                <p className="text-xs mb-2">Seeking: Readers who appreciate good code and bad puns</p>
                <p className="text-xs font-medium">Offering: Insights, stories, and the occasional life lesson</p>
                <Button size="sm" className="mt-3" asChild>
                  <Link href="/curriculum-vitae">Hire the Editor</Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </NewspaperLayout>
  )
}

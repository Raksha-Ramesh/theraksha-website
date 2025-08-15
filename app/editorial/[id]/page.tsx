import { NewspaperLayout } from "@/components/newspaper-layout"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, Clock, MessageCircle, Share2, Heart, Bookmark, ArrowLeft, User } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

// Mock blog post data (in a real app, this would come from a database)
const blogPost = {
  id: 1,
  title: "The Great Career Pivot: From Stethoscopes to Semicolons",
  excerpt:
    "A candid look at why I traded medical school for machine learning, and why it was the best decision I never planned to make.",
  content: `
    <p>People often ask me about the moment I decided to leave medicine for tech. The truth is, there wasn't a single moment—it was more like a slow-motion realization that unfolded over months of late-night coding sessions and early morning doubts.</p>

    <p>I was deep into my medical school preparation when I stumbled upon my first programming tutorial. It was supposed to be a distraction, a way to unwind after hours of memorizing anatomical structures. Instead, it became an obsession.</p>

    <h2>The Turning Point</h2>

    <p>The real turning point came during a conversation with a radiologist who mentioned how AI was beginning to assist in diagnostic imaging. Instead of feeling threatened, I felt electrified. Here was a field where I could still help people, but instead of treating one patient at a time, I could potentially impact thousands through the software I built.</p>

    <p>That night, I made a decision that would change everything. I closed my medical textbooks and opened my laptop. I haven't looked back since.</p>

    <h2>The Learning Curve</h2>

    <p>Transitioning from medicine to tech wasn't easy. The learning curve was steep, and there were moments when I questioned my decision. But every small victory—my first successful API call, my first deployed application, my first job offer—reinforced that I had made the right choice.</p>

    <p>The analytical thinking I had developed for medical diagnosis translated surprisingly well to debugging code. The attention to detail required in medicine served me well in writing clean, maintainable code. And the empathy I had cultivated for patients became invaluable when designing user experiences.</p>

    <h2>Looking Forward</h2>

    <p>Today, I'm building AI-powered tools that help solve real-world problems. I'm still helping people, just in a different way. And while I sometimes wonder what would have happened if I had stayed on the medical path, I'm confident that I'm exactly where I'm supposed to be.</p>

    <p>To anyone considering a similar pivot: trust your instincts, embrace the uncertainty, and remember that the skills you've developed in one field are often more transferable than you think.</p>
  `,
  category: "Career",
  date: "2024-01-15",
  readTime: "5 min read",
  tags: ["Career Change", "Tech", "Personal Growth"],
  comments: 23,
  likes: 156,
  image: "/career-pivot-illustration.png",
  author: {
    name: "Your Name",
    bio: "Editor-in-Chief, former med student, current code enthusiast",
    avatar: "/author-avatar.png",
  },
}

// Mock comments data
const comments = [
  {
    id: 1,
    author: "Sarah Chen",
    content:
      "This really resonates with me! I made a similar pivot from law to UX design. The transferable skills are real.",
    date: "2024-01-16",
    likes: 12,
  },
  {
    id: 2,
    author: "Mike Rodriguez",
    content: "Great read! I'm currently in the middle of my own career transition. Thanks for the inspiration.",
    date: "2024-01-16",
    likes: 8,
  },
  {
    id: 3,
    author: "Dr. Emily Watson",
    content:
      "As someone still in medicine, I find your perspective fascinating. The intersection of AI and healthcare is indeed exciting.",
    date: "2024-01-17",
    likes: 15,
  },
]

export default function BlogPostPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch the blog post based on the ID
  if (!blogPost) {
    notFound()
  }

  return (
    <NewspaperLayout>
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <div className="mb-6">
          <Button variant="outline" asChild className="gap-2 bg-transparent">
            <Link href="/editorial">
              <ArrowLeft className="w-4 h-4" />
              Back to Editorial
            </Link>
          </Button>
        </div>

        {/* Article Header */}
        <Card className="newspaper-border p-8 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="outline">{blogPost.category}</Badge>
            <span className="text-sm text-muted-foreground">{new Date(blogPost.date).toLocaleDateString()}</span>
          </div>

          <h1 className="newspaper-headline text-4xl md:text-5xl mb-4 leading-tight">{blogPost.title}</h1>

          <p className="newspaper-subhead text-xl text-muted-foreground mb-6">{blogPost.excerpt}</p>

          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {new Date(blogPost.date).toLocaleDateString()}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {blogPost.readTime}
              </div>
              <div className="flex items-center gap-1">
                <MessageCircle className="w-4 h-4" />
                {blogPost.comments} comments
              </div>
            </div>

            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="gap-1 bg-transparent">
                <Heart className="w-3 h-3" />
                {blogPost.likes}
              </Button>
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

          {/* Featured Image */}
          {blogPost.image && (
            <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-6">
              <img
                src={blogPost.image || "/placeholder.svg"}
                alt={blogPost.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {blogPost.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </Card>

        {/* Article Content */}
        <Card className="newspaper-border p-8 mb-8">
          <div
            className="newspaper-body prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: blogPost.content }}
          />
        </Card>

        {/* Author Bio */}
        <Card className="newspaper-border p-6 mb-8">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-muted-foreground" />
            </div>
            <div className="flex-1">
              <h3 className="newspaper-headline text-xl mb-1">{blogPost.author.name}</h3>
              <p className="text-sm text-muted-foreground mb-2">{blogPost.author.bio}</p>
              <Button variant="outline" size="sm" asChild>
                <Link href="/curriculum-vitae">View Profile</Link>
              </Button>
            </div>
          </div>
        </Card>

        {/* Comments Section */}
        <Card className="newspaper-border p-6">
          <h3 className="newspaper-headline text-2xl mb-6">Reader Responses ({comments.length})</h3>

          {/* Add Comment */}
          <div className="mb-8">
            <h4 className="font-medium mb-3">Join the Discussion</h4>
            <Textarea placeholder="Share your thoughts..." className="mb-3" />
            <Button>Post Comment</Button>
          </div>

          {/* Comments List */}
          <div className="space-y-6">
            {comments.map((comment) => (
              <div key={comment.id} className="border-l-2 border-muted pl-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <span className="font-medium text-sm">{comment.author}</span>
                    <span className="text-xs text-muted-foreground">{new Date(comment.date).toLocaleDateString()}</span>
                  </div>
                  <Button variant="ghost" size="sm" className="gap-1">
                    <Heart className="w-3 h-3" />
                    {comment.likes}
                  </Button>
                </div>
                <p className="newspaper-body text-sm">{comment.content}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </NewspaperLayout>
  )
}

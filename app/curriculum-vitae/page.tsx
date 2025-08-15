'use client';

import { NewspaperLayout } from "@/components/newspaper-layout"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download, MapPin, Mail, Award, Briefcase, GraduationCap, Code, Users, Lightbulb, BookOpenText, Link as LinkIcon } from "lucide-react"
import Link from "next/link"

export default function CurriculumVitaePage() {
  const downloadPdf = () => {
    const link = document.createElement('a');
    link.href = '/CV.pdf';
    link.download = 'RakshaRamesh_curriculum-vitae.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <NewspaperLayout>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="newspaper-headline text-5xl mb-2">PROFESSIONAL DOSSIER</h1>
          <p className="newspaper-subhead text-xl text-muted-foreground mb-4">
            A comprehensive investigation into one developer's career trajectory
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button className="gap-2" onClick={downloadPdf}>
              <Download className="w-4 h-4" />
              Download PDF Edition
            </Button>
            <Button asChild variant="outline" className="gap-2">
              <Link href="/CV.pdf" target="_blank" rel="noopener noreferrer">
                <BookOpenText className="w-4 h-4" /> View PDF in browser
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Experience Section */}
            <Card className="newspaper-border p-6">
              <div className="mb-6">
                <h2 className="newspaper-headline text-3xl mb-2 flex items-center gap-3">
                  <Briefcase className="w-8 h-8" />
                  CAREER CHRONICLES
                </h2>
                <div className="newspaper-divider" />
              </div>

              <div className="space-y-6">
                {/* C&F */}
                <div className="border-l-4 border-primary pl-6">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <h3 className="newspaper-headline text-xl">Data Science Intern</h3>
                    <Badge variant="outline">June 2025 - Sept 2025</Badge>
                  </div>
                  <p className="font-medium text-primary mb-2">Crum & Forster • Philadelphia, PA</p>
                  <ul className="newspaper-body space-y-2 list-disc ml-5">
                    <li>Migrated 30+ high-traffic DS microservices from Pony ORM to a custom SQL context manager, resolving schema inconsistencies and validating parity through reusable checklists.</li>
                    <li>Built OCR pipeline for 5,000+ environmental supplemental applications with &gt;95% classification accuracy using AWS Step Functions and LLM-based markdown extraction — reduced manual review time by 70%.</li>
                    <li>Designed multi-environment deployment with smoke testing and zero-downtime rollouts; added monitoring for error rate, latency, and cost.</li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <Badge variant="secondary">Python</Badge>
                    <Badge variant="secondary">AWS</Badge>
                    <Badge variant="secondary">LLMs</Badge>
                    <Badge variant="secondary">OCR</Badge>
                    <Badge variant="secondary">GenAI</Badge>
                  </div>
                </div>

                {/* Walmart SDE II */}
                <div className="border-l-4 border-primary pl-6">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <h3 className="newspaper-headline text-xl">Software Development Engineer II</h3>
                    <Badge variant="outline">July 2022 - May 2023</Badge>
                  </div>
                  <p className="font-medium text-primary mb-2">Walmart Global Tech • Bangalore, India</p>
                  <ul className="newspaper-body space-y-2 list-disc ml-5">
                    <li>Maintained 20+ mission-critical microservices for Walmart US e-commerce.</li>
                    <li>Cut outages by 15% (~$15M savings) by implementing rate limiting across high-traffic services; evangelized to 90+ engineers.</li>
                    <li>Reduced incident MTTR by 40% by integrating OpenTelemetry distributed tracing.</li>
                    <li>Resolved 20+ P0/P1 incidents in follow-the-sun rotations.</li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <Badge variant="secondary">JavaScript</Badge>
                    <Badge variant="secondary">Microservices</Badge>
                    <Badge variant="secondary">OpenTelemetry</Badge>
                    <Badge variant="secondary">Grafana</Badge>
                    <Badge variant="secondary">CI/CD</Badge>
                  </div>
                </div>

                {/* Walmart Intern */}
                <div className="border-l-4 border-primary pl-6">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <h3 className="newspaper-headline text-xl">Software Development Intern</h3>
                    <Badge variant="outline">Jan 2022 - June 2022</Badge>
                  </div>
                  <p className="font-medium text-primary mb-2">Walmart Global Tech • Bangalore, India</p>
                  <ul className="newspaper-body space-y-2 list-disc ml-5">
                    <li>Integrated PowerSport Category vehicles into catalogs, enabling targeted filtering and improving journeys — +10% conversions.</li>
                    <li>Built & maintained Grafana + Splunk dashboards for 5 microservices, accelerating detection and boosting uptime.</li>
                    <li>Led testing and deployment of two production services with QA & product for low-downtime launches.</li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <Badge variant="secondary">JavaScript</Badge>
                    <Badge variant="secondary">Grafana</Badge>
                    <Badge variant="secondary">Splunk</Badge>
                    <Badge variant="secondary">CI/CD</Badge>
                  </div>
                </div>

                {/* Ellipses */}
                <div className="border-l-4 border-primary pl-6">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <h3 className="newspaper-headline text-xl">Marketing Intern</h3>
                    <Badge variant="outline">May 2021 - Aug 2021</Badge>
                  </div>
                  <p className="font-medium text-primary mb-2">Ellipses Innovation • Bangalore, India</p>
                  <ul className="newspaper-body space-y-2 list-disc ml-5">
                    <li>Developed data-driven Instagram strategy via engagement and audience analysis.</li>
                    <li>Increased follower growth 35% and generated first recurring sales (20+ orders/week).</li>
                    <li>Ran competitor benchmarking to refine content mix, cadence, and timing.</li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <Badge variant="secondary">Analytics</Badge>
                    <Badge variant="secondary">Social Media</Badge>
                    <Badge variant="secondary">Market Research</Badge>
                  </div>
                </div>
              </div>
            </Card>

            {/* Education Section */}
            <Card className="newspaper-border p-6">
              <div className="mb-6">
                <h2 className="newspaper-headline text-3xl mb-2 flex items-center gap-3">
                  <GraduationCap className="w-8 h-8" />
                  ACADEMIC ACHIEVEMENTS
                </h2>
                <div className="newspaper-divider" />
              </div>

              <div className="space-y-4">
                <div className="border-l-4 border-accent pl-6">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <h3 className="newspaper-headline text-xl">Master of Science in Engineering</h3>
                    <Badge variant="outline">Dec 2025</Badge>
                  </div>
                  <p className="font-medium text-primary mb-2">Computer and Information Science • AI Concentration</p>
                  <p className="newspaper-body">University of Pennsylvania • Philadelphia, PA • GPA: 3.88/4.0</p>
                </div>

                <div className="border-l-4 border-accent pl-6">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <h3 className="newspaper-headline text-xl">Bachelor of Technology</h3>
                    <Badge variant="outline">May 2022</Badge>
                  </div>
                  <p className="font-medium text-primary mb-2">Computer Science and Engineering</p>
                  <p className="newspaper-body">PES University • Bangalore, India</p>
                </div>
              </div>
            </Card>

            {/* Projects — AI/ML & NLP */}
            <Card className="newspaper-border p-6">
              <div className="mb-6">
                <h2 className="newspaper-headline text-3xl mb-2 flex items-center gap-3">
                  <Lightbulb className="w-8 h-8" />
                  INNOVATION LABORATORY — AI/ML & NLP
                </h2>
                <p className="text-sm text-muted-foreground">Where ideas come to life</p>
                <div className="newspaper-divider" />
              </div>

              <div className="space-y-4">
                {/* DreamBook */}
                <ProjectItem title="DreamBook — AI Diary Platform" tags={["Python","Stable Diffusion","Google Cloud","Gradio"]} reportUrl="/project-reports/CV_Report.pdf">
                  Built AI diary platform digitizing handwritten, audio, and text entries using Google Cloud Vision, Speech-to-Text, and Stable Diffusion (DreamBooth + LoRA) — producing consistent comic-style illustrations.
                </ProjectItem>

                {/* EEG IEEE */}
                <ProjectItem title="Segment Based Abnormality Detection in EEG Recordings (IEEE, Aug 2022)" tags={["Python","Machine Learning","Signal Processing","IEEE Publication"]} reportUrl="/project-reports/Capstone_Report.pdf">
                <div className="mt-2">
    <Link href="https://ieeexplore.ieee.org/document/9848243" target="_blank" className="inline-flex items-center gap-1 text-sm underline">
      <LinkIcon className="w-3 h-3" /> View Publication
    </Link>
  </div>
  <span>
    Achieved 90.78% classification accuracy (surpassing SOTA) using Empirical Wavelet Transform, Recursive Feature Elimination, and Linear SVM.
  </span>
  
</ProjectItem>

                {/* BART-to-Edge */}
                <ProjectItem title="BART-to-Edge Translation" tags={["PyTorch","LoRA","Edge Computing","NLP"]} reportUrl="/project-reports/NLP_Report.pdf">
                  Optimized mBART/M2M100 with LoRA and layer freezing, reducing GPU memory by 50% and training time by 30%; enabled sub-1B parameter real-time Zh↔En translation on edge devices.
                </ProjectItem>

                {/* Lexical Simplification */}
                <ProjectItem title="Lexical Simplification" tags={["NLTK","gensim","pandas","Accessibility"]} reportUrl="/project-reports/LexicalSimplification_Report.pdf">
                  Contextual word substitution pipeline improving text accessibility — reduced reading complexity by ~20% and improved comprehension in testing via POS tagging and frequency-based filtering.
                </ProjectItem>

                {/* Text Summarization */}
                <ProjectItem title="Deep Learning for Text Summarization" tags={["ROUGE","BLEU","Abstractive","Extractive"]} reportUrl="/project-reports/Miniproject_Report.pdf">
                  Implemented extractive and abstractive pipelines; abstractive models improved semantic coherence while reducing repetition by ~25%.
                </ProjectItem>
              </div>
            </Card>

            {/* Projects — Data Science & Analytics */}
            <Card className="newspaper-border p-6">
              <div className="mb-6">
                <h2 className="newspaper-headline text-3xl mb-2 flex items-center gap-3">
                  <Lightbulb className="w-8 h-8" />
                  DATA SCIENCE & ANALYTICS
                </h2>
                <div className="newspaper-divider" />
              </div>
              <div className="space-y-4">
                <ProjectItem title="Optimizing ANN for Learned Cardinalities" tags={["PyTorch","Depp Learning","MLSE","Cardinality Estimation"]} reportUrl="/project-reports/AdvDB_Report.pdf">
                  Tuned MSCN-based learned cardinality estimator; selected Adam + MLSE for smoother convergence, lowering median Q-error and standardizing workflows.
                </ProjectItem>
                <ProjectItem title="World Development Indicators Analysis" tags={["Regression","multi-disiplinary","Macroeconomics","RMSE"]} reportUrl="/project-reports/DataAnalytics_Report.pdf">
                  Modeled macro growth with regression on World Bank WDI data; achieved RMSE 2.7% (developed) and 4.3% (developing), producing sector-driven insights.
                </ProjectItem>
                <ProjectItem title="YACS — Yet Another Centralized Scheduler" tags={["Python","Sockets","Multithreading","Map-Reduce"]} reportUrl="/project-reports/BigData_Report.pdf">
                  Built master–worker scheduler with Random, RR, and Least-Loaded policies; added map-reduce dependencies and back-pressure to reduce idle CPU time.
                </ProjectItem>
              </div>
            </Card>

            {/* Systems & Infrastructure */}
            <Card className="newspaper-border p-6">
              <div className="mb-6">
                <h2 className="newspaper-headline text-3xl mb-2 flex items-center gap-3">
                  <Code className="w-8 h-8" />
                  SYSTEMS & INFRASTRUCTURE PROJECTS
                </h2>
                <div className="newspaper-divider" />
              </div>
              <div className="space-y-4">
                <ProjectItem title="PennOS — Custom Operating System" tags={["C","FAT FS","MLFQ","Concurrency"]} reportUrl="/project-reports/PennOS_Report.pdf">
                  UNIX-like OS with FAT filesystem, multi-level feedback queue scheduler, and preemptive user-space threading. Custom shell with built-ins and process control syscalls.
                </ProjectItem>
                <ProjectItem title="Mini-Compiler for JavaScript" tags={["C","Lexing","Parsing","Three-Address Code"]} reportUrl="/project-reports/CompilerDesign_Report.pdf">
                  Compiler for a JavaScript subset implementing lexical, syntax, and semantic analysis; generated optimized 3-address code with constant folding and DCE; scoped symbol table and type checking.
                </ProjectItem>
                <ProjectItem title="Elevator Control System" tags={["C","Data Structures"]} reportUrl="/project-reports/ElevatorSystem_Report.pdf">
                  C-based simulation using an ordered doubly linked list for prioritized floor requests; direction-aware scheduling reduced average wait times.
                </ProjectItem>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Info */}
            <Card className="newspaper-border p-6">
              <h3 className="newspaper-headline text-xl mb-4">CONTACT THE NEWSROOM</h3>
              <div className="newspaper-divider mb-4" />
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-primary" />
                  <span>rakshar@seas.upenn.edu</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-primary" />
                  <span>raksharamesh0002@gmail.com</span>
                </div>
              </div>
            </Card>

            {/* Skills */}
            <Card className="newspaper-border p-6">
              <h3 className="newspaper-headline text-xl mb-4 flex items-center gap-2">
                <Code className="w-5 h-5" />
                TECHNICAL ARSENAL
              </h3>
              <div className="newspaper-divider mb-4" />
              <div className="space-y-4">
                <SkillBlock title="Programming" items={["Python","TypeScript","Node.js","C","GraphQL","Git","Postman","CI/CD","JIRA","Confluence","Tableau"]} />
                <SkillBlock title="AI & Machine Learning" items={["PyTorch","NumPy","pandas","scikit-learn","EWT","EMD","RFE","LoRA","DreamBooth","Stable Diffusion","BLEU","BERTScore"]} />
                <SkillBlock title="Cloud & Infrastructure" items={["AWS (CDK, Textract, Bedrock, BDA, Step Functions)","Serverless Framework","Google Cloud Vision","Speech-to-Text","Kubernetes","Istio"]} />
                <SkillBlock title="Data Eng. & Observability" items={["SQL","Pony ORM","Grafana","Splunk","Prometheus","OpenTelemetry","Jaeger"]} />
                <SkillBlock title="Systems & Compilers" items={["FAT filesystem","Multi-level feedback queue scheduler"]} />
                <SkillBlock title="Product & Collaboration" items={["Agile/Scrum","MVP development","User research","A/B testing"]} />
              </div>
            </Card>

            {/* Leadership & Extracurriculars */}
            <Card className="newspaper-border p-6">
              <h3 className="newspaper-headline text-xl mb-4 flex items-center gap-2">
                <Users className="w-5 h-5" />
                LEADERSHIP DESK
              </h3>
              <div className="newspaper-divider mb-4" />
              <div className="space-y-4 text-sm">
                <LeaderBlock
                  role="Head Teaching Assistant / Product Manager"
                  org="University of Pennsylvania"
                  time="Aug 2024 – Present"
                  bullets={[
                    'Directed product strategy for 5 cross-functional student teams (agile planning, feedback loops, stakeholder demos).',
                    'Coordinated a team of 11 TAs; training, task allocation, daily operations; supported 100+ students & faculty.',
                    'Managed course logistics: scheduling, grading workflows, resource planning; evaluated 20+ demos for market fit.'
                  ]}
                />
                <LeaderBlock
                  role="Chair — English Literacy Program"
                  org="U&I Trust (Bangalore, India)"
                  time="May 2022 – Jul 2023"
                  bullets={[
                    'Directed program for 20+ underprivileged girls; designed lesson plans for conversational & written fluency.',
                    'Led volunteer recruitment (+50% staff) and fundraising to fully cover annual costs.'
                  ]}
                />
                <LeaderBlock
                  role="Chair — ACM-W Student Chapter"
                  org="PES University"
                  time="Aug 2020 – Jul 2022"
                  bullets={[
                    'Expanded membership 4×; secured sponsorships & VC funding for Women’s Day Ideathon (backed top 3 ideas).',
                    'Organized 15+ workshops, hackathons, and speaker events promoting diversity in tech.'
                  ]}
                />
                <LeaderBlock
                  role="Event Lead / Organizer"
                  org="PES University"
                  time="Aug 2019 – Jul 2022"
                  bullets={[
                    'Executed national technical & cultural fests (10,000+ attendees/year); managed logistics and budgets.',
                    'Led sponsorships, vendor negotiations, and marketing; increased footfall ~20% YoY.'
                  ]}
                />
              </div>
            </Card>


            {/* Interests / Fun blurb */}
            <Card className="newspaper-border p-6 bg-muted/20">
              <div className="text-center">
                <h4 className="newspaper-headline text-sm mb-2">CLASSIFIED AD</h4>
                <div className="newspaper-divider mb-3" />
                <p className="text-xs mb-2">Seeking: Complex problems at intersections of tech and humanity</p>
                <p className="text-xs font-medium">Offering: Unlimited curiosity, and stubborn optimism</p>
                <div className="mt-3 text-xs">
                  <p className="italic">Interests: AI for accessibility • creative AI • large-scale system design</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </NewspaperLayout>
  )
}

/* --- Small presentational helpers (kept in-file for portability) --- */
function ProjectItem({ title, tags, children, reportUrl }: { title: string; tags: string[]; children: React.ReactNode; reportUrl?: string }) {
  return (
    <div className="border-l-4 border-secondary pl-6">
      <h3 className="newspaper-headline text-xl mb-2">{title}</h3>
      <div className="newspaper-body mb-3 space-y-2">
        {children}
      </div>
      <div className="flex flex-wrap items-center gap-2">
        {tags.map((t) => (
          <Badge key={t} variant="secondary">{t}</Badge>
        ))}
        {reportUrl && (
          <Button asChild variant="outline" className="ml-auto gap-2">
            <Link href={reportUrl} target="_blank" rel="noopener noreferrer">
              <BookOpenText className="w-4 h-4" /> View report
            </Link>
          </Button>
        )}
      </div>
    </div>
  )
}

function SkillBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="font-medium mb-2">{title}</h4>
      <div className="flex flex-wrap gap-1">
        {items.map((i) => (
          <Badge key={i} variant="outline" className="text-xs">{i}</Badge>
        ))}
      </div>
    </div>
  )
}

function LeaderBlock({ role, org, time, bullets }: { role: string; org: string; time: string; bullets: string[] }) {
  return (
    <div>
      <div className="flex items-start justify-between gap-2">
        <div>
          <h4 className="font-medium">{role}</h4>
          <p className="text-muted-foreground">{org} • {time}</p>
        </div>
      </div>
      <ul className="text-xs text-muted-foreground mt-1 list-disc ml-5 space-y-1">
        {bullets.map((b, idx) => (
          <li key={idx}>{b}</li>
        ))}
      </ul>
    </div>
  )
}

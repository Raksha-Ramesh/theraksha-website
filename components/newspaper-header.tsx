import Link from "next/link"

export function NewspaperHeader() {
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <header className="bg-background border-b-2 border-foreground">
      {/* Masthead */}
      <div className="max-w-6xl mx-auto px-4 py-8 text-center">
        <h1 className="newspaper-headline text-6xl md:text-8xl mb-2">RAKSHA RAMESH</h1>
        <p className="newspaper-subhead text-xl md:text-2xl text-muted-foreground mb-4">
          Hopeful by design, stubborn by default.
        </p>
        <div className="flex justify-center items-center gap-8 text-sm">
          <span>Vol. 1, No. 1</span>
          <span>{currentDate}</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-foreground text-background">
        <div className="max-w-6xl mx-auto px-4">
          <ul className="flex justify-center items-center gap-8 py-4">
            <li>
              <Link href="/" className="hover:text-accent transition-colors font-medium tracking-wide">
                HOME
              </Link>
            </li>
            <li>
              <Link href="/curriculum-vitae" className="hover:text-accent transition-colors font-medium tracking-wide">
                CURRICULUM VITAE
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

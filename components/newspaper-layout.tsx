import type React from "react"
import { NewspaperHeader } from "./newspaper-header"

interface NewspaperLayoutProps {
  children: React.ReactNode
}

export function NewspaperLayout({ children }: NewspaperLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <NewspaperHeader />
      <main className="max-w-6xl mx-auto px-4 py-8">{children}</main>
      <footer className="border-t-2 border-foreground mt-16 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center text-sm text-muted-foreground">
          <div className="newspaper-divider mb-4"></div>
          <p>© 2025 Raksha Ramesh. All rights reserved. | Published daily from the comfort of my desk.</p>
        </div>
      </footer>
    </div>
  )
}

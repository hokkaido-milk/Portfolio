import { IntroSection } from "@/components/intro-section";
import { FeaturedSection } from "@/components/featured-section";
import { ProjectsGridSection } from "@/components/projects-grid-section";
import { featuredProjects, otherProjects } from "@/lib/projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Decorative grid background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,255,136,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,255,136,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Section 1: Introduction */}
        <IntroSection />

        {/* Divider */}
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
          <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        </div>

        {/* Section 2: Featured Projects (Large Cards) */}
        <FeaturedSection projects={featuredProjects} />

        {/* Divider */}
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>

        {/* Section 3: Other Projects (Grid) */}
        <ProjectsGridSection projects={otherProjects} />

        {/* Bottom spacing */}
        <div className="h-24" />
      </div>
    </main>
  );
}

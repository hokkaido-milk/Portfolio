import type { Project } from "@/lib/types";
import { ProjectCard } from "./project-card";

interface FeaturedSectionProps {
  projects: Project[];
}

export function FeaturedSection({ projects }: FeaturedSectionProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-12 flex items-center gap-6">
          <span className="font-mono text-sm uppercase tracking-[0.3em] text-primary">
            Featured Projects
          </span>
          <div className="h-px flex-1 bg-border" />
          <span className="font-mono text-xs text-muted-foreground">
            [{String(projects.length).padStart(2, "0")}]
          </span>
        </div>

        {/* Large Cards - Full Width */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <ProjectCard key={`${project.id}-${index}`} project={project} variant="large" />
          ))}
        </div>
      </div>
    </section>
  );
}

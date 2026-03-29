import type { Project } from "@/lib/types";
import { ImageCarousel } from "./image-carousel";

interface ProjectCardProps {
  project: Project;
  variant?: "large" | "small";
}

export function ProjectCard({ project, variant = "small" }: ProjectCardProps) {
  const statusColor = 
    project.status === "Completed" 
      ? "text-primary" 
      : project.status === "Ongoing" 
        ? "text-accent" 
        : "text-muted-foreground";

  return (
    <article className="group bg-card border border-border hover:border-primary/50 transition-all duration-300">
      {/* Image Carousel */}
      <ImageCarousel 
        images={project.images} 
        aspectRatio={variant === "large" ? "video" : "video"} 
      />

      {/* Content */}
      <div className="p-4 md:p-6">
        {/* Title */}
        <h3 className={`font-mono font-bold tracking-tight uppercase ${
          variant === "large" ? "text-xl md:text-2xl" : "text-lg"
        }`}>
          {project.title}
        </h3>

        {/* Description */}
        <p className={`mt-3 text-muted-foreground leading-relaxed ${
          variant === "large" ? "text-base" : "text-sm"
        }`}>
          {project.description}
        </p>

        {/* Metadata */}
        <div className={`mt-4 font-mono text-sm space-y-1 ${
          variant === "large" ? "md:flex md:gap-8 md:space-y-0" : ""
        }`}>
          <div className="flex gap-2">
            <span className="text-muted-foreground">Type</span>
            <span className="text-foreground/60">—</span>
            <span className="text-foreground">{project.type}</span>
          </div>
          <div className="flex gap-2">
            <span className="text-muted-foreground">Party</span>
            <span className="text-foreground/60">—</span>
            <span className="text-foreground">{project.party}</span>
          </div>
          <div className="flex gap-2">
            <span className="text-muted-foreground">Status</span>
            <span className="text-foreground/60">—</span>
            <span className={statusColor}>{project.status}</span>
          </div>
        </div>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-mono uppercase tracking-wider border border-border bg-secondary text-secondary-foreground hover:border-primary hover:text-primary transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

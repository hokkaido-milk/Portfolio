import Image from "next/image";

export function IntroSection() {
  return (
    <section className="min-h-screen flex items-center py-16 md:py-24 bg-primary">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Portrait Container */}
          <div className="relative">
            {/* Decorative frame */}
            <div className="absolute -inset-4 border border-primary-foreground/30" />
            <div className="absolute -inset-2 border border-primary-foreground/50" />

            {/* Image container */}
            <div className="relative aspect-[3/4] bg-secondary overflow-hidden">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/portrait.jpg`}"
                alt="Goh Dong Yue portrait"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Scanline effect */}
              <div className="absolute inset-0 pointer-events-none bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.03)_2px,rgba(0,0,0,0.03)_4px)]" />

              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary-foreground" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary-foreground" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary-foreground" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary-foreground" />
            </div>
          </div>

          {/* Text Container */}
          <div className="space-y-8">
            {/* Label */}
            <div className="flex items-center gap-4">
              <div className="h-px flex-1 max-w-16 bg-primary-foreground" />
              <span className="font-mono text-sm uppercase tracking-[0.3em] text-primary-foreground">
                About Me
              </span>
            </div>

            {/* Main text */}
            <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed font-light text-primary-foreground">
              I am{" "}
              <span className="font-bold text-primary-foreground underline decoration-2">Goh Dong Yue</span>{" "}
              (or{" "}
              <span className="font-bold text-primary-foreground underline decoration-2">Izac</span>
              ) and I wander the interdisciplinary realms of{" "}
              <span className="font-mono uppercase tracking-wider">Tech</span>,{" "}
              <span className="font-mono uppercase tracking-wider">Art</span>{" "}
              and{" "}
              <span className="font-mono uppercase tracking-wider">Design</span>.
            </p>

            {/* Decorative element */}
            <div className="flex items-center gap-4 pt-4">
              <div className="w-2 h-2 bg-primary-foreground animate-pulse" />
              <div className="w-2 h-2 bg-primary-foreground/70 animate-pulse delay-100" />
              <div className="w-2 h-2 bg-primary-foreground animate-pulse delay-200" />
              <div className="h-px flex-1 bg-primary-foreground/30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

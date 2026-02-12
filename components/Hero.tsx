import { ProjectCard } from "./ProjectCard";
import { projects } from "@/data/project";

export const Hero = () => {
  // Separate data for the featured layout vs the standard grid
  const featuredWork = projects.filter(p => p.featured);
  const showcaseWork = projects.filter(p => !p.featured);

  return (
    <div className="space-y-12">
      <section className="grid grid-cols-1 lg:grid-cols-3 mt-12 gap-4 font-inter">
        {/* 1. BIO COLUMN */}
        <div className="col-span-1 space-y-4 text-lg text-primary-text ">
          <p>
            Hi there! I&apos;m a <span className="text-accent">Designer engineer</span> from India. 
            I design and build thoughtful interfaces for early-stage products and startups.
          </p>
          {/* Twitter and About Me links... */}
           <p>
           you can find me on twitter{" "}
            <a
              href="https://twitter.com/Prasanjit_ui"
              className="text-accent hover:opacity-70 transition-smooth"
            >
              @Prasanjit_ui
            </a>
          </p>
          <p className="text-lg">
            <span>know more </span>
            <a
              href="#about"
              className="text-accent"
            >
              about me.
            </a>
          </p>
        </div>

        {/* 2. FEATURED PROJECTS COLUMN (Top 2) */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex justify-between items-center">
            <p className="text-lg text-primary-text">Featured Work</p>
            <a href="#projects" className="text-accent text-lg hover:opacity-70">See more</a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {featuredWork.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. SHOWCASE GRID (Bottom) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {showcaseWork.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
};
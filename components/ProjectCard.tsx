import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utility';
import { Project } from '@/data/project';

export const ProjectCard = ({
  id, title, desc, visitLink, contentUrl, isVid, bgColor, bgImage, contentSize
}: Project) => {
  const hasBackground = bgColor || bgImage;

  return (
    <div className="group cursor-pointer w-full flex flex-col">
      {/* 1. Card Container: Fixed aspect ratio, sharp corners */}
      <div
        className={cn(
          "relative aspect-4/3 overflow-hidden flex items-center justify-center transition-all duration-500 rounded-none bg-neutral-100",
          !hasBackground && "bg-neutral-50"
        )}
        style={{ 
          backgroundColor: bgColor,
          backgroundImage: bgImage ? `url(${bgImage})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* 2. Content: No rounding, fills container or follows contentSize */}
        <div
          className={cn(
            "relative transition-all duration-500 ease-out group-hover:scale-[1.02] overflow-hidden rounded-none",
            hasBackground ? (contentSize || "w-[85%] h-[85%]") : "w-full h-full"
          )}
        >
          {isVid ? (
            <video
              src={contentUrl}
              autoPlay muted loop playsInline
              className="w-full h-full object-cover"
            />
          ) : (
            <Image
              src={contentUrl}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          )}
        </div>

        {/* 3. Hover Overlay: Full-card darken with button */}
        <Link 
          href={`/projects/${id}`} 
          className="absolute inset-0 z-20 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100"
        >
          <span className="bg-white text-black rounded-full text-[10px] font-bold tracking-widest uppercase px-6 py-2.5 transform scale-95 group-hover:scale-100 transition-transform duration-300">
            Open Project
          </span>
        </Link>
      </div>

      {/* 4. Details */}
      <div className="pt-4 space-y-1">
        <div className="flex justify-between items-baseline">
          <h3 className="text-lg font-inter text-neutral-900">{title}</h3>
          {visitLink && (
            <a href={visitLink} target="_blank" rel="noopener noreferrer" className="text-base  text-accent ">
              Visit
            </a>
          )}
        </div>
        <p className="text-lg text-neutral-500 leading-snug line-clamp-2 font-inter">{desc}</p>
      </div>
    </div>
  );
};
import Image from 'next/image';

interface ProjectProps {
  title: string;
  desc?: string;
  visitLink?: string;
  contentUrl: string;
  isVid?: boolean;
  bgColor?: string;
  bgImage?: string;
  contentSize?: string;
}

export const ProjectCard = ({
  title, desc, visitLink, contentUrl, isVid, bgColor, bgImage, contentSize = "85%"
}: ProjectProps) => {
  const hasBackground = bgColor || bgImage;

  return (
    <div className="group cursor-pointer w-full">
      {/* Card Container */}
      <div
        className="relative aspect-4/3 overflow-hidden flex items-center justify-center transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-black/10"
        style={{ 
          backgroundColor: bgColor || 'transparent',
          backgroundImage: bgImage ? `url(${bgImage})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Content with hover scale effect */}
        <div
          className="relative transition-all duration-500 ease-out group-hover:scale-[1.02] overflow-hidden"
          style={{
            width: hasBackground ? contentSize : '100%',
            height: hasBackground ? contentSize : '100%',
            borderRadius: hasBackground ? '6px' : '0px'
          }}
        >
          {isVid ? (
            <video
              src={contentUrl}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          ) : (
            <Image
              src={contentUrl}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          )}
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 z-20 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <span className="bg-white/95 dark:bg-white text-foreground rounded-full text-xs font-semibold tracking-wider uppercase px-5 py-2.5 backdrop-blur-sm transform scale-95 group-hover:scale-100 transition-transform duration-300">
            Open Project
          </span>
        </div>
      </div>

      {/* Info Section */}
      <div className="pt-4 space-y-1">
        <div className="flex justify-between items-baseline">
          <h3 className="text-lg text-foreground">{title}</h3>
          {visitLink && (
            <span className="text-sm uppercase tracking-widest text-secondary-text group-hover:text-accent transition-smooth">
              Visit
            </span>
          )}
        </div>
        {desc && (
          <p className="text-base text-primary-text leading-snug line-clamp-2">
            {desc}
          </p>
        )}
      </div>
    </div>
  );
};
'use client'
import React from 'react';
import Image from 'next/image';

interface Project {
  id: string;
  category: string;
  title: string;
  description: string;
  url: string;
  image: string;
  blobColor: string;
  icon: React.ReactNode;
  stat?: string;
  statColor?: string;
  statText?: string;
  label?: string;
  labelIcon?: React.ReactNode;
}

interface ProjectShowcaseProps {
  projects: Project[];
}

const blobShapes = [
  'M44.6,-67.2C56.2,-59.2,62.7,-42.2,67.2,-25.7C71.7,-9.2,74.2,6.8,69.2,20.7C64.2,34.6,51.7,46.4,37.2,54.7C22.7,63,6.2,67.8,-10.2,70.2C-26.6,72.6,-42.9,72.6,-54.2,63.2C-65.5,53.8,-71.8,35,-72.2,17.2C-72.6,-0.6,-67.1,-17.4,-58.2,-28.2C-49.3,-39,-37.1,-43.8,-24.7,-51.2C-12.3,-58.6,0.3,-68.6,14.2,-73.2C28.1,-77.8,44.6,-67.2,44.6,-67.2Z',
  'M54.2,-66.2C67.2,-56.2,71.7,-34.6,70.2,-15.7C68.7,3.2,61.2,19.4,51.2,32.2C41.2,45,28.7,54.4,14.2,60.2C-0.3,66,-16.8,68.2,-32.2,62.2C-47.6,56.2,-61.9,42,-67.2,25.7C-72.5,9.4,-68.8,-9.1,-61.2,-25.7C-53.6,-42.3,-42.1,-57.1,-27.2,-66.2C-12.3,-75.3,6,-78.6,22.7,-74.2C39.4,-69.8,54.2,-66.2,54.2,-66.2Z',
  'M47.2,-65.2C59.2,-56.2,62.7,-37.2,65.2,-19.7C67.7,-2.2,69.2,14.8,63.2,29.2C57.2,43.6,43.7,55.4,28.2,62.2C12.7,69,-4.8,70.8,-20.2,65.2C-35.6,59.6,-48.9,46.6,-57.2,31.2C-65.5,15.8,-68.8,-2,-62.2,-16.2C-55.6,-30.4,-39.1,-41,-23.2,-48.2C-7.3,-55.4,7.9,-59.2,23.2,-61.2C38.5,-63.2,54.2,-65.2,47.2,-65.2Z',
];

const ProjectShowcase = ({ projects }: ProjectShowcaseProps) => {
  return (
    <section className="w-full">
      <div className="w-full flex flex-col snap-y snap-mandatory overflow-y-auto max-h-[300vh]">
        {projects.map((project, idx) => (
          <div
            key={project.id}
            className="relative flex flex-col lg:flex-row items-center justify-center min-h-[60vh] snap-start py-0 px-2 lg:px-0 border-b border-gray-100 bg-gradient-to-br from-white to-gray-50 overflow-hidden"
          >
            {/* Blob SVG */}
            <svg
              width="420"
              height="420"
              viewBox="0 0 200 200"
              className="absolute right-[-6vw] top-1/2 -translate-y-1/2 z-0 hidden md:block"
              aria-hidden="true"
            >
              <path
                d={blobShapes[idx % blobShapes.length]}
                fill={project.blobColor}
                opacity="0.18"
                transform="translate(100 100)"
              />
            </svg>

            {/* Left: Text */}
            <div className="flex-1 max-w-xl mb-4 lg:mb-0 lg:mr-8 z-10 flex flex-col justify-center">
              {/* All-caps label with icon */}
              <div className="flex items-center mb-2">
                {project.labelIcon && <span className="mr-2 text-lg">{project.labelIcon}</span>}
                <span className="uppercase tracking-widest text-xs font-bold text-gray-700/80">
                  {project.label || project.category}
                </span>
              </div>
              {/* Headline */}
              <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-4 leading-tight">
                {project.title}
              </h2>
              {/* Description */}
              <p className="text-base text-gray-700 mb-6">
                {project.description}
              </p>
              {/* Stat/CTA if present */}
              {project.stat && (
                <div className="mb-6">
                  <span className="text-2xl font-extrabold" style={{ color: project.statColor || '#9321C6' }}>{project.stat}</span>
                  <span className="ml-2 text-base text-gray-700 font-medium">{project.statText}</span>
                </div>
              )}
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-[#4A164B] font-semibold hover:text-[#9321C6] transition-colors text-base"
              >
                Learn more
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* Right: Browser Wrapper with Image */}
            <div className="flex-1 flex items-center justify-center w-full max-w-lg z-10">
              <div className="w-full bg-gray-100 shadow-2xl border border-gray-200 overflow-hidden relative" style={{ aspectRatio: '16/10' }}>
                {/* Browser Bar */}
                <div className="flex items-center h-10 px-4" style={{ background: '#4A164B' }}>
                  <span className="w-3 h-3 bg-white/60 rounded-full mr-2"></span>
                  <span className="w-3 h-3 bg-white/60 rounded-full mr-2"></span>
                  <span className="w-3 h-3 bg-white/60 rounded-full"></span>
                  <span className="ml-4 text-xs text-white/80 font-mono truncate">{project.title.toLowerCase().replace(/\s+/g, '')}.zentra.app</span>
                </div>
                {/* Project Image */}
                <div className="relative w-full h-[calc(100%-2.5rem)] bg-black flex items-center justify-center">
                  <div className="w-[95%] h-[92%] overflow-hidden shadow-lg border border-gray-200 bg-white">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={idx === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectShowcase; 
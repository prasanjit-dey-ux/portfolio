'use client';

import { useEffect, useState } from 'react';

export const Header = () => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      const displayHours = hours % 12 || 12;
      const displayMinutes = minutes.toString().padStart(2, '0');
      setCurrentTime(`${displayHours}:${displayMinutes} ${ampm}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="font-inter text-lg text-primary-text pt-6">
      <div className="flex justify-between items-start">

        {/* Column 1 - Name */}
        <h1 className="whitespace-nowrap text-primary-text ">
          Prasanjit Dey
        </h1>

        {/* Column 2 - Time */}
        <p className="whitespace-nowrap text-primary-text">
          {currentTime || '03:40 PM'}
        </p>

        {/* Column 3 - CTA */}
               <div className="flex flex-col gap-10 text-right text-base">
          <div className="flex justify-between w-72">
            <p className="text-primary-text">Design</p>
            <div className="flex flex-col gap-1 text-primary-text">
              <p>Figma</p>
              <p>Prototyping</p>
              <p>Wireframing</p>
            </div>
          </div>

          <div className="flex justify-between gap-10">
            <p className="text-primary-text">Development</p>
            <div className="flex flex-col gap-1 text-primary-text">
              <p>HTML/CSS</p>
              <p>TypeScript</p>
              <p>React</p>
              <p>React Motion</p>
              <p>Next.js</p>
            </div>
          </div>
        </div>

        {/* Column 4 - Skills */}


         <a 
          href="#contact" 
          className="cursor-pointer whitespace-nowrap text-accent hover:opacity-70 transition-smooth"
        >
          Get in touch
        </a>
      </div>
    </header>
  );
};


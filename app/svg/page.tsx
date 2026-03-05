"use client";

import { motion, Variants } from "framer-motion";

export default function IntelligentEngine() {
  const chipVariants: Variants = {
    rest: { 
      y: 10, // Start slightly down
      rotate: -1, // Slight tilt at rest
      transition: { duration: 0.5 } 
    },
    hover: { 
      y: -55, // Move up
      rotate: 20, // Rotate slightly while floating
      transition: { 
        duration: 1.5, // Slow, floating speed
       // Loop the animation
        repeatType: "reverse", // Yo-yo effect (up-down-up)
        ease: "easeInOut" 
      } 
    },
  };

  const beamVariants: Variants = {
    rest: { opacity: 50 },
    hover: { 
      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" } 
    },
  };

  const glowVariants: Variants = {
    rest: { 
      opacity: 0.5,           // Dimmer when resting
      fill: "#FFFFFF",
      stroke: "#000000",      // Black border
      strokeWidth: 1,         // Thickness of the border
      filter: "drop-shadow(0px 0px 0px rgba(255, 255, 255, 0))", // No glow
      transition: { duration: 0.3 }
    },
    hover: {
      opacity: 1,             // Full brightness
      fill: "#FFFFFF",
      stroke: "#FFFFFF",      // Turn stroke white (or transparent) to merge with glow
      strokeWidth: 0, 
      filter: "drop-shadow(0px 0px 8px rgba(255, 255, 255, 0.9))", // The Glow Effect
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      }
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-[#0a0a0a] p-4">
      {/* 1. The Card Container triggers the hover state */}
      <motion.div 
        className="relative w-full max-w-125 overflow-hidden rounded-4xl border border-[#272727] bg-[#0F0F0F] p-4"
        initial="rest"
        whileHover="hover"
        animate="rest"
      >
        
        {/* 2. Graphic Area (The SVG) */}
        <div className="relative flex h-80 w-full items-center border border-[#272727] justify-center rounded-2xl bg-[#151515] overflow-hidden">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 492 324"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0"  
          >
            {/* Background Grids & Elements */}
            <path d="M641.064 292.257L-100 35" stroke="#CFCFCF"/>
            <path d="M672.458 227.583L-50 -20" stroke="#CFCFCF"/>
            <path d="M648.474 140.006L-80 -110" stroke="#CFCFCF"/>
            <path d="M621.751 41.5891L-100 -200" stroke="#CFCFCF"/>
            <path d="M613.353 355.077L-50 120" stroke="#CFCFCF"/>
            <path d="M607.881 419.195L-60 180" stroke="#CFCFCF"/>
            <path d="M593.713 476.284L-80 240" stroke="#CFCFCF"/>
            <path d="M0.5 257.5L578.139 -76" stroke="#CFCFCF"/>
            <path d="M-20 351.5L606.639 -10" stroke="#CFCFCF"/>
            <path d="M111 362.5L688.639 29" stroke="#CFCFCF"/>
            <path d="M203 406.5L780.639 73" stroke="#CFCFCF"/>
            <path d="M-29 195.5L548.639 -138" stroke="#CFCFCF"/>
            <path d="M-74 149.5L503.639 -184" stroke="#CFCFCF"/>
            <path d="M-108 101.5L469.639 -232" stroke="#CFCFCF"/>

            <g filter="url(#filter0_f_119_461)">
              <ellipse cx="280.5" cy="30" rx="296.5" ry="115" fill="#151515"/>
            </g>

            {/* Base Platform (Static) */}
            <ellipse cx="279" cy="239.5" rx="150" ry="50.5" fill="black"/>
            <path d="M245.5 154.5C288.667 154.5 327.724 161.768 355.971 173.5C370.095 179.366 381.493 186.339 389.352 194.056C397.209 201.771 401.5 210.2 401.5 219C401.5 227.8 397.209 236.229 389.352 243.944C381.493 251.661 370.095 258.634 355.971 264.5C327.724 276.232 288.667 283.5 245.5 283.5C202.333 283.5 163.276 276.232 135.029 264.5C120.905 258.634 109.507 251.661 101.648 243.944C93.7915 236.229 89.5 227.8 89.5 219C89.5 210.2 93.7915 201.771 101.648 194.056C109.507 186.339 120.905 179.366 135.029 173.5C163.276 161.768 202.333 154.5 245.5 154.5Z" fill="#111111" stroke="black"/>
            <path d="M245.5 147.5C287.565 147.5 325.624 154.265 353.149 165.185C366.913 170.645 378.018 177.135 385.674 184.315C393.328 191.495 397.5 199.33 397.5 207.5C397.5 215.67 393.328 223.505 385.674 230.685C378.018 237.865 366.913 244.355 353.149 249.815C325.624 260.735 287.565 267.5 245.5 267.5C203.435 267.5 165.376 260.735 137.851 249.815C124.087 244.355 112.982 237.865 105.326 230.685C97.6715 223.505 93.5 215.67 93.5 207.5C93.5 199.33 97.6715 191.495 105.326 184.315C112.982 177.135 124.087 170.645 137.851 165.185C165.376 154.265 203.435 147.5 245.5 147.5Z" fill="black" stroke="#1F1F1F"/>
            <path d="M244.5 147.5C283.806 147.5 319.369 153.482 345.087 163.138C357.948 167.966 368.321 173.704 375.47 180.05C382.619 186.396 386.5 193.307 386.5 200.5C386.5 207.693 382.619 214.604 375.47 220.95C368.321 227.296 357.948 233.034 345.087 237.862C319.369 247.518 283.806 253.5 244.5 253.5C205.194 253.5 169.631 247.518 143.913 237.862C131.052 233.034 120.679 227.296 113.53 220.95C106.381 214.604 102.5 207.693 102.5 200.5C102.5 193.307 106.381 186.396 113.53 180.05C120.679 173.704 131.052 167.966 143.913 163.138C169.631 153.482 205.194 147.5 244.5 147.5Z" fill="#1E1E1E" stroke="black"/>
            <ellipse cx="256.5" cy="191.5" rx="106.5" ry="35.5" fill="#191919"/>
            <path d="M244.5 147.5C273.87 147.5 300.439 151.469 319.648 157.872C329.256 161.074 336.995 164.876 342.321 169.074C347.653 173.276 350.5 177.817 350.5 182.5C350.5 187.183 347.653 191.724 342.321 195.926C336.995 200.124 329.256 203.926 319.648 207.128C300.439 213.531 273.87 217.5 244.5 217.5C215.13 217.5 188.561 213.531 169.352 207.128C159.744 203.926 152.005 200.124 146.679 195.926C141.347 191.724 138.5 187.183 138.5 182.5C138.5 177.817 141.347 173.276 146.679 169.074C152.005 164.876 159.744 161.074 169.352 157.872C188.561 151.469 215.13 147.5 244.5 147.5Z" fill="#272727" stroke="#0C0C0C"/>
            <path d="M244.5 141.5C273.871 141.5 300.442 145.357 319.652 151.58C329.26 154.693 337.001 158.388 342.327 162.468C347.661 166.553 350.5 170.962 350.5 175.5C350.5 180.038 347.661 184.447 342.327 188.532C337.001 192.612 329.26 196.307 319.652 199.42C300.442 205.643 273.871 209.5 244.5 209.5C215.129 209.5 188.558 205.643 169.348 199.42C159.74 196.307 151.999 192.612 146.673 188.532C141.339 184.447 138.5 180.038 138.5 175.5C138.5 170.962 141.339 166.553 146.673 162.468C151.999 158.388 159.74 154.693 169.348 151.58C188.558 145.357 215.129 141.5 244.5 141.5Z" fill="black" stroke="#262626"/>
            <path d="M244.5 143.5C271.665 143.5 296.24 146.798 314.007 152.119C322.893 154.781 330.048 157.94 334.971 161.426C339.906 164.92 342.5 168.67 342.5 172.5C342.5 176.33 339.906 180.08 334.971 183.574C330.048 187.06 322.893 190.219 314.007 192.881C296.24 198.202 271.665 201.5 244.5 201.5C217.335 201.5 192.76 198.202 174.993 192.881C166.107 190.219 158.952 187.06 154.029 183.574C149.094 180.08 146.5 176.33 146.5 172.5C146.5 168.67 149.094 164.92 154.029 161.426C158.952 157.94 166.107 154.781 174.993 152.119C192.76 146.798 217.335 143.5 244.5 143.5Z" fill="#131313" stroke="#3B3B3B"/>
            <ellipse cx="244" cy="167" rx="66" ry="20" fill="white"/>
            
            <mask id="path-27-inside-1_119_461" fill="white">
              <path d="M178 -17H310V167H178V-17Z"/>
            </mask>
            
            {/* The Beam */}
            <motion.path 
              d="M178 -17H310V167H178V-17Z" 
              fill="url(#paint0_linear_119_461)" 
              variants={beamVariants}
            />
            <path d="M310 -17H309V167H310H311V-17H310ZM178 167H179V-17H178H177V167H178Z" fill="#F4F4F4" mask="url(#path-27-inside-1_119_461)"/>

            {/* --- ANIMATED CHIP --- */}
            <motion.g variants={chipVariants}>
              <rect x="0.873126" width="62.2554" height="62.2554" rx="7.5" transform="matrix(0.873126 -0.487495 0.873126 0.487495 190.881 136.589)" fill="black" stroke="white"/>
              <rect x="0.873126" width="62.2554" height="62.2554" rx="7.5" transform="matrix(0.873126 -0.487495 0.873126 0.487495 190.881 131.263)" fill="black" stroke="white"/>
              <rect x="0.873126" width="23.7345" height="23.329" rx="4.5" transform="matrix(0.873126 -0.487495 0.873126 0.487495 224.515 131.065)" fill="black" stroke="white"/>
              <path d="M231.839 153.767L237.871 150.398L234.218 144.531L241.752 140.325M238.211 138.348L230.175 142.835L230.75 147.851L225.997 150.505M211.835 142.598L216.589 139.944L223.98 139.376L232.193 134.988M228.829 133.11L220.765 137.02L210.965 135.375L204.932 138.744M234.317 136.174L226.104 140.562L218.713 141.13L213.96 143.784M236.618 137.459L228.582 141.946L227.013 146.182L222.634 148.627" stroke="white"/>
              <path d="M287.068 122.93L281.161 126.228L270.724 124.148L263.348 128.267M259.807 126.29L267.676 121.897L276.573 122.267L281.227 119.668M267.065 111.761L262.411 114.36L261.48 118.438L253.789 122.93M250.425 121.052L257.271 116.637L254.254 111.205L260.161 107.907M255.913 124.116L263.605 119.624L264.535 115.546L269.189 112.947M258.214 125.401L266.083 121.007L273.575 120.185L277.863 117.79" stroke="white"/>
              <path d="M286.891 138.645L280.796 135.241L270.252 137.261L262.64 133.011M259.099 134.988L267.219 139.521L276.247 139.225L281.05 141.906M266.888 149.813L262.086 147.131L261.024 142.98L253.081 138.348M249.717 140.226L256.798 144.772L253.889 150.264L259.984 153.668M255.205 137.162L263.148 141.794L264.21 145.945L269.012 148.627M257.506 135.877L265.626 140.411L273.261 141.313L277.686 143.784" stroke="white"/>
              <path d="M204.932 122.93L211.027 126.333L221.571 124.313L228.829 128.366M232.37 126.389L224.604 122.053L215.576 122.35L210.773 119.668M224.935 111.761L229.737 114.443L230.799 118.594L238.565 122.93M241.752 121.151L235.025 116.802L237.934 111.31L231.839 107.907M236.264 124.215L228.675 119.78L227.613 115.629L222.811 112.947M233.963 125.499L226.197 121.164L218.562 120.261L214.137 117.79" stroke="white"/>
              <rect width="12.57" height="11.759" transform="matrix(0.873126 -0.487495 0.873126 0.487495 235.025 130.639)" fill="white" style={{mixBlendMode: "plus-lighter"}}/>
              <rect width="12.57" height="11.759" transform="matrix(0.873126 -0.487495 0.873126 0.487495 235.025 130.639)" fill="white" style={{mixBlendMode: "plus-lighter"}}/>
              <rect width="12.57" height="11.759" transform="matrix(0.873126 -0.487495 0.873126 0.487495 235.025 130.639)" fill="white" style={{mixBlendMode: "plus-lighter"}}/>
              <rect width="12.57" height="11.759" transform="matrix(0.873126 -0.487495 0.873126 0.487495 235.025 130.639)" fill="#EBDDFF" style={{mixBlendMode: "darken"}}/>
              <g filter="url(#filter1_f_119_461)">
              <rect width="11.7761" height="11.2029" transform="matrix(0.873126 -0.487495 0.873126 0.487495 235.716 130.608)" fill="white" style={{mixBlendMode: "plus-lighter"}}/>
              </g> 
              <path d="M296.5 131.5L296.5 137" stroke="white"/>
              <path d="M195.5 131V136.5" stroke="white"/>
            </motion.g>
            {/* --- END ANIMATED CHIP --- */}

            <motion.g variants={glowVariants}>
              <ellipse cx="124" cy="188" rx="4" ry="3" fill="white"/>
                <ellipse cx="160" cy="224" rx="4" ry="3" fill="white"/>
                <ellipse cx="240" cy="236" rx="4" ry="3" fill="white"/>
                <ellipse cx="324" cy="224" rx="4" ry="3" fill="white"/>
                <ellipse cx="364" cy="190" rx="4" ry="3" fill="white"/>
            </motion.g>

            <defs>
              <filter id="filter0_f_119_461" x="-67" y="-136" width="695" height="332" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="25.5" result="effect1_foregroundBlur_119_461"/>
              </filter>
              <filter id="filter1_f_119_461" x="231.716" y="120.868" width="28.0635" height="19.2021" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_119_461"/>
              </filter>
              <linearGradient id="paint0_linear_119_461" x1="244" y1="-17" x2="244" y2="167" gradientUnits="userSpaceOnUse">
                <stop offset="0.245192" stopColor="#4A4986" stopOpacity="0"/>
                <stop offset="1" stopColor="white"/>
              </linearGradient>
              <clipPath id="clip0_119_461">
                <rect width="492" height="324" rx="16" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </div>

        {/* 3. Text Area (HTML) */}
        <div className="pt-4 flex items-center gap-4 px-1 ">
          <div className="flex p-7 items-center justify-center rounded-2xl border border-[#242424] bg-[#151515]">
            {/* Simple Icon SVG */}
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M28 12H12V28H28V12Z" fill="white"/>
            <path fillRule="evenodd" clip-rule="evenodd" d="M18.5 6V3.5C18.5 3.10218 18.658 2.72064 18.9393 2.43934C19.2206 2.15804 19.6022 2 20 2C20.3978 2 20.7794 2.15804 21.0607 2.43934C21.342 2.72064 21.5 3.10218 21.5 3.5V6H24.5V3.5C24.5 3.10218 24.658 2.72064 24.9393 2.43934C25.2206 2.15804 25.6022 2 26 2C26.3978 2 26.7794 2.15804 27.0607 2.43934C27.342 2.72064 27.5 3.10218 27.5 3.5V6H28.5C29.9587 6 31.3576 6.57946 32.3891 7.61091C33.4205 8.64236 34 10.0413 34 11.5V12.5H36.5C36.8978 12.5 37.2794 12.658 37.5607 12.9393C37.842 13.2206 38 13.6022 38 14C38 14.3978 37.842 14.7794 37.5607 15.0607C37.2794 15.342 36.8978 15.5 36.5 15.5H34V18.5H36.5C36.8978 18.5 37.2794 18.658 37.5607 18.9393C37.842 19.2206 38 19.6022 38 20C38 20.3978 37.842 20.7794 37.5607 21.0607C37.2794 21.342 36.8978 21.5 36.5 21.5H34V24.5H36.5C36.8978 24.5 37.2794 24.658 37.5607 24.9393C37.842 25.2206 38 25.6022 38 26C38 26.3978 37.842 26.7794 37.5607 27.0607C37.2794 27.342 36.8978 27.5 36.5 27.5H34V28.5C34 29.9587 33.4205 31.3576 32.3891 32.3891C31.3576 33.4205 29.9587 34 28.5 34H27.5V36.5C27.5 36.8978 27.342 37.2794 27.0607 37.5607C26.7794 37.842 26.3978 38 26 38C25.6022 38 25.2206 37.842 24.9393 37.5607C24.658 37.2794 24.5 36.8978 24.5 36.5V34H21.5V36.5C21.5 36.8978 21.342 37.2794 21.0607 37.5607C20.7794 37.842 20.3978 38 20 38C19.6022 38 19.2206 37.842 18.9393 37.5607C18.658 37.2794 18.5 36.8978 18.5 36.5V34H15.5V36.5C15.5 36.8978 15.342 37.2794 15.0607 37.5607C14.7794 37.842 14.3978 38 14 38C13.6022 38 13.2206 37.842 12.9393 37.5607C12.658 37.2794 12.5 36.8978 12.5 36.5V34H11.5C10.0413 34 8.64236 33.4205 7.61091 32.3891C6.57946 31.3576 6 29.9587 6 28.5V27.5H3.5C3.10218 27.5 2.72064 27.342 2.43934 27.0607C2.15804 26.7794 2 26.3978 2 26C2 25.6022 2.15804 25.2206 2.43934 24.9393C2.72064 24.658 3.10218 24.5 3.5 24.5H6V21.5H3.5C3.10218 21.5 2.72064 21.342 2.43934 21.0607C2.15804 20.7794 2 20.3978 2 20C2 19.6022 2.15804 19.2206 2.43934 18.9393C2.72064 18.658 3.10218 18.5 3.5 18.5H6V15.5H3.5C3.10218 15.5 2.72064 15.342 2.43934 15.0607C2.15804 14.7794 2 14.3978 2 14C2 13.6022 2.15804 13.2206 2.43934 12.9393C2.72064 12.658 3.10218 12.5 3.5 12.5H6V11.5C6 10.0413 6.57946 8.64236 7.61091 7.61091C8.64236 6.57946 10.0413 6 11.5 6H12.5V3.5C12.5 3.10218 12.658 2.72064 12.9393 2.43934C13.2206 2.15804 13.6022 2 14 2C14.3978 2 14.7794 2.15804 15.0607 2.43934C15.342 2.72064 15.5 3.10218 15.5 3.5V6H18.5ZM9 11.5C9 10.12 10.12 9 11.5 9H28.5C29.88 9 31 10.12 31 11.5V28.5C31 29.88 29.88 31 28.5 31H11.5C10.12 31 9 29.88 9 28.5V11.5Z" fill="white"/>
            </svg>
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl font-medium text-white font-inter">Intelligent AI Engine</h3>
            <p className="text-base text-[#949494] font-inter">Empower your application with the advanced neural processing</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}


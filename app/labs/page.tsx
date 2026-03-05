"use client"

import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

// 1. Define your images here.
// These are standard Unsplash placeholders; feel free to swap them with your own assets.
const SHOWCASE_IMAGES = [
  "/serene_submerged.png",
  "/ocean_sunset_diver.png",
  "/seaside_portrait.png",
  "/blue_portrait.png",
];

interface LoadingScreenProps {
  // images prop is removed so it doesn't cause errors if missing
  onComplete?: () => void; // Made optional for easier testing
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Progress Logic
  useEffect(() => {
    const duration = 2500;
    const steps = 100;
    const stepDuration = duration / steps;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsComplete(true);
          }, 400);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 1000);
          return 100;
        }
        return prev + 1;
      });
    }, stepDuration);

    return () => clearInterval(interval);
  }, [onComplete]);

  // Image Cycling Logic
  useEffect(() => {
    const imageInterval = setInterval(() => {
      // Safety check to ensure array exists and has length
      if (SHOWCASE_IMAGES.length > 0) {
        setCurrentImageIndex((prev) => (prev + 1) % SHOWCASE_IMAGES.length);
      }
    }, 300);

    return () => clearInterval(imageInterval);
  }, []); // Empty dependency array is fine since SHOWCASE_IMAGES is static

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-[#F4F1EA]"
        >
          {/* Logo/Brand Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="absolute left-6 top-6 md:left-12 md:top-12"
          >
            <h1
              className="text-xl tracking-[0.08em] text-[#1A1A1A] md:text-2xl font-manrope font-semibold"
             
            >
              KIQA PRODUCTION
            </h1>
          </motion.div>

          {/* Center Image with Reveal Animation */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative h-[300px] w-[250px] overflow-hidden md:h-[400px] md:w-[320px]"
            >
              {/* Image with Safety Check */}
              {SHOWCASE_IMAGES.length > 0 && (
                <img
                  src={SHOWCASE_IMAGES[currentImageIndex]}
                  alt="Showcase"
                  className="h-full w-full object-cover"
                />
              )}

              {/* Animated Reveal Mask - Top */}
              <motion.div
                initial={{ height: '50%' }}
                animate={{ height: progress < 100 ? `${50 - progress * 0.5}%` : '0%' }}
                transition={{ duration: 0.1, ease: 'linear' }}
                className="absolute left-0 right-0 top-0 bg-[#F4F1EA] z-10"
              />

              {/* Animated Reveal Mask - Bottom */}
              <motion.div
                initial={{ height: '50%' }}
                animate={{ height: progress < 100 ? `${50 - progress * 0.5}%` : '0%' }}
                transition={{ duration: 0.1, ease: 'linear' }}
                className="absolute bottom-0 left-0 right-0 bg-[#F4F1EA] z-10"
              />

              {/* Border Overlay */}
              <div className="pointer-events-none absolute inset-0 border border-[#1A1A1A]/10 z-20" />
            </motion.div>
          </div>

          {/* Loading Counter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute bottom-12 right-6 md:bottom-16 md:right-12"
          >
            <p
              className="text-xl text-[#1A1A1A]/60 md:text-2xl font-manrope"
             
            >
              [{String(progress).padStart(2, '0')}/100]
            </p>
          </motion.div>

          {/* Loading Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute bottom-12 left-6 md:bottom-16 md:left-12"
          >
            <p
              className="text-sm tracking-widest text-[#1A1A1A]/60 font-manrope"
              
            >
              {progress < 100 ? 'LOADING' : 'COMPLETE'}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
'use client'

import { motion } from 'framer-motion'

const words = ['EXPLORE', "WHAT'S", 'POSSIBLE']

export default function HeroText() {
  return (
    <div className="absolute left-12 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
      {words.map((word, i) => (
        <motion.div
          key={word}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: i * 0.15,
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="text-6xl font-black leading-none tracking-tight text-black"
        >
          {word}
        </motion.div>
      ))}
    </div>
  )
}

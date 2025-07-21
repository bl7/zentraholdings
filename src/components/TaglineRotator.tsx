'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const words = ['grow', 'scale', 'automate', 'adapt', 'thrive', 'lead', 'evolve']

export default function TaglineRotator() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < words.length - 1) {
      // Faster timing for middle words, slower for final transition
      const isMiddleWord = index > 0 && index < words.length - 2
      const timeout = setTimeout(() => setIndex(index + 1), isMiddleWord ? 400 : 800)
      return () => clearTimeout(timeout)
    } else {
      // setFinal(true) // This line was removed as per the edit hint
    }
  }, [index])

  return (
    <h1 className="text-4xl md:text-5xl font-semibold text-center text-gray-800">
      Where businesses{' '}
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ opacity: 0, y: 15, rotateX: -45 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          exit={{ opacity: 0, y: -15, rotateX: 45 }}
          transition={{ 
            duration: 0.3,
            ease: [0.25, 0.46, 0.45, 0.94], // Custom easing for snappy feel
            opacity: { duration: 0.2 },
            y: { duration: 0.3 },
            rotateX: { duration: 0.3 }
          }}
          className="inline-block text-[#9321C6] cursor-default"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </h1>
  )
} 
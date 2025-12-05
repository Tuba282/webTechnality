import React from 'react';
import { motion } from 'framer-motion';
import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';
import BlurText from '@/components/ui/BlurText';
import SplitText from '@/components/ui/SplitText';

// Icon color mapping - brand colors for each technology
const iconColors = {
  // Frontend Frameworks
  FaReact: '#61DAFB',
  SiNextdotjs: '#000000',
  FaVuejs: '#4FC08D',
  SiTypescript: '#3178C6',
  FaAngular: '#DD0031',

  // Backend
  FaNodeJs: '#339933',
  SiExpress: '#000000',
  SiMongodb: '#47A248',
  SiPostgresql: '#4169E1',

  // Styling
  SiTailwindcss: '#06B6D4',
  FaCss3Alt: '#1572B6',
  FaSass: '#CC6699',
  SiStyledcomponents: '#DB7093',
  FaHtml5: '#E34F26',

  // Animation & 3D
  SiFramer: '#0055FF',
  SiThreedotjs: '#000000',
  SiGsap: '#88CE02',

  // Build Tools
  SiVite: '#646CFF',
  SiWebpack: '#8DD6F9',
  FaNpm: '#CB3837',
  FaGitAlt: '#F05032',

  // Design Tools
  SiFigma: '#F24E1E',
  SiAdobexd: '#FF61F6',
  SiSketch: '#F7B500',
  SiCanva: '#00C4CC',

  // Mobile
  SiFlutter: '#02569B',
  SiSwift: '#F05138',
  SiKotlin: '#7F52FF',
  FaAndroid: '#3DDC84',

  // Cloud & DevOps
  SiFirebase: '#FFCA28',
  SiVercel: '#000000',
  SiNetlify: '#00C7B7',
  FaAws: '#FF9900',

  // Default
  FaCode: '#8B5CF6',
};

// Icon mapper
const getIcon = (iconName) => {
  const Icon = FaIcons[iconName] || SiIcons[iconName];
  return Icon || FaIcons.FaCode;
};

// Get icon color
const getIconColor = (iconName) => {
  return iconColors[iconName] || '#6B7280';
};

// All tools data
const allTools = [
  { name: 'React', icon: 'FaReact' },
  { name: 'Next.js', icon: 'SiNextdotjs' },
  { name: 'TypeScript', icon: 'SiTypescript' },
  { name: 'Node.js', icon: 'FaNodeJs' },
  { name: 'Three.js', icon: 'SiThreedotjs' },
  { name: 'Tailwind CSS', icon: 'SiTailwindcss' },
  { name: 'Framer Motion', icon: 'SiFramer' },
  { name: 'Vue.js', icon: 'FaVuejs' },
  { name: 'MongoDB', icon: 'SiMongodb' },
  { name: 'Figma', icon: 'SiFigma' },
  { name: 'Firebase', icon: 'SiFirebase' },
  { name: 'HTML5', icon: 'FaHtml5' },
  { name: 'CSS3', icon: 'FaCss3Alt' },
  { name: 'Sass', icon: 'FaSass' },
  { name: 'Vite', icon: 'SiVite' },
  { name: 'Git', icon: 'FaGitAlt' },
  { name: 'Flutter', icon: 'SiFlutter' },
  { name: 'Angular', icon: 'FaAngular' },
  { name: 'Vercel', icon: 'SiVercel' },
  { name: 'PostgreSQL', icon: 'SiPostgresql' },
];

// Duplicate for seamless loop
const duplicatedTools = [...allTools, ...allTools];

export default function ToolsMarquee() {
  return (
    <div className="relative w-full py-20 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl opacity-40" />
      </div>

      {/* Title */}
      <div className="flex flex-col items-center mb-12 relative z-10">
        <BlurText
          text="Tools of Trade"
          className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-4 justify-center"
          delay={10}
          animateBy="words"
        />
        <SplitText
          text="Technologies and tools I work with to bring ideas to life"
          className="text-lg text-gray-600 max-w-2xl px-4"
          delay={10}
          tag="p"
          textAlign="center"
        />
      </div>

      {/* Marquee Container */}
      <div className="relative py-10">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#D6D5D7] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#D6D5D7] to-transparent z-10 pointer-events-none" />

        {/* Marquee Track */}
        <div className="flex overflow-hidden py-10">
          <motion.div
            className="flex gap-8 px-4"
            animate={{
              x: [0, -50 * allTools.length],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {duplicatedTools.map((tool, index) => {
              const IconComponent = getIcon(tool.icon);
              const iconColor = getIconColor(tool.icon);

              return (
                <motion.div
                  key={`${tool.name}-${index}`}
                  whileHover={{ scale: 1.15, y: -8 }}
                  className="flex-shrink-0 group cursor-pointer"
                >
                  <div className="relative p-8 backdrop-blur-sm border border-gray-500/60 rounded-3xl hover:border-gray-300 hover:scale-110 hover:shadow-2xl hover:shadow-gray-400/30 transition-all duration-500 min-w-[180px] h-[180px] flex flex-col items-center justify-center overflow-hidden">
                    {/* Animated Glow Effect */}
                    <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    </div>

                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                      className="mb-4 relative z-10 flex items-center justify-center"
                      style={{ color: iconColor }}
                    >
                      <IconComponent className="w-16 h-16 drop-shadow-lg" />
                    </motion.div>

                    {/* Tool Name */}
                    <p className="text-sm font-semibold text-gray-700 group-hover:text-gray-900 transition-colors duration-300 relative z-10 text-center">
                      {tool.name}
                    </p>

                    {/* Bottom Accent Line */}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-1 rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: `linear-gradient(90deg, transparent, ${iconColor}, transparent)`,
                      }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Line */}
      <div className="mt-12 mx-auto max-w-3xl h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
    </div>
  );
}
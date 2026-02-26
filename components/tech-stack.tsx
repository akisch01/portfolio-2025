'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { 
  SiPython, SiJavascript, SiC, SiDjango, SiSpringboot, SiFastapi,
  SiNodedotjs, SiReact, SiVuedotjs, SiPostgresql, SiMysql,
  SiMongodb, SiSqlite, SiDocker, SiKubernetes, SiGithub, SiR,
  SiPandas, SiNumpy, SiApacheairflow, SiLinux, SiApachespark, SiNextdotjs,
  SiPhp, SiLaravel, SiAngular, SiHtml5, SiCss3, SiMlb
} from 'react-icons/si';
import { FaJava, FaMicrosoft, FaChartPie } from 'react-icons/fa';

interface TechStackProps {
  language: 'fr' | 'en';
}

const technologies = [
  { name: 'Apache Spark', icon: SiApachespark, category: 'data', color: '#E35A16', type: 'data' },
  { name: 'TypeScript', icon: SiJavascript, category: 'languages', color: '#3178C6', type: 'dev' },
  { name: 'Next.js', icon: SiNextdotjs, category: 'frameworks', color: '#000000', type: 'dev' },
  // Languages
  { name: 'Python', icon: SiPython, category: 'languages', color: '#3776AB', type: 'data' },
  { name: 'Java', icon: FaJava, category: 'languages', color: '#ED8B00', type: 'dev' },
  { name: 'JavaScript', icon: SiJavascript, category: 'languages', color: '#F7DF1E', type: 'dev' },
  { name: 'C', icon: SiC, category: 'languages', color: '#A8B9CC', type: 'dev' },
  { name: 'PHP', icon: SiPhp, category: 'languages', color: '#777BB4', type: 'dev' },
  { name: 'R', icon: SiR, category: 'languages', color: '#276DC3', type: 'data' },
  
  // Frontend
  { name: 'HTML5', icon: SiHtml5, category: 'frontend', color: '#E34F26', type: 'dev' },
  { name: 'CSS3', icon: SiCss3, category: 'frontend', color: '#1572B6', type: 'dev' },

  // Frameworks
  { name: 'Django', icon: SiDjango, category: 'frameworks', color: '#092E20', type: 'dev' },
  { name: 'Spring Boot', icon: SiSpringboot, category: 'frameworks', color: '#6DB33F', type: 'dev' },
  { name: 'FastAPI', icon: SiFastapi, category: 'frameworks', color: '#009485', type: 'dev' },
  { name: 'Node.js', icon: SiNodedotjs, category: 'frameworks', color: '#339933', type: 'dev' },
  { name: 'React.js', icon: SiReact, category: 'frameworks', color: '#61DAFB', type: 'dev' },
  { name: 'Vue.js', icon: SiVuedotjs, category: 'frameworks', color: '#4FC08D', type: 'dev' },
  { name: 'Laravel', icon: SiLaravel, category: 'frameworks', color: '#FF2D20', type: 'dev' },
  { name: 'Angular', icon: SiAngular, category: 'frameworks', color: '#DD0031', type: 'dev' },
  
  // Data & DB
  { name: 'PostgreSQL', icon: SiPostgresql, category: 'databases', color: '#336791', type: 'data' },
  { name: 'MySQL', icon: SiMysql, category: 'databases', color: '#4479A1', type: 'data' },
  { name: 'MongoDB', icon: SiMongodb, category: 'databases', color: '#47A248', type: 'data' },
  { name: 'SQLite', icon: SiSqlite, category: 'databases', color: '#003B57', type: 'data' },
  { name: 'Pandas', icon: SiPandas, category: 'data', color: '#150458', type: 'data' },
  { name: 'NumPy', icon: SiNumpy, category: 'data', color: '#013243', type: 'data' },
  { name: 'Matplotlib', icon: FaChartPie, category: 'data', color: '#1C76B6', type: 'data' },
  { name: 'MATLAB', icon: SiMlb, category: 'data', color: '#0076A8', type: 'data' },
  { name: 'Power BI', icon: FaMicrosoft, category: 'data', color: '#F2C811', type: 'data' },
  
  // DevOps & OS
  { name: 'Docker', icon: SiDocker, category: 'devops', color: '#2496ED', type: 'dev' },
  { name: 'Kubernetes', icon: SiKubernetes, category: 'devops', color: '#326CE5', type: 'dev' },
  { name: 'Git', icon: SiGithub, category: 'devops', color: '#181717', type: 'dev' },
  { name: 'Apache Airflow', icon: SiApacheairflow, category: 'devops', color: '#017CEE', type: 'data' },
  { name: 'Linux', icon: SiLinux, category: 'devops', color: '#FCC624', type: 'dev' },
];

export default function TechStack({ language }: TechStackProps) {
  const [filter, setFilter] = useState<'all' | 'dev' | 'data'>('all');
  const title = language === 'fr' ? 'ARSENAL TECHNIQUE' : 'TECHNICAL ARSENAL';

  const filteredTechnologies = technologies.filter(
    (tech) => filter === 'all' || tech.type === filter
  );

  // Split for mobile marquee
  const midPoint = Math.ceil(filteredTechnologies.length / 2);
  const row1 = filteredTechnologies.slice(0, midPoint);
  const row2 = filteredTechnologies.slice(midPoint);

  // Grid Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 }
  };

  return (
    <section id="stack" className="py-12 md:py-24 relative bg-background/50 backdrop-blur-sm overflow-hidden">
      <div className="container px-4 md:px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-center mb-8 tracking-tighter"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
            {title}
          </span>
        </motion.h2>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-16">
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-2 rounded-full font-medium transition-colors ${filter === 'all' ? 'bg-primary text-primary-foreground' : 'bg-card border border-white/10 hover:border-primary/50 text-muted-foreground hover:text-foreground'}`}
          >
            {language === 'fr' ? 'Tout' : 'All'}
          </button>
          <button
            onClick={() => setFilter('dev')}
            className={`px-6 py-2 rounded-full font-medium transition-colors ${filter === 'dev' ? 'bg-primary text-primary-foreground' : 'bg-card border border-white/10 hover:border-primary/50 text-muted-foreground hover:text-foreground'}`}
          >
            Dev
          </button>
          <button
            onClick={() => setFilter('data')}
            className={`px-6 py-2 rounded-full font-medium transition-colors ${filter === 'data' ? 'bg-primary text-primary-foreground' : 'bg-card border border-white/10 hover:border-primary/50 text-muted-foreground hover:text-foreground'}`}
          >
            Data
          </button>
        </div>

        {/* Desktop Grid View (Hidden on Mobile) */}
        <motion.div 
          key={`desktop-${filter}`} // Re-trigger initial animation on filter change
          variants={container}
          initial="hidden"
          animate="show"
          className="hidden md:flex flex-wrap justify-center gap-6 md:gap-8 min-h-[400px]"
        >
          {filteredTechnologies.map((tech) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={tech.name}
                variants={item}
                whileHover={{ scale: 1.1, y: -5 }}
                className="group relative flex flex-col items-center justify-center p-6 w-32 h-32 rounded-2xl bg-card border border-white/5 hover:border-white/20 transition-colors shadow-lg cursor-default"
              >
                <div 
                  className="absolute inset-0 rounded-2xl opacity-100 md:opacity-0 md:group-hover:opacity-20 transition-opacity duration-300" 
                  style={{ backgroundColor: tech.color }} 
                />
                <Icon 
                  className="w-10 h-10 mb-3 transition-colors duration-300 group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" 
                  style={{ color: tech.color }} 
                />
                <span className="text-xs font-mono font-bold text-muted-foreground group-hover:text-white transition-colors text-center">
                  {tech.name}
                </span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Mobile Marquee View (Hidden on Desktop) */}
        <div className="md:hidden space-y-6" key={`mobile-${filter}`}>
          {row1.length > 0 && <MarqueeRow items={row1} direction="left" />}
          {row2.length > 0 && <MarqueeRow items={row2} direction="right" />}
        </div>
      </div>
    </section>
  );
}

const MarqueeRow = ({ items, direction }: { items: typeof technologies, direction: 'left' | 'right' }) => {
  if (items.length === 0) return null;
  
  // We need the items array to be long enough so that HALF of the duplicate fills the screen.
  let baseItems = [...items];
  while (baseItems.length < 10) {
    baseItems = [...baseItems, ...items];
  }
  
  // Duplicate exactly once for a seamless 50% translation loop
  const marqueeItems = [...baseItems, ...baseItems];

  return (
    <div className="relative flex overflow-hidden">
      <motion.div
        initial={{ x: direction === 'left' ? 0 : '-50%' }}
        animate={{ x: direction === 'left' ? '-50%' : 0 }}
        transition={{ 
          duration: Math.max(20, baseItems.length * 2.5), 
          ease: "linear", 
          repeat: Infinity 
        }}
        className="flex gap-4 px-2"
      >
        {marqueeItems.map((tech, idx) => {
           const Icon = tech.icon;
           return (
            <div 
              key={`${tech.name}-${idx}`}
              className="relative w-28 h-28 flex-shrink-0 flex flex-col items-center justify-center p-4 rounded-xl bg-card border border-white/5"
            >
              <div 
                 className="absolute inset-0 rounded-xl opacity-10" 
                 style={{ backgroundColor: tech.color }} 
              />
              <Icon 
                className="w-8 h-8 mb-2" 
                style={{ color: tech.color }} 
              />
              <span className="text-[10px] font-mono font-bold text-muted-foreground text-center">
                {tech.name}
              </span>
            </div>
           );
        })}
      </motion.div>
    </div>
  );
};
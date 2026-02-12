'use client';

import { motion } from 'framer-motion';
import { 
  SiPython, SiJavascript, SiC, SiDjango, SiSpringboot, SiFastapi,
  SiNodedotjs, SiReact, SiVuedotjs, SiPostgresql, SiMysql,
  SiMongodb, SiSqlite, SiDocker, SiKubernetes, SiGithub, SiR,
  SiPandas, SiNumpy, SiApacheairflow, SiLinux,
  SiPhp, SiLaravel, SiAngular, SiHtml5, SiCss3, SiMlb
} from 'react-icons/si';
import { FaJava, FaMicrosoft, FaChartPie } from 'react-icons/fa';

interface TechStackProps {
  language: 'fr' | 'en';
}

const technologies = [
  // Languages
  { name: 'Python', icon: SiPython, category: 'languages', color: '#3776AB' },
  { name: 'Java', icon: FaJava, category: 'languages', color: '#ED8B00' },
  { name: 'JavaScript', icon: SiJavascript, category: 'languages', color: '#F7DF1E' },
  { name: 'C', icon: SiC, category: 'languages', color: '#A8B9CC' },
  { name: 'PHP', icon: SiPhp, category: 'languages', color: '#777BB4' },
  { name: 'R', icon: SiR, category: 'languages', color: '#276DC3' },
  
  // Frontend
  { name: 'HTML5', icon: SiHtml5, category: 'frontend', color: '#E34F26' },
  { name: 'CSS3', icon: SiCss3, category: 'frontend', color: '#1572B6' },

  // Frameworks
  { name: 'Django', icon: SiDjango, category: 'frameworks', color: '#092E20' },
  { name: 'Spring Boot', icon: SiSpringboot, category: 'frameworks', color: '#6DB33F' },
  { name: 'FastAPI', icon: SiFastapi, category: 'frameworks', color: '#009485' },
  { name: 'Node.js', icon: SiNodedotjs, category: 'frameworks', color: '#339933' },
  { name: 'React.js', icon: SiReact, category: 'frameworks', color: '#61DAFB' },
  { name: 'Vue.js', icon: SiVuedotjs, category: 'frameworks', color: '#4FC08D' },
  { name: 'Laravel', icon: SiLaravel, category: 'frameworks', color: '#FF2D20' },
  { name: 'Angular', icon: SiAngular, category: 'frameworks', color: '#DD0031' },
  
  // Data & DB
  { name: 'PostgreSQL', icon: SiPostgresql, category: 'databases', color: '#336791' },
  { name: 'MySQL', icon: SiMysql, category: 'databases', color: '#4479A1' },
  { name: 'MongoDB', icon: SiMongodb, category: 'databases', color: '#47A248' },
  { name: 'SQLite', icon: SiSqlite, category: 'databases', color: '#003B57' },
  { name: 'Pandas', icon: SiPandas, category: 'data', color: '#150458' },
  { name: 'NumPy', icon: SiNumpy, category: 'data', color: '#013243' },
  { name: 'Matplotlib', icon: FaChartPie, category: 'data', color: '#1C76B6' },
  { name: 'MATLAB', icon: SiMlb, category: 'data', color: '#0076A8' },
  { name: 'Power BI', icon: FaMicrosoft, category: 'data', color: '#F2C811' },
  
  // DevOps & OS
  { name: 'Docker', icon: SiDocker, category: 'devops', color: '#2496ED' },
  { name: 'Kubernetes', icon: SiKubernetes, category: 'devops', color: '#326CE5' },
  { name: 'Git', icon: SiGithub, category: 'devops', color: '#181717' },
  { name: 'Apache Airflow', icon: SiApacheairflow, category: 'devops', color: '#017CEE' },
  { name: 'Linux', icon: SiLinux, category: 'devops', color: '#FCC624' },
];

export default function TechStack({ language }: TechStackProps) {
  const title = language === 'fr' ? 'ARSENAL TECHNIQUE' : 'TECHNICAL ARSENAL';

  // Split for mobile marquee
  const midPoint = Math.ceil(technologies.length / 2);
  const row1 = technologies.slice(0, midPoint);
  const row2 = technologies.slice(midPoint);

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
    show: { opacity: 1, scale: 1 }
  };

  return (
    <section id="stack" className="py-12 md:py-24 relative bg-background/50 backdrop-blur-sm overflow-hidden">
      <div className="container px-4 md:px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-center mb-16 tracking-tighter"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
            {title}
          </span>
        </motion.h2>

        {/* Desktop Grid View (Hidden on Mobile) */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="hidden md:flex flex-wrap justify-center gap-6 md:gap-8"
        >
          {technologies.map((tech, idx) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={idx}
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
                <span className="text-xs font-mono font-bold text-muted-foreground group-hover:text-white transition-colors">
                  {tech.name}
                </span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Mobile Marquee View (Hidden on Desktop) */}
        <div className="md:hidden space-y-6">
          <MarqueeRow items={row1} direction="left" />
          <MarqueeRow items={row2} direction="right" />
        </div>
      </div>
    </section>
  );
}

const MarqueeRow = ({ items, direction }: { items: typeof technologies, direction: 'left' | 'right' }) => {
  const marqueeItems = [...items, ...items]; // Duplicate for loop

  return (
    <div className="relative flex overflow-hidden">
      <motion.div
        initial={{ x: direction === 'left' ? 0 : '-50%' }}
        animate={{ x: direction === 'left' ? '-50%' : 0 }}
        transition={{ 
          duration: 30, 
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

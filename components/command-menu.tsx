'use client';

import * as React from 'react';
import { Command } from 'cmdk';
import { useEffect, useState } from 'react';
import { 
  Calculator, 
  Calendar, 
  CreditCard, 
  Settings, 
  Smile, 
  User,
  Code2,
  Briefcase,
  Mail,
  Award,
  Copy,
  ExternalLink,
  FileText
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface CommandMenuProps {
  language: 'fr' | 'en';
  setLanguage: (lang: 'fr' | 'en') => void;
}

export default function CommandMenu({ language, setLanguage }: CommandMenuProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const scrollTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('akpo.kokou.akisch@gmail.com');
    setOpen(false);
    // You could add a toast notification here
    alert(language === 'fr' ? 'Email copié !' : 'Email copied!');
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={() => setOpen(false)}
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="w-full max-w-lg bg-[#1a1a1a] border border-white/10 rounded-xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Command className="w-full">
              <div className="flex items-center border-b border-white/10 px-4">
                <Command.Input 
                  placeholder={language === 'fr' ? "Tapez une commande ou recherchez..." : "Type a command or search..."}
                  className="w-full bg-transparent py-4 text-lg outline-none text-white placeholder:text-muted-foreground"
                />
                <kbd className="hidden md:inline-flex h-6 select-none items-center gap-1 rounded border border-white/10 bg-white/5 px-2 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                  <span className="text-xs">ESC</span>
                </kbd>
              </div>
              
              <Command.List className="max-h-[300px] overflow-y-auto p-2">
                <Command.Empty className="py-6 text-center text-sm text-muted-foreground">
                  {language === 'fr' ? "Aucun résultat." : "No results found."}
                </Command.Empty>

                <Command.Group heading="Navigation" className="text-muted-foreground text-xs font-medium px-2 py-2 mb-2">
                  <CommandItem onSelect={() => scrollTo('about')} icon={User} text="About / Bio" />
                  <CommandItem onSelect={() => scrollTo('stack')} icon={Code2} text="Tech Stack" />
                  <CommandItem onSelect={() => scrollTo('experience')} icon={Briefcase} text="Experience" />
                  <CommandItem onSelect={() => scrollTo('projects')} icon={Settings} text="Projects" />
                  <CommandItem onSelect={() => scrollTo('certifications')} icon={Award} text="Certifications" />
                  <CommandItem onSelect={() => scrollTo('contact')} icon={Mail} text="Contact" />
                </Command.Group>

                <Command.Separator className="h-px bg-white/10 my-2" />

                <Command.Group heading="Actions" className="text-muted-foreground text-xs font-medium px-2 py-2 mb-2">
                  <CommandItem 
                    onSelect={() => setLanguage(language === 'fr' ? 'en' : 'fr')} 
                    icon={Smile} 
                    text={language === 'fr' ? "Switch to English" : "Passer en Français"} 
                  />
                  <CommandItem 
                    onSelect={copyEmail} 
                    icon={Copy} 
                    text={language === 'fr' ? "Copier Email" : "Copy Email"} 
                  />
                  <CommandItem 
                    onSelect={() => window.open('/resume.pdf', '_blank')} 
                    icon={FileText} 
                    text={language === 'fr' ? "Voir le CV (PDF)" : "View Resume (PDF)"} 
                  />
                </Command.Group>
                
                <Command.Group heading="Socials" className="text-muted-foreground text-xs font-medium px-2 py-2 mb-2">
                   <CommandItem 
                    onSelect={() => window.open('https://github.com/akisch01', '_blank')} 
                    icon={Code2} 
                    text="GitHub" 
                  />
                   <CommandItem 
                    onSelect={() => window.open('https://www.linkedin.com/in/akisch-akpo-8a0101279', '_blank')} 
                    icon={Briefcase} 
                    text="LinkedIn" 
                  />
                </Command.Group>

              </Command.List>
            </Command>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function CommandItem({ onSelect, icon: Icon, text }: { onSelect: () => void, icon: any, text: string }) {
  return (
    <Command.Item 
      onSelect={onSelect}
      className="flex items-center gap-2 px-3 py-3 rounded-lg text-sm text-white cursor-pointer hover:bg-primary/20 hover:text-primary transition-colors aria-selected:bg-primary/20 aria-selected:text-primary data-[selected=true]:bg-primary/20 data-[selected=true]:text-primary"
    >
      <Icon className="w-4 h-4" />
      <span>{text}</span>
    </Command.Item>
  );
}

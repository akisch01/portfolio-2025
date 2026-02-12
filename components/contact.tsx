'use client';

import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send, MapPin, Phone, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

interface ContactProps {
  language: 'fr' | 'en';
}

export default function Contact({ language }: ContactProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const content = {
    fr: {
      title: 'CONTACT',
      subtitle: 'Travaillons ensemble sur votre prochain projet',
      getInTouch: 'Me Contacter',
      name: 'Nom',
      email: 'Email',
      message: 'Message',
      send: 'Envoyer le message',
      sending: 'Envoi en cours...',
      copyright: '© 2025 MadeInAkisch. Tous droits réservés.',
    },
    en: {
      title: 'GET IN TOUCH',
      subtitle: "Let's work together on your next project",
      getInTouch: 'Contact Info',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send Message',
      sending: 'Sending...',
      copyright: '© 2025 MadeInAkisch. All rights reserved.',
    }
  };

  const lang = content[language];

  return (
    <footer id="contact" className="relative py-12 md:py-24 overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
              {lang.title}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">{lang.subtitle}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="p-8 rounded-3xl bg-card border border-white/10 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-6">{lang.getInTouch}</h3>
              
              <div className="space-y-6">
                <ContactItem 
                  icon={Mail} 
                  label="Email" 
                  value="akpo.kokou.akisch@gmail.com" 
                  href="mailto:akpo.kokou.akisch@gmail.com" 
                />
                <ContactItem 
                  icon={Linkedin} 
                  label="LinkedIn" 
                  value="akischakpo" 
                  href="https://www.linkedin.com/in/akisch-akpo-8a0101279" 
                />
                <ContactItem 
                  icon={Github} 
                  label="GitHub" 
                  value="akisch01" 
                  href="https://github.com/akisch01" 
                />
                <ContactItem 
                  icon={MapPin} 
                  label="Location" 
                  value="Calais 62100, France" 
                />
                <ContactItem 
                   icon={Phone}
                   label="Phone"
                   value="+33 07 43 55 78 16"
                   href="tel:+330743557816"
                />
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <form 
              action="https://formsubmit.co/akpo.kokou.akisch@gmail.com" 
              method="POST"
              className="space-y-6"
              onSubmit={() => setIsSubmitting(true)}
            >
              {/* Spam Protection (Honeypot) */}
              <input type="text" name="_honey" style={{ display: 'none' }} />
              
              {/* Disable Captcha */}
              <input type="hidden" name="_captcha" value="false" />

              {/* Redirect to same page after submit */}
              <input type="hidden" name="_next" value="http://localhost:3000" /> 
              {/* Note: Change this value to your production URL when deploying */}

              <div className="space-y-2">
                <label className="text-sm font-mono text-muted-foreground ml-2">{lang.name}</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  className="w-full bg-card/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none"
                  placeholder="John Doe"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-mono text-muted-foreground ml-2">{lang.email}</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  className="w-full bg-card/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-mono text-muted-foreground ml-2">{lang.message}</label>
                <textarea 
                  name="message"
                  required
                  rows={4}
                  className="w-full bg-card/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none resize-none"
                  placeholder="..."
                />
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-primary text-white font-bold text-lg hover:shadow-[0_0_20px_rgba(251,146,60,0.5)] transition-shadow flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? lang.sending : lang.send}
                {!isSubmitting && <Send className="w-5 h-5" />}
              </button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-white/10 text-center">
          <p className="text-sm font-mono text-muted-foreground">{lang.copyright}</p>
        </div>
      </div>
    </footer>
  );
}

function ContactItem({ icon: Icon, label, value, href }: { icon: any, label: string, value: string, href?: string }) {
  return (
    <a 
      href={href} 
      target={href?.startsWith('http') ? '_blank' : undefined}
      className={`flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors group ${!href ? 'cursor-default' : ''}`}
    >
      <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 group-hover:text-primary transition-colors">
        <Icon className="w-5 h-5" />
      </div>
      <div className="flex-1">
        <p className="text-xs font-mono text-muted-foreground">{label}</p>
        <p className="text-sm font-medium text-white group-hover:text-primary transition-colors">{value}</p>
      </div>
      {href && <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary opacity-0 group-hover:opacity-100 transition-all" />}
    </a>
  );
}

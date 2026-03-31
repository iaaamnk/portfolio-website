import { Facebook, Instagram, Youtube, Linkedin, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { socialLinks } from '@/data/content';

interface SocialIconsProps {
  variant?: 'default' | 'outline';
  className?: string;
}

const icons = {
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  Github,
};



export function SocialIcons({ variant = 'default', className = '' }: SocialIconsProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {socialLinks.map((social, index) => {
        const Icon = icons[social.icon as keyof typeof icons];
        return (
          <motion.a
            key={social.platform}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`
              w-10 h-10 rounded-full flex items-center justify-center
              transition-colors duration-200
              ${variant === 'default'
                ? 'border border-border-subtle text-text-secondary hover:border-accent-green hover:text-accent-green hover:bg-accent-green/10'
                : 'bg-bg-card border border-border-subtle text-text-secondary hover:border-accent-green hover:text-accent-green'
              }
            `}
            aria-label={social.platform}
          >
            <Icon className="w-5 h-5" />
          </motion.a>
        );
      })}
    </div>
  );
}

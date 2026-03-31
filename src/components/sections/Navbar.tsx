import { useScrollPosition } from '@/hooks/useScrollPosition';
import { motion } from 'framer-motion';
import { Globe, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
export function Navbar() {
  const { isScrolled } = useScrollPosition();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Profile', href: '#profile' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled 
          ? 'bg-bg-primary/90 backdrop-blur-md border-b border-border-subtle' 
          : 'bg-transparent'
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <motion.a
            href="#home"
            className="flex-shrink-0 flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
          >
            <span className="text-xl font-mono font-bold text-text-primary">
              Anamika
            </span>
            <span className="w-2 h-2 rounded-full bg-accent-green" />
          </motion.a>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative text-xs xl:text-sm font-medium text-text-secondary hover:text-text-primary transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex flex-shrink-0 items-center gap-2 sm:gap-4">
            {/* Theme Toggle */}
            {mounted && (
              <button 
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="flex flex-shrink-0 items-center justify-center p-1.5 sm:p-2 rounded-full border border-border-subtle text-text-primary hover:border-accent-green transition-colors duration-200"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            )}

            {/* Language Selector */}
            <button className="flex-shrink-0 flex items-center gap-2 px-3 py-1.5 rounded-full border border-border-subtle text-text-primary hover:border-accent-green transition-colors duration-200">
              <Globe className="w-4 h-4" />
              <span className="hidden sm:inline text-xs font-medium">English</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}

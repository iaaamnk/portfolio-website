import { motion } from 'framer-motion';

interface TabSwitcherProps {
  activeTab: 'professional' | 'personal';
  onTabChange: (tab: 'professional' | 'personal') => void;
}

export function TabSwitcher({ activeTab, onTabChange }: TabSwitcherProps) {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-1 p-1.5 rounded-full bg-bg-card border border-border-subtle shadow-lg">
        <button
          onClick={() => onTabChange('professional')}
          className={`
            relative px-6 py-2.5 rounded-full text-sm font-medium transition-colors duration-300
            ${activeTab === 'professional' ? 'text-bg-primary' : 'text-text-secondary hover:text-text-primary'}
          `}
        >
          {activeTab === 'professional' && (
            <motion.div
              layoutId="activeTab"
              className="absolute inset-0 bg-accent-green rounded-full"
              transition={{ type: 'spring', duration: 0.5, bounce: 0.2 }}
            />
          )}
          <span className="relative z-10">Professional</span>
        </button>
        <button
          onClick={() => onTabChange('personal')}
          className={`
            relative px-6 py-2.5 rounded-full text-sm font-medium transition-colors duration-300
            ${activeTab === 'personal' ? 'text-bg-primary' : 'text-text-secondary hover:text-text-primary'}
          `}
        >
          {activeTab === 'personal' && (
            <motion.div
              layoutId="activeTab"
              className="absolute inset-0 bg-accent-green rounded-full"
              transition={{ type: 'spring', duration: 0.5, bounce: 0.2 }}
            />
          )}
          <span className="relative z-10">Personal</span>
        </button>
      </div>
    </div>
  );
}

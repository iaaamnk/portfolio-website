import { motion } from 'framer-motion';
import { Navbar } from '@/components/sections/Navbar';
import { HeroSection } from '@/components/sections/HeroSection';
import { StatsSection } from '@/components/sections/StatsSection';
import { EducationSection } from '@/components/sections/EducationSection';
import { ProfileSection } from '@/components/sections/ProfileSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { AchievementsSection } from '@/components/sections/AchievementsSection';
import { HackathonsSection } from '@/components/sections/HackathonsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { useScrollPosition } from '@/hooks/useScrollPosition';

function App() {
  const { scrollPosition } = useScrollPosition();

  // Calculate scroll progress for the scroll indicator
  const scrollProgress = typeof window !== 'undefined' 
    ? (scrollPosition / (document.documentElement.scrollHeight - window.innerHeight)) * 100 
    : 0;

  return (
    <div className="min-h-screen bg-bg-primary">
      {/* Scroll Progress Indicator */}
      <div className="fixed right-0 top-0 bottom-0 w-1 z-50 bg-transparent">
        <motion.div
          className="w-full bg-accent-green rounded-full"
          style={{ height: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="relative">
        <HeroSection />
        <StatsSection />
        <ProfileSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <AchievementsSection />
        <HackathonsSection />
        <EducationSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;

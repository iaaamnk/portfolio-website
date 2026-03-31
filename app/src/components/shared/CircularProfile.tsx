import { motion } from 'framer-motion';

interface CircularProfileProps {
  src: string;
  alt: string;
  size?: number;
}

export function CircularProfile({ src, alt, size = 400 }: CircularProfileProps) {
  return (
    <div 
      className="relative"
      style={{ width: size, height: size }}
    >
      {/* Outer rotating dashed ring */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: 'conic-gradient(from 0deg, transparent 0deg, #00D9A5 60deg, transparent 120deg, #00D9A5 180deg, transparent 240deg, #00D9A5 300deg, transparent 360deg)',
          padding: '3px',
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        <div className="w-full h-full rounded-full bg-bg-primary" />
      </motion.div>

      {/* Inner solid ring */}
      <div 
        className="absolute inset-2 rounded-full border-2 border-accent-green/30"
      />

      {/* Green accent dots */}
      <motion.div
        className="absolute -inset-1"
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
      >
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-accent-green rounded-full"
            style={{
              top: '50%',
              left: '50%',
              transform: `rotate(${i * 60}deg) translateX(${size / 2 + 10}px) translateY(-50%)`,
            }}
          />
        ))}
      </motion.div>

      {/* Profile image */}
      <motion.div
        className="absolute inset-4 rounded-full overflow-hidden"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
        />
      </motion.div>
    </div>
  );
}

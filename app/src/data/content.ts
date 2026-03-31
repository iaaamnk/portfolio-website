import type { Project, Experience, Education, TimelineEntry, SocialLink, Stat, DetailedTimelineEntry, SkillCategory } from '@/types';

export const stats: Stat[] = [
  { value: 8, label: 'AI/ML hackathons across classification, NLP, and computer vision domains' },
  { value: 1, label: '% Top rank in Hacknauts AI/ML Hackathon' },
  { value: 3, label: 'rd Prize in The Encrypted Warfare – Operation BlackOut CTF' },
  { value: 20, label: '% improvement in overall data consistency' },
];

export const education: Education[] = [
  {
    id: '1',
    degree: 'Bachelor of Technology Computer Science and Engineering',
    period: 'Aug 2023–Present',
    score: 'CGPA: 7.87',
    institution: 'Lovely Professional University, Phagwara, Punjab',
    highlighted: false,
  },
  {
    id: '2',
    degree: 'Intermediate',
    period: 'Jun 2022 – Mar 2023',
    score: 'Percentage: 87.5%',
    institution: 'Amrita Vidyalayam, Ayyanthole, Thrissur, Kerala',
    highlighted: false,
  },
  {
    id: '3',
    degree: 'Matriculation',
    period: 'Jun 2020 – Mar 2021',
    score: 'Percentage: 96.5%',
    institution: 'Amrita Vidyalayam, Ayyanthole, Thrissur, Kerala',
    highlighted: false,
  },
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'Emo.AI | Sentiment Analysis using DeepFace',
    description: [
      'Jun 2025 - Jul 2025',
      'Built a production-style sentiment analysis web app using DeepFace with 92%+ accuracy across 7 emotion classes.',
      'Integrated Django + OpenCV for real-time image preprocessing and prediction.',
      'Developed a REST API returning emotion scores within <300ms response time.',
      'TECH: Python, Django, DeepFace, OpenCV, TensorFlow.'
    ],
    image: '/images/project-1.png',
    url: '',
    techStack: [
      { name: 'Python', icon: 'Py' },
      { name: 'Django', icon: 'Dj' },
      { name: 'DeepFace', icon: 'Df' },
      { name: 'OpenCV', icon: 'Cv' },
      { name: 'TensorFlow', icon: 'Tf' },
    ],
  },
  {
    id: '2',
    title: 'PathFinder| Career Recommendation System',
    description: [
      'Feb 2025 - May 2025',
      'Built a career recommendation system using Random Forest, achieving 84% accuracy on 1,200+ user profiles.',
      'Implemented Holland RIASEC personality model for psychometric-based predictions.',
      'Deployed on Flask with fully interactive UI for live recommendations.',
      'TECH: Python, Flask, Random Forest, HTML, CSS, JavaScript.'
    ],
    image: '/images/project-2.png',
    github: '',
    techStack: [
      { name: 'Python', icon: 'Py' },
      { name: 'Flask', icon: 'Fl' },
      { name: 'Random Forest', icon: 'Rf' },
      { name: 'HTML', icon: 'Ht' },
      { name: 'CSS', icon: 'Cs' },
    ],
  },
];

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Grapesgenix Pvt. Ltd | ML Intern',
    description: [
      'Jul 2025 - Aug 2025',
      'Worked with Google Teachable Machine to train quick prototype models and accelerate early-stage ML experimentation.',
      'Gained hands-on experience in Python and core Machine Learning concepts, including data preprocessing, EDA, and implementing ML algorithms such as SVM and KNN.',
      'Created a full sentiment analysis system using DeepFace + Django, enabling real-time multi-emotion detection.',
      'Performed dataset preprocessing, translation-based labeling, debugging, and model evaluation, improving overall data consistency by 20%.'
    ],
    icon: '/images/grapesgenix-logo.png',
  },
];

export const timelineEntries: TimelineEntry[] = [
  {
    year: 'CERTIFICATES',
    content: '• Hacknauts Hackathon Certificate Nov 2025 • CipherSchools-Accredited in Cybersecurity Fundamentals Jul 2025 • The Encrypted Warfare – Operation BlackOut: Secured 3rd Prize in CTF May 2025 • NPTEL – Certified in Privacy and Security in Social Media, with hands-on exposure to social engineering Apr 2025 • freeCodeCamp-Responsive Web Design Global Certification Nov 2023',
    images: [],
  },
  {
    year: 'ACHIEVEMENTS',
    content: '• Secured 3rd Prize in “The Encrypted Warfare – Operation BlackOut” CTF competition. • Ranked in the Top 1% in Hacknauts AI/ML Hackathon. • Completed multiple cybersecurity challenges and competitive programming tasks. • Gained exposure to diverse ML problem statements by participating in 8 AI/ML hackathons across classification, NLP, and computer vision domains.',
    images: [],
  },
];

export const socialLinks: SocialLink[] = [
  { platform: 'LinkedIn', url: 'http://www.linkedin.com/in/iaaamnk', icon: 'Linkedin' },
  { platform: 'GitHub', url: 'https://github.com/iaaamnk', icon: 'Github' },
];

export const techStack = [
  { name: 'C++(DSA)', color: 'bg-white text-black' },
  { name: 'Python', color: 'bg-gray-700 text-white' },
  { name: 'C', color: 'bg-blue-500 text-white' },
  { name: 'Java(OOP)', color: 'bg-blue-600 text-white' },
  { name: 'Django', color: 'bg-purple-600 text-white' },
  { name: 'Node.js', color: 'bg-green-600 text-white' },
  { name: 'Bootstrap', color: 'bg-purple-500 text-white' },
  { name: 'Flask', color: 'bg-yellow-500 text-black' },
];

export const achievementsData: DetailedTimelineEntry[] = [
  {
    title: 'Top 1% – Hacknauts AI/ML Hackathon',
    year: '2025',
    description: 'Ranked among the top 1% participants in a competitive AI/ML hackathon. Demonstrated strong problem-solving and rapid prototyping skills under pressure. Delivered innovative solutions that stood out among a large participant pool.'
  },
  {
    title: '3rd Prize – Operation BlackOut CTF',
    year: '2025',
    description: 'Secured 3rd place in a cybersecurity Capture The Flag competition. Solved real-world security challenges involving cryptography and vulnerability analysis. Showcased strong analytical and ethical hacking skills.'
  },
  {
    title: '3rd Prize – Hack Adhyaay National AI/ML Hackathon',
    year: '2025',
    description: 'Secured 3rd prize in a highly competitive national-level AI/ML hackathon. Demonstrated advanced machine learning fundamentals and rapid development capabilities.'
  },
  {
    title: 'Hackathon Experience Across Domains',
    year: '2024–2025',
    description: 'Participated in 8+ hackathons spanning NLP, computer vision, and classification problems. Gained hands-on experience with real datasets and industry-level problem statements. Improved collaboration, adaptability, and fast development skills.'
  },
  {
    title: 'Competitive Programming & Cybersecurity Practice',
    description: 'Regularly solved algorithmic and security-based challenges. Strengthened core DSA and problem-solving abilities. Built consistency in tackling complex technical problems.'
  }
];

export const skillsCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    skills: ['C++ (DSA)', 'Python', 'Java (OOP)', 'C'],
  },
  {
    title: 'Machine Learning & AI',
    skills: ['NumPy', 'Pandas', 'Scikit-learn', 'TensorFlow', 'Keras', 'OpenCV', 'DeepFace'],
  },
  {
    title: 'Web & Backend Technologies',
    skills: ['Django', 'Flask', 'Node.js', 'Bootstrap', 'RESTful APIs'],
  },
  {
    title: 'Tools & Platforms',
    skills: ['Docker', 'Git', 'Google Colab'],
  },
  {
    title: 'Soft Skills',
    skills: ['Problem-Solving', 'Analytical Thinking', 'Adaptability', 'Time Management'],
  }
];

export const hackathonsData: DetailedTimelineEntry[] = [
  {
    title: 'AMD Reinforcement Learning Hackathon at IIT Delhi',
    year: '2026',
    description: 'Participated in the AMD Reinforcement Learning Hackathon in Feb 2026.'
  },
  {
    title: 'Top 5 Teams – GenAI ML Hackathon Chandigarh',
    year: '2025',
    description: 'Ranked among the top 5 teams in the GenAI ML Hackathon organized by Google Developers in Chandigarh.'
  },
  {
    title: 'Hacknauts Hackathon',
    year: '2025',
    description: 'Participated in an AI/ML hackathon solving real-world challenges. Built innovative solutions within limited time constraints. Achieved top 1% ranking, reflecting strong technical capability.'
  },
  {
    title: 'Operation BlackOut CTF',
    year: '2025',
    description: 'Competed in a cybersecurity challenge involving encryption and exploitation tasks. Applied theoretical knowledge in practical scenarios. Secured 3rd place, demonstrating strong security skills.'
  },
  {
    title: 'Hack Adhyaay National AI/ML Hackathon',
    year: '2025',
    description: 'Competed in a national-level AI/ML hackathon among top talents. Secured 3rd prize, highlighting strong AI problem-solving and rapid solution engineering capabilities.'
  },
  {
    title: 'CipherSchools – Cybersecurity Fundamentals',
    year: '2025',
    description: 'Learned core cybersecurity concepts including threats, vulnerabilities, and system protection. Built foundational knowledge for advanced security practices. Strengthened understanding of real-world security systems.'
  },
  {
    title: 'NPTEL – Privacy & Security in Social Media',
    year: '2025',
    description: 'Explored privacy risks, social engineering, and data protection strategies. Gained insights into secure system design and ethical considerations. Applied knowledge to real-world digital platforms.'
  },
  {
    title: 'freeCodeCamp – Responsive Web Design',
    year: '2023',
    description: 'Built multiple responsive web projects using HTML and CSS. Learned UI/UX fundamentals and modern design practices. Established a strong base for frontend development.'
  }
];

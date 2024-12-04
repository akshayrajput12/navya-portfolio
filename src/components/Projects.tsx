import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  ExternalLink, 
  Code, 
  Zap, 
  Target, 
  TrendingUp, 
  CheckCircle, 
  Award, 
  BarChart, 
  X,
  ChevronDown
} from 'lucide-react';

const projects = [
  {
    title: 'Digital Marketing Campaign',
    description: 'Innovative digital strategy increasing brand engagement by 200%',
    tags: ['Social Media', 'Content Marketing', 'SEO'],
    image: 'https://source.unsplash.com/random/800x600?digital-marketing',
    icons: [Zap, Code, Target],
    colors: {
      primary: 'text-teal-600',
      background: 'bg-teal-50',
      gradient: 'from-teal-100 to-teal-200'
    },
    metrics: [
      { label: 'Engagement', value: '+200%' },
      { label: 'Reach', value: '500K+' }
    ],
    milestones: [
      {
        title: 'Strategy Development',
        description: 'Crafted a comprehensive digital marketing strategy tailored to client\'s unique market positioning.',
        icon: BarChart,
        date: 'Month 1'
      },
      {
        title: 'Content Creation',
        description: 'Developed high-impact content across multiple digital platforms, focusing on engagement and brand storytelling.',
        icon: Award,
        date: 'Month 2'
      },
      {
        title: 'Campaign Launch',
        description: 'Executed multi-channel campaign with targeted ads, social media content, and SEO optimization.',
        icon: TrendingUp,
        date: 'Month 3'
      },
      {
        title: 'Performance Analysis',
        description: 'Achieved 200% increase in brand engagement and expanded digital reach to 500,000+ users.',
        icon: CheckCircle,
        date: 'Month 4'
      }
    ],
    fullDescription: `Our digital marketing campaign transformed the client's online presence through a strategic, data-driven approach. 
    By leveraging cutting-edge social media tactics, content marketing, and SEO optimization, we created a comprehensive strategy 
    that significantly boosted brand visibility and user engagement.`
  },
  {
    title: 'Brand Repositioning',
    description: 'Complete brand overhaul leading to 150% market expansion',
    tags: ['Branding', 'Strategy', 'Design'],
    image: 'https://source.unsplash.com/random/800x600?branding',
    icons: [TrendingUp, Code, Target],
    colors: {
      primary: 'text-indigo-600',
      background: 'bg-indigo-50',
      gradient: 'from-indigo-100 to-indigo-200'
    },
    metrics: [
      { label: 'Market Share', value: '+150%' },
      { label: 'Brand Value', value: '$2M' }
    ],
    milestones: [
      {
        title: 'Brand Audit',
        description: 'Conducted a thorough analysis of the existing brand identity and market positioning.',
        icon: BarChart,
        date: 'Month 1'
      },
      {
        title: 'Brand Strategy Development',
        description: 'Crafted a comprehensive brand strategy tailored to the client\'s unique market positioning.',
        icon: Award,
        date: 'Month 2'
      },
      {
        title: 'Visual Identity Design',
        description: 'Developed a new visual identity for the brand, including a logo, color palette, and typography.',
        icon: TrendingUp,
        date: 'Month 3'
      },
      {
        title: 'Launch and Promotion',
        description: 'Launched the new brand identity and promoted it through targeted marketing campaigns.',
        icon: CheckCircle,
        date: 'Month 4'
      }
    ],
    fullDescription: `Our brand repositioning strategy transformed the client's market presence through a comprehensive, data-driven approach. 
    By leveraging cutting-edge branding tactics, strategy development, and visual identity design, we created a new brand identity 
    that significantly boosted market share and brand value.`
  },
  {
    title: 'Performance Marketing',
    description: 'Data-driven approach resulting in 300% ROI improvement',
    tags: ['Analytics', 'PPC', 'Conversion'],
    image: 'https://source.unsplash.com/random/800x600?marketing-analytics',
    icons: [Code, Target, Zap],
    colors: {
      primary: 'text-rose-600',
      background: 'bg-rose-50',
      gradient: 'from-rose-100 to-rose-200'
    },
    metrics: [
      { label: 'ROI', value: '+300%' },
      { label: 'Conversions', value: '250%' }
    ],
    milestones: [
      {
        title: 'Data Analysis',
        description: 'Conducted a thorough analysis of the client\'s existing marketing data and identified areas for improvement.',
        icon: BarChart,
        date: 'Month 1'
      },
      {
        title: 'Campaign Development',
        description: 'Developed a comprehensive marketing campaign tailored to the client\'s unique market positioning.',
        icon: Award,
        date: 'Month 2'
      },
      {
        title: 'Campaign Launch',
        description: 'Launched the marketing campaign and monitored its performance through data-driven analytics.',
        icon: TrendingUp,
        date: 'Month 3'
      },
      {
        title: 'Optimization and Improvement',
        description: 'Continuously optimized and improved the marketing campaign through data-driven insights and A/B testing.',
        icon: CheckCircle,
        date: 'Month 4'
      }
    ],
    fullDescription: `Our performance marketing strategy transformed the client's ROI through a data-driven approach. 
    By leveraging cutting-edge analytics, campaign development, and optimization techniques, we created a comprehensive marketing 
    strategy that significantly boosted ROI and conversions.`
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <motion.section 
        id="projects" 
        className="py-20 bg-gradient-to-br from-slate-50 via-rose-50 to-white relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        {/* Decorative Background Elements */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ 
            opacity: [0.1, 0.3, 0.1],
            scale: [0.5, 1, 0.5]
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity,
            repeatType: 'reverse'
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-rose-100/50 rounded-full blur-3xl"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ 
            opacity: [0.1, 0.3, 0.1],
            scale: [0.5, 1, 0.5]
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity,
            repeatType: 'reverse',
            delay: 1
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-100/50 rounded-full blur-3xl"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transforming challenges into successful marketing initiatives
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  delayChildren: 0.3,
                  staggerChildren: 0.2
                }
              }
            }}
            className="grid md:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <ProjectCard 
                key={index} 
                project={project} 
                index={index} 
                onProjectClick={handleProjectClick}
              />
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetailsModal 
            project={selectedProject} 
            onClose={handleCloseModal} 
          />
        )}
      </AnimatePresence>
    </>
  );
};

const ProjectDetailsModal = ({ project, onClose }) => {
  const modalRef = useRef(null);
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    const checkOverflow = () => {
      if (modalRef.current) {
        const { clientHeight, scrollHeight } = modalRef.current;
        setIsOverflowing(scrollHeight > clientHeight);
      }
    };

    // Check overflow after initial render and on window resize
    checkOverflow();
    window.addEventListener('resize', checkOverflow);

    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('resize', checkOverflow);
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  const modalVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 50
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 24
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 overflow-y-auto"
      onClick={onClose}
    >
      <motion.div 
        ref={modalRef}
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className={`w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden ${project.colors.background} relative max-h-[90vh] flex flex-col`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className={`flex justify-between items-center p-6 ${project.colors.primary} text-white sticky top-0 z-10`}>
          <h2 className="text-2xl md:text-3xl font-bold">{project.title}</h2>
          <motion.button 
            onClick={onClose}
            whileHover={{ rotate: 90, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <X className="h-6 w-6 md:h-8 md:w-8" />
          </motion.button>
        </div>

        {/* Modal Content */}
        <div 
          className="grid md:grid-cols-2 gap-8 p-4 md:p-8 overflow-y-auto"
          style={{ 
            maxHeight: 'calc(90vh - 100px)', 
            overflowY: 'auto' 
          }}
        >
          {/* Left Side - Project Image and Description */}
          <div className="space-y-4">
            <motion.img 
              src={project.image}
              alt={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full h-48 md:h-64 object-cover rounded-2xl"
            />
            <p className="text-sm md:text-base text-gray-700">{project.fullDescription}</p>
            
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, tagIndex) => (
                <span 
                  key={tagIndex} 
                  className={`px-2 py-1 ${project.colors.primary}/80 text-xs rounded-full bg-opacity-20`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right Side - Project Milestones */}
          <div>
            <h3 className={`text-xl md:text-2xl font-semibold mb-4 md:mb-6 ${project.colors.primary}`}>
              Project Milestones
            </h3>
            <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
              {project.milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    delay: index * 0.2,
                    type: 'spring',
                    stiffness: 300
                  }}
                  className="bg-white rounded-2xl p-3 md:p-4 shadow-md border"
                >
                  <div className="flex items-center mb-2">
                    <milestone.icon className={`h-5 w-5 md:h-6 md:w-6 mr-2 md:mr-3 ${project.colors.primary}`} />
                    <h4 className={`text-sm md:text-lg font-semibold ${project.colors.primary} flex-grow`}>
                      {milestone.title}
                    </h4>
                    <span className="text-xs md:text-sm text-gray-500 ml-2">{milestone.date}</span>
                  </div>
                  <p className="text-xs md:text-base text-gray-600">{milestone.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        {isOverflowing && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0.5, 1, 0.5],
              y: [0, 10, 0]
            }}
            transition={{ 
              repeat: Infinity,
              duration: 1.5
            }}
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-gray-500"
          >
            <ChevronDown className="h-6 w-6" />
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

const ProjectCard = ({ project, index, onProjectClick }) => {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);
  const scale = useTransform(
    [x, y], 
    ([latestX, latestY]) => 1 + Math.sqrt(latestX * latestX + latestY * latestY) / 5000
  );

  const handleMouseMove = (event: React.MouseEvent) => {
    if (cardRef.current) {
      const rect = (cardRef.current as HTMLDivElement).getBoundingClientRect();
      x.set(event.clientX - rect.left - rect.width / 2);
      y.set(event.clientY - rect.top - rect.height / 2);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ 
        rotateX, 
        rotateY,
        scale,
        transformStyle: 'preserve-3d' 
      }}
      variants={{
        hidden: { 
          y: 50, 
          opacity: 0,
          rotateX: 15,
          rotateY: -15,
          scale: 0.8
        },
        visible: {
          y: 0,
          opacity: 1,
          rotateX: 0,
          rotateY: 0,
          scale: 1,
          transition: {
            type: 'spring',
            stiffness: 300,
            damping: 24
          }
        }
      }}
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 25px 50px rgba(0,0,0,0.2)"
      }}
      className="relative group perspective-1000"
    >
      <div 
        className={`absolute inset-0 bg-gradient-to-br ${project.colors.gradient} rounded-2xl opacity-20 blur-2xl group-hover:opacity-30 transition-all duration-300`}
      />
      
      <div 
        style={{ transform: 'translateZ(50px)' }}
        className={`relative bg-white rounded-2xl overflow-hidden shadow-lg ${project.colors.background} border border-opacity-50 group-hover:border-opacity-100 transition-all duration-300`}
      >
        <div className="relative overflow-hidden">
          <motion.img 
            src={project.image} 
            alt={project.title} 
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
            <div className="text-white">
              <h3 className="text-xl font-semibold mb-2 flex items-center">
                {project.title}
                <ExternalLink className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <div className="flex space-x-2">
                {project.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex} 
                    className={`px-2 py-1 ${project.colors.primary}/80 text-xs rounded-full bg-opacity-20`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="p-6">
          <p className="text-gray-600 mb-4">{project.description}</p>
          
          <div className="flex justify-between mb-4">
            {project.metrics.map((metric, metricIndex) => (
              <div key={metricIndex} className="text-center">
                <div className={`text-2xl font-bold ${project.colors.primary}`}>
                  {metric.value}
                </div>
                <div className="text-xs text-gray-500">{metric.label}</div>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center">
            <div className="flex space-x-2">
              {project.icons.map((Icon, iconIndex) => (
                <motion.div
                  key={iconIndex}
                  whileHover={{ 
                    scale: 1.2,
                    rotate: iconIndex % 2 === 0 ? 15 : -15
                  }}
                  className={`p-2 ${project.colors.background} ${project.colors.primary} rounded-full`}
                >
                  <Icon className="h-5 w-5" />
                </motion.div>
              ))}
            </div>

            <motion.button
              onClick={() => onProjectClick(project)}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: project.colors.primary,
                color: 'white'
              }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center ${project.colors.primary} hover:bg-opacity-20 transition rounded-lg px-3 py-2`}
            >
              View Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
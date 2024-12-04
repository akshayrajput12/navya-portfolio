import React, { useState, useRef, useMemo } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { 
  ChevronDown, Briefcase, GraduationCap, X, Award, Target, Users, Lightbulb, 
  MapPin, Calendar, BookOpen, Star, Rocket, CheckCircle, TrendingUp
} from 'lucide-react';

// Custom 3D Hover Hook
const use3DCardHover = () => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [-15, 15]);
  const rotateY = useTransform(x, [-100, 100], [15, -15]);

  const handleMouseMove = (event: React.MouseEvent) => {
    if (!ref.current) return;

    const rect = (ref.current as HTMLElement).getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct * 100);
    y.set(yPct * 100);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return { 
    ref, 
    style: { 
      rotateX, 
      rotateY, 
      transformPerspective: 1000,
      transition: 'transform 0.1s ease-out'
    },
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave
  };
};

export default function About() {
  const [showDetails, setShowDetails] = useState(false);
  const [selectedJourneyType, setSelectedJourneyType] = useState<'professional' | 'internships' | 'education'>('professional');
  
  // Memoize 3D hover props to maintain consistent hook calls
  const card3DProps = use3DCardHover();

  const highlights = useMemo(() => [
    {
      icon: Target,
      title: "Brand Strategy",
      description: "Expertise in ATL, BTL campaigns and brand positioning for major media networks and FMCG brands.",
      color: "bg-rose-50",
      textColor: "text-rose-600"
    },
    {
      icon: Users,
      title: "Project Management",
      description: "Successfully managed cross-functional teams and delivered multiple high-impact marketing campaigns.",
      color: "bg-purple-50",
      textColor: "text-purple-600"
    },
    {
      icon: Lightbulb,
      title: "Marketing Innovation",
      description: "Created innovative marketing strategies for both traditional and digital platforms.",
      color: "bg-blue-50",
      textColor: "text-blue-600"
    }
  ], []);

  const stats = useMemo(() => [
    { value: "6+", label: "Years Experience" },
    { value: "50+", label: "Marketing Campaigns" },
    { value: "3", label: "Major Brands" },
    { value: "100%", label: "Client Satisfaction" }
  ], []);

  const journey = useMemo(() => [
    {
      title: "Assistant Manager",
      company: "Zee Media Corporation Limited",
      duration: "Jun 2022 - Aug 2023 · 1 yr 3 mos",
      location: "Noida, Uttar Pradesh, India",
      description: [
        "Conceptualized ATL, BTL, and brand campaigns for Zee News (Flagship channel of the network) to drive viewership and strengthen brand positioning",
        "Planning and strategy key communication and events for Zee News along with 6 regionals",
        "Brand management and strategy of India's first global news brand WION",
        "Development of Brand architecture and personalities of apparel brands of the group companies",
        "Project management support in creation of sales materials like brand booklets, brochures and sales decks"
      ],
      skills: ["Stakeholder Relations", "Positioning (Marketing)", "Marketing Campaigns", "Purchase Management", "Outdoor Advertising", "Events", "Digital Asset Management", "Project Management"]
    },
    {
      title: "Assistant Manager",
      company: "AJIO.com",
      duration: "Mar 2022 - Jun 2022 · 4 mos",
      description: [
        "Supported Buyer and Merchandiser Manager in producing reports to the business",
        "Effectively communicated with internal teams for all creative and scheduling campaigns",
        "Catalogue management, enrichment, mapping and content validation",
        "Assisted in portfolio growth, inventory management, and discount management",
        "Prepared competitor mapping reports and pendency reports",
        "Listing and cataloguing of AJIO Gold brands"
      ],
      skills: ["Website Merchandising", "Marketing Campaigns", "Content Management", "Portfolio Management", "Strategic Accounts", "Online Merchandising"]
    },
    {
      title: "Brand Servicing",
      company: "Wunderman Thompson",
      duration: "Oct 2021 - Mar 2022 · 6 mos",
      description: [
        "Supported day-to-day account management for PEPSICO",
        "Analyzed performance and advertising trends on social media platforms",
        "Organized and prioritized workflow to meet team goals and deadlines",
        "Worked on major campaigns: #HarGhoontMeinSwag, #SwagSeSolo, #SwagWaliPepsi"
      ],
      skills: ["Brand Management", "Social Media Marketing", "Campaign Management", "FMCG Marketing"]
    }
  ], []);

  const internships = useMemo(() => [
    {
      title: "Category Management & Marketing",
      company: "AJIO.com",
      duration: "Jun 2021 - Aug 2021 · 3 mos",
      skills: ["Marketing Campaigns", "Team Management", "Marketing Support"]
    },
    {
      title: "Planning Intern",
      company: "Marks and Spencer",
      duration: "Apr 2021 - May 2021 · 2 mos",
      skills: ["Marketing Campaigns", "Team Management", "Analytical Skills"]
    },
    {
      title: "Buying and Merchandising Intern",
      company: "hummel",
      duration: "Jan 2021 - Mar 2021 · 3 mos",
      description: [
        "Product trends and Merchandising Process",
        "Market research and Data Analysis",
        "Product Attribute Management",
        "Assortment Planning and seasonal strategies"
      ],
      skills: ["Merchandising", "Market Research", "Data Analysis"]
    }
  ], []);

  const previousExperience = useMemo(() => [
    {
      title: "Analyst",
      company: "KPMG",
      duration: "Dec 2017 - Aug 2019 · 1 yr 9 mos",
      description: [
        "Performed audit of bank reconciliation statements",
        "Verified expenses and supporting documents",
        "Drafted synopsis of contracts and internal audit reports",
        "Assisted in stock counts for numerous clients"
      ],
      skills: ["Team Management", "Quality Assurance", "Analytical Skills"]
    },
    {
      title: "Human Resource Management - Intern",
      company: "EY",
      duration: "Jul 2017 - Sep 2017 · 3 mos",
      description: [
        "Worked on sourcing talent requirements for PAN INDIA",
        "Initial screening of candidates for current openings",
        "Coordinated with recruitment team in various hiring drives"
      ]
    }
  ], []);

  const education = useMemo(() => [
    {
      institution: "FDDI Business School",
      degree: "Master's degree",
      info: "Institute of National Importance - By Act of Parliament"
    },
    {
      institution: "Delhi University - SGTB Khalsa College",
      degree: "Bachelor of Commerce, Accounting and Finance",
      achievements: [
        "Graduated from one of the Premier Colleges of Delhi University - North Campus"
      ]
    },
    {
      institution: "Cambridge School Noida",
      achievements: [
        "Scholar badge holder in school",
        "Highest scorer in Business Studies and Economics in Class 12 C.B.S.E Board Exams (School Topper)",
        "Completed 'Basic Banking Program' at HDFC Bank"
      ]
    }
  ], []);

  const JourneyModal = () => {
    const journeyData = {
      'professional': journey,
      'internships': internships,
      'education': education
    };

    const journeyIcons = {
      'professional': Briefcase,
      'internships': Target,
      'education': GraduationCap
    };

    const SelectedIcon = journeyIcons[selectedJourneyType];

    return (
      <AnimatePresence>
        {showDetails && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 overflow-y-auto"
            onClick={() => setShowDetails(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto p-6 relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setShowDetails(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Modal Header */}
              <div className="mb-8 text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Professional Journey</h2>
                <p className="text-gray-600">A detailed look at my career progression</p>
              </div>

              {/* Journey Navigation */}
              <div className="flex flex-wrap justify-center mb-8 gap-2">
                {['professional', 'internships', 'education'].map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedJourneyType(type as any)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                      ${selectedJourneyType === type 
                        ? 'bg-[rgb(225,29,72)] text-white' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                  >
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </button>
                ))}
              </div>

              {/* Journey Content */}
              <div className="space-y-6 px-4">
                {journeyData[selectedJourneyType].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative pl-8 pb-8 border-l-2 border-[rgb(225,29,72)] last:border-transparent"
                  >
                    <div className="absolute left-0 top-0 w-4 h-4 -ml-[9px] rounded-full bg-[rgb(225,29,72)]" />
                    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-[rgb(225,29,72)]">
                            {item.title || item.degree || item.institution}
                          </h3>
                          <p className="text-gray-600">
                            {item.company || item.info || ''}
                          </p>
                        </div>
                        <div className="flex items-center mt-2 sm:mt-0">
                          <Calendar className="w-4 h-4 text-gray-500 mr-2" />
                          <span className="text-sm text-gray-500">{item.duration}</span>
                        </div>
                      </div>

                      {item.description && (
                        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                          {(item.description as string[]).map((desc, idx) => (
                            <li key={idx} className="text-sm sm:text-base">{desc}</li>
                          ))}
                        </ul>
                      )}

                      {item.skills && (
                        <div className="flex flex-wrap gap-2">
                          {item.skills.map((skill, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  };

  return (
    <motion.section id="about" className="py-20 relative overflow-hidden bg-gradient-to-br from-white via-rose-50 to-white">
      <motion.section className="py-20 bg-gradient-to-br from-white via-rose-50 to-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <div className="flex flex-col items-center justify-center">
            <div className="bg-[rgb(225,29,72)] rounded-full w-24 h-24 flex items-center justify-center mb-4">
              <Lightbulb className="w-12 h-12 text-white" />
            </div>
            <p className="text-lg text-gray-700 mb-4">Dynamic and results-driven brand marketing professional with a proven track record in conceptualizing and executing integrated marketing campaigns across multiple channels.</p>
            <p className="text-lg text-gray-700 mb-4">Keen learner, always looking for the devil in the detail, opportunities to showcase creativity drive me. I enjoy working on projects with multicultural teams and people that bring out the best in each other.</p>
            <p className="text-lg text-gray-700">I aspire to work in a culturally and intellectually diverse team, where people can learn from each other and grow together towards a common goal.</p>
          </div>
        </div>
      </motion.section>
      <motion.h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Experience</motion.h2>
      <div className="container mx-auto px-4">
        {/* Highlights Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            
            return (
              <motion.div
                key={highlight.title}
                {...card3DProps}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300, 
                  delay: index * 0.2 
                }}
                className={`
                  ${highlight.color} p-8 rounded-3xl shadow-lg 
                  transform transition-all duration-300 
                  hover:shadow-2xl hover:scale-105
                `}
              >
                <div className="flex items-center mb-4">
                  <div className={`
                    w-16 h-16 rounded-full flex items-center justify-center 
                    ${highlight.color} ${highlight.textColor}
                    shadow-md mb-4 transform transition-transform duration-300 
                    group-hover:rotate-12
                  `}>
                    <Icon size={32} strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className={`text-2xl font-bold ${highlight.textColor} mb-4`}>
                  {highlight.title}
                </h3>
                <p className="text-slate-600">{highlight.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              {...card3DProps}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                delay: index * 0.1 
              }}
              className="
                bg-white rounded-3xl p-6 text-center 
                shadow-lg border border-slate-100
                transform transition-all duration-300
                hover:shadow-2xl
              "
            >
              <motion.h3 
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                className="text-5xl font-bold text-[rgb(225,29,72)] mb-2"
              >
                {stat.value}
              </motion.h3>
              <p className="text-slate-600">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* View Full Experience Button */}
        <div className="text-center mt-8">
          <motion.button
            {...card3DProps}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowDetails(true)}
            className="
              px-10 py-4 bg-[rgb(225,29,72)] text-white rounded-full 
              flex items-center mx-auto space-x-3 
              shadow-xl hover:shadow-2xl transition-all duration-300
              transform hover:rotate-3 hover:scale-105
            "
          >
            <Briefcase className="w-6 h-6" />
            <span className="text-lg font-semibold">View Full Experience</span>
          </motion.button>
        </div>

        {/* Journey Modal */}
        <JourneyModal />
      </div>
    </motion.section>
  );
}
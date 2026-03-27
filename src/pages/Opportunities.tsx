import { motion } from 'motion/react';
import { 
  Globe, 
  Users, 
  ShieldCheck, 
  Brain, 
  Lightbulb, 
  Rocket, 
  Trophy, 
  Star, 
  Medal, 
  Award, 
  Briefcase, 
  GraduationCap, 
  CheckCircle2, 
  ArrowRight,
  MapPin,
  Flag,
  Sparkles,
  TrendingUp,
  Zap,
  Target
} from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { Link } from 'react-router-dom';

const Opportunities = () => {
  const levels = [
    {
      title: "District Level Competitions",
      description: "Start your journey by showcasing your talent at the local level and gaining confidence.",
      icon: MapPin,
      color: "bg-blue-500"
    },
    {
      title: "State Level Competitions",
      description: "Compete with top participants across the state and enhance your performance.",
      icon: Award,
      color: "bg-indigo-500"
    },
    {
      title: "National Championships",
      description: "Represent your region and compete with the best talents across India.",
      icon: Trophy,
      color: "bg-brand-accent"
    },
    {
      title: "International Participation",
      description: "Get opportunities to participate in global-level competitions and gain international exposure.",
      icon: Globe,
      color: "bg-purple-500"
    }
  ];

  const careerOpportunities = [
    {
      title: "Professional Coaching",
      description: "Get trained by certified coaches and industry experts to reach your peak potential.",
      image: "https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Career Mentorship",
      description: "Receive guidance on academic pathways and professional career choices in sports and beyond.",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <div className="bg-brand-bg-light">
      <PageHeader 
        title={<><span className="text-brand-accent">Triadia</span> Opportunities <br /> Federation Games</>} 
        subtitle="Unlock your potential through competitions, recognition, and global exposure"
        backgroundImage="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=2070&auto=format&fit=crop"
      />

      {/* Competition Levels */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text-primary mb-6 tracking-tight">Competition Levels</h2>
            <p className="text-lg text-brand-text-secondary leading-relaxed font-normal">
              Triadia Federation Games provides a structured pathway for students to compete, grow, and achieve success at multiple levels.
            </p>
            <div className="w-16 h-1.5 bg-brand-accent mx-auto mt-8 rounded-full"></div>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-100 hidden lg:block"></div>
            
            <div className="space-y-16">
              {levels.map((level, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}
                >
                  <div className="flex-1 w-full">
                    <div className={`bg-brand-bg-light p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 group ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 text-white ${level.color} shadow-lg group-hover:scale-110 transition-transform`}>
                        <level.icon className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl font-bold text-brand-text-primary mb-4 tracking-tight">{level.title}</h3>
                      <p className="text-brand-text-secondary leading-relaxed font-normal">{level.description}</p>
                    </div>
                  </div>
                  
                  <div className="relative z-10 hidden lg:flex items-center justify-center w-12 h-12 bg-white border-4 border-brand-accent rounded-full shadow-xl">
                    <div className="w-3 h-3 bg-brand-accent rounded-full animate-ping"></div>
                  </div>
                  
                  <div className="flex-1 hidden lg:block"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skill & Career Opportunities */}
      <section className="py-24 bg-brand-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text-primary mb-6 tracking-tight">Skill & Career Opportunities</h2>
            <p className="text-lg text-brand-text-secondary font-normal">Beyond competitions, we provide a foundation for long-term career success.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {careerOpportunities.map((opp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-[3rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group border border-gray-100"
              >
                <div className="h-72 overflow-hidden relative">
                  <img 
                    src={opp.image} 
                    alt={opp.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="p-10">
                  <h3 className="text-2xl font-bold text-brand-text-primary mb-4 tracking-tight">{opp.title}</h3>
                  <p className="text-brand-text-secondary leading-relaxed font-normal mb-8">{opp.description}</p>
                  <button className="text-brand-accent font-bold uppercase tracking-widest text-xs flex items-center gap-2 group-hover:gap-3 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Scholarships & Recognition */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-text-primary mb-6 tracking-tight">Scholarships & Recognition</h2>
              <p className="text-lg text-brand-text-secondary mb-8 font-normal leading-relaxed">We reward excellence and provide support to talented individuals to pursue their dreams.</p>
              <div className="w-20 h-1.5 bg-brand-accent rounded-full"></div>
            </div>
            
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-brand-primary p-10 rounded-[2.5rem] text-white shadow-xl relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
                <Star className="w-12 h-12 text-brand-accent mb-6" />
                <h3 className="text-2xl font-bold mb-4 tracking-tight">Merit Scholarships</h3>
                <p className="text-gray-300 leading-relaxed font-normal">Financial support for top performers in national and international championships.</p>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-brand-bg-light p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 group"
              >
                <Medal className="w-12 h-12 text-brand-accent mb-6" />
                <h3 className="text-2xl font-bold text-brand-text-primary mb-4 tracking-tight">Certificates & Awards</h3>
                <p className="text-brand-text-secondary leading-relaxed font-normal">Globally recognized certificates and trophies for winners and participants.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits of Participation */}
      <section className="py-24 bg-brand-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text-primary mb-6 tracking-tight">Benefits of Participation</h2>
            <div className="w-20 h-1.5 bg-brand-accent mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Skill Validation", icon: CheckCircle2, desc: "Validate your skills through competitive benchmarks." },
              { title: "Networking", icon: Users, desc: "Connect with peers and professionals worldwide." },
              { title: "Personal Growth", icon: Zap, desc: "Build resilience, focus, and competitive spirit." },
              { title: "Future Ready", icon: Target, desc: "Prepare for global challenges and opportunities." }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center group hover:shadow-xl transition-all duration-500"
              >
                <div className="bg-brand-accent/10 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-accent transition-colors duration-300">
                  <benefit.icon className="w-7 h-7 text-brand-accent group-hover:text-brand-primary" />
                </div>
                <h3 className="text-lg font-bold text-brand-text-primary mb-3">{benefit.title}</h3>
                <p className="text-brand-text-secondary text-sm leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* International Exposure */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-primary rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-12 md:p-20 flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 tracking-tight">International Exposure</h2>
              <p className="text-lg text-gray-300 mb-10 font-normal leading-relaxed">
                Triadia Federation Games, in collaboration with IMSF, provides students with the chance to participate in international events, cultural exchange programs, and global championships.
              </p>
              <div className="space-y-4">
                {["Global Competitions", "Cultural Exchange", "International Certifications"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-white">
                    <Globe className="w-5 h-5 text-brand-accent" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 relative min-h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1526285759904-71d1170ed2ac?q=80&w=2070&auto=format&fit=crop" 
                alt="International Exposure"
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-primary/20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-brand-primary rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/10 rounded-full -mr-32 -mt-32"></div>
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-5xl font-bold mb-8 tracking-tight">Ready to Compete?</h2>
              <p className="text-lg text-gray-300 mb-12 font-normal leading-relaxed">
                Take the first step towards your global career. Join Triadia Federation Games today.
              </p>
              <Link 
                to="/contact"
                className="inline-flex items-center gap-3 bg-brand-accent text-brand-primary px-10 py-5 rounded-full font-bold text-lg hover:bg-white transition-all transform hover:-translate-y-1 shadow-xl group"
              >
                Register Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Opportunities;



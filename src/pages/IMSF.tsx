import { motion } from 'motion/react';
import { 
  Globe, 
  Target, 
  Rocket, 
  Award, 
  CheckCircle2, 
  Users, 
  Sparkles, 
  ArrowRight, 
  Shield, 
  Zap, 
  Sun,
  Trophy,
  Lightbulb,
  Compass,
  Network,
  Brain
} from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { Link } from 'react-router-dom';

const IMSF = () => {
  const missionPoints = [
    { title: "Global Collaboration", desc: "Promote global collaboration in education and competitive games.", icon: <Globe className="w-6 h-6" /> },
    { title: "Holistic Development", desc: "Encourage holistic development (mind, body, and skills).", icon: <Shield className="w-6 h-6" /> },
    { title: "International Opportunities", desc: "Provide international-level opportunities for students.", icon: <Trophy className="w-6 h-6" /> },
    { title: "Talent Recognition", desc: "Support talent recognition across countries.", icon: <Award className="w-6 h-6" /> },
    { title: "Leadership & Exchange", desc: "Build leadership and cultural exchange.", icon: <Users className="w-6 h-6" /> }
  ];

  const activities = [
    { title: "International Competitions", desc: "Championships that bring together the best talents from across the globe.", icon: <Trophy className="w-8 h-8" /> },
    { title: "Global Skill Programs", desc: "Skill development initiatives designed for international standards.", icon: <Rocket className="w-8 h-8" /> },
    { title: "Educational Events", desc: "Mind games and academic events that foster intellectual growth.", icon: <Brain className="w-8 h-8" /> },
    { title: "Cultural Exchange", desc: "Programs that connect students from diverse backgrounds and cultures.", icon: <Globe className="w-8 h-8" /> },
    { title: "Innovation Summits", desc: "Leadership and innovation summits for future-ready individuals.", icon: <Lightbulb className="w-8 h-8" /> }
  ];

  const benefits = [
    "Global Exposure",
    "International Certification",
    "Networking Opportunities",
    "Skill Enhancement",
    "Cultural Understanding"
  ];

  return (
    <div className="bg-brand-bg-light">
      <PageHeader 
        title={<>International Mind & Soul <br /> <span className="text-brand-accent">Triadia</span> Federation</>} 
        subtitle="A global platform integrating education, games, health, and holistic development" 
        backgroundImage="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2064&auto=format&fit=crop"
      />
      
      {/* 2. ABOUT IMSF */}
      <section className="py-24 bg-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-brand-text-primary mb-8 tracking-tight">
                About IMSF
              </h2>
              <div className="space-y-6 text-lg text-brand-text-secondary leading-relaxed font-normal">
                <p>
                  The International Mind & Soul Federation (IMSF) is a global initiative under Triadia Federation Games that focuses on integrating education, competitive games, physical fitness, and mental well-being into a unified international platform.
                </p>
                <p>
                  IMSF aims to connect students, institutions, and professionals worldwide, providing opportunities to showcase talent, exchange knowledge, and achieve excellence on a global stage.
                </p>
              </div>
              <div className="mt-10 flex items-center gap-4 p-6 bg-brand-bg-light rounded-3xl border border-gray-100">
                <div className="bg-brand-accent p-3 rounded-xl">
                  <Globe className="w-6 h-6 text-brand-primary" />
                </div>
                <p className="text-brand-text-primary font-bold">Connecting students across 20+ countries</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-video rounded-[3rem] overflow-hidden shadow-2xl border-8 border-brand-bg-light">
                <img 
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop" 
                  alt="Global Collaboration" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand-accent/20 rounded-full blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. VISION & 4. MISSION */}
      <section className="py-24 bg-brand-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-brand-primary p-12 rounded-[3rem] text-white shadow-xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
              <Target className="w-12 h-12 text-brand-accent mb-8" />
              <h3 className="text-3xl font-bold mb-6 tracking-tight">Our Vision</h3>
              <p className="text-gray-300 text-lg leading-relaxed font-normal">
                To create a globally recognized platform that empowers individuals through education, games, health, and soul-enriching experiences, fostering unity, excellence, and innovation across nations.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-12 rounded-[3rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 group"
            >
              <Rocket className="w-12 h-12 text-brand-accent mb-8" />
              <h3 className="text-3xl font-bold text-brand-text-primary mb-6 tracking-tight">Our Mission</h3>
              <p className="text-brand-text-secondary text-lg leading-relaxed font-normal">
                To bridge the gap between nations by providing a structured framework for international competitions, holistic development programs, and professional networking opportunities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. IMSF ACTIVITIES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text-primary mb-6 tracking-tight">IMSF Activities</h2>
            <p className="text-lg text-brand-text-secondary leading-relaxed font-normal">
              We organize a wide range of activities to promote holistic development and global excellence.
            </p>
            <div className="w-16 h-1.5 bg-brand-accent mx-auto mt-8 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {activities.map((activity, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-brand-bg-light p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 group"
              >
                <div className="mb-6 bg-brand-accent/10 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:bg-brand-accent transition-colors duration-300">
                  <div className="text-brand-accent group-hover:text-brand-primary transition-colors">
                    {activity.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-brand-text-primary mb-4 tracking-tight">{activity.title}</h3>
                <p className="text-brand-text-secondary leading-relaxed font-normal">{activity.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BENEFITS OF PARTICIPATION */}
      <section className="py-24 bg-brand-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text-primary mb-6 tracking-tight">Benefits of Participation</h2>
            <div className="w-20 h-1.5 bg-brand-accent mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex items-start gap-5 hover:shadow-md transition-shadow"
              >
                <div className="bg-brand-accent/10 p-3 rounded-xl flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-brand-accent" />
                </div>
                <span className="text-lg font-bold text-brand-text-primary">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. WHY IMSF MATTERS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-primary rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-12 md:p-20 flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 tracking-tight">Why IMSF Matters</h2>
              <p className="text-lg text-gray-300 mb-10 font-normal leading-relaxed">
                In an increasingly connected world, IMSF provides the necessary platform for individuals to transcend boundaries and achieve holistic excellence. We believe in the power of unity through education and games.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                  <p className="text-3xl font-bold text-brand-accent mb-1">20+</p>
                  <p className="text-sm text-gray-400">Countries</p>
                </div>
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                  <p className="text-3xl font-bold text-brand-accent mb-1">50k+</p>
                  <p className="text-sm text-gray-400">Participants</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative min-h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop" 
                alt="IMSF Impact"
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-primary/20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. GLOBAL COMMUNITY */}
      <section className="py-24 bg-brand-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text-primary mb-6 tracking-tight">Our Global Community</h2>
            <div className="w-20 h-1.5 bg-brand-accent mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Educational Institutions", desc: "Partnering with schools and universities worldwide.", icon: <Users className="w-8 h-8" /> },
              { title: "Sports Federations", desc: "Collaborating with national and international sports bodies.", icon: <Trophy className="w-8 h-8" /> },
              { title: "Professional Bodies", desc: "Engaging with experts in education, health, and wellness.", icon: <Network className="w-8 h-8" /> }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm text-center group hover:shadow-xl transition-all duration-500"
              >
                <div className="bg-brand-accent/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-accent transition-colors duration-300">
                  <div className="text-brand-accent group-hover:text-brand-primary transition-colors">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-brand-text-primary mb-4">{item.title}</h3>
                <p className="text-brand-text-secondary leading-relaxed font-normal">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CALL TO ACTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-brand-primary rounded-[3rem] p-12 md:p-24 text-white relative overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/10 rounded-full -mr-32 -mt-32"></div>
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-5xl font-bold mb-8 tracking-tight">
                Join the Global Movement
              </h2>
              <p className="text-lg text-gray-300 mb-12 font-normal leading-relaxed">
                Be part of an international platform that transforms talent into global success.
              </p>
              <Link 
                to="/contact"
                className="inline-flex items-center gap-3 bg-brand-accent text-brand-primary px-10 py-5 rounded-full font-bold text-lg hover:bg-white transition-all transform hover:-translate-y-1 shadow-xl group"
              >
                Join IMSF
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default IMSF;




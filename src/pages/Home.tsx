import { motion } from 'motion/react';
import { ChevronRight, Star, Flame, Brain, Dumbbell, Zap, Award, GraduationCap, Trophy, Quote, School, Calendar, CheckCircle2, ShieldCheck, Target, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-32 overflow-hidden bg-brand-primary">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Blur shapes */}
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-brand-accent/10 blur-[150px] rounded-full animate-glow"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-500/10 blur-[120px] rounded-full animate-glow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-[20%] left-[10%] w-[30%] h-[30%] bg-brand-accent/5 blur-[100px] rounded-full animate-glow" style={{ animationDelay: '4s' }}></div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/60 via-brand-primary/40 to-brand-primary/80"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-2 px-6 py-2.5 mb-12 text-xs font-bold tracking-[0.2em] text-brand-accent uppercase bg-brand-accent/10 border border-brand-accent/20 rounded-full backdrop-blur-md shadow-xl">
              <Star className="w-4 h-4 fill-brand-accent" />
              India’s Emerging Talent Platform
            </div>
            
            <div className="relative mb-12">
              {/* Glow behind Games */}
              <div className="absolute -bottom-4 -right-4 w-64 h-32 bg-brand-accent/20 blur-[60px] rounded-full z-0"></div>
              
              <h1 className="relative z-10 text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight">
                Triadia Federation <br />
                <span className="text-brand-accent drop-shadow-[0_0_30px_rgba(245,185,66,0.3)]">Games</span>
              </h1>
            </div>
            
            <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed font-medium italic tracking-tight border-l-4 border-brand-accent pl-6">
              "Train the Mind. Build the Body. Shape the Future."
            </p>
            
            <p className="text-lg text-gray-400 mb-16 max-w-xl leading-relaxed font-normal">
              Empowering students through education, competitive games, skill development, and holistic growth across India.
            </p>
            
            <div className="flex flex-wrap gap-8">
              <Link to="/contact" className="relative group">
                {/* Button Glow */}
                <div className="absolute -inset-1 bg-brand-accent rounded-full blur-md opacity-30 group-hover:opacity-60 transition duration-500"></div>
                <button className="relative bg-brand-accent text-brand-primary px-12 py-6 rounded-full font-bold text-lg hover:bg-white transition-all transform hover:scale-105 active:scale-95 flex items-center gap-4 shadow-[0_20px_40px_rgba(245,185,66,0.2)]">
                  Join Now
                  <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </button>
              </Link>
              
              <Link to="/programs" className="group border-2 border-white/20 text-white px-12 py-6 rounded-full font-bold text-lg hover:bg-white hover:text-brand-primary hover:border-white transition-all backdrop-blur-sm flex items-center gap-4 transform hover:scale-105 active:scale-95">
                Explore Programs
              </Link>
            </div>
          </motion.div>

          {/* Right Side: Image Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="relative flex items-center justify-center gap-12">
              {/* Image 1 */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 group"
              >
                <div className="w-72 h-96 rounded-2xl overflow-hidden shadow-2xl border border-white/10 backdrop-blur-sm transform group-hover:scale-105 transition-transform duration-500">
                  <img 
                    src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2064&auto=format&fit=crop" 
                    alt="Chess Players" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/60 to-transparent"></div>
                </div>
              </motion.div>

              {/* Image 2 */}
              <motion.div 
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="relative z-0 group mt-20"
              >
                <div className="w-72 h-96 rounded-2xl overflow-hidden shadow-2xl border border-white/10 backdrop-blur-sm transform group-hover:scale-105 transition-transform duration-500">
                  <img 
                    src="https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070&auto=format&fit=crop" 
                    alt="Sports Activity" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/60 to-transparent"></div>
                </div>
              </motion.div>

              {/* Floating Badge */}
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-2xl z-20 flex items-center gap-5 border border-white/20"
              >
                <div className="bg-brand-accent/20 p-3 rounded-xl">
                  <Flame className="w-8 h-8 text-brand-accent" />
                </div>
                <div>
                  <p className="text-brand-primary font-bold text-xl tracking-tight">Elite Talent</p>
                  <p className="text-brand-text-secondary text-xs font-bold uppercase tracking-widest">National Level</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Stats = () => {
  const stats = [
    { label: "Students Empowered", value: "10,000+", icon: <Users className="w-7 h-7" /> },
    { label: "Events Conducted", value: "500+", icon: <Calendar className="w-7 h-7" /> },
    { label: "Schools & Colleges", value: "100+", icon: <School className="w-7 h-7" /> },
    { label: "Awards & Recognitions", value: "50+", icon: <Trophy className="w-7 h-7" /> }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/world-map.png')] opacity-[0.02] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center group p-8 rounded-3xl hover:bg-brand-bg-light transition-colors duration-500"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-accent/10 rounded-2xl text-brand-accent mb-6 group-hover:bg-brand-accent group-hover:text-white group-hover:rotate-6 transition-all duration-500 shadow-sm">
                {stat.icon}
              </div>
              <p className="text-3xl md:text-4xl font-black text-brand-primary mb-2 tracking-tighter">{stat.value}</p>
              <p className="text-xs md:text-sm text-brand-text-secondary font-bold uppercase tracking-[0.15em]">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutPreview = () => {
  return (
    <section className="py-32 bg-brand-bg-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-accent/20 rounded-full blur-3xl animate-glow"></div>
            <div className="rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white transform -rotate-2 hover:rotate-0 transition-transform duration-700">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" 
                alt="Students Collaboration" 
                className="w-full h-[500px] lg:h-[600px] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-brand-primary p-8 rounded-3xl shadow-2xl border border-white/10 max-w-[240px] animate-float">
              <p className="text-brand-accent font-black text-4xl mb-1 tracking-tighter">15+</p>
              <p className="text-white text-xs font-bold uppercase tracking-[0.15em] leading-relaxed">Years of Excellence in Sports & Education</p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 mb-8 text-xs font-bold tracking-[0.2em] text-brand-accent uppercase bg-brand-accent/10 border border-brand-accent/20 rounded-full">
              <Target className="w-4 h-4" />
              Our Mission
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-brand-primary mb-8 leading-[1.1] tracking-tighter">
              Who We <span className="text-brand-accent">Are</span>
            </h2>
            <p className="text-lg text-brand-text-secondary mb-8 leading-relaxed font-normal">
              Triadia Federation Games is a dynamic organization dedicated to discovering, nurturing, and promoting hidden talents among students across India.
            </p>
            <p className="text-lg text-brand-text-secondary mb-12 leading-relaxed font-normal">
              We focus on integrating education, competitive games, physical fitness, and skill development to create confident, capable, and future-ready individuals.
            </p>
            <Link to="/about" className="inline-flex items-center gap-4 text-brand-primary font-bold text-lg group">
              Learn More About Us 
              <div className="w-10 h-10 rounded-full border-2 border-brand-primary flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-all">
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const WhyTriadia = () => {
  const features = [
    {
      icon: <Brain className="w-10 h-10" />,
      title: "Mind Development",
      description: "Enhancing cognitive abilities through strategic games and mental challenges."
    },
    {
      icon: <Dumbbell className="w-10 h-10" />,
      title: "Physical Strength",
      description: "Building endurance and athletic prowess through professional sports training."
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Skill Mastery",
      description: "Developing essential life skills and leadership qualities for global success."
    }
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-5 py-2 mb-8 text-xs font-bold tracking-[0.2em] text-brand-accent uppercase bg-brand-accent/10 border border-brand-accent/20 rounded-full">
            The Triadia Philosophy
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-brand-primary mb-8 tracking-tighter">Why <span className="text-brand-accent">Triadia?</span></h2>
          <p className="text-lg md:text-xl text-brand-text-secondary max-w-3xl mx-auto font-normal leading-relaxed">
            We provide a comprehensive platform that focuses on the holistic development of every student.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-brand-bg-light p-10 lg:p-12 rounded-[2.5rem] border border-gray-100 hover:border-brand-accent/30 hover:bg-white hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="mb-10 bg-brand-accent/10 w-20 h-20 rounded-2xl flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-white group-hover:rotate-6 transition-all duration-500">
                {feature.icon}
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-brand-primary mb-6 tracking-tight">{feature.title}</h3>
              <p className="text-lg text-brand-text-secondary font-normal leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProgramsPreview = () => {
  const programs = [
    { title: "Educational & Mind Games", icon: <Brain className="w-9 h-9" />, desc: "Chess, Rubik's Cube, Memory Games" },
    { title: "Physical & Skill-Based Games", icon: <Target className="w-9 h-9" />, desc: "Athletics, Team Sports, Martial Arts" },
    { title: "Health & Mind Control", icon: <ShieldCheck className="w-9 h-9" />, desc: "Yoga, Meditation, Fitness Modules" }
  ];

  return (
    <section className="py-32 bg-brand-primary text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-accent/5 blur-[150px] rounded-full animate-glow"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-3xl md:text-5xl font-black mb-8 tracking-tighter">Our Core <span className="text-brand-accent">Programs</span></h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto font-normal leading-relaxed">Designed to challenge and grow every aspect of a student's potential.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {programs.map((program, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-brand-secondary/50 backdrop-blur-xl p-10 lg:p-12 rounded-[2.5rem] border border-white/10 hover:border-brand-accent/50 transition-all duration-500 group"
            >
              <div className="w-20 h-20 bg-brand-accent/20 rounded-2xl flex items-center justify-center text-brand-accent mb-10 group-hover:bg-brand-accent group-hover:text-brand-primary transition-all duration-500">
                {program.icon}
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-6 tracking-tight">{program.title}</h3>
              <p className="text-lg text-gray-400 mb-10 font-normal leading-relaxed">{program.desc}</p>
              <Link to="/programs" className="inline-flex items-center gap-3 text-brand-accent font-bold text-lg group">
                Learn More 
                <div className="w-10 h-10 rounded-full border-2 border-brand-accent flex items-center justify-center group-hover:bg-brand-accent group-hover:text-brand-primary transition-all">
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const OpportunitiesPreview = () => {
  const opportunities = [
    "State-Level Competitions",
    "National Championships",
    "International Participation",
    "Skill-Based Certifications",
    "Awards & Recognition"
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-accent/10 rounded-full blur-3xl animate-glow"></div>
            <img 
              src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop" 
              alt="Opportunities" 
              className="rounded-[3rem] shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-700" 
              referrerPolicy="no-referrer" 
            />
            <div className="absolute -bottom-8 -left-8 bg-brand-accent p-6 rounded-2xl shadow-2xl animate-float">
               <Trophy className="w-10 h-10 text-brand-primary" />
            </div>
          </motion.div>
          <div>
            <div className="inline-flex items-center gap-2 px-5 py-2 mb-8 text-xs font-bold tracking-[0.2em] text-brand-accent uppercase bg-brand-accent/10 border border-brand-accent/20 rounded-full">
              Unlock Your Potential
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-brand-primary mb-10 leading-[1.1] tracking-tighter">
              Opportunities We <span className="text-brand-accent">Provide</span>
            </h2>
            <div className="space-y-4 mb-12">
              {opportunities.map((opp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-5 p-5 bg-brand-bg-light rounded-2xl border border-gray-100 hover:border-brand-accent/30 hover:bg-white hover:shadow-lg transition-all group"
                >
                  <div className="bg-brand-accent/20 p-2 rounded-lg group-hover:bg-brand-accent group-hover:text-white transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-brand-accent group-hover:text-white" />
                  </div>
                  <span className="text-lg md:text-xl font-bold text-brand-primary tracking-tight">{opp}</span>
                </motion.div>
              ))}
            </div>
            <Link to="/opportunities" className="relative group inline-block">
              <div className="absolute -inset-1 bg-brand-primary rounded-full blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                <button className="relative bg-brand-primary text-white px-10 py-5 rounded-full font-bold text-base md:text-lg hover:bg-brand-primary/90 transition-all transform hover:-translate-y-1 active:scale-95 flex items-center gap-3">
                View All Opportunities
                <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const WhyJoin = () => {
  const benefits = [
    { title: "National Level Certificates", icon: <Award className="w-10 h-10" />, desc: "Recognized certifications for every milestone." },
    { title: "Scholarships & Awards", icon: <GraduationCap className="w-10 h-10" />, desc: "Financial support for exceptionally talented students." },
    { title: "Yearly Fee Reimbursement", icon: <Calendar className="w-10 h-10" />, desc: "Rewarding consistency and dedication." },
    { title: "Free Personal Training", icon: <Zap className="w-10 h-10" />, desc: "Access to world-class training modules at no cost." },
    { title: "Silver Medal for Every Participant", icon: <Trophy className="w-10 h-10" />, desc: "Encouraging participation and effort." }
  ];

  return (
    <section className="py-32 bg-brand-bg-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-5 py-2 mb-8 text-xs font-bold tracking-[0.2em] text-brand-accent uppercase bg-brand-accent/10 border border-brand-accent/20 rounded-full">
            Member Benefits
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-brand-primary mb-8 tracking-tighter">Why Join <span className="text-brand-accent">Triadia?</span></h2>
          <p className="text-lg md:text-xl text-brand-text-secondary max-w-3xl mx-auto font-normal leading-relaxed">Unlock your potential with India's most comprehensive talent platform.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-10 lg:p-12 rounded-[2.5rem] text-center shadow-xl border border-gray-100 hover:border-brand-accent/30 hover:-translate-y-2 transition-all duration-500 group"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-brand-accent/10 rounded-2xl text-brand-accent mb-8 shadow-sm group-hover:bg-brand-accent group-hover:text-white group-hover:rotate-12 transition-all duration-500">
                {benefit.icon}
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-brand-primary mb-6 tracking-tight">{benefit.title}</h3>
              <p className="text-lg text-brand-text-secondary font-normal leading-relaxed">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Inspiration = () => {
  return (
    <section className="py-32 bg-brand-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
      </div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-brand-secondary/40 backdrop-blur-2xl p-16 md:p-24 rounded-[3rem] border border-white/10 relative overflow-hidden group"
        >
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-brand-accent/20 rounded-full blur-3xl animate-glow"></div>
          <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-brand-accent/10 rounded-full blur-3xl animate-glow" style={{ animationDelay: '2s' }}></div>
          
          <div className="inline-block px-5 py-2 mb-12 text-xs font-bold tracking-[0.2em] text-brand-accent uppercase bg-brand-accent/10 border border-brand-accent/20 rounded-full">
            Message to Future Champions
          </div>
          <Quote className="w-16 h-16 text-brand-accent/30 mx-auto mb-10" />
          <h2 className="text-3xl md:text-5xl font-black text-white mb-12 leading-tight tracking-tighter italic">
            “This is not just a federation… <br />
            This is a stage where your talent meets the world.”
          </h2>
          <div className="w-24 h-1.5 bg-brand-accent mx-auto rounded-full"></div>
        </motion.div>
      </div>
    </section>
  );
};

const TrustSection = () => {
  return (
    <section className="py-32 bg-white border-b border-gray-100 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/world-map.png')] opacity-[0.02] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-brand-accent/10 rounded-2xl text-brand-accent mb-10">
            <ShieldCheck className="w-10 h-10" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-brand-primary mb-10 tracking-tighter">Government <span className="text-brand-accent">Recognized</span></h2>
          <p className="text-lg md:text-xl text-brand-text-secondary max-w-4xl mx-auto leading-relaxed font-normal">
            Triadia Federation Games is a registered and recognized organization committed to upholding the highest standards of sportsmanship, education, and talent development in India.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="py-32 bg-brand-accent relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/20 rounded-full blur-3xl animate-glow"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-brand-primary mb-10 tracking-tighter">Ready to Start Your <br /> <span className="text-white">Journey?</span></h2>
          <p className="text-lg md:text-xl text-brand-primary/80 mb-16 max-w-3xl mx-auto font-bold uppercase tracking-widest">Join Triadia Federation Games and unlock your true potential today.</p>
          <Link to="/contact" className="relative group inline-block">
            <div className="absolute -inset-1 bg-brand-primary rounded-full blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <button className="relative bg-brand-primary text-white px-12 py-6 rounded-full font-bold text-lg hover:bg-brand-primary/90 transition-all transform hover:-translate-y-2 active:scale-95 shadow-2xl flex items-center gap-4">
              Register Now
              <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Stats />
      <AboutPreview />
      <WhyTriadia />
      <ProgramsPreview />
      <OpportunitiesPreview />
      <WhyJoin />
      <Inspiration />
      <TrustSection />
      <CTASection />
    </div>
  );
};

export default Home;

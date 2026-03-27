import { motion } from 'motion/react';
import { 
  Brain, 
  Dumbbell, 
  Flame, 
  CheckCircle2, 
  Puzzle, 
  Trophy, 
  Zap, 
  Shield, 
  Heart, 
  Users, 
  Mic2, 
  Lightbulb, 
  Briefcase, 
  Target, 
  Compass, 
  GraduationCap,
  ArrowRight,
  Sparkles,
  MessageSquare,
  Search
} from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { Link } from 'react-router-dom';

const ProgramCard = ({ icon: Icon, title, description, index }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    whileHover={{ y: -10 }}
    className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 group hover:border-brand-accent/30 hover:shadow-xl transition-all duration-500 h-full flex flex-col relative overflow-hidden"
  >
    <div className="mb-6 bg-brand-accent/10 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:bg-brand-accent group-hover:text-brand-primary transition-all duration-500 transform shadow-inner">
      <Icon className="w-8 h-8 text-brand-accent group-hover:text-brand-primary transition-colors" />
    </div>
    <h3 className="text-xl font-bold text-brand-text-primary mb-4 group-hover:text-brand-accent transition-colors duration-300 tracking-tight">{title}</h3>
    <p className="text-brand-text-secondary leading-relaxed flex-grow text-base font-normal">{description}</p>
    <div className="mt-8 pt-6 border-t border-gray-50 flex items-center text-brand-accent font-bold uppercase tracking-widest text-[10px] group-hover:gap-2 transition-all">
      Learn More <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" />
    </div>
  </motion.div>
);

const SectionHeader = ({ title, description, icon: Icon }: any) => (
  <div className="text-center max-w-3xl mx-auto mb-20">
    <motion.div 
      initial={{ scale: 0.9, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      className="inline-flex items-center justify-center w-20 h-20 bg-brand-accent/10 rounded-2xl mb-8"
    >
      <Icon className="w-10 h-10 text-brand-accent" />
    </motion.div>
    <h2 className="text-2xl md:text-3xl font-bold text-brand-text-primary mb-6 tracking-tight">{title}</h2>
    <p className="text-lg text-brand-text-secondary leading-relaxed font-normal">{description}</p>
    <div className="w-16 h-1.5 bg-brand-accent mx-auto mt-8 rounded-full"></div>
  </div>
);

const Programs = () => {
  const mindGames = [
    {
      title: "Chess & Strategic Thinking",
      description: "Improve decision-making, planning, and analytical skills through competitive chess programs.",
      icon: Brain
    },
    {
      title: "Puzzle Championships",
      description: "Engage in fun and challenging puzzles that boost problem-solving and cognitive abilities.",
      icon: Puzzle
    },
    {
      title: "IQ & Memory Contests",
      description: "Enhance memory power, focus, and intelligence through structured competitions.",
      icon: Zap
    },
    {
      title: "Academic Olympiads",
      description: "Participate in subject-based competitions that strengthen academic knowledge and confidence.",
      icon: GraduationCap
    }
  ];

  const physicalGames = [
    {
      title: "Athletics & Indoor Sports",
      description: "Develop stamina, speed, and coordination through structured sports activities.",
      icon: Dumbbell
    },
    {
      title: "Martial Arts & Self-Defense",
      description: "Build confidence, discipline, and self-protection skills.",
      icon: Shield
    },
    {
      title: "Fitness & Body Conditioning",
      description: "Improve strength, endurance, and overall health through fitness training programs.",
      icon: Heart
    },
    {
      title: "Leadership Training Camps",
      description: "Enhance teamwork, leadership, and decision-making through interactive camps.",
      icon: Users
    }
  ];

  const healthPrograms = [
    {
      title: "Yoga & Meditation",
      description: "Promote inner peace, flexibility, and concentration through guided sessions.",
      icon: Flame
    },
    {
      title: "Concentration Workshops",
      description: "Improve focus and attention through scientifically designed techniques.",
      icon: Target
    },
    {
      title: "Personality Development",
      description: "Build confidence, communication, and interpersonal skills.",
      icon: Sparkles
    },
    {
      title: "Communication Skills Training",
      description: "Enhance speaking, presentation, and public interaction skills.",
      icon: MessageSquare
    }
  ];

  const skillDevelopment = [
    { name: "Public Speaking", icon: Mic2 },
    { name: "Leadership & Team Management", icon: Users },
    { name: "Decision Making", icon: Target },
    { name: "Problem Solving", icon: Search },
    { name: "Creative Thinking", icon: Lightbulb },
    { name: "Entrepreneurial Skills", icon: Briefcase }
  ];

  return (
    <div className="bg-brand-bg-light">
      <PageHeader 
        title={<><span className="text-brand-accent">Triadia</span> Programs <br /> Federation Games</>} 
        subtitle="Empowering students through education, games, fitness, and skill development"
        backgroundImage="https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=2070&auto=format&fit=crop"
      />
      
      {/* Mind Games Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Educational & Mind Games"
            description="Programs designed to enhance intelligence, concentration, logical thinking, and academic excellence through competitive and strategic activities."
            icon={Brain}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mindGames.map((program, index) => (
              <ProgramCard key={index} {...program} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Physical Games Section */}
      <section className="py-24 bg-brand-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Physical & Skill-Based Games"
            description="Programs focused on physical fitness, strength, discipline, and teamwork through sports and active training."
            icon={Dumbbell}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {physicalGames.map((program, index) => (
              <ProgramCard key={index} {...program} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Health & Mind Control Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Health & Mind Control Programs"
            description="Programs aimed at achieving mental clarity, emotional balance, and a healthy lifestyle."
            icon={Heart}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {healthPrograms.map((program, index) => (
              <ProgramCard key={index} {...program} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Skill Development Section */}
      <section className="py-24 bg-brand-primary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/10 blur-[100px] rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-accent/5 blur-[100px] rounded-full -ml-32 -mb-32"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight">Skill Development Programs</h2>
            <p className="text-lg text-gray-300 leading-relaxed font-normal">
              Focused training to prepare students for real-world challenges and career opportunities.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {skillDevelopment.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl text-center hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="mb-6 mx-auto bg-brand-accent w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <skill.icon className="w-7 h-7 text-brand-primary" />
                </div>
                <h3 className="text-lg font-bold">{skill.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic & Career Support */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-brand-text-primary mb-8 tracking-tight">Academic & Career Support</h2>
              <div className="space-y-4">
                {[
                  "Career Guidance Workshops",
                  "Digital Learning & AI Awareness",
                  "School & College Collaborations",
                  "Certification Programs",
                  "National Level Skill Olympiads"
                ].map((point, index) => (
                  <div key={index} className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-brand-accent/10 flex items-center justify-center group-hover:bg-brand-accent transition-colors duration-300">
                      <CheckCircle2 className="w-5 h-5 text-brand-accent group-hover:text-brand-primary" />
                    </div>
                    <span className="text-lg text-brand-text-secondary font-medium">{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-8 border-brand-bg-light">
                <img 
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop" 
                  alt="Academic Support"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-brand-accent p-8 rounded-3xl shadow-xl hidden md:block border-4 border-white">
                <Trophy className="w-10 h-10 text-brand-primary mb-3" />
                <p className="text-brand-primary font-bold text-lg">National Recognition</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Program Benefits */}
      <section className="py-24 bg-brand-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text-primary mb-6 tracking-tight">Benefits of Our Programs</h2>
            <div className="w-20 h-1.5 bg-brand-accent mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Confidence & Discipline", desc: "Improved confidence and discipline through structured training." },
              { title: "Academic Excellence", desc: "Better academic performance and cognitive development." },
              { title: "Holistic Health", desc: "Strong physical and mental health for overall well-being." },
              { title: "Leadership Skills", desc: "Leadership and communication skills for future success." },
              { title: "Global Exposure", desc: "National & international exposure through competitions." },
              { title: "Expert Mentorship", desc: "Guidance from industry experts and professional coaches." }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex items-start gap-5 hover:shadow-md transition-shadow"
              >
                <div className="bg-brand-accent/10 p-3 rounded-xl flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-brand-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-text-primary mb-2">{benefit.title}</h3>
                  <p className="text-brand-text-secondary text-sm leading-relaxed">{benefit.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-brand-primary rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/10 rounded-full -mr-32 -mt-32"></div>
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-5xl font-bold mb-8 tracking-tight">Start Your Growth Journey Today</h2>
              <p className="text-lg text-gray-300 mb-12 font-normal leading-relaxed">
                Join our programs and unlock your full potential with expert guidance and structured training.
              </p>
              <Link 
                to="/opportunities"
                className="inline-flex items-center gap-3 bg-brand-accent text-brand-primary px-10 py-5 rounded-full font-bold text-lg hover:bg-white transition-all transform hover:-translate-y-1 shadow-xl group"
              >
                Explore Opportunities
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Programs;


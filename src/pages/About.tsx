import { motion } from 'motion/react';
import { BookOpen, Target, Users, Trophy, ShieldCheck, Star, ArrowRight } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { Link } from 'react-router-dom';

const About = () => {
  const values = [
    {
      title: 'Holistic Growth',
      description: 'We blend academics, mind games, and physical training to build balanced, confident students.',
      icon: BookOpen
    },
    {
      title: 'Talent Discovery',
      description: 'We identify hidden potential and guide learners toward meaningful opportunities.',
      icon: Star
    },
    {
      title: 'Community & Teamwork',
      description: 'We create a supportive ecosystem for students, parents, and educators.',
      icon: Users
    }
  ];

  const highlights = [
    { label: 'Students Empowered', value: '10,000+', icon: Users },
    { label: 'Events Conducted', value: '500+', icon: Trophy },
    { label: 'Schools & Colleges', value: '100+', icon: ShieldCheck }
  ];

  return (
    <div className="bg-brand-bg-light">
      <PageHeader
        title={<>About <span className="text-brand-accent">Triadia</span> Federation</>}
        subtitle="A national platform nurturing talent through education, sports, and skill development."
        backgroundImage="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2069&auto=format&fit=crop"
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-5 py-2 mb-6 text-xs font-bold tracking-[0.2em] text-brand-accent uppercase bg-brand-accent/10 border border-brand-accent/20 rounded-full">
                Our Story
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-brand-text-primary mb-6 tracking-tight">
                Building India&#39;s Emerging Talent Platform
              </h2>
              <p className="text-lg text-brand-text-secondary leading-relaxed mb-6 font-normal">
                Triadia Federation Games is dedicated to discovering, nurturing, and elevating student talent across India.
                Through structured programs in education, mind games, physical fitness, and skill development, we empower
                learners to become confident, capable, and future-ready.
              </p>
              <p className="text-lg text-brand-text-secondary leading-relaxed font-normal">
                We collaborate with schools, colleges, and communities to create opportunities for growth, recognition,
                and national-level participation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-brand-bg-light">
                <img
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop"
                  alt="Students learning together"
                  className="w-full h-[480px] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-brand-accent p-6 rounded-3xl shadow-xl hidden md:block border-4 border-white">
                <Target className="w-8 h-8 text-brand-primary mb-2" />
                <p className="text-brand-primary font-bold text-base">Purpose Driven</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2 mb-6 text-xs font-bold tracking-[0.2em] text-brand-accent uppercase bg-brand-accent/10 border border-brand-accent/20 rounded-full">
              Our Values
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-brand-text-primary mb-6 tracking-tight">
              What We Stand For
            </h2>
            <p className="text-lg text-brand-text-secondary leading-relaxed font-normal">
              We believe every student deserves the right environment to learn, compete, and succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 hover:border-brand-accent/30 hover:shadow-xl transition-all duration-500"
              >
                <div className="mb-6 bg-brand-accent/10 w-14 h-14 rounded-2xl flex items-center justify-center">
                  <value.icon className="w-7 h-7 text-brand-accent" />
                </div>
                <h3 className="text-xl font-bold text-brand-text-primary mb-3 tracking-tight">{value.title}</h3>
                <p className="text-brand-text-secondary leading-relaxed text-base font-normal">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-text-primary mb-6 tracking-tight">
              Our Growing Impact
            </h2>
            <p className="text-lg text-brand-text-secondary leading-relaxed font-normal">
              Nationwide reach with measurable outcomes for students and institutions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-brand-bg-light p-10 rounded-3xl border border-gray-100 text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-brand-accent/15 rounded-2xl text-brand-accent mb-6">
                  <item.icon className="w-7 h-7" />
                </div>
                <p className="text-3xl md:text-4xl font-bold text-brand-text-primary mb-2">{item.value}</p>
                <p className="text-xs md:text-sm text-brand-text-secondary font-bold uppercase tracking-[0.15em]">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-5 py-2 mb-6 text-xs font-bold tracking-[0.2em] text-brand-accent uppercase bg-brand-accent/10 border border-brand-accent/20 rounded-full">
                Our Mission
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                Empowering Students for a Brighter Future
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed font-normal">
                We are committed to creating an inclusive platform where every student can discover their strengths,
                compete at higher levels, and earn recognition for their effort and skill.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] backdrop-blur-sm"
            >
              <div className="flex items-start gap-4 mb-6">
                <ShieldCheck className="w-8 h-8 text-brand-accent" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Recognized & Trusted</h3>
                  <p className="text-gray-300 text-base leading-relaxed">
                    Triadia Federation Games works with institutions nationwide and upholds high standards of sportsmanship,
                    education, and ethical practice.
                  </p>
                </div>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-brand-accent text-brand-primary px-8 py-4 rounded-full font-bold text-base hover:bg-white transition-all transform hover:-translate-y-1 shadow-xl"
              >
                Join the Movement
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

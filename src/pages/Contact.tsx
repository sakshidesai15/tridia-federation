import { motion } from 'motion/react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  Clock, 
  Globe, 
  MessageSquare, 
  UserPlus, 
  Handshake, 
  LifeBuoy,
  ArrowRight
} from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { Link } from 'react-router-dom';

const Contact = () => {
  const helpCards = [
    { title: "General Inquiry", icon: <MessageSquare className="w-8 h-8" />, desc: "Have a question? We're here to help you with any general information." },
    { title: "Program Registration", icon: <UserPlus className="w-8 h-8" />, desc: "Need help with signing up for our games or educational programs?" },
    { title: "Partnership / Collaboration", icon: <Handshake className="w-8 h-8" />, desc: "Interested in working with us? Let's build the future together." },
    { title: "Support & Assistance", icon: <LifeBuoy className="w-8 h-8" />, desc: "Facing issues? Our support team is available to assist you." }
  ];

  return (
    <div className="bg-brand-bg-light">
      <PageHeader 
        title={<>Contact <span className="text-brand-accent">Triadia</span> <br /> Federation Games</>} 
        subtitle="We'd love to hear from you. Get in touch with our dedicated team." 
        backgroundImage="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
      />
      
      {/* 2. CONTACT INFORMATION & 3. CONTACT FORM */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            {/* Left Side: Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-brand-accent uppercase bg-brand-accent/10 border border-brand-accent/20 rounded-full">
                <Globe className="w-4 h-4" />
                Global Presence
              </div>
              <h2 className="text-3xl md:text-3xl font-bold text-brand-text-primary mb-8 tracking-tight">
                Let's Build the <span className="text-brand-accent">Future</span> Together
              </h2>
              <p className="text-xl text-brand-text-secondary mb-12 font-normal leading-relaxed">
                Whether you have a question about our programs, competitions, or partnerships, our team is ready to answer all your questions.
              </p>

              <div className="space-y-10">
                <div className="flex items-center gap-8 group">
                  <div className="w-20 h-20 bg-brand-primary rounded-[2rem] flex items-center justify-center text-brand-accent group-hover:scale-110 transition-transform duration-500 shadow-2xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-brand-accent/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <MapPin className="w-8 h-8 relative z-10" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-brand-text-secondary font-bold mb-2">Location</p>
                    <p className="text-2xl font-bold text-brand-text-primary">New Delhi, India</p>
                  </div>
                </div>

                <div className="flex items-center gap-8 group">
                  <div className="w-20 h-20 bg-brand-primary rounded-[2rem] flex items-center justify-center text-brand-accent group-hover:scale-110 transition-transform duration-500 shadow-2xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-brand-accent/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <Mail className="w-8 h-8 relative z-10" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-brand-text-secondary font-bold mb-2">Email Address</p>
                    <p className="text-2xl font-bold text-brand-text-primary">info@triadiafederation.org</p>
                  </div>
                </div>

                <div className="flex items-center gap-8 group">
                  <div className="w-20 h-20 bg-brand-primary rounded-[2rem] flex items-center justify-center text-brand-accent group-hover:scale-110 transition-transform duration-500 shadow-2xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-brand-accent/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <Phone className="w-8 h-8 relative z-10" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-brand-text-secondary font-bold mb-2">Phone Number</p>
                    <p className="text-2xl font-bold text-brand-text-primary">+91-XXXXXXXXXX</p>
                  </div>
                </div>
              </div>

              <div className="mt-16 p-10 bg-brand-bg-light rounded-[3rem] border border-gray-100 flex items-center gap-8 group shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="w-16 h-16 bg-brand-accent/10 rounded-2xl flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-brand-primary transition-colors duration-300">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-xl font-bold text-brand-text-primary">Official Organization</p>
                  <p className="text-brand-text-secondary font-normal">Registered and recognized for talent development.</p>
                </div>
              </div>
            </motion.div>

            {/* Right Side: Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-brand-bg-light p-12 md:p-20 rounded-[4rem] border border-gray-100 relative overflow-hidden shadow-2xl"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-brand-accent/5 rounded-full -mr-20 -mt-20"></div>
              <h3 className="text-3xl font-bold text-brand-text-primary mb-12 tracking-tight">Send a Message</h3>
              <form className="space-y-8 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-xs font-bold text-brand-text-secondary uppercase tracking-[0.2em] ml-1">Full Name</label>
                    <input type="text" className="w-full px-8 py-5 rounded-2xl bg-white border border-gray-200 focus:border-brand-accent focus:ring-4 focus:ring-brand-accent/10 outline-none transition-all text-brand-text-primary font-medium shadow-sm" placeholder="Enter your name" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-bold text-brand-text-secondary uppercase tracking-[0.2em] ml-1">Email Address</label>
                    <input type="email" className="w-full px-8 py-5 rounded-2xl bg-white border border-gray-200 focus:border-brand-accent focus:ring-4 focus:ring-brand-accent/10 outline-none transition-all text-brand-text-primary font-medium shadow-sm" placeholder="Enter your email" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-xs font-bold text-brand-text-secondary uppercase tracking-[0.2em] ml-1">Phone Number</label>
                    <input type="tel" className="w-full px-8 py-5 rounded-2xl bg-white border border-gray-200 focus:border-brand-accent focus:ring-4 focus:ring-brand-accent/10 outline-none transition-all text-brand-text-primary font-medium shadow-sm" placeholder="+91 XXXXX XXXXX" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-bold text-brand-text-secondary uppercase tracking-[0.2em] ml-1">Subject</label>
                    <input type="text" className="w-full px-8 py-5 rounded-2xl bg-white border border-gray-200 focus:border-brand-accent focus:ring-4 focus:ring-brand-accent/10 outline-none transition-all text-brand-text-primary font-medium shadow-sm" placeholder="How can we help?" />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-bold text-brand-text-secondary uppercase tracking-[0.2em] ml-1">Message</label>
                  <textarea rows={5} className="w-full px-8 py-5 rounded-2xl bg-white border border-gray-200 focus:border-brand-accent focus:ring-4 focus:ring-brand-accent/10 outline-none transition-all text-brand-text-primary font-medium resize-none shadow-sm" placeholder="Write your message here..."></textarea>
                </div>
                <button className="w-full bg-brand-accent text-brand-primary py-6 rounded-2xl font-bold text-xl hover:bg-brand-primary hover:text-white transition-all shadow-[0_20px_40px_rgba(245,185,66,0.2)] transform hover:-translate-y-1 active:scale-95 group">
                  Send Message
                  <ArrowRight className="inline-block ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. MAP SECTION */}
      <section className="py-24 bg-brand-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text-primary mb-6 tracking-tight">Our Location</h2>
            <div className="w-20 h-1.5 bg-brand-accent mx-auto rounded-full"></div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-[3rem] overflow-hidden shadow-xl border-8 border-white h-[450px]"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.5620646104!2d77.2090!3d28.6139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715326640f!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1711530000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* 5. QUICK HELP / SUPPORT */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text-primary mb-6 tracking-tight">How Can We Help You?</h2>
            <p className="text-lg text-brand-text-secondary leading-relaxed font-normal">
              Select a category to get specialized assistance from our dedicated teams.
            </p>
            <div className="w-16 h-1.5 bg-brand-accent mx-auto mt-8 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {helpCards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-brand-bg-light p-10 rounded-[2.5rem] border border-gray-100 shadow-sm group hover:shadow-xl transition-all duration-500 h-full flex flex-col items-center text-center"
              >
                <div className="bg-brand-primary w-16 h-16 rounded-2xl flex items-center justify-center text-brand-accent mb-8 group-hover:scale-110 transition-transform duration-500">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-brand-text-primary mb-4 tracking-tight">{card.title}</h3>
                <p className="text-brand-text-secondary leading-relaxed font-normal text-sm">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION */}
      <section className="py-24 bg-brand-bg-light">
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
                Ready to Start Your Journey?
              </h2>
              <p className="text-lg text-gray-300 mb-12 font-normal leading-relaxed">
                Join Triadia Federation Games and unlock your true potential today.
              </p>
              <Link 
                to="/register"
                className="inline-flex items-center gap-3 bg-brand-accent text-brand-primary px-10 py-5 rounded-full font-bold text-lg hover:bg-white transition-all transform hover:-translate-y-1 shadow-xl group"
              >
                Join Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;


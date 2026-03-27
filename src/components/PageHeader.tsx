import { motion } from 'motion/react';

import React from 'react';

interface PageHeaderProps {
  title: React.ReactNode;
  subtitle?: string;
  backgroundImage?: string;
}

const PageHeader = ({ title, subtitle, backgroundImage }: PageHeaderProps) => {
  return (
    <section className="relative pt-56 pb-32 bg-brand-blue overflow-hidden min-h-[65vh] flex items-center">
      {backgroundImage ? (
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src={backgroundImage} 
            alt={typeof title === 'string' ? title : 'Page Header'}
            className="w-full h-full object-cover blur-[1px]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F]/90 to-[#0A192F]/70"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,25,47,0.4)_100%)]"></div>
        </div>
      ) : (
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-gold/20 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-gold/10 blur-[100px] rounded-full"></div>
        </div>
      )}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center"
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-8 tracking-tight leading-tight drop-shadow-2xl">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto font-medium leading-relaxed drop-shadow-lg">
              {subtitle}
            </p>
          )}
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: 100 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="h-1.5 bg-brand-gold mx-auto mt-12 rounded-full shadow-[0_0_20px_rgba(245,185,66,0.5)]"
          ></motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PageHeader;

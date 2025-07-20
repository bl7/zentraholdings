'use client'
import React from 'react';
import { motion } from 'framer-motion';

const CTAComponent = () => {
  return (
    <motion.section
      className='container mx-auto'
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className=" px-8 py-16 bg-gradient-to-b from-[#D3F1FF] to-white">
      <div className="relative flex max-h-[50vh] w-full  overflow-hidden ">
      {/* Left Panel - Agentforce Promotion */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="max-w-lg">
          {/* Salesforce Cloud Logo */}
          <div className="flex items-center mb-4">
            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-2">
              <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              </div>
            </div>
            <span className="text-xs font-medium text-gray-600 uppercase tracking-wide">AGENTFORCE IN SLACK</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-3xl font-bold text-gray-900 mb-3 leading-tight">
            There&rsquo;s an AI agent for everyone in Slack.
          </h1>
          
          {/* Description */}
          <p className="text-sm text-gray-600 mb-4 leading-relaxed">
            Update sales proposals, set team reminders, resolve IT issues and 
            so much more with always-on, action-taking AI agents in Slack.
          </p>
          
          {/* Learn More Button */}
          <a href="/about" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors text-sm">
            <span>View Solutions</span>
            <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
      
        
      
    </div>
    </motion.section>
  );
};

export default CTAComponent;
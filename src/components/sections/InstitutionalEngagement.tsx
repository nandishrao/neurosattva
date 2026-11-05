import React, { useState } from 'react';
import {
  ENGAGEMENT_CONTENT,
  INITIATIVE_NAME,
  PARENT_COMPANY,
  CONTACT_EMAIL,
  EXECUTIVE_PHONE,
  HQ_LOCATION,
} from '../../data/content';
import { motion } from 'framer-motion';
import { Building, Calendar, CheckCircle2, Mail, Phone, MapPin, Send, Check } from 'lucide-react';
import { Button } from '../ui/Buttons';

export const InstitutionalEngagement: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    institutionName: '',
    leadName: '',
    workEmail: '',
    classroomCount: '2 to 5 Classrooms',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="engagement" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="eyebrow">{ENGAGEMENT_CONTENT.eyebrow}</span>
        <h2 className="text-3xl sm:text-4xl md:text-[44px] font-fraunces font-normal text-[#06141B] leading-tight">
          {ENGAGEMENT_CONTENT.title}
        </h2>
        <p className="mt-4 text-base sm:text-lg text-[#4A5C6A] leading-relaxed">
          {ENGAGEMENT_CONTENT.subtitle}
        </p>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
        {/* Left: Engagement Overview & Metadata */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 glass-card p-7 sm:p-8 border-[#CCD0CF] space-y-6 bg-white shadow-card"
        >
          <div className="border-b border-[#CCD0CF] pb-5">
            <span className="text-[11px] uppercase tracking-wider text-[#11212D] font-bold block">
              Proposal Metadata
            </span>
            <h3 className="font-fraunces text-2xl text-[#06141B] font-light mt-1">
              Executive Partnership
            </h3>
            <p className="text-xs text-[#4A5C6A] mt-1 leading-relaxed">
              Joint development between {PARENT_COMPANY} and {INITIATIVE_NAME}.
            </p>
          </div>

          <div className="space-y-4 text-xs sm:text-[13px]">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-xl bg-[#CCD0CF]/50 border border-[#9BA8AB] flex items-center justify-center shrink-0 text-[#11212D]">
                <Building className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[#4A5C6A] uppercase text-[10.5px] font-bold block">Solution Architecture</span>
                <span className="text-[#06141B] font-semibold">{PARENT_COMPANY}</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-xl bg-[#CCD0CF]/50 border border-[#9BA8AB] flex items-center justify-center shrink-0 text-[#11212D]">
                <Building className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[#4A5C6A] uppercase text-[10.5px] font-bold block">Educational Initiative</span>
                <span className="text-[#06141B] font-semibold">{INITIATIVE_NAME}</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-xl bg-[#CCD0CF]/50 border border-[#9BA8AB] flex items-center justify-center shrink-0 text-[#11212D]">
                <Calendar className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[#4A5C6A] uppercase text-[10.5px] font-bold block">Deployment Window</span>
                <span className="text-[#06141B] font-semibold">{ENGAGEMENT_CONTENT.partners.deploymentWindow}</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-xl bg-[#CCD0CF]/50 border border-[#9BA8AB] flex items-center justify-center shrink-0 text-[#11212D]">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[#4A5C6A] uppercase text-[10.5px] font-bold block">Operations</span>
                <span className="text-[#06141B] font-semibold">{HQ_LOCATION}</span>
              </div>
            </div>
          </div>

          {/* Institutional Direct Contact */}
          <div className="p-5 rounded-2xl bg-[#CCD0CF]/30 border border-[#CCD0CF] space-y-3 mt-6">
            <span className="text-[11px] uppercase tracking-wider font-bold text-[#06141B] block">
              Institutional Partnership Desk
            </span>
            <div className="flex items-center gap-2.5 text-xs text-[#4A5C6A]">
              <Mail className="w-4 h-4 text-[#11212D] shrink-0" />
              <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-[#11212D] font-medium">
                {CONTACT_EMAIL}
              </a>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-[#4A5C6A]">
              <Phone className="w-4 h-4 text-[#11212D] shrink-0" />
              <span className="font-medium">{EXECUTIVE_PHONE}</span>
            </div>
          </div>
        </motion.div>

        {/* Right: 4-Step Engagement Roadmap & Interactive Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7 space-y-6"
        >
          {/* 4-Step Engagement Process */}
          <div className="glass-card p-7 sm:p-8 border-[#CCD0CF] bg-white shadow-card">
            <h3 className="font-fraunces text-2xl text-[#06141B] font-light mb-6">
              Institutional Onboarding Methodology
            </h3>
            <div className="space-y-5">
              {ENGAGEMENT_CONTENT.engagementModel.map((item) => (
                <div key={item.step} className="flex items-start gap-4 p-3.5 rounded-2xl bg-[#CCD0CF]/20 border border-[#CCD0CF]">
                  <span className="font-mono text-xs font-bold text-[#11212D] bg-white px-2.5 py-1 rounded-xl border border-[#CCD0CF] shrink-0 shadow-sm">
                    {item.step}
                  </span>
                  <div>
                    <h4 className="font-fraunces text-base text-[#06141B] font-normal mb-0.5">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#4A5C6A] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Pilot Inquiry Form Card */}
          <div className="glass-card p-7 sm:p-8 border-2 border-[#11212D] bg-gradient-to-b from-white to-[#CCD0CF]/20 shadow-brand">
            <h3 className="font-fraunces text-xl text-[#06141B] font-normal mb-2">
              Request an Institutional Pilot Briefing
            </h3>
            <p className="text-xs text-[#4A5C6A] mb-6 leading-relaxed">
              Submit your campus details to receive the complete hardware specification sheet, commercial volume models, and pilot staging timelines.
            </p>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-[#CCD0CF]/40 border border-[#9BA8AB] text-center space-y-2">
                <div className="w-10 h-10 rounded-full bg-[#11212D] text-[#CCD0CF] flex items-center justify-center mx-auto mb-2 shadow-sm">
                  <Check className="w-5 h-5 stroke-[2.5]" />
                </div>
                <h4 className="font-fraunces text-lg text-[#06141B] font-normal">
                  Briefing Request Registered
                </h4>
                <p className="text-xs text-[#4A5C6A]">
                  Thank you, {formData.leadName || 'Educator'}. An enterprise solution architect from RAAK Saphire will contact you within 24 business hours at {formData.workEmail || 'your email'}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] font-bold uppercase text-[#4A5C6A] block mb-1">
                      School / Institution Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Greenwood International"
                      value={formData.institutionName}
                      onChange={(e) => setFormData({ ...formData, institutionName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#CCD0CF] bg-white text-xs sm:text-sm text-[#06141B] focus:outline-none focus:border-[#11212D]"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold uppercase text-[#4A5C6A] block mb-1">
                      Leadership / Contact Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. A. Sharma, Principal"
                      value={formData.leadName}
                      onChange={(e) => setFormData({ ...formData, leadName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#CCD0CF] bg-white text-xs sm:text-sm text-[#06141B] focus:outline-none focus:border-[#11212D]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] font-bold uppercase text-[#4A5C6A] block mb-1">
                      Official Institutional Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. director@school.edu"
                      value={formData.workEmail}
                      onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#CCD0CF] bg-white text-xs sm:text-sm text-[#06141B] focus:outline-none focus:border-[#11212D]"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold uppercase text-[#4A5C6A] block mb-1">
                      Intended Pilot Scope
                    </label>
                    <select
                      value={formData.classroomCount}
                      onChange={(e) => setFormData({ ...formData, classroomCount: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#CCD0CF] bg-white text-xs sm:text-sm text-[#06141B] focus:outline-none focus:border-[#11212D] cursor-pointer"
                    >
                      <option>1 Innovation Lab / Demo Suite</option>
                      <option>2 to 5 Classrooms (Standard Pilot)</option>
                      <option>6 to 15 Classrooms (Expanded Pilot)</option>
                      <option>Whole Campus / Multi-School Network</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2">
                  <Button type="submit" variant="primary" className="w-full flex items-center justify-center gap-2">
                    <Send className="w-4 h-4" />
                    <span>Submit Executive Briefing Request</span>
                  </Button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>

      {/* Institutional Assurances Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {ENGAGEMENT_CONTENT.benefits.map((benefit, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-[#CCD0CF] text-xs font-semibold text-[#06141B] shadow-sm"
          >
            <CheckCircle2 className="w-4 h-4 text-[#11212D] shrink-0" />
            <span>{benefit}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

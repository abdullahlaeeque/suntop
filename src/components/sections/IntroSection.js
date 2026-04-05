'use client';

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
        >
          Start Your MBBS Journey Abroad with
          <span className="block mt-2" style={{ color: '#1d4ed8' }}>
            Suntop International
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto"
        >
          Suntop International is a trusted consultancy dedicated to student welfare
          for more than 8 years. We have successfully helped over 1000 students
          pursue medical education abroad. Many of our students are now working in
          prestigious hospitals such as AIIMS and Safdarjung as JR, SR, and PG
          residents across India.
        </motion.p>

        {/* Extra info */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto"
        >
          We also provide dedicated FMGE/NEXT coaching to support students
          throughout their journey and help them build successful medical careers.
        </motion.p>

        {/* IMAGE 1 — Hero / Student Success Image */}
        <div className="mt-10 flex justify-center">
          <div className="relative w-full max-w-2xl h-72 rounded-2xl overflow-hidden shadow-md"
            style={{ border: '2px solid #bfdbfe' }}>
            <Image
              src="/images/sunt9.jpeg"
              alt="Students celebrating MBBS success abroad"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="rounded-2xl p-5" style={{ background: '#eff6ff', border: '1px solid #bfdbfe' }}>
            <h3 className="text-3xl font-bold" style={{ color: '#1d4ed8' }}>1000+</h3>
            <p className="text-gray-600 mt-1">Students Sent Abroad</p>
          </div>
          <div className="rounded-2xl p-5" style={{ background: '#eff6ff', border: '1px solid #bfdbfe' }}>
            <h3 className="text-3xl font-bold" style={{ color: '#1d4ed8' }}>2000+</h3>
            <p className="text-gray-600 mt-1">Successful Students</p>
          </div>
          <div className="rounded-2xl p-5" style={{ background: '#eff6ff', border: '1px solid #bfdbfe' }}>
            <h3 className="text-3xl font-bold" style={{ color: '#1d4ed8' }}>8+</h3>
            <p className="text-gray-600 mt-1">Years Experience</p>
          </div>
          <div className="rounded-2xl p-5" style={{ background: '#eff6ff', border: '1px solid #bfdbfe' }}>
            <h3 className="text-3xl font-bold" style={{ color: '#1d4ed8' }}>Top Hospitals</h3>
            <p className="text-gray-600 mt-1">AIIMS / Safdarjung Placements</p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center gap-4 flex-wrap">
          <button
            className="text-white px-6 py-3 rounded-lg font-medium transition"
            style={{ background: '#1d4ed8' }}
            onMouseEnter={e => (e.currentTarget.style.background = '#1e40af')}
            onMouseLeave={e => (e.currentTarget.style.background = '#1d4ed8')}
          >
            Free Consultation
          </button>
          <button
            className="px-6 py-3 rounded-lg font-medium transition"
            style={{ border: '1px solid #1d4ed8', color: '#1d4ed8' }}
            onMouseEnter={e => (e.currentTarget.style.background = '#eff6ff')}
            onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
          >
            Contact Us
          </button>
        </div>

      </div>
    </section>
  );
}

const stats = [
  { value: '1000+', label: 'Students Placed', sub: 'Worldwide' },
  { value: '10+', label: 'Countries', sub: 'For MBBS Study' },
  { value: '100+', label: 'Universities', sub: 'Medical Institutions' },
  { value: '8+', label: 'Years', sub: 'of Expert Guidance' },
];

const services = [
  { icon: '🎓', title: 'University Selection', desc: 'Personalised guidance to match students with the right medical university based on profile and budget.' },
  { icon: '📋', title: 'Admission Processing', desc: 'End-to-end handling of application forms, documentation, and university enrollment.' },
  { icon: '🛂', title: 'Visa & Documentation', desc: 'Complete visa processing, invitation letter support, and document apostille services.' },
  { icon: '✈️', title: 'Travel & Arrival', desc: 'Air ticket guidance, airport pickup coordination, and smooth arrival assistance.' },
  { icon: '🏠', title: 'Accommodation', desc: 'Hostel arrangement and on-ground local support throughout your stay abroad.' },
  { icon: '📚', title: 'FMGE / NEXT Coaching', desc: 'Post-MBBS licensing exam preparation to ensure a smooth return to medical practice in India.' },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
});

export const IntroSection = ({ isVisible = true }) => {
  const anim = (delay = 0) => ({
    initial: { opacity: 0, y: 32 },
    animate: isVisible ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
  });

  return (
    <section className="w-full bg-white" style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>

      {/* ── Hero Intro ── */}
      <div className="max-w-5xl mx-auto px-6 pt-24 pb-16 text-center">
        <motion.p
          {...anim(0)}
          className="text-xs font-semibold tracking-[0.2em] uppercase mb-5"
          style={{ fontFamily: "'Arial', sans-serif", letterSpacing: '0.18em', color: '#3b82f6' }}
        >
          Trusted MBBS Abroad Consultancy · Est. 2016
        </motion.p>

        <motion.h1
          {...anim(0.08)}
          className="text-4xl md:text-6xl font-bold text-stone-900 leading-tight mb-6"
          style={{ letterSpacing: '-0.02em' }}
        >
          Your Pathway to{' '}
          <span className="italic font-normal" style={{ color: '#1d4ed8' }}>
            Global Medical Education
          </span>
        </motion.h1>

        <motion.p
          {...anim(0.16)}
          className="text-lg md:text-xl text-stone-500 max-w-2xl mx-auto leading-relaxed"
          style={{ fontFamily: "'Arial', sans-serif", fontWeight: 400 }}
        >
          Suntop International Group specialises in helping NEET-qualified Indian students gain admission to
          internationally recognised medical universities. From shortlisting to graduation — we are with you every step.
        </motion.p>

        <motion.div {...anim(0.24)} className="mt-10 flex justify-center gap-3 flex-wrap">
          <a
            href="#contact"
            className="inline-block px-7 py-3 text-sm font-semibold text-white rounded-full transition-all duration-200"
            style={{ background: '#1d4ed8', fontFamily: "'Arial', sans-serif", letterSpacing: '0.04em' }}
            onMouseEnter={e => (e.currentTarget.style.background = '#1e40af')}
            onMouseLeave={e => (e.currentTarget.style.background = '#1d4ed8')}
          >
            Get Free Guidance
          </a>
          <a
            href="#services"
            className="inline-block px-7 py-3 text-sm font-semibold rounded-full transition-all duration-200"
            style={{ fontFamily: "'Arial', sans-serif", letterSpacing: '0.04em', border: '1px solid #93c5fd', color: '#1d4ed8' }}
            onMouseEnter={e => (e.currentTarget.style.background = '#eff6ff')}
            onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
          >
            Explore Services
          </a>
        </motion.div>

        {/* IMAGE 2 — Intro Hero Banner below buttons */}
        <motion.div {...anim(0.3)} className="mt-12 flex justify-center">
          <div
            className="relative w-full max-w-2xl mx-auto h-[220px] sm:h-[300px] md:h-[380px] rounded-2xl overflow-hidden shadow-md"
            style={{ border: '2px solid #bfdbfe' }}
          >
            <Image
              src="/images/sunt9.jpeg"
              alt="Suntop International students abroad"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </motion.div>
      </div>

      {/* ── Divider ── */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="h-px" style={{ background: '#bfdbfe' }} />
      </div>

      {/* ── Statistics Row ── */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              {...anim(0.1 + i * 0.08)}
              className="flex flex-col items-center gap-1 rounded-2xl py-6 px-4"
              style={{ background: '#eff6ff', border: '1px solid #bfdbfe' }}
            >
              <span
                className="text-4xl md:text-5xl font-bold"
                style={{ letterSpacing: '-0.03em', color: '#1d4ed8' }}
              >
                {s.value}
              </span>
              <span
                className="text-sm font-semibold uppercase tracking-widest"
                style={{ fontFamily: "'Arial', sans-serif", fontSize: '0.68rem', letterSpacing: '0.12em', color: '#1e3a8a' }}
              >
                {s.label}
              </span>
              <span className="text-xs text-stone-400" style={{ fontFamily: "'Arial', sans-serif" }}>
                {s.sub}
              </span>
            </motion.div>
          ))}
        </div>

        {/* IMAGE 3 — Decorative banner below stats */}
        <motion.div {...anim(0.3)} className="mt-12 flex justify-center">
          <div
            className="relative w-full max-w-2xl mx-auto h-[220px] sm:h-[250px] md:h-[300px] rounded-2xl overflow-hidden shadow-md"
            style={{ border: '2px solid #bfdbfe' }}
          >
            <Image
              src="/images/sunt3.jpeg"
              alt="Suntop International students group photo"
              fill
              className="object-cover object-center"
            />
          </div>
        </motion.div>
      </div>

      {/* ── Divider ── */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="h-px" style={{ background: '#bfdbfe' }} />
      </div>

      {/* ── About Block ── */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div {...anim(0.1)}>
            <p
              className="text-xs font-semibold tracking-[0.18em] uppercase mb-4"
              style={{ fontFamily: "'Arial', sans-serif", color: '#1d4ed8' }}
            >
              Who We Are
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-stone-900 leading-snug mb-5"
              style={{ letterSpacing: '-0.02em' }}
            >
              Guiding Students From <em className="font-normal italic" style={{ color: '#1d4ed8' }}>NEET to Graduation</em>
            </h2>
            <p className="text-stone-500 leading-relaxed" style={{ fontFamily: "'Arial', sans-serif" }}>
              With over 8 years of experience, Suntop International Group has built a reputation as one of India's most
              trusted MBBS abroad consultancies. We partner with 100+ accredited medical universities across 10+
              countries including Russia, Kazakhstan, Kyrgyzstan, Bangladesh, and more — offering students affordable,
              quality pathways to a medical career.
            </p>
          </motion.div>

          <motion.div {...anim(0.2)} className="space-y-4">
            {/* IMAGE 4 — About Block right column above bullets */}
            <div
              className="relative w-full h-72 rounded-2xl overflow-hidden mb-2"
              style={{ border: '2px solid #bfdbfe' }}
            >
              <Image
                src="/images/sunt4.jpeg"
                alt="Suntop International team or university campus"
                fill
                className="object-cover object-center"
              />
            </div>

            {[
              'Complete admission processing & university shortlisting',
              'Visa documentation, apostille & invitation letter support',
              'Airport pickup, hostel accommodation & local support',
              'Guidance throughout 5–6 years of study abroad',
              'Visa extension support & student departure assistance',
              'Post-MBBS FMGE / NEXT licensing exam coaching',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span
                  className="mt-1 w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-white text-xs"
                  style={{ background: '#1d4ed8', fontSize: '10px' }}
                >
                  ✓
                </span>
                <p className="text-stone-600 text-sm leading-relaxed" style={{ fontFamily: "'Arial', sans-serif" }}>
                  {item}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Light blue bg: Services Grid ── */}
      <div style={{ background: '#eff6ff' }} id="services">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <motion.div {...anim(0.05)} className="text-center mb-12">
            <p
              className="text-xs font-semibold tracking-[0.18em] uppercase mb-3"
              style={{ fontFamily: "'Arial', sans-serif", color: '#1d4ed8' }}
            >
              Our Services
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900" style={{ letterSpacing: '-0.02em' }}>
              Everything You Need, <em className="font-normal italic" style={{ color: '#1d4ed8' }}>Under One Roof</em>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                {...anim(0.06 + i * 0.07)}
                className="bg-white rounded-2xl p-6 transition-all duration-200 hover:shadow-md"
                style={{ border: '1px solid #bfdbfe' }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = '#3b82f6')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = '#bfdbfe')}
              >
                <div className="text-2xl mb-4">{s.icon}</div>
                <h3
                  className="text-sm font-bold uppercase tracking-wider mb-2"
                  style={{ fontFamily: "'Arial', sans-serif", letterSpacing: '0.08em', fontSize: '0.75rem', color: '#1e3a8a' }}
                >
                  {s.title}
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed" style={{ fontFamily: "'Arial', sans-serif" }}>
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* IMAGE 5 — After Services Grid */}
          <motion.div {...anim(0.2)} className="mt-12 flex justify-center">
            <div
              className="relative w-full max-w-2xl mx-auto h-[220px] sm:h-[300px] md:h-[380px] rounded-2xl overflow-hidden shadow-md"
              style={{ border: '2px solid #bfdbfe' }}
            >
              <Image
                src="/images/sunt5.jpeg"
                alt="Students departing for MBBS abroad"
                fill
                className="object-cover object-center"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Student Support Note ── */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <motion.div
          {...anim(0.1)}
          className="rounded-2xl p-8 md:p-12 flex flex-col md:flex-row gap-8 items-start"
          style={{ border: '1px solid #bfdbfe', background: '#f8faff' }}
        >
          <div className="flex-shrink-0">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl"
              style={{ background: '#1d4ed8' }}
            >
              🌐
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-stone-900 mb-3" style={{ letterSpacing: '-0.01em' }}>
              Continued Support Abroad
            </h3>
            <p className="text-stone-500 leading-relaxed mb-4" style={{ fontFamily: "'Arial', sans-serif" }}>
              Our support does not end at departure. Suntop International provides ongoing local assistance throughout
              your 5–6 year MBBS programme — from settling in, annual visa extensions, to preparing you for your return
              journey home. We remain your trusted partner all the way to graduation and beyond.
            </p>
            <p className="text-stone-500 leading-relaxed mb-8" style={{ fontFamily: "'Arial', sans-serif" }}>
              After completing your MBBS, our dedicated <strong className="text-stone-800">FMGE / NEXT coaching programme</strong> ensures
              you are fully prepared for the Indian medical licensing examination, helping you step confidently into your
              medical career.
            </p>

            {/* IMAGE GRID — 5 student photos */}
            {/* Top row — 1 large featured image */}
            <div
              className="relative w-full h-[220px] sm:h-[280px] md:h-[320px] rounded-2xl overflow-hidden mb-3"
              style={{ border: '2px solid #bfdbfe' }}
            >
              <Image
                src="/images/sunt10.jpeg"
                alt="Suntop International students abroad"
                fill
                className="object-cover object-center"
              />
            </div>

            {/* Middle row — 2 images side by side */}
            <div className="grid grid-cols-2 gap-3 mb-3">
              <div className="relative w-full h-[140px] sm:h-[180px] rounded-xl overflow-hidden" style={{ border: '2px solid #bfdbfe' }}>
                <Image
                  src="/images/sunt11.jpeg"
                  alt="Students at university campus"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="relative w-full h-[140px] sm:h-[180px] rounded-xl overflow-hidden" style={{ border: '2px solid #bfdbfe' }}>
                <Image
                  src="/images/sunt12.jpeg"
                  alt="Students departure group photo"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>

            {/* Bottom row — 2 more images side by side */}
            <div className="grid grid-cols-2 gap-3">
              <div className="relative w-full h-[140px] sm:h-[180px] rounded-xl overflow-hidden" style={{ border: '2px solid #bfdbfe' }}>
                <Image
                  src="/images/sunt13.jpeg"
                  alt="MBBS students supported abroad"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="relative w-full h-[140px] sm:h-[180px] rounded-xl overflow-hidden" style={{ border: '2px solid #bfdbfe' }}>
                <Image
                  src="/images/sunt14.jpeg"
                  alt="Suntop International student success"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── Call to Action ── */}
      <div style={{ background: '#1e3a8a' }} className="relative overflow-hidden" id="contact">

        {/* IMAGE 7 — CTA background overlay */}
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/sunt8.jpeg"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-16 text-center">
          <motion.p
            {...anim(0)}
            className="text-xs font-semibold tracking-[0.18em] uppercase mb-4"
            style={{ fontFamily: "'Arial', sans-serif", color: '#93c5fd' }}
          >
            Start Your Journey
          </motion.p>
          <motion.h2
            {...anim(0.08)}
            className="text-3xl md:text-5xl font-bold text-white mb-5"
            style={{ letterSpacing: '-0.02em' }}
          >
            Ready to Study MBBS Abroad?
          </motion.h2>
          <motion.p
            {...anim(0.14)}
            className="text-blue-200 text-lg max-w-xl mx-auto mb-10 leading-relaxed"
            style={{ fontFamily: "'Arial', sans-serif" }}
          >
            Speak with our expert counsellors today for a free consultation. We'll help you choose the right university,
            country, and pathway — tailored to your profile.
          </motion.p>
          <motion.div {...anim(0.2)} className="flex justify-center gap-4 flex-wrap">
            <a
              href="tel:+91XXXXXXXXXX"
              className="inline-block px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-200 hover:opacity-90"
              style={{ background: '#ffffff', color: '#1e3a8a', fontFamily: "'Arial', sans-serif", letterSpacing: '0.04em' }}
            >
              📞 Call Us Now
            </a>
            <a
              href="https://wa.me/917089935433"
              className="inline-block px-8 py-3.5 rounded-full font-semibold text-white text-sm transition-all duration-200"
              style={{ border: '1px solid #93c5fd', fontFamily: "'Arial', sans-serif", letterSpacing: '0.04em' }}
              onMouseEnter={e => (e.currentTarget.style.background = '#1d4ed8')}
              onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
            >
              💬 WhatsApp Us
            </a>
          </motion.div>
        </div>
      </div>

    </section>
  );
};
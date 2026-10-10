
import { useRef } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import {
  ArrowUpRight,
  CalendarDays,
  MapPin,
} from "lucide-react";

import collegeBuilding from "../../assets/images/clg.png";

export default function HeroSection() {
  const sectionRef = useRef(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [0, 30]
  );

  const sealY = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [0, -15]
  );

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-[#FCFAF6] py-4 sm:py-6 lg:py-8 font-sans text-[#2A1F1B]"
    >
      {/* VINTAGE PARCHMENT WATERCOLOR & ARCHITECTURAL SKETCH BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 opacity-40 mix-blend-multiply bg-[radial-gradient(#D5A64A_1px,transparent_1px)] [background-size:24px_24px]" />
      
      {/* ARCHITECTURAL DOME LINE DRAWING WATERMARK (RIGHT SIDE BACKGROUND) */}
      <div className="pointer-events-none absolute -right-20 top-5 hidden w-[600px] opacity-15 lg:block">
        <svg viewBox="0 0 500 700" fill="none" stroke="#6E5028" strokeWidth="1.2">
          {/* Dome & Column Outline Sketches */}
          <path d="M 250 50 Q 250 10 250 10 Q 220 50 150 150 L 350 150 Z" />
          <path d="M 150 150 L 150 600 M 350 150 L 350 600 M 250 150 L 250 600" />
          <path d="M 100 220 L 400 220 M 100 350 L 400 350 M 100 480 L 400 480" />
          <circle cx="250" cy="100" r="25" />
          <path d="M 180 220 A 70 70 0 0 1 320 220" />
          <path d="M 180 350 A 70 70 0 0 1 320 350" />
          <path d="M 180 480 A 70 70 0 0 1 320 480" />
        </svg>
      </div>

      {/* BOTANICAL LEAF SKETCH (TOP LEFT & BOTTOM LEFT DECORATION) */}
      <div className="pointer-events-none absolute left-0 top-6 opacity-35">
        <svg width="180" height="220" viewBox="0 0 200 250" fill="none" stroke="#A38B6B" strokeWidth="1.5">
          <path d="M10 240 Q60 180 120 80 Q160 30 190 10" />
          <path d="M70 170 Q40 140 20 150 Q40 170 70 170Z" fill="#A38B6B" fillOpacity="0.15" />
          <path d="M90 135 Q130 110 145 125 Q120 140 90 135Z" fill="#A38B6B" fillOpacity="0.15" />
          <path d="M120 90 Q90 60 80 75 Q105 85 120 90Z" fill="#A38B6B" fillOpacity="0.15" />
        </svg>
      </div>

      <div className="pointer-events-none absolute left-6 bottom-2 opacity-40">
        <svg width="150" height="180" viewBox="0 0 200 200" fill="none" stroke="#8C7353" strokeWidth="1.5">
          <path d="M0 200 C50 150 100 100 180 20" />
          <path d="M50 160 C20 130 30 110 60 130 Z" fill="#8C7353" fillOpacity="0.2" />
          <path d="M90 120 C120 90 130 110 100 130 Z" fill="#8C7353" fillOpacity="0.2" />
        </svg>
      </div>

      {/* MAIN CONTAINER */}
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.15fr] lg:gap-10 xl:gap-14">

          {/* LEFT COLUMN: HERO CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: reduceMotion ? 0 : -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            {/* EYEBROW HEADER */}
            <div className="mb-2.5 flex items-center gap-2.5">
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#8B0000] sm:text-xs">
                GOVERNMENT COLLEGE OF ARCHITECTURE, LUCKNOW
              </span>
              <span className="h-px w-10 bg-[#A67C37]/50" />
              <span className="text-xs text-[#A67C37]">◆</span>
            </div>

            {/* CURSIVE SUBHEADING */}
            <p className="font-script text-3xl sm:text-4xl lg:text-5xl text-[#B38742] tracking-wide leading-none my-0.5">
              The Alumni Meet
            </p>

            {/* MAIN TITLE (DHAROHAR 2026) */}
            <div className="relative my-1.5">
              <h1 className="font-serif text-[52px] leading-[0.88] font-extrabold tracking-tight text-[#2A1F1B] sm:text-[72px] lg:text-[88px]">
                DHAROHAR
              </h1>
              
              <div className="mt-1 flex items-center gap-3.5">
                <span className="font-serif text-4xl font-extrabold tracking-tight text-[#8B0000] sm:text-5xl lg:text-6xl">
                  2026
                </span>
                <span className="h-px flex-1 bg-[#A67C37]/40" />
                <span className="text-sm text-[#A67C37]">◆</span>
              </div>
            </div>

            {/* DESCRIPTION */}
            <p className="mt-3.5 max-w-lg text-base font-medium leading-relaxed text-stone-800 sm:text-lg">
              Celebrating a legacy. Reconnecting generations.
            </p>
            <p className="mt-0.5 max-w-lg text-xs leading-relaxed text-stone-600 sm:text-sm">
              Honouring the people, memories and architectural journey that continue to shape our alma mater.
            </p>

            {/* EVENT DATE & VENUE PILLS */}
            <div className="mt-5 flex flex-wrap items-center gap-3">
              {/* Event Date Box */}
              <div className="flex items-center gap-3 rounded-lg border border-[#A67C37]/35 bg-white/70 px-3.5 py-2 shadow-2xs backdrop-blur-xs">
                <div className="flex h-7.5 w-7.5 items-center justify-center rounded-md bg-[#8B0000]/10 text-[#8B0000]">
                  <CalendarDays size={17} />
                </div>
                <div>
                  <p className="text-[9.5px] font-bold uppercase tracking-wider text-[#A67C37]">
                    EVENT DATE
                  </p>
                  <p className="text-xs font-bold text-[#2A1F1B]">
                    28 November 2026
                  </p>
                </div>
              </div>

              {/* Venue Box */}
              <div className="flex items-center gap-3 rounded-lg border border-[#A67C37]/35 bg-white/70 px-3.5 py-2 shadow-2xs backdrop-blur-xs">
                <div className="flex h-7.5 w-7.5 items-center justify-center rounded-md bg-[#8B0000]/10 text-[#8B0000]">
                  <MapPin size={17} />
                </div>
                <div>
                  <p className="text-[9.5px] font-bold uppercase tracking-wider text-[#A67C37]">
                    VENUE
                  </p>
                  <p className="text-xs font-bold text-[#2A1F1B]">
                    FOAP, AKTU, Lucknow
                  </p>
                </div>
              </div>
            </div>

            {/* CTA BUTTONS */}
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <Link
                to="/register"
                className="group inline-flex items-center gap-2 rounded-md bg-[#8B0000] px-4.5 py-2.5 text-xs font-bold tracking-wide text-white shadow-sm transition-all duration-200 hover:bg-[#700000] hover:shadow-md"
              >
                <span>Register for Dharohar</span>
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>

              <a
                href="/about#legacy"
                className="group inline-flex items-center gap-2 rounded-md border border-[#A67C37]/60 bg-white/60 px-4.5 py-2.5 text-xs font-bold tracking-wide text-[#2A1F1B] transition-all duration-200 hover:border-[#8B0000] hover:bg-white hover:text-[#8B0000]"
              >
                <span>Discover Our Legacy</span>
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </a>
            </div>

            {/* JUBILEE CARDS (BOTTOM LEFT) */}
            <div className="mt-6 grid max-w-md grid-cols-2 gap-3">
              {/* SILVER JUBILEE */}
              <div className="relative overflow-hidden rounded-lg border border-[#A67C37]/30 bg-[#FAF7EE] p-3 shadow-2xs">
                <p className="text-[9.5px] font-bold uppercase tracking-wider text-[#A67C37]">
                  SILVER JUBILEE
                </p>
                <p className="font-serif text-2xl font-extrabold text-[#2A1F1B]">
                  2001
                </p>
                <p className="text-[10.5px] font-medium text-stone-600">
                  Batch Celebration
                </p>

                {/* ARCH LINE SKETCH OVERLAY */}
                <svg
                  className="absolute -right-2 -bottom-2 h-15 w-15 opacity-20 text-[#A67C37]"
                  viewBox="0 0 100 100"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M20,100 L20,35 A30,30 0 0,1 80,35 L80,100 M32,100 L32,42 A18,18 0 0,1 68,42 L68,100" strokeWidth="2.5" />
                </svg>
              </div>

              {/* RUBY JUBILEE */}
              <div className="relative overflow-hidden rounded-lg border border-[#8B0000]/20 bg-[#FAF0F2] p-3 shadow-2xs">
                <p className="text-[9.5px] font-bold uppercase tracking-wider text-[#8B0000]">
                  RUBY JUBILEE
                </p>
                <p className="font-serif text-2xl font-extrabold text-[#2A1F1B]">
                  1986
                </p>
                <p className="text-[10.5px] font-medium text-stone-600">
                  Batch Celebration
                </p>

                {/* ARCH LINE SKETCH OVERLAY */}
                <svg
                  className="absolute -right-2 -bottom-2 h-15 w-15 opacity-20 text-[#8B0000]"
                  viewBox="0 0 100 100"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M20,100 L20,35 A30,30 0 0,1 80,35 L80,100 M32,100 L32,42 A18,18 0 0,1 68,42 L68,100" strokeWidth="2.5" />
                </svg>
              </div>
            </div>

          </motion.div>

          {/* RIGHT COLUMN: HERITAGE TORN POSTCARD & STAMPS (SHIFTED UPWARDS) */}
          <div className="relative mx-auto w-full max-w-[620px] py-0 -mt-2 lg:-mt-8">


            {/* BOTANICAL LEAF OVERLAY ON TOP OF POSTCARD */}
            <div className="pointer-events-none absolute -left-8 -top-6 z-30 opacity-80">
              <svg width="120" height="120" viewBox="0 0 150 150" fill="none" stroke="#6E5028" strokeWidth="1.2">
                <path d="M10 140 C40 100 80 50 130 10" />
                <path d="M40 100 Q10 70 30 50 Q60 80 40 100Z" fill="#8C7353" fillOpacity="0.4" />
                <path d="M70 70 Q50 30 70 20 Q90 50 70 70Z" fill="#8C7353" fillOpacity="0.4" />
                <path d="M95 45 Q90 10 110 15 Q115 35 95 45Z" fill="#8C7353" fillOpacity="0.4" />
              </svg>
            </div>

            {/* MAIN DECKLE TORN PAPER POSTCARD */}
            <motion.div
              style={{ y: imageY }}
              initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: -2 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="relative z-10 deckle-border bg-[#FFFDF9] p-3 sm:p-4 shadow-[0_25px_60px_rgba(40,30,20,0.18)] ring-1 ring-stone-900/5"
            >
              {/* COLLEGE BUILDING PHOTO */}
              <div className="relative overflow-hidden bg-stone-200 rounded-sm">
                <img
                  src={collegeBuilding}
                  alt="Government College of Architecture Lucknow Heritage Campus"
                  className="h-[320px] sm:h-[400px] lg:h-[430px] w-full object-cover object-center contrast-[1.03] brightness-[1.02]"
                />

                {/* BOTTOM GRADIENT OVERLAY ON PHOTO */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* PHOTO TEXT OVERLAY */}
                <div className="absolute bottom-3 left-4 text-white sm:bottom-5 sm:left-6">
                  <p className="font-script text-3xl sm:text-4xl text-[#F2D696] leading-none">
                    Our Alma Mater
                  </p>
                  <div className="mt-1 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-stone-200">
                    <span className="h-px w-6 bg-[#F2D696]" />
                    A LEGACY SINCE 1911
                    <span className="h-px w-6 bg-[#F2D696]" />
                  </div>
                </div>
              </div>

              {/* POSTAGE STAMP (TOP RIGHT OF POSTCARD) */}
              <div className="absolute right-6 top-6 z-20 flex items-center gap-2">
                {/* Vintage Scalloped Postage Stamp */}
                <div className="relative border-2 border-dashed border-[#8B0000]/70 bg-[#FFFDF7] p-2.5 text-center shadow-md">
                  <p className="text-[8px] font-extrabold uppercase tracking-widest text-[#8B0000]">
                    GCAAA
                  </p>
                  <p className="text-[7px] font-semibold uppercase tracking-wider text-stone-500">
                    ALUMNI MEET
                  </p>
                  <p className="font-serif text-lg font-black text-[#2A1F1B] leading-none my-0.5">
                    2026
                  </p>
                </div>

                {/* Wavy Postmark Cancel Lines */}
                <div className="hidden sm:block text-stone-400 opacity-60">
                  <svg width="45" height="40" viewBox="0 0 50 40">
                    <path d="M0 8 Q12 0 25 8 T50 8 M0 18 Q12 10 25 18 T50 18 M0 28 Q12 20 25 28 T50 28" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>

              {/* 3D RED WAX SEAL (BOTTOM LEFT OVERLAY) */}
              <motion.div
                style={{ y: sealY }}
                className="absolute -bottom-6 -left-6 z-30 flex h-28 w-28 sm:h-32 sm:w-32 flex-col items-center justify-center rounded-full border-2 border-[#D4AF37] bg-gradient-to-br from-[#A81818] via-[#800000] to-[#4A0000] text-center text-white shadow-2xl ring-4 ring-black/10"
              >
                <span className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#F5D78B]">
                  CELEBRATING
                </span>
                <span className="font-serif text-3xl sm:text-4xl font-black leading-none text-white my-0.5">
                  25
                </span>
                <span className="text-[8px] font-bold uppercase tracking-[0.14em] text-white/90">
                  YEARS
                </span>
                <span className="text-[7px] font-medium text-[#F5D78B]">
                  BATCH 2001
                </span>
              </motion.div>

              {/* CIRCULAR INK POSTMARK SEAL (BOTTOM RIGHT OVERLAY) */}
              <div className="absolute -bottom-5 -right-4 z-20 pointer-events-none opacity-85">
                <div className="relative flex h-24 w-24 items-center justify-center rounded-full border-2 border-dashed border-[#2A1F1B]/70 p-1 text-center font-serif text-[#2A1F1B]">
                  <div className="flex h-full w-full flex-col items-center justify-center rounded-full border border-[#2A1F1B]/50">
                    <span className="text-[7px] font-bold uppercase tracking-widest">EST. 1911</span>
                    <span className="font-serif text-sm font-extrabold text-[#8B0000]">1911</span>
                    <span className="text-[6.5px] font-bold uppercase tracking-wider">LUCKNOW</span>
                  </div>
                </div>
              </div>

            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}


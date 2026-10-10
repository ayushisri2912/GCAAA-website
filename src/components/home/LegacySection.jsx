
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Landmark,
  MoveUpRight,
  UsersRound,
} from "lucide-react";
import collegeImage from "../../assets/images/GCAAA_college_building.jpg";

const milestones = [
  {
    year: "1911",
    title: "The Origin",
    description:
      "The institution traces its origins to the Government College of Arts & Crafts.",
  },
  {
    year: "1976",
    title: "A New Beginning",
    description:
      "The School of Architecture separated from the Government College of Arts & Crafts.",
  },
  {
    year: "1980",
    title: "GCA Lucknow",
    description:
      "It became Government College of Architecture, Lucknow.",
  },
  {
    year: "2000–01",
    title: "A New Academic Chapter",
    description:
      "The college became affiliated with U.P. Technical University, now AKTU.",
  },
  {
    year: "2013",
    title: "The Alumni Association",
    description:
      "GCAAA was formed to strengthen the bond between alumni and their alma mater.",
  },
];

const LegacySection = () => {
  const reduceMotion = useReducedMotion();

  const reveal = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.65, delay: reduceMotion ? 0 : delay },
  });

  return (
    <section
      id="legacy"
      className="relative isolate overflow-hidden bg-[#FCFAF6] px-5 py-20 sm:px-8 sm:py-24 lg:px-16 lg:py-28"
    >
      {/* Fine dotted paper texture */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.22]"
        style={{
          backgroundImage:
            "radial-gradient(#B9A68E 0.65px, transparent 0.65px)",
          backgroundSize: "10px 10px",
          maskImage:
            "linear-gradient(to bottom, black, transparent 85%)",
        }}
      />

     

      <div className="mx-auto max-w-7xl">
        {/* Editorial heading */}
        <motion.div {...reveal()} className="mb-14 lg:mb-16">
          <div className="flex items-center gap-4">
            <span className="h-10 w-10 shrink-0 rounded-[38%] bg-[#C7A05A] shadow-sm" />

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#A51E32]">
                The Story Behind Our Legacy
              </p>
              <p className="mt-1 text-xs tracking-[0.13em] text-[#756B61]">
                GOVERNMENT COLLEGE OF ARCHITECTURE · LUCKNOW
              </p>
            </div>
          </div>

          <div className="mt-9 grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <h2 className="max-w-3xl font-serif text-4xl leading-[1.1] tracking-tight text-[#29231F] sm:text-5xl lg:text-7xl">
              More than a college.
              <br />
              <span className="italic text-[#A51E32]">
                A lifelong connection.
              </span>
            </h2>

            <p className="max-w-xl text-sm leading-7 text-[#6D625A] sm:text-base lg:justify-self-end">
              Generations of architects, shared memories and a
              common alma mater. Discover the journey of GCA
              and the community that continues to carry its
              legacy forward.
            </p>
          </div>
        </motion.div>

        {/* Image and story */}
        <div className="grid items-stretch gap-8 lg:grid-cols-[1.12fr_0.88fr] lg:gap-12">
          <motion.div
            {...reveal(0.1)}
            className="relative min-h-[300px] sm:min-h-[430px]"
          >
            {/* Offset gold frame */}
            <div className="absolute -bottom-3 -right-3 h-full w-full border border-[#C5A15B]/70" />

            <div className="relative h-full min-h-[300px] overflow-hidden border-[7px] border-white shadow-[0_18px_50px_rgba(54,36,22,0.12)] sm:min-h-[430px]">
              <img
                src={collegeImage}
                alt="Government College of Architecture, Lucknow"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#241711]/80 via-transparent to-transparent" />

              {/* Photo caption */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#E8C98A]">
                  Our Alma Mater
                </p>

                <h3 className="mt-2 font-serif text-3xl text-white sm:text-4xl">
                  Rooted in history.
                  <br />
                  Built for the future.
                </h3>

                <div className="mt-5 flex items-center gap-3 text-xs tracking-[0.15em] text-white/80">
                  <span className="h-px w-8 bg-[#E8C98A]" />
                  LUCKNOW · UTTAR PRADESH
                </div>
              </div>

              {/* Heritage stamp */}
              <div className="absolute right-4 top-4 flex h-20 w-20 rotate-6 flex-col items-center justify-center rounded-full border border-white/70 bg-[#A51E32]/95 text-center text-white shadow-lg sm:right-6 sm:top-6 sm:h-24 sm:w-24">
                <span className="text-[9px] uppercase tracking-[0.18em]">
                  Since
                </span>
                <span className="font-serif text-2xl">1911</span>
                <span className="text-[8px] uppercase tracking-[0.12em]">
                  GCA
                </span>
              </div>
            </div>
          </motion.div>

          {/* Heritage text */}
          <motion.div
            {...reveal(0.18)}
            className="flex flex-col justify-center py-4 lg:pl-3"
          >
            <div className="mb-6 flex items-center gap-3">
              <Landmark
                size={21}
                strokeWidth={1.4}
                className="text-[#A51E32]"
              />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#A51E32]">
                Our Institutional Heritage
              </span>
            </div>

            <h3 className="font-serif text-3xl leading-snug text-[#29231F] sm:text-4xl">
              A journey spanning
              <span className="italic text-[#A51E32]"> generations.</span>
            </h3>

            <p className="mt-6 text-sm leading-7 text-[#6D625A] sm:text-base sm:leading-8">
              The institution traces its origins to 1911 as part
              of the Government College of Arts & Crafts. Over
              the decades, it evolved into Government College
              of Architecture, Lucknow, and became affiliated
              with the university system now known as AKTU.
            </p>

            <p className="mt-4 text-sm leading-7 text-[#6D625A] sm:text-base sm:leading-8">
              Today, its alumni carry forward a shared legacy
              across architecture, urban planning, education,
              sustainable design and construction.
            </p>

            {/* Association highlight */}
            <div className="mt-8 flex gap-4 border-y border-[#E4D8C7] py-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#A51E32]/[0.07] text-[#A51E32]">
                <UsersRound size={23} strokeWidth={1.5} />
              </div>

              <div>
                <p className="font-serif text-xl text-[#29231F]">
                  The GCA Alumni Association
                </p>
                <p className="mt-2 text-sm leading-6 text-[#756B61]">
                  Established in 2013, GCAAA brings alumni
                  together to celebrate their roots and
                  contribute to the institution's future.
                </p>
              </div>
            </div>

            <a
              href="https://gcaalumniassociation.com/"
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex w-fit items-center gap-3 border-b border-[#A51E32] pb-2 text-sm font-semibold text-[#A51E32] transition-colors hover:text-[#C29A4E]"
            >
              Explore the Alumni Association
              <MoveUpRight size={17} />
            </a>
          </motion.div>
        </div>

        {/* Timeline */}
        <div className="mt-24 lg:mt-32">
          <motion.div {...reveal()} className="mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#A51E32]">
              A Timeline of Transformation
            </p>

            <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <h3 className="font-serif text-3xl text-[#29231F] sm:text-4xl lg:text-5xl">
                Milestones that shaped us.
              </h3>

              <span className="text-xs uppercase tracking-[0.16em] text-[#8B7C6C]">
                1911 — Present
              </span>
            </div>
          </motion.div>

          <div className="grid gap-0 border-y border-[#DCCDB8] sm:grid-cols-2 lg:grid-cols-5">
            {milestones.map((item, index) => (
              <motion.div
                key={item.year}
                {...reveal(index * 0.07)}
                className="group relative border-b border-[#DCCDB8] py-7 sm:px-5 sm:odd:border-r lg:border-b-0 lg:border-r lg:px-6 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="font-serif text-3xl text-[#A51E32]">
                    {item.year}
                  </span>

                  <ArrowUpRight
                    size={18}
                    className="text-[#B79A67] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </div>

                <h4 className="font-serif text-xl text-[#29231F]">
                  {item.title}
                </h4>

                <p className="mt-3 text-sm leading-6 text-[#756B61]">
                  {item.description}
                </p>

                <div className="mt-6 h-[2px] w-9 bg-[#C5A15B] transition-all duration-300 group-hover:w-16" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Closing editorial banner */}
        <motion.div
          {...reveal()}
          className="relative mt-16 overflow-hidden bg-[#A51E32] px-6 py-9 text-white sm:px-10 sm:py-11 lg:px-14"
        >
          <div className="pointer-events-none absolute -right-12 -top-20 h-64 w-64 rounded-full border border-white/15" />
          <div className="pointer-events-none absolute -right-2 -top-10 h-44 w-44 rounded-full border border-[#E3C27F]/30" />

          <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#E8CA8B]">
                Dharohar 2026 · Alumni GBM
              </p>

              <h3 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">
                Different journeys.
                <br />
                One alma mater.
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/75">
                Celebrating the Silver Jubilee Batch of 2001
                and the Ruby Jubilee Batch of 1986.
              </p>
            </div>

            <a
              href="/register"
              className="inline-flex w-fit shrink-0 items-center gap-3 border border-[#E8CA8B]/70 px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-white hover:text-[#A51E32]"
            >
              Join the Celebration
              <ArrowUpRight size={17} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LegacySection;


import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  CalendarDays,
  MapPin,
  Sparkles,
} from "lucide-react";
import collegeImage from "../../assets/images/dharohar.png";

const DharoharSection = () => {
  const reduceMotion = useReducedMotion();

  const reveal = {
    initial: reduceMotion ? false : { opacity: 0, y: 22 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6 },
  };

  return (
    <section
      id="dharohar"
      className="relative overflow-hidden bg-[#FCFAF6] px-5 py-8 sm:px-8 lg:px-16 lg:py-12"
    >
      <div className="mx-auto max-w-7xl">
        {/* Editorial header */}
        <motion.div {...reveal}>
          <div className="flex items-center gap-3">
            <span className="h-6 w-6 rounded-full bg-gradient-to-br from-[#D5A64A] to-[#B88E4C] shadow-xs" />
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#A51E32]">
              AN ALUMNI HOMECOMING · 2026
            </p>
          </div>

          <div className="mt-4 grid gap-6 lg:grid-cols-[1fr_0.65fr] lg:items-end">
            <div>
              {/* STYLIZED HINDI DHAROHAR TITLE */}
              <h2 className="font-hindi text-7xl leading-none text-[#A51E32] sm:text-8xl lg:text-[100px] tracking-tight font-extrabold">
                धरोहर
              </h2>

              <div className="mt-3 flex flex-wrap items-center gap-3">
                <span className="h-px w-9 bg-[#C7A05A]" />
                <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#51453B]">
                  DHAROHAR 2026
                </span>
                <span className="text-[#C7A05A]">✳</span>
                <span className="text-xs tracking-[0.12em] text-[#827367]">
                  GCAAA · LUCKNOW
                </span>
              </div>
            </div>

            <p className="max-w-lg text-sm leading-7 text-[#6D625A] sm:text-base sm:leading-8 lg:justify-self-end">
              Some memories never fade. Dharohar brings together
              generations of alumni to celebrate their roots,
              revisit campus memories and honour the legacy
              they share.
            </p>
          </div>
        </motion.div>

        {/* Main editorial composition */}
        <div className="mt-12 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          {/* Photo collage */}
          <motion.div
            {...reveal}
            className="relative min-h-[350px] sm:min-h-[470px]"
          >
            <div className="absolute bottom-0 left-3 right-0 top-3 border border-[#C7A05A]/70" />

            <div className="absolute bottom-5 left-0 right-5 top-0 overflow-hidden border-[7px] border-white shadow-[0_15px_45px_rgba(60,40,20,0.12)]">
              <img
                src={collegeImage}
                alt="Government College of Architecture, Lucknow"
                loading="lazy"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#261810]/70 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 text-white sm:bottom-9 sm:left-9">
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#F0D59C]">
                  Our Alma Mater
                </p>
                <h3 className="mt-2 font-serif text-3xl sm:text-4xl">
                  One campus.
                  <br />
                  A thousand memories.
                </h3>
              </div>
            </div>

            {/* Jubilee stamp */}
            <div className="absolute right-0 top-5 flex h-24 w-24 rotate-6 flex-col items-center justify-center rounded-full border-2 border-[#F8E6BC] bg-[#A51E32] text-center text-white shadow-xl sm:right-1 sm:top-8 sm:h-28 sm:w-28">
              <span className="text-[9px] uppercase tracking-[0.18em]">
                Celebrating
              </span>
              <span className="font-serif text-3xl">25</span>
              <span className="text-[9px] uppercase tracking-[0.16em]">
                Years · 2001
              </span>
            </div>

            {/* Postcard caption */}
            <div className="absolute bottom-0 right-0 bg-[#F2E5CF] px-4 py-3 shadow-md sm:px-6">
              <p className="font-serif text-lg italic text-[#6E2630]">
                A legacy since 1911
              </p>
            </div>
          </motion.div>

          {/* Invitation copy */}
          <motion.div
            {...reveal}
            className="flex flex-col justify-center py-4"
          >
            <div className="flex items-center gap-3">
              <Sparkles
                size={19}
                strokeWidth={1.4}
                className="text-[#B18A48]"
              />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#A51E32]">
                The Invitation
              </span>
            </div>

            <h3 className="mt-5 font-serif text-3xl leading-tight text-[#29231F] sm:text-4xl lg:text-5xl">
              It’s time to come
              <span className="italic text-[#A51E32]">
                {" "}together again.
              </span>
            </h3>

            <p className="mt-5 text-sm leading-7 text-[#6D625A] sm:text-base sm:leading-8">
              The GCA Alumni Association warmly invites alumni
              to its Annual General Body Meeting and Dharohar
              2026. Reconnect with old friends, share your
              journey and celebrate the institution that
              brought you together.
            </p>

            {/* Event details */}
            <div className="mt-8 space-y-5 border-y border-[#E4D7C5] py-6">
              <div className="flex items-start gap-4">
                <CalendarDays
                  size={21}
                  className="mt-1 shrink-0 text-[#A51E32]"
                />
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-[#8B7867]">
                    Date
                  </p>
                  <p className="mt-1 font-serif text-xl text-[#29231F]">
                    28 November 2026
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin
                  size={21}
                  className="mt-1 shrink-0 text-[#A51E32]"
                />
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-[#8B7867]">
                    Venue
                  </p>
                  <p className="mt-1 text-sm leading-6 text-[#29231F]">
                    Faculty of Architecture & Planning, AKTU,
                    Tagore Marg, Lucknow
                  </p>
                </div>
              </div>
            </div>

            <a
              href="/register"
              className="mt-7 inline-flex w-fit items-center gap-3 bg-[#A51E32] px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#7B1828]"
            >
              Register / RSVP 2026
              <ArrowUpRight size={18} />
            </a>
          </motion.div>
        </div>

        {/* Jubilee highlights */}
        <motion.div {...reveal} className="mt-20">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#A51E32]">
                A Celebration Across Generations
              </p>
              <h3 className="mt-3 font-serif text-3xl text-[#29231F] sm:text-4xl">
                Two batches. One shared legacy.
              </h3>
            </div>

            <span className="text-sm text-[#827367]">
              Silver & Ruby Jubilee · 2026
            </span>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {/* Silver Jubilee */}
            <div className="group relative overflow-hidden border border-[#E3D5C1] bg-white p-7 transition-all duration-300 hover:border-[#C7A05A] hover:shadow-lg sm:p-9">
              <span className="absolute right-5 top-2 font-serif text-8xl text-[#A51E32]/[0.06]">
                25
              </span>

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#A51E32]">
                Silver Jubilee
              </p>
              <h4 className="mt-3 font-serif text-3xl text-[#29231F] sm:text-4xl">
                Batch of 2001
              </h4>
              <p className="mt-3 max-w-md text-sm leading-7 text-[#756B61]">
                Celebrating 25 years of friendships, professional
                achievements and memories that continue to connect
                the cohort.
              </p>
              <div className="mt-6 h-px w-full bg-[#E8DED0]" />
              <p className="mt-4 text-xs uppercase tracking-[0.16em] text-[#9B7A43]">
                25 Years · Silver Jubilee
              </p>
            </div>

            {/* Ruby Jubilee */}
            <div className="group relative overflow-hidden border border-[#E3D5C1] bg-[#F4EBDD] p-7 transition-all duration-300 hover:border-[#A51E32] hover:shadow-lg sm:p-9">
              <span className="absolute right-5 top-2 font-serif text-8xl text-[#A51E32]/[0.07]">
                40
              </span>

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#A51E32]">
                Ruby Jubilee
              </p>
              <h4 className="mt-3 font-serif text-3xl text-[#29231F] sm:text-4xl">
                Batch of 1986
              </h4>
              <p className="mt-3 max-w-md text-sm leading-7 text-[#756B61]">
                Honouring four decades of experience, lasting
                friendships and a legacy built across generations
                of architects.
              </p>
              <div className="mt-6 h-px w-full bg-[#DCCBB1]" />
              <p className="mt-4 text-xs uppercase tracking-[0.16em] text-[#9B7A43]">
                40 Years · Ruby Jubilee
              </p>
            </div>
          </div>
        </motion.div>

        {/* Closing line */}
        <motion.div
          {...reveal}
          className="mt-14 border-t border-[#E2D5C3] pt-7 text-center"
        >
          <p className="font-serif text-2xl italic text-[#8B2634] sm:text-3xl">
            “It’s time to come together once again.”
          </p>
          <p className="mt-3 text-xs uppercase tracking-[0.2em] text-[#827367]">
            Government College of Architecture Alumni Association
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DharoharSection;

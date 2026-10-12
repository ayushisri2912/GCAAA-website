
import { Link } from "react-router-dom";
import {
  CalendarDays,
  MapPin,
  Users,
  ArrowRight,
} from "lucide-react";

import dharoharBg from "../../assets/images/print.png";

const DharoharSection = () => {
  return (
    <section
      id="dharohar"
      className="relative isolate overflow-hidden bg-white"
    >
      {/* Background image */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${dharoharBg})` }}
        aria-hidden="true"
      />

      {/* Light white overlay */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-white/40"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-[1400px] px-5 py-12 sm:px-8 sm:py-14 lg:px-10 lg:py-16">

        {/* Heading */}
        <div className="mb-8 max-w-3xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[#B70D2B] sm:text-sm">
            GCAAA Alumni Meet · 2026
          </p>

          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            DHAROHAR <span className="text-[#B70D2B]">2026</span>
          </h2>

          <div className="mt-4 h-1 w-16 bg-[#B70D2B]" />

          <p className="mt-5 max-w-2xl text-base leading-7 text-gray-800 sm:text-lg">
            Alumni Meets, named Dharohar, serve as a vibrant platform
            for reconnecting with former students, celebrating shared
            memories, and building a strong network of professionals.
          </p>
        </div>

        {/* Event content */}
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">

          {/* Event details */}
          <div className="border border-gray-200 bg-white/90 p-5 sm:p-7 lg:p-8">
            <h3 className="text-xl font-bold text-black sm:text-2xl">
              GCA Alumni Meet — DHAROHAR 2026
            </h3>

            <p className="mt-3 text-sm leading-7 text-gray-700 sm:text-base">
              The GCA Alumni Association invites alumni to its Annual
              General Body Meeting on 28 November 2026. Reconnect with
              fellow alumni, celebrate milestone batches, and relive
              the memories of your college years.
            </p>

            <div className="mt-6 space-y-5">
              <div className="flex items-start gap-3">
                <CalendarDays
                  size={21}
                  className="mt-1 shrink-0 text-[#B70D2B]"
                />
                <div>
                  <p className="font-semibold text-black">Event Date</p>
                  <p className="mt-1 text-sm text-gray-700">
                    28 November 2026
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin
                  size={21}
                  className="mt-1 shrink-0 text-[#B70D2B]"
                />
                <div>
                  <p className="font-semibold text-black">Venue</p>
                  <p className="mt-1 text-sm leading-6 text-gray-700">
                    Faculty of Architecture &amp; Planning,
                    <br />
                    AKTU, Tagore Marg, Lucknow
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Users
                  size={21}
                  className="mt-1 shrink-0 text-[#B70D2B]"
                />
                <div>
                  <p className="font-semibold text-black">
                    Jubilee Celebrations
                  </p>
                  <p className="mt-1 text-sm leading-6 text-gray-700">
                    Silver Jubilee Batch — 2001
                    <br />
                    Ruby Jubilee Batch — 1986
                  </p>
                </div>
              </div>
            </div>

            <Link
              to="/dharohar"
              className="mt-7 inline-flex items-center gap-2 bg-[#B70D2B] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-black"
            >
              Explore Dharohar 2026
              <ArrowRight size={17} />
            </Link>
          </div>

          {/* Invitation */}
          <div className="flex flex-col justify-center border-l-4 border-[#B70D2B] bg-white/90 p-6 sm:p-8 lg:p-9">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#B70D2B] sm:text-sm">
              An Invitation to Reconnect
            </p>

            <h3 className="mt-4 text-2xl font-bold leading-snug text-black sm:text-3xl">
              Come together.
              <br />
              Celebrate our legacy.
            </h3>

            <p className="mt-4 text-sm leading-7 text-gray-700 sm:text-base">
              This special gathering celebrates the Ruby Jubilee batch
              of 1986 and the Silver Jubilee batch of 2001, alongside
              the wider GCA alumni community.
            </p>

            <p className="mt-3 text-sm leading-7 text-gray-700 sm:text-base">
              Join us to reconnect, share experiences, and strengthen
              the bond with your alma mater.
            </p>

            <Link
              to="/register"
              className="mt-6 inline-flex w-fit items-center gap-2 border border-[#B70D2B] px-5 py-3 text-sm font-semibold text-[#B70D2B] transition-colors hover:bg-[#B70D2B] hover:text-white"
            >
              Register / RSVP
              <ArrowRight size={17} />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DharoharSection;


import { Link } from "react-router-dom";
import collegeImage from "../../assets/images/clg.png";

const announcements = [
  "GCAAA Alumni Meet — 28 November 2026",
  "Silver Jubilee Batch — 2001",
  "Ruby Jubilee Batch — 1986",
  "Reconnect with the GCAAA Alumni Community",
];

const HeroSection = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative flex min-h-[460px] items-center overflow-hidden bg-black sm:min-h-[510px] lg:min-h-[560px]">

        {/* Background Image */}
        <img
          src={collegeImage}
          alt="Government College of Architecture, Lucknow"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* Image Overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Hero Content */}
        <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5 py-16 sm:px-8 lg:px-12">
          <div className="max-w-3xl">

            <p className="mb-5 border-l-4 border-[#B70D2B] pl-3 text-xs font-semibold uppercase tracking-[0.16em] text-white sm:text-sm">
              Government College of Architecture, Lucknow
            </p>

            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              GCAAA
              <span className="mt-2 block text-2xl font-semibold sm:text-3xl lg:text-4xl">
                Alumni Association
              </span>
            </h1>

            <h2 className="mt-5 text-xl font-semibold text-white sm:text-2xl">
              Alumni Meet 2026
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-white/90 sm:text-base">
              Celebrating our heritage, reconnecting alumni, and
              strengthening the bond with our alma mater.
            </p>

            {/* Event Details */}
            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white">
              <p>
                <span className="font-semibold">Date:</span>{" "}
                28 November 2026
              </p>

              <p>
                <span className="font-semibold">Venue:</span>{" "}
                FOAP, AKTU, Lucknow
              </p>
            </div>

            {/* Buttons */}
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/about"
                className="inline-flex items-center justify-center bg-[#B70D2B] px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white hover:text-[#B70D2B]"
              >
                Explore GCAAA
              </Link>

              <Link
                to="/dharohar"
                className="inline-flex items-center justify-center border border-white px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white hover:text-black"
              >
                Dharohar 2026
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ANNOUNCEMENT TICKER */}
      <section
        aria-label="Alumni announcements"
        className="flex min-h-9 overflow-hidden border-b border-[#B70D2B] bg-white"
      >
        {/* Fixed Label */}
        <div className="relative z-10 flex shrink-0 items-center bg-[#B70D2B] px-3 text-[10px] font-bold uppercase tracking-wide text-white sm:px-4">
          Latest Updates
        </div>

        {/* Moving Messages */}
        <div className="group flex min-w-0 flex-1 items-center overflow-hidden">
          <div className="flex w-max shrink-0 animate-[gcaaaTicker_35s_linear_infinite] group-hover:[animation-play-state:paused] motion-reduce:animate-none">

            {[0, 1].map((copy) => (
              <div
                key={copy}
                aria-hidden={copy === 1 ? "true" : undefined}
                className="flex shrink-0 items-center"
              >
                {announcements.map((message) => (
                  <div
                    key={message}
                    className="flex shrink-0 items-center gap-5 px-5"
                  >
                    <span className="whitespace-nowrap text-[11px] font-medium text-black sm:text-xs">
                      {message}
                    </span>

                    <span className="text-[10px] text-[#B70D2B]">
                      ◆
                    </span>
                  </div>
                ))}
              </div>
            ))}

          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;

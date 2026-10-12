
import { Link } from "react-router-dom";

const AlumniAssociationSection = () => {
  return (
    <section className="bg-white py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">

        {/* Main Content */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">

          {/* About Content */}
          <div className="flex flex-col justify-between lg:col-span-7">
            <div>
              {/* Section Heading */}
              <div className="mb-6">
                <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#B70D2B]">
                  About the Association
                </p>

                <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
                  GCA Alumni Association
                </h2>

                <div className="mt-4 h-1 w-16 bg-[#B70D2B]" />
              </div>

              <h3 className="mb-4 text-xl font-semibold text-gray-800 sm:text-2xl">
                A Community Connected by a Shared Legacy
              </h3>

              <p className="mb-4 text-base leading-7 text-gray-600">
                The alumni of Government College of Architecture, Lucknow
                (now Faculty of Architecture & Planning, AKTU) are the
                foundation of its rich legacy and continued excellence.
              </p>

              <p className="mb-4 text-base leading-7 text-gray-600">
                Over the years, our alumni have become leaders, innovators,
                educators, and changemakers in architecture, urban planning,
                sustainable design, and construction. Their achievements
                extend across India and around the world.
              </p>

              <p className="text-base leading-7 text-gray-600">
                Established in 2013, GCAAA brings alumni together to
                strengthen professional connections, share experiences,
                and inspire future generations of architects and planners.
              </p>
            </div>

            <div className="pt-6">
              <Link
                to="/committee"
                className="inline-flex items-center gap-2 border border-[#B70D2B] px-5 py-3 text-sm font-semibold text-[#B70D2B] transition-colors hover:bg-[#B70D2B] hover:text-white"
              >
                Meet Our Association
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          {/* Highlights */}
          <div className="lg:col-span-5">
            <div className="flex h-full flex-col justify-between border border-gray-200 bg-gray-50">

              <div className="flex flex-1 flex-col justify-center border-b border-gray-200 p-6 sm:p-7">
                <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[#B70D2B]">
                  Our Beginning
                </p>
                <h3 className="text-3xl font-bold text-gray-900">
                  2013
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  The year GCAAA was formed to bring the alumni community
                  together.
                </p>
              </div>

              <div className="flex flex-1 flex-col justify-center border-b border-gray-200 p-6 sm:p-7">
                <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[#B70D2B]">
                  Our Community
                </p>
                <h3 className="text-xl font-semibold text-gray-900">
                  Alumni Across Generations
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Connecting professionals, educators, planners, and
                  architects through a shared alma mater.
                </p>
              </div>

              <div className="flex flex-1 flex-col justify-center p-6 sm:p-7">
                <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[#B70D2B]">
                  Upcoming Gathering
                </p>
                <h3 className="text-xl font-semibold text-gray-900">
                  Dharohar 2026
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  The Annual General Body Meeting on 28 November 2026,
                  including the Silver Jubilee of Batch 2001 and Ruby
                  Jubilee of Batch 1986.
                </p>

                <Link
                  to="/dharohar"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#B70D2B] hover:text-black"
                >
                  Event Details <span aria-hidden="true">→</span>
                </Link>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Highlight Strip */}
        <div className="mt-10 border-y border-gray-200 py-5">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-center text-sm font-semibold text-gray-700 sm:justify-between">
            <span>Connect</span>
            <span className="hidden text-[#B70D2B] sm:inline">•</span>
            <span>Collaborate</span>
            <span className="hidden text-[#B70D2B] sm:inline">•</span>
            <span>Share Experiences</span>
            <span className="hidden text-[#B70D2B] sm:inline">•</span>
            <span>Inspire Future Generations</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AlumniAssociationSection;

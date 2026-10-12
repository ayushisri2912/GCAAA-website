
import { Link } from "react-router-dom";
import collegeImage from "../../assets/images/building.jpg";

const LegacySection = () => {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">

        {/* Section Heading */}
        <div className="mb-10 max-w-4xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#B70D2B] sm:text-sm">
            About GCAAA
          </p>

          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
            Government College of Architecture,
            <span className="block">now (FOAP, AKTU)</span>
          </h2>

          <div className="mt-4 h-1 w-16 bg-[#B70D2B]" />
        </div>

        {/* Image and History */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-12">

          {/* College Image */}
          <div className="overflow-hidden border border-gray-200">
            <img
              src={collegeImage}
              alt="Government College of Architecture, Lucknow"
              className="h-[280px] w-full object-cover sm:h-[380px] lg:h-[440px]"
            />
          </div>

          {/* History Content */}
          <div className="space-y-5 text-sm leading-7 text-gray-700 sm:text-base">

            <p>
              The institute traces its origins back to 1911, as a part of
              the Government College of Arts & Crafts. It is one of the
              oldest architectural institutions in the country. In 1976,
              it separated from the Government College of Arts & Crafts
              and was renamed the Govt. School of Architecture. Later,
              in 1980, it became the Govt. College of Architecture,
              Lucknow (popularly known as GCA, Lucknow) and attained
              the status of a constituent college of Lucknow University.
            </p>

            <p>
              Until the academic session of 1999–2000, the college,
              forming the Faculty of Architecture of Lucknow University,
              conducted a five-year degree program leading to a
              Bachelor's degree in Architecture (B. Arch).
            </p>

            <p>
              Starting from the academic session 2000–2001, as per a
              government directive applicable to all technical
              institutions of the state, it was affiliated with the
              newly established U.P. Technical University, Lucknow
              (now AKTU) for all academic matters.
            </p>

        

            <Link
              to="/about"
              className="inline-flex items-center gap-2 border border-[#B70D2B] px-5 py-3 text-sm font-semibold text-[#B70D2B] transition-colors hover:bg-[#B70D2B] hover:text-white"
            >
              Read More About Us
              <span aria-hidden="true">→</span>
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
};

export default LegacySection;

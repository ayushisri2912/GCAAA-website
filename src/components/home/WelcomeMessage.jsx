import vandanaImage from "../../assets/images/p-1.png";
import anupamImage from "../../assets/images/p-2.png";
import vishalImage from "../../assets/images/p-3.png";

const leaders = [
  {
    number: "01",
    name: "Dr. Vandana Sehgal",
    role: "Patron",
    designation: "Principal and Dean, FOAP–AKTU",
    image: vandanaImage,
    message:
      "I take great pride that our institute continues to grow steadily in student enrolment, faculty strength, academic excellence, campus-facilitated learning, and institutional resources. We take pride in our achievements and remain steadfast in our vision for the future.",
  },
  {
    number: "02",
    name: "Ar. Anupam Mittal",
    role: "President, GCAAA",
    image: anupamImage,
    message:
      "Since its formation in 2013, GCAAA has grown into a vibrant alumni community, earning recognition, creating meaningful impact, and proudly carrying forward the legacy of our alma mater beyond architecture. Dharohar 2026 celebrates this journey and the bond that unites us.",
  },
  {
    number: "03",
    name: "Ar. Vishal Gulati",
    role: "General Secretary, GCAAA",
    image: vishalImage,
    message:
      "Our alumni are our extended family and our strategic strength for networking and expanding horizons within India and abroad. We take pride in our annual GBMs and welcome you all for this fun-filled event to connect with each other.",
  },
];

const WelcomeMessages = () => {
  return (
    <section className="relative overflow-hidden bg-[#F8F6F1] py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Section Heading */}
        <div className="mb-10 sm:mb-14">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#B70D2B] sm:text-sm">
            GCAAA · Leadership
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-[#252525] sm:text-4xl lg:text-5xl">
            Welcome Messages
          </h2>

          <div className="mt-5 h-[3px] w-16 bg-[#B70D2B]" />

          <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
            A message from our leadership as alumni come together
            to celebrate their shared legacy at Dharohar 2026.
          </p>
        </div>

        {/* Leadership Profiles */}
        <div className="space-y-6 sm:space-y-8">
          {leaders.map((leader) => (
            <article
              key={leader.number}
              className="group grid items-center gap-6 border border-[#E8E0D5] bg-white p-5 transition-all duration-300 hover:border-[#C9A15A] hover:shadow-[0_12px_35px_rgba(55,35,20,0.07)] sm:grid-cols-[180px_1fr] sm:gap-8 sm:p-7 lg:grid-cols-[220px_1fr] lg:gap-10 lg:p-9"
            >
              {/* Portrait */}
              <div className="flex justify-center sm:justify-start">
                <div className="rounded-full border-2 border-[#B70D2B] p-[5px] transition-transform duration-300 group-hover:scale-[1.03]">
                  <div className="rounded-full border border-[#C9A15A] p-[3px]">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      loading="lazy"
                      className="h-36 w-36 rounded-full object-cover object-center sm:h-40 sm:w-40 lg:h-48 lg:w-48"
                    />
                  </div>
                </div>
              </div>

              {/* Message Content */}
              <div className="min-w-0">
                <div className="mb-3 flex items-center gap-3">
                  <span className="text-sm font-bold tracking-widest text-[#B70D2B]">
                    {leader.number}
                  </span>
                  <span className="h-px w-10 bg-[#C9A15A]" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#8B1E2D] sm:text-xs">
                    {leader.role}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#252525] sm:text-2xl lg:text-3xl">
                  {leader.name}
                </h3>

                {leader.designation && (
                  <p className="mt-2 text-sm font-medium text-gray-500 sm:text-base">
                    {leader.designation}
                  </p>
                )}

                <div className="my-4 h-px w-full bg-[#EDE7DE]" />

                <p className="max-w-3xl text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
                  {leader.message}
                </p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WelcomeMessages;
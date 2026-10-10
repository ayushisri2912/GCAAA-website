

import {
  ArrowUpRight,
  CalendarDays,
  MapPin,
  UsersRound,
  Mail,
} from "lucide-react";

import gcaaaLogo from "../../assets/images/logo.png";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Dharohar 2026", href: "/dharohar" },
  { label: "Batches", href: "/batches" },
  { label: "Committee", href: "/committee" },
  { label: "Gallery", href: "/gallery" },
  { label: "Sponsors", href: "/sponsors" },
  { label: "Contact", href: "/contact" },
];



const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/", symbol: "in" },
  { label: "Instagram", href: "https://www.instagram.com/", symbol: "◎" },
  { label: "Facebook", href: "https://www.facebook.com/", symbol: "f" },
  { label: "YouTube", href: "https://www.youtube.com/", symbol: "▶" },
];



const eventDetails = [
  {
    Icon: CalendarDays,
    title: "Dharohar 2026",
    lines: ["Alumni Meet & GBM", "28 November 2026"],
  },
  {
    Icon: UsersRound,
    title: "Silver Jubilee",
    lines: ["Batch of 2001", "25 Years"],
  },
  {
    Icon: UsersRound,
    title: "Ruby Jubilee",
    lines: ["Batch of 1986", "40 Years"],
  },
  {
    Icon: MapPin,
    title: "Venue",
    lines: [
      "Faculty of Architecture & Planning",
      "AKTU, Tagore Marg, Lucknow",
    ],
  },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#FCFAF6] text-[#29231F]">
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.22]"
        style={{
          backgroundImage:
            "radial-gradient(#B9A68E 0.6px, transparent 0.6px)",
          backgroundSize: "9px 9px",
        }}
      />

      {/* Main footer */}
      <div className="relative mx-auto max-w-7xl px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.65fr_1.05fr_1.1fr] lg:gap-10">
          {/* Brand */}
          <div>
            <a href="/" className="inline-flex items-center gap-4">
              <span className="flex h-[92px] w-[86px] shrink-0 items-center justify-center rounded-lg border border-[#E8DED0] bg-white p-2 shadow-xs">
                <img
                  src={gcaaaLogo}
                  alt="GCAAA logo"
                  className="max-h-full max-w-full object-contain"
                />
              </span>

              <span>
                <span className="block font-serif text-3xl sm:text-4xl font-bold">
                  GCAAA
                </span>
                <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.19em] text-[#A51E32]">
                  Alumni Association
                </span>
                <span className="mt-1 block text-xs leading-5 text-[#756B61]">
                  Government College of
                  <br />
                  Architecture, Lucknow
                </span>
              </span>
            </a>

            <p className="mt-7 max-w-sm text-sm leading-7 text-[#756B61]">
              A lifelong community of architects, planners and
              changemakers, united by a shared alma mater and a
              commitment to a better built environment.
            </p>

          
<div className="mt-6 flex flex-wrap gap-3">
  {socialLinks.map(({ label, href, symbol }) => (
    <a
      key={label}
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D9BD8B] text-sm font-bold text-[#A51E32] transition-all duration-300 hover:border-[#A51E32] hover:bg-[#A51E32] hover:text-white"
    >
      {symbol}
    </a>
  ))}
</div>


            <div className="mt-7">
              <span className="block h-[2px] w-12 bg-[#C9A15A]" />
              <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#756B61]">
                One Campus. Many Generations.
              </p>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.24em] text-[#A51E32]">
              Quick Links
            </h3>
            <span className="mt-4 block h-[2px] w-8 bg-[#C9A15A]" />

            <ul className="mt-6 space-y-4">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-[#514940] transition-colors hover:text-[#A51E32]"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight
                      size={13}
                      className="opacity-0 transition-opacity group-hover:opacity-100"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Event details */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.24em] text-[#A51E32]">
              Event Highlights
            </h3>
            <span className="mt-4 block h-[2px] w-8 bg-[#C9A15A]" />

            <div className="mt-6 space-y-6">
              {eventDetails.map(({ Icon, title, lines }) => (
                <div key={title} className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#E9DFD1] bg-white text-[#A65A2B]">
                    <Icon size={19} strokeWidth={1.6} />
                  </span>

                  <div>
                    <h4 className="font-serif text-lg text-[#8D202D]">
                      {title}
                    </h4>

                    {lines.map((line) => (
                      <p
                        key={line}
                        className="mt-1 text-xs leading-5 text-[#756B61]"
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.24em] text-[#A51E32]">
              Stay Connected
            </h3>
            <span className="mt-4 block h-[2px] w-8 bg-[#C9A15A]" />

            <h4 className="mt-6 font-serif text-3xl leading-tight">
              Stay Connected
              <br />
              <span className="italic">With Your Alma Mater.</span>
            </h4>

            <p className="mt-4 text-sm leading-7 text-[#756B61]">
              For alumni updates, event information and association
              enquiries, get in touch with us.
            </p>

            <a
              href="mailto:gcaaa07@gmail.com"
              className="mt-6 flex items-start gap-3 text-sm text-[#8D202D] transition-colors hover:text-[#B68A43]"
            >
              <Mail size={19} className="mt-0.5 shrink-0" />
              <span className="break-all">gcaaa07@gmail.com</span>
            </a>

            <a
              href="https://gcaalumniassociation.com/"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 border-b border-[#C9A15A] pb-2 text-sm font-semibold text-[#8D202D] hover:text-[#B68A43]"
            >
              Visit Official Website
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom maroon strip */}
      <div className="relative overflow-hidden bg-[#781A29] text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "repeating-radial-gradient(ellipse at 0% 100%, transparent 0px, transparent 18px, #E8CA8B 19px, transparent 20px, transparent 27px)",
          }}
        />

        <div className="relative mx-auto flex max-w-7xl flex-col gap-5 px-5 py-4 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
          <div className="border-l-2 border-[#D5B477] pl-5">
            <p className="font-serif text-xl uppercase tracking-[0.16em] text-[#E8CA8B]">
              A Legacy That Continues
            </p>
            <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-white/70">
              Since 1911
            </p>
          </div>

          <div className="flex flex-wrap gap-x-5 gap-y-3 text-xs text-white/75">
            <a href="/privacy-policy" className="hover:text-[#E8CA8B]">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-[#E8CA8B]">
              Terms & Conditions
            </a>
            <a href="/sitemap" className="hover:text-[#E8CA8B]">
              Sitemap
            </a>
          </div>

          <p className="text-xs leading-6 text-white/75 md:text-right">
            © {new Date().getFullYear()} GCAAA.
            <br className="hidden md:block" /> All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

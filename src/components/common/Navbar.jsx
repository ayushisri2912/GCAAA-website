
import { useState } from "react";
import { Link } from "react-router-dom";
import gcaaaLogo from "../../assets/images/logo.png";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const navigation = [
  { label: "Home", href: "/" },

  {
    label: "About Us",
    href: "/about",
    children: [
      { label: "About GCAAA", href: "/about" },
      { label: "Our Heritage", href: "/about#heritage" },
      { label: "Association Objectives", href: "/about#objectives" },
      { label: "Office Bearers", href: "/committee" },
    ],
  },

  {
    label: "Dharohar 2026",
    href: "/dharohar",
    children: [
      { label: "Event Overview", href: "/dharohar" },
      { label: "Event Schedule", href: "/dharohar#schedule" },
      { label: "Venue & Location", href: "/dharohar#venue" },
      { label: "Register / RSVP", href: "/register" },
    ],
  },

  {
    label: "Alumni Batches",
    href: "/batches",
    children: [
      { label: "Silver Jubilee Batch · 2001", href: "/batches/2001" },
      { label: "Ruby Jubilee Batch · 1986", href: "/batches/1986" },
      { label: "All Alumni Batches", href: "/batches" },
    ],
  },

  {
    label: "Committee",
    href: "/committee",
    children: [
      { label: "Executive Committee", href: "/committee" },
      { label: "President's Message", href: "/committee#president" },
      { label: "Office Bearers", href: "/committee#office-bearers" },
    ],
  },

  {
    label: "Gallery",
    href: "/gallery",
    children: [
      { label: "Photo Gallery", href: "/gallery" },
      { label: "Past Alumni Meets", href: "/gallery#past-meets" },
    ],
  },

  {
    label: "Sponsors",
    href: "/sponsors",
    children: [
      { label: "Our Sponsors", href: "/sponsors" },
      {
        label: "Sponsorship Opportunities",
        href: "/sponsors#opportunities",
      },
    ],
  },

  {
    label: "Contact Us",
    href: "/contact",
    children: [
      { label: "Contact Details", href: "/contact" },
      { label: "Location & Directions", href: "/contact#location" },
      { label: "Send an Enquiry", href: "/contact#enquiry" },
    ],
  },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setOpenSubmenu(null);
  };

  const toggleSubmenu = (label) => {
    setOpenSubmenu((current) => (current === label ? null : label));
  };

  return (
    <header className="relative z-50 w-full bg-white text-black">

      {/* TOP RED BAR */}
      <div className="bg-[#B70D2B] text-white">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-2 px-4 py-1.5 sm:flex-row sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:justify-start sm:text-sm">
            <a
              href="mailto:gcaaa07@gmail.com"
              className="flex items-center gap-2 hover:opacity-80"
            >
              <span className="text-lg">☎</span>
              <span>gcaaa07@gmail.com</span>
            </a>

            <span className="hidden h-5 w-px bg-white/40 sm:block" />

            <div className="flex items-center gap-2">
              <span className="text-lg">◷</span>
              <span>Alumni Association · Lucknow</span>
            </div>
          </div>

          {/* SOCIAL MEDIA ICONS */}
<div className="flex items-center gap-5 text-white">
  <a
    href="https://www.facebook.com/"
    target="_blank"
    rel="noreferrer"
    aria-label="Facebook"
    className="transition-opacity hover:opacity-70"
  >
    <FaFacebookF size={17} />
  </a>

  <a
    href="https://www.linkedin.com/"
    target="_blank"
    rel="noreferrer"
    aria-label="LinkedIn"
    className="transition-opacity hover:opacity-70"
  >
    <FaLinkedinIn size={17} />
  </a>

  <a
    href="https://twitter.com/"
    target="_blank"
    rel="noreferrer"
    aria-label="Twitter"
    className="transition-opacity hover:opacity-70"
  >
    <FaTwitter size={18} />
  </a>

  <a
    href="https://www.youtube.com/"
    target="_blank"
    rel="noreferrer"
    aria-label="YouTube"
    className="transition-opacity hover:opacity-70"
  >
    <FaYoutube size={20} />
  </a>
</div>
        </div>
      </div>

      {/* BRAND SECTION */}
      <div className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-4 py-1.5 sm:px-6 lg:px-8">
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="flex min-w-0 items-center gap-3"
          >
            <img
              src={gcaaaLogo}
              alt="GCAAA Logo"
              className="h-11 w-11 shrink-0 object-contain sm:h-12 sm:w-12"
            />

            <div className="min-w-0">
              <h1 className="text-xl font-bold leading-tight tracking-wide text-black sm:text-2xl">
                GCAAA
              </h1>
              <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#B70D2B] sm:text-xs">
                Alumni Association
              </p>
              <p className="mt-1 hidden text-xs text-gray-600 sm:block">
                Government College of Architecture, Lucknow
              </p>
            </div>
          </Link>

          <div className="hidden items-center gap-5 md:flex">
            <div className="border-l-2 border-[#B70D2B] pl-4">
              <p className="text-xs text-gray-500">ANNUAL ALUMNI MEET</p>
              <p className="mt-1 text-sm font-semibold">
                28 November 2026
              </p>
            </div>

            <Link
              to="/register"
              className="bg-[#B70D2B] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-black"
            >
              Register / RSVP
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className="flex h-10 w-10 shrink-0 items-center justify-center border border-gray-300 text-2xl hover:border-[#B70D2B] hover:text-[#B70D2B] md:hidden"
          >
            {mobileOpen ? "×" : "☰"}
          </button>
        </div>
      </div>

      {/* DESKTOP NAVIGATION */}
      <nav
        aria-label="Main navigation"
        className="hidden border-b border-gray-200 bg-white md:block"
      >
        <div className="mx-auto flex max-w-[1400px] items-stretch justify-between px-4 sm:px-6 lg:px-8">
          {navigation.map((item) => (
            <div key={item.label} className="group relative">
              <Link
                to={item.href}
                className="flex min-h-[46px] items-center gap-2 border-b-[3px] border-transparent px-2 py-2 text-sm font-medium text-black transition-colors hover:border-[#B70D2B] hover:text-[#B70D2B] lg:px-3"
              >
                {item.label}

                {item.children && (
                  <span className="text-[10px] transition-transform group-hover:rotate-180">
                    ▼
                  </span>
                )}
              </Link>

              {/* DROPDOWN */}
              {item.children && (
                <div className="invisible absolute left-0 top-full z-50 min-w-[240px] border-t-2 border-[#B70D2B] bg-white opacity-0 shadow-lg transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      to={child.href}
                      className="block border-b border-gray-100 px-5 py-3 text-sm text-black transition-colors last:border-b-0 hover:bg-gray-50 hover:text-[#B70D2B]"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>

      {/* MOBILE NAVIGATION */}
      {mobileOpen && (
        <nav
          aria-label="Mobile navigation"
          className="border-t border-gray-200 bg-white md:hidden"
        >
          <div className="max-h-[75vh] overflow-y-auto px-4 py-3">
            {navigation.map((item) => (
              <div key={item.label} className="border-b border-gray-100">
                <div className="flex items-center justify-between gap-3">
                  <Link
                    to={item.href}
                    onClick={closeMobileMenu}
                    className="flex-1 py-3 text-sm font-medium text-black hover:text-[#B70D2B]"
                  >
                    {item.label}
                  </Link>

                  {item.children && (
                    <button
                      type="button"
                      onClick={() => toggleSubmenu(item.label)}
                      aria-label={`Toggle ${item.label} submenu`}
                      aria-expanded={openSubmenu === item.label}
                      className="px-3 py-3 text-sm text-black hover:text-[#B70D2B]"
                    >
                      <span
                        className={`inline-block transition-transform ${
                          openSubmenu === item.label ? "rotate-180" : ""
                        }`}
                      >
                        ▼
                      </span>
                    </button>
                  )}
                </div>

                {item.children && openSubmenu === item.label && (
                  <div className="mb-3 ml-3 border-l-2 border-[#B70D2B] pl-4">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.href}
                        onClick={closeMobileMenu}
                        className="block py-2.5 text-xs text-gray-700 hover:text-[#B70D2B]"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <Link
              to="/register"
              onClick={closeMobileMenu}
              className="mt-4 block bg-[#B70D2B] px-4 py-3 text-center text-sm font-semibold text-white hover:bg-black"
            >
              Register / RSVP
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
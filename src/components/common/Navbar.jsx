
import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  ArrowUpRight,
  ChevronDown,
  CalendarDays,
  Sparkles,
} from "lucide-react";

import gcaaaLogo from "../../assets/images/logo.png";

const navItems = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About Us",
    path: "/about",
    children: [
      { name: "Our Legacy", path: "/about#legacy" },
      { name: "Association", path: "/about#association" },
      { name: "Patron Messages", path: "/about#patrons" },
    ],
  },
  {
    name: "Dharohar 2026",
    path: "/dharohar",
  },
  {
    name: "Batches",
    path: "/cohort",
    children: [
      { name: "Batch 2001", path: "/cohort" },
      { name: "Silver Jubilee", path: "/cohort#silver-jubilee" },
      { name: "Ruby Jubilee", path: "/dharohar#ruby-jubilee" },
    ],
  },
  {
    name: "Committee",
    path: "/committee",
  },
  {
    name: "Gallery",
    path: "/gallery",
  },
  {
    name: "Sponsors",
    path: "/#sponsors",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <header className="sticky top-0 z-50 w-full font-sans transition-all duration-300">
      {/* SUBTLE RED-GOLD TOP LINE */}
      <div className="h-[2px] w-full bg-gradient-to-r from-[#8B0000]/40 via-[#D5A64A]/30 to-[#8B0000]/40" />

      {/* TOP BRANDING BAR (COMPACT HEIGHT & SOFT BORDERS) */}
      <div className="border-b border-stone-200/60 bg-[#F9F7F2]/90 backdrop-blur-md transition-all duration-300">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-4 py-2 sm:px-8 lg:px-12 lg:py-2">

          {/* LEFT: LOGO + BRAND NAME */}
          <Link
            to="/"
            onClick={closeMenu}
            className="group flex items-center gap-3.5 sm:gap-4"
          >
            {/* Enlarged Logo Container */}
            <div className="relative flex items-center justify-center rounded-md border border-stone-200/60 bg-white/80 p-1.5 shadow-2xs transition-all duration-300 group-hover:border-[#D5A64A]/30 group-hover:shadow-xs">
              <img
                src={gcaaaLogo}
                alt="GCAAA Logo"
                className="h-13 w-auto min-w-[48px] object-contain transition-transform duration-300 group-hover:scale-105 sm:h-15 lg:h-18 lg:min-w-[62px]"
              />
            </div>

            <div>
              <h1 className="font-serif text-2xl font-bold tracking-tight text-[#231F1D] sm:text-3xl lg:text-3xl">
                GCAAA
              </h1>

              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8B0000] sm:text-[11px]">
                Alumni Association
              </p>

              <p className="hidden text-[11px] text-stone-500 transition-colors group-hover:text-stone-700 sm:block">
                Government College of Architecture, Lucknow
              </p>
            </div>
          </Link>

          {/* RIGHT: SAVE THE DATE BADGE (MUTED GOLD ACCENTS & SOFT BORDER) */}
          <div className="hidden items-center gap-3 rounded-lg border border-stone-200/60 bg-white/80 px-3.5 py-1.5 shadow-2xs backdrop-blur-xs sm:flex lg:px-4">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-[#8B0000]/5 text-[#8B0000]">
              <CalendarDays size={19} className="text-[#8B0000]" />
            </div>

            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-stone-400">
                Save The Date
              </p>
              <p className="text-xs font-semibold tracking-tight text-[#231F1D] lg:text-sm">
                28 Nov, 2026
              </p>
            </div>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            className="rounded-md border border-stone-200/60 bg-white p-2 text-[#231F1D] shadow-2xs transition hover:bg-[#8B0000] hover:text-white lg:hidden"
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>

        </div>
      </div>

      {/* DESKTOP NAVIGATION BAR (CENTERED MENUS & BALANCED REFINED CTA) */}
      <nav className={`hidden border-b border-stone-200/60 bg-white/95 backdrop-blur-md lg:block ${scrolled ? "shadow-2xs" : ""}`}>
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 xl:px-12">

          {/* CENTER: NAVIGATION LINKS */}
          <div className="flex flex-1 items-center justify-center gap-7 xl:gap-10 py-3">
            {navItems.map((item) => {
              const isParentActive =
                location.pathname === item.path ||
                (item.children &&
                  item.children.some((child) =>
                    location.pathname.startsWith(child.path.split("#")[0])
                  ));

              return (
                <div key={item.name} className="group relative">
                  <NavLink
                    to={item.path}
                    end={item.path === "/"}
                    className={({ isActive }) =>
                      `relative flex items-center gap-1.5 py-1 text-[14px] font-medium tracking-wide transition-all duration-200 xl:text-[14.5px] ${
                        isActive || isParentActive
                          ? "text-[#8B0000]"
                          : "text-stone-700 hover:text-[#8B0000]"
                      }`
                    }
                  >
                    <span>{item.name}</span>

                    {item.children && (
                      <ChevronDown
                        size={14}
                        className="text-stone-400 transition-transform duration-300 group-hover:rotate-180 group-hover:text-[#8B0000]"
                      />
                    )}

                    {/* ACTIVE / HOVER LINE INDICATOR */}
                    <span
                      className={`absolute -bottom-3 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-[#8B0000] transition-all duration-300 ${
                        isParentActive || location.pathname === item.path
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }`}
                    />
                  </NavLink>

                  {/* SUBTLE DROPDOWN */}
                  {item.children && (
                    <div className="invisible absolute left-1/2 top-full z-50 min-w-[245px] -translate-x-1/2 translate-y-2 rounded-xl border border-stone-200/90 bg-white p-2 opacity-0 shadow-xl backdrop-blur-md transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.path}
                          className="flex items-center justify-between rounded-lg px-4.5 py-2.5 text-sm font-semibold text-stone-700 transition hover:bg-[#8B0000]/5 hover:text-[#8B0000]"
                        >
                          <span>{child.name}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* RIGHT: REFINED RE-BALANCED REGISTER BUTTON */}
          <div className="flex shrink-0 items-center justify-end pl-4">
            <Link
              to="/register"
              className="group inline-flex items-center gap-1.5 rounded-md bg-[#8B0000] px-4 py-2 text-xs font-medium tracking-wide text-white shadow-2xs transition-all duration-200 hover:bg-[#730000] hover:shadow-xs"
            >
              <span>Register / RSVP 2026</span>
              <ArrowUpRight
                size={15}
                className="text-white/80 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
              />
            </Link>
          </div>

        </div>
      </nav>

      {/* MOBILE NAVIGATION DRAWER */}
      {menuOpen && (
        <nav className="max-h-[calc(100vh-80px)] overflow-y-auto border-b border-stone-200 bg-white/98 px-5 py-4 shadow-2xl backdrop-blur-xl lg:hidden">
          <div className="mb-4 flex items-center justify-between border-b border-stone-100 pb-3">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#D5A64A]">
              Explore GCAAA
            </span>
            <span className="rounded-full bg-[#8B0000]/10 px-2.5 py-1 text-xs font-bold text-[#8B0000]">
              Dharohar 2026
            </span>
          </div>

          {navItems.map((item) => (
            <div key={item.name} className="border-b border-stone-100">
              <div className="flex items-center justify-between">
                <NavLink
                  to={item.path}
                  end={item.path === "/"}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `flex-1 py-3.5 text-base font-semibold transition ${
                      isActive
                        ? "text-[#8B0000]"
                        : "text-stone-800 hover:text-[#8B0000]"
                    }`
                  }
                >
                  {item.name}
                </NavLink>

                {item.children && (
                  <button
                    type="button"
                    aria-label={`Toggle ${item.name} submenu`}
                    aria-expanded={openDropdown === item.name}
                    onClick={() =>
                      setOpenDropdown(
                        openDropdown === item.name ? null : item.name
                      )
                    }
                    className="p-3 text-stone-500 hover:text-[#8B0000]"
                  >
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-200 ${
                        openDropdown === item.name ? "rotate-180 text-[#8B0000]" : ""
                      }`}
                    />
                  </button>
                )}
              </div>

              {item.children && openDropdown === item.name && (
                <div className="mb-3 ml-3 border-l-2 border-[#D5A64A] pl-4">
                  {item.children.map((child) => (
                    <Link
                      key={child.name}
                      to={child.path}
                      onClick={closeMenu}
                      className="block py-2.5 text-sm font-medium text-stone-600 transition hover:text-[#8B0000]"
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <Link
            to="/"
            onClick={closeMenu}
            className="mt-6 flex items-center justify-center gap-2 rounded-lg bg-[#8B0000] px-5 py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-md transition hover:bg-[#6E0000]"
          >
            Register for Dharohar 2026
            <ArrowUpRight size={18} />
          </Link>

          <p className="mt-4 text-center text-xs text-stone-500">
            28 November 2026 · Faculty of Architecture & Planning, Lucknow
          </p>
        </nav>
      )}
    </header>
  );
}


"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";

type NavLink = {
  label: string;
  href: string;
  external?: boolean;
};

type NavItem = {
  label: string;
  href: string;
  external?: boolean;
  dropdown?: NavLink[];
};

const NAV_ITEMS: NavItem[] = [
  { label: "HOME", href: "/" },
  {
    label: "ABOUT",
    href: "/about",
    dropdown: [
      { label: "Our Team", href: "/team" },
      { label: "UCA Chapters", href: "/about#chapters-section" },
      { label: "Community Partners", href: "/about#partners-section" },
      { label: "Join UCA", href: "/join" },
    ],
  },
  { label: "VOTE", href: "/vote" },
  {
    label: "CHINESE AMERICAN CONVENTION",
    href: "https://convention.ucausa.org",
    external: true,
  },
  {
    label: "PROGRAMS",
    href: "/program",
    dropdown: [
      { label: "UCA Community Foundation", href: "https://ucacf.org", external: true },
      { label: "UCA’s Chinese American Youth Leadership Program", href: "/program/youth-leadership" },
      { label: "WAVES – Youth Mental Health Collaborative", href: "https://ucawaves.org/", external: true },
      { label: "UCA National Pickleball League", href: "#" },
    ],
  },
  {
    label: "INFORMATION",
    href: "/information",
    dropdown: [
      { label: "UCA Weekly", href: "/information#uca-weekly" },
      { label: "UCA News", href: "/convention/news" },
      { label: "Press Release", href: "/information#press-release" },
      { label: "Find Help & Resources", href: "/information#find-help-resources" },
      { label: "Asian American Advocacy", href: "/information#asian-american-advocacy" },
      { label: "Op-Eds by UCA Members", href: "/information#op-eds" },
      { label: "Contact Your Congress Member", href: "/information#contact-congress" },
    ],
  },
  { label: "EVENTS", href: "/events" },
  { label: "CONTACT US", href: "/contact" },
];

function cx(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState<Set<string>>(new Set());

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.3);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (label: string) => {
    setOpenDropdowns((prev) => {
      const next = new Set(prev);
      if (next.has(label)) {
        next.delete(label);
      } else {
        next.add(label);
      }
      return next;
    });
  };

  return (
    <header className={cx(styles.siteHeader, scrolled && styles.scrolled)}>
      <div className={styles.headerLeft}>
        <Link href="/" className={styles.logoLink}>
          <img
            src="https://storage.googleapis.com/objects.ucausa.org/logo/logo.png"
            alt="United Chinese Americans Logo"
            className={styles.logoImg}
          />
        </Link>
      </div>
      <div className={cx(styles.headerCenter, mobileOpen && styles.active)}>
        <nav className={styles.mainNav}>
          {NAV_ITEMS.map((item) =>
            item.dropdown ? (
              <div
                key={item.label}
                className={cx(styles.dropdown, openDropdowns.has(item.label) && styles.active)}
              >
                <Link href={item.href}>{item.label}</Link>
                <span
                  className={styles.dropdownToggle}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    toggleDropdown(item.label);
                  }}
                >
                  ▶
                </span>
                <div className={styles.dropdownContent}>
                  {item.dropdown.map((link) =>
                    link.external ? (
                      <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
                        {link.label}
                      </a>
                    ) : (
                      <Link key={link.label} href={link.href}>
                        {link.label}
                      </Link>
                    )
                  )}
                </div>
              </div>
            ) : item.external ? (
              <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer">
                {item.label}
              </a>
            ) : (
              <Link key={item.label} href={item.href}>
                {item.label}
              </Link>
            )
          )}
        </nav>
      </div>
      <div className={styles.headerRight}>
        <Link href="/join" className={styles.joinBtn}>
          JOIN US
        </Link>
        <Link href="/donate" className={styles.donateBtn}>
          DONATE TODAY
        </Link>
      </div>
      <div
        className={cx(styles.hamburger, mobileOpen && styles.active)}
        onClick={() => setMobileOpen((open) => !open)}
      >
        <span className={styles.bar} />
        <span className={styles.bar} />
        <span className={styles.bar} />
      </div>
    </header>
  );
}

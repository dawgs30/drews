'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/resume', label: 'Resume' },
    { href: '/links', label: 'Links' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm transition-all duration-300 ${
        isScrolled ? 'py-3 shadow-sm' : 'py-6'
      }`}
    >
      <nav className="mx-auto max-w-[1100px] px-6 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-semibold text-black transition-opacity hover:opacity-80 focus:opacity-80"
        >
          Drew Blackwell
        </Link>
        <ul className="flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-base font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#9BCBFF] focus:ring-offset-2 rounded ${
                  pathname === link.href
                    ? 'text-black'
                    : 'text-gray-600 hover:text-black'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}


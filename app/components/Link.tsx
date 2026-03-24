'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const links = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Product', href: '/product' },
  { name: 'Contact', href: '/contact' },
  { name: 'form', href: '/form' },
];

const Linkpage = () => {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-2 md:gap-6">
      {links.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.name}
            href={item.href}
            className={`relative px-4 py-2 text-sm md:text-base font-medium transition-all duration-300

              ${isActive ? 'text-indigo-400' : 'text-gray-300 hover:text-white'}
            `}
          >
            {item.name}

            {/* Animated underline */}
            <span
              className={`absolute left-0 -bottom-1 h-0.5 w-full bg-indigo-400 transform transition-transform duration-300
                ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}
              `}
            />
          </Link>
        );
      })}
    </nav>
  );
};

export default Linkpage;

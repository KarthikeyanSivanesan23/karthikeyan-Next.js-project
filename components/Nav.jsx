'use client';  
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Correct import

const links = [
    {
        name: 'Home',
        path: '/',
    },
    {
        name: 'services',
        path: '/services',
    },
  
    {
        name: 'work',
        path: '/work',
    },
    {
      name: 'resume',
      path: '/resume',
  },
    {
        name: 'contact',
        path: '/contact',
    },
];

const Nav = () => {
    const pathname = usePathname(); // Correct usage
    return (
      <nav className="flex gap-8"> 
        {links.map((link, index) => {
          return (
            <Link 
              href={link.path} 
              key={index} 
              className={`${
                  link.path === pathname ? "text-accent border-b-2 border-accent" : ""
                } capitalize font-medium hover:text-accent transition-all`}
            >
              {link.name} {/* Correct placement of link name */}
            </Link>
          );
        })}
      </nav>
    );
};

export default Nav;

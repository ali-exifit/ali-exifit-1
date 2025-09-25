import React from 'react';
import { NavLink } from 'react-router-dom';
import { NAV_LINKS, CONTACT_INFO } from '../constants';
import type { AppItem } from '../types';

// --- ICONS --- //
const TelegramIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.17.91-.494 1.212-.823 1.23-.696.04-1.225-.46-1.9-1.02-.612-.49-1.002-.8-1.622-1.29-1.24-.98-2.16-1.58-1.002-2.928.95-1.12 6.712-6.374 6.712-6.374s.24-.22.14-.32z" />
    </svg>
);

const InstagramIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.07-1.645-.07-4.85s.012-3.584.07-4.85c.148-3.225 1.664-4.771 4.919-4.919 1.266-.058 1.644-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.268.194-6.233 2.158-6.427 6.427-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.194 4.268 2.159 6.233 6.427 6.427 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c4.268-.194 6.233-2.158 6.427-6.427.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.194-4.268-2.159-6.233-6.427-6.427-1.28-.058-1.688-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.44-1.441-1.44z" />
    </svg>
);


// --- HEADER --- //
export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 bg-white/70 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 border-b border-gray-300">
          <div className="text-xl sm:text-2xl font-bold text-[#155d63]">
             <NavLink to="/">مدیریت فناوری و سلامت نقره ای</NavLink>
          </div>
          <nav className="hidden md:flex items-center space-x-8 space-x-reverse">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.label}
                to={link.path}
                className={({ isActive }) =>
                  `text-lg font-medium transition-colors duration-300 ${isActive ? 'text-[#2596be]' : 'text-black hover:text-[#2596be]'}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

// --- FOOTER --- //
export const Footer: React.FC = () => {
  return (
    <footer className="sticky bottom-0 z-40 bg-white/70 backdrop-blur-md mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between py-4 border-t border-gray-300">
          <p className="text-sm text-gray-600 mb-4 sm:mb-0">
            © ۱۴۰۳ مدیریت فناوری و سلامت نقره ای. تمام حقوق محفوظ است.
          </p>
          <div className="flex items-center space-x-6 space-x-reverse">
            <a href={`https://t.me/${CONTACT_INFO.telegram}`} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#2596be] transition-colors">
              <TelegramIcon className="w-6 h-6" />
            </a>
            <a href={`https://instagram.com/${CONTACT_INFO.instagram}`} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#2596be] transition-colors">
              <InstagramIcon className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- ANIMATED BACKGROUND --- //
export const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
      <div className="absolute w-full h-full bg-white" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#2596be] opacity-10 filter blur-3xl animate-blob" />
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#155d63] opacity-10 filter blur-3xl animate-blob animation-delay-2000" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#2596be] opacity-10 filter blur-3xl animate-blob animation-delay-4000" />
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
            animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

// --- SECTION --- //
export const Section: React.FC<{ children: React.ReactNode; className?: string, id?: string }> = ({ children, className = '', id }) => {
  return (
    <section id={id} className={`py-16 sm:py-24 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

// --- CARD --- //
interface CardProps {
  item: AppItem;
}
export const Card: React.FC<CardProps> = ({ item }) => {
  return (
    <div className="border border-gray-300 bg-white/20 p-6 flex flex-col h-full">
      <h3 className="text-xl font-bold mb-3 text-[#155d63]">{item.title}</h3>
      <p className="text-gray-800 flex-grow">{item.description}</p>
      <NavLink to={`/item/${item.id}`} className="inline-block mt-4 text-[#2596be] font-semibold hover:underline">
        بیشتر بدانید &larr;
      </NavLink>
    </div>
  );
};

// --- BUTTON --- //
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary';
    as?: 'button' | 'a';
    href?: string;
}

export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', as = 'button', href, ...props }) => {
    const baseClasses = "px-8 py-3 text-lg font-semibold border transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";
    const variantClasses = variant === 'primary'
        ? "bg-[#2596be] border-[#2596be] text-white hover:bg-[#155d63] hover:border-[#155d63] focus:ring-[#2596be]"
        : "bg-transparent border-gray-400 text-black hover:bg-gray-100 focus:ring-gray-500";

    if (as === 'a') {
        return (
            <a href={href} className={`${baseClasses} ${variantClasses} inline-block text-center`} target="_blank" rel="noopener noreferrer">
                {children}
            </a>
        );
    }

    return (
        <button className={`${baseClasses} ${variantClasses}`} {...props}>
            {children}
        </button>
    );
};
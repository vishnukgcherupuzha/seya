import { useState, useEffect } from 'react';
import { useTheme } from '../../hooks/useTheme';
import { Sun, Moon, Menu } from 'lucide-react';
import Button from '../ui/Button';
import { WhatsAppPopover } from '../ui/WhatsAppPopover';

export function Header() {
  const { isDark, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'pricing', 'reviews', 'contact'];
      const scrollPosition = window.scrollY + 100;

      // Default to home if at the very top
      if (window.scrollY < 50) {
        setActiveSection('home');
        return;
      }

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    // Set initial state
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <header className="fixed top-0 left-0 w-screen bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-white/20 dark:border-gray-700/50 shadow-lg z-50 animate-slide-in-down">
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Title - Left */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-12 h-12 rounded-lg overflow-hidden border border-yellow-500">
              <img 
                src="/seyalogo.png" 
                alt="SEYA Driving School Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h1 className="font-bold text-xl text-gray-900 dark:text-white">
                SEYA
              </h1>
              <p className="text-xs text-gray-600 dark:text-gray-400 hidden sm:block">
                Driving School
              </p>
            </div>
          </div>

          {/* Navigation Menu - Center (Hidden on mobile) */}
          <nav className="hidden md:flex items-center space-x-6">
            <a 
              href="#home" 
              className={`font-medium transition-colors duration-200 ${
                activeSection === 'home' 
                  ? 'text-yellow-600 dark:text-yellow-400 border-b-2 border-yellow-500 pb-1' 
                  : 'text-gray-700 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-400'
              }`}
            >
              Home
            </a>
            <a 
              href="#about" 
              className={`font-medium transition-colors duration-200 ${
                activeSection === 'about' 
                  ? 'text-yellow-600 dark:text-yellow-400 border-b-2 border-yellow-500 pb-1' 
                  : 'text-gray-700 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-400'
              }`}
            >
              About
            </a>
            <a 
              href="#pricing" 
              className={`font-medium transition-colors duration-200 ${
                activeSection === 'pricing' 
                  ? 'text-yellow-600 dark:text-yellow-400 border-b-2 border-yellow-500 pb-1' 
                  : 'text-gray-700 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-400'
              }`}
            >
              Pricing
            </a>
            <a 
              href="#reviews" 
              className={`font-medium transition-colors duration-200 ${
                activeSection === 'reviews' 
                  ? 'text-yellow-600 dark:text-yellow-400 border-b-2 border-yellow-500 pb-1' 
                  : 'text-gray-700 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-400'
              }`}
            >
              Reviews
            </a>
            <a 
              href="#contact" 
              className={`font-medium transition-colors duration-200 ${
                activeSection === 'contact' 
                  ? 'text-yellow-600 dark:text-yellow-400 border-b-2 border-yellow-500 pb-1' 
                  : 'text-gray-700 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-400'
              }`}
            >
              Contact Us
            </a>
          </nav>

          {/* WhatsApp and Theme Toggle - Right */}
          <div className="flex items-center space-x-3">
            {/* WhatsApp Popover */}
            <WhatsAppPopover phoneNumber="447912941877" />

            {/* Theme Toggle */}
            <Button
              onClick={toggleTheme}
              variant="icon"
              iconOnly
              icon={isDark ? <Sun /> : <Moon />}
              size="md"
              aria-label="Toggle theme"
            />

            {/* Mobile Menu Toggle */}
            <Button
              onClick={toggleMobileMenu}
              variant="icon"
              iconOnly
              icon={<Menu />}
              size="md"
              className="md:hidden"
              aria-label="Toggle mobile menu"
            />
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-gray-700">
            <nav className="px-4 py-4 space-y-2">
              <a 
                href="#home" 
                className={`block font-medium py-2 transition-colors duration-200 ${
                  activeSection === 'home' 
                    ? 'text-yellow-600 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-950 px-3 rounded-md' 
                    : 'text-gray-700 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-400 px-3'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#about" 
                className={`block font-medium py-2 transition-colors duration-200 ${
                  activeSection === 'about' 
                    ? 'text-yellow-600 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-950 px-3 rounded-md' 
                    : 'text-gray-700 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-400 px-3'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#pricing" 
                className={`block font-medium py-2 transition-colors duration-200 ${
                  activeSection === 'pricing' 
                    ? 'text-yellow-600 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-950 px-3 rounded-md' 
                    : 'text-gray-700 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-400 px-3'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </a>
              <a 
                href="#reviews" 
                className={`block font-medium py-2 transition-colors duration-200 ${
                  activeSection === 'reviews' 
                    ? 'text-yellow-600 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-950 px-3 rounded-md' 
                    : 'text-gray-700 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-400 px-3'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Reviews
              </a>
              <a 
                href="#contact" 
                className={`block font-medium py-2 transition-colors duration-200 ${
                  activeSection === 'contact' 
                    ? 'text-yellow-600 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-950 px-3 rounded-md' 
                    : 'text-gray-700 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-400 px-3'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

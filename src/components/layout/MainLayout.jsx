import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Button from '../ui/Button';
import { WhatsAppPopover } from '../ui/WhatsAppPopover';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Reviews', href: '/reviews' },
  { name: 'Contact', href: '/contact' }
];

export function MainLayout({ children }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-yellow-50">
      {/* Desktop Layout: Responsive columns (lg+) */}
      <div className="hidden lg:flex h-screen">
        {/* Combined Left Sidebar and Navigation with unified background pattern */}
        <div className="w-4/12 xl:w-5/12 2xl:w-4/12 relative bg-yellow-100/30 border-r border-yellow-200 flex">
          {/* Background pattern spanning full width */}
          <div 
            className="absolute inset-0 bg-contain bg-left bg-no-repeat opacity-10"
            style={{ backgroundImage: 'url(/bgseya.png)' }}
          />
          
          {/* Pattern display area */}
          <div className="w-1/2 xl:w-3/5 2xl:w-1/2 relative z-10"></div>
          
          {/* Navigation area */}
          <div className="w-1/2 xl:w-2/5 2xl:w-1/2 relative z-10">
            <div className="p-6">
              {/* Logo */}
              <div className="mb-8">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg overflow-hidden border border-yellow-500">
                    <img 
                      src="/seyalogo.png" 
                      alt="SEYA Driving School Logo" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h1 className="font-bold text-xl text-gray-900">
                      SEYA
                    </h1>
                    <p className="text-xs text-gray-600">
                      Driving School
                    </p>
                  </div>
                </div>
              </div>

              {/* Navigation Menu */}
              <nav className="space-y-2">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className={({ isActive }) => `block px-4 py-3 rounded-lg font-medium transition-colors duration-200 ${
                      isActive 
                        ? 'bg-yellow-200/70 text-yellow-700 font-semibold'
                        : 'text-gray-700 hover:bg-yellow-200/50 hover:text-yellow-600'
                    }`}
                  >
                    {item.name}
                  </NavLink>
                ))}
              </nav>

              {/* Bottom Actions */}
              <div className="absolute bottom-6 left-6 right-6">
                <WhatsAppPopover phoneNumber="447912941877" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="w-8/12 xl:w-7/12 2xl:w-8/12 overflow-y-auto">
          {children}
        </div>
      </div>

      {/* Tablet Layout: 2 columns (md) */}
      <div className="hidden md:flex lg:hidden h-screen">
        {/* Left Column - Navigation */}
        <div className="w-3/12 bg-yellow-100/30 border-r border-yellow-200">
          <div className="p-6">
            {/* Logo */}
            <div className="mb-8">
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg overflow-hidden border border-yellow-500">
                  <img 
                    src="/seyalogo.png" 
                    alt="SEYA Driving School Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h1 className="font-bold text-xl text-gray-900">
                    SEYA
                  </h1>
                  <p className="text-xs text-gray-600">
                    Driving School
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Menu */}
            <nav className="space-y-2">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) => `block px-4 py-3 rounded-lg font-medium transition-colors duration-200 ${
                    isActive 
                      ? 'bg-yellow-200/70 text-yellow-700 font-semibold'
                      : 'text-gray-700 hover:bg-yellow-200/50 hover:text-yellow-600'
                  }`}
                >
                  {item.name}
                </NavLink>
              ))}
            </nav>

            {/* Bottom Actions */}
            <div className="absolute bottom-6 left-6 right-6">
              <WhatsAppPopover phoneNumber="447912941877" />
            </div>
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="w-9/12 overflow-y-auto">
          {children}
        </div>
      </div>

      {/* Mobile Layout: Single column with hamburger (sm) */}
      <div className="md:hidden">
        {/* Mobile Header */}
        <header className="bg-yellow-100/80 backdrop-blur-md border-b border-yellow-200">
          <div className="px-4 py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg overflow-hidden border border-yellow-500">
                  <img 
                    src="/seyalogo.png" 
                    alt="SEYA Driving School Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h1 className="font-bold text-lg text-gray-900">
                    SEYA
                  </h1>
                  <p className="text-xs text-gray-600">
                    Driving School
                  </p>
                </div>
              </div>

              {/* Mobile Actions */}
              <div className="flex items-center space-x-2">
                <WhatsAppPopover phoneNumber="447912941877" />
                <Button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  variant="icon"
                  iconOnly
                  icon={isMobileMenuOpen ? <X /> : <Menu />}
                  size="md"
                  aria-label="Toggle mobile menu"
                />
              </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
              <div className="mt-4 border-t border-yellow-200 pt-4">
                <nav className="space-y-2">
                  {navigation.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.href}
                      className={({ isActive }) => `block px-4 py-3 rounded-lg font-medium transition-colors duration-200 ${
                        isActive 
                          ? 'bg-yellow-200/70 dark:bg-yellow-800/30 text-yellow-700 dark:text-yellow-300 font-semibold'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-yellow-200/50 dark:hover:bg-gray-700/50 hover:text-yellow-600 dark:hover:text-yellow-400'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </nav>
              </div>
            )}
          </div>
        </header>

        {/* Mobile Content */}
        <div>
          {children}
        </div>
      </div>
    </div>
  );
}
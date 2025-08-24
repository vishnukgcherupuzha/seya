import { 
  Phone, 
  MapPin, 
  Clock, 
  Star, 
  MessageCircle,
  Car,
  Shield,
  Award,
  Heart
} from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-black text-white transition-colors">
      <div className="max-w-7xl mx-auto px-4 py-16">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg border border-yellow-500 shadow-lg">
                <img 
                  src="/seyalogo.png" 
                  alt="SEYA Logo" 
                  className="w-8 h-8 object-contain"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">SEYA</h3>
                <p className="text-sm text-gray-300">Driving School</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Professional driving instruction with over 4 years of experience. 
              We're committed to helping you become a safe and confident driver 
              with our proven teaching methods.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center p-3 bg-gray-800 rounded-lg">
                <div className="flex items-center justify-center mb-2">
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                </div>
                <div className="text-xl font-bold text-white">5.0</div>
                <div className="text-xs text-gray-400">Google Rating</div>
              </div>
              <div className="text-center p-3 bg-gray-800 rounded-lg">
                <div className="flex items-center justify-center mb-2">
                  <Award className="w-5 h-5 text-green-500" />
                </div>
                <div className="text-xl font-bold text-white">95%</div>
                <div className="text-xs text-gray-400">Pass Rate</div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Get In Touch</h3>
            <div className="space-y-4">
              <a 
                href="tel:+447912941877" 
                className="flex items-center space-x-3 text-gray-300 hover:text-yellow-400 transition-colors group"
              >
                <div className="flex items-center justify-center w-10 h-10 bg-gray-800 rounded-lg group-hover:bg-yellow-500 transition-colors">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-medium">Call Now</div>
                  <div className="text-sm">+44 7912 941877</div>
                </div>
              </a>

              <a 
                href="https://wa.me/447912941877" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 hover:text-green-400 transition-colors group"
              >
                <div className="flex items-center justify-center w-10 h-10 bg-gray-800 rounded-lg group-hover:bg-green-500 transition-colors">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-medium">WhatsApp</div>
                  <div className="text-sm">Message us</div>
                </div>
              </a>

              <div className="flex items-center space-x-3 text-gray-300">
                <div className="flex items-center justify-center w-10 h-10 bg-gray-800 rounded-lg">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-medium">Service Area</div>
                  <div className="text-sm">Farnborough & Surrounding Areas </div>
                </div>
              </div>

              <div className="flex items-center space-x-3 text-gray-300">
                <div className="flex items-center justify-center w-10 h-10 bg-gray-800 rounded-lg">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-medium">Available</div>
                  <div className="text-sm">7 Days a Week</div>
                </div>
              </div>
            </div>
          </div>

          {/* Services & Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Our Services</h3>
            <div className="space-y-3">
              {[
                { icon: Car, text: 'Manual Lessons' },
                { icon: Shield, text: 'Refresher Lessons' },
                { icon: Award, text: 'Test Day Package' },
                { icon: Clock, text: 'Intensive Courses' },
                { icon: MapPin, text: 'Motorway Lessons' }
              ].map((service, index) => (
                <div key={index} className="flex items-center space-x-3 text-gray-300">
                  <service.icon className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                  <span className="text-sm">{service.text}</span>
                </div>
              ))}
            </div>

            {/* Quick Navigation */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <div className="space-y-2">
                {[
                  { text: 'About Us', href: '#about' },
                  { text: 'Pricing', href: '#pricing' },
                  { text: 'Reviews', href: '#reviews' },
                  { text: 'Contact', href: '#contact' }
                ].map((link, index) => (
                  <a 
                    key={index}
                    href={link.href} 
                    className="block text-sm text-gray-300 hover:text-yellow-400 transition-colors"
                  >
                    {link.text}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © {currentYear} SEYA Driving School. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Professional driving instruction since 2023
              </p>
            </div>

            {/* Certifications/Trust Badges */}
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-gray-800 rounded-lg mb-2">
                  <Shield className="w-6 h-6 text-blue-400" />
                </div>
                <div className="text-xs text-gray-400">DVSA</div>
                <div className="text-xs text-gray-400">Approved</div>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-gray-800 rounded-lg mb-2">
                  <Star className="w-6 h-6 text-yellow-500 fill-current" />
                </div>
                <div className="text-xs text-gray-400">5 Star</div>
                <div className="text-xs text-gray-400">Rated</div>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-gray-800 rounded-lg mb-2">
                  <Heart className="w-6 h-6 text-red-400" />
                </div>
                <div className="text-xs text-gray-400">Trusted</div>
                <div className="text-xs text-gray-400">Service</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
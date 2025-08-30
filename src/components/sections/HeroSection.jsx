import Button from '../ui/Button';
import { Phone, Calendar, MapPin, Clock, CheckCircle } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="home" className="h-screen">
      {/* Top Row - Background Image */}
      <div className="h-[50vh] relative overflow-hidden">
        <img 
          src="/seyaheader.png" 
          alt="SEYA Driving School" 
          className="w-full h-full object-cover"
        />
        {/* Overlay for better contrast */}
        <div className="absolute inset-0 bg-black/30"></div>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 via-transparent to-blue-600/20"></div>
      </div>

      {/* Bottom Row - Content with White Background */}
      <div className="h-[50vh] bg-white flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-6">
          <div className="max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-yellow-100 border border-yellow-200 mb-6 animate-on-load animate-fade-in-up">
              <CheckCircle className="w-4 h-4 mr-2 text-yellow-600" />
              <span className="text-sm font-medium text-yellow-800">
                Professional Driving Instruction Since 2023
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight text-gray-900 animate-on-load animate-fade-in-up animate-delay-200">
              Learn to Drive with
              <span className="block text-yellow-600 mt-1">
                SEYA Driving School
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-3xl mx-auto leading-relaxed animate-on-load animate-fade-in-up animate-delay-300">
              Professional driving lessons with experienced instructors. 
              Get your license faster with our proven teaching methods and flexible scheduling.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-on-load animate-fade-in-up animate-delay-400">
              <Button 
                as="a"
                href="https://wa.me/447912941877?text=Hello! I would like to know the available schedules for driving lessons. When are you available for my first lesson?"
                target="_blank"
                rel="noopener noreferrer"
                variant="primary" 
                size="lg" 
                icon={<Calendar />}
                className="text-base px-6 py-3 hover:scale-105 transform transition-all duration-300"
              >
                Book Your First Lesson
              </Button>
              <Button 
                as="a"
                href="tel:+447912941877"
                variant="outline" 
                size="lg" 
                icon={<Phone />}
                className="text-base px-6 py-3 hover:scale-105 transform transition-all duration-300"
              >
                Call +44 7912 941877
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              <div className="flex items-center justify-center space-x-2 p-3 bg-yellow-50 border border-yellow-200">
                <Clock className="w-5 h-5 text-yellow-600 flex-shrink-0" />
                <span className="font-medium text-gray-900 text-sm">Flexible Scheduling</span>
              </div>
              <div className="flex items-center justify-center space-x-2 p-3 bg-green-50 border border-green-200">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="font-medium text-gray-900 text-sm">High Pass Rate</span>
              </div>
              <div className="flex items-center justify-center space-x-2 p-3 bg-blue-50 border border-blue-200">
                <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="font-medium text-gray-900 text-sm">Multiple Locations</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
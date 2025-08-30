import Button from '../ui/Button';
import { Phone, Calendar, MapPin, Clock, CheckCircle } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/seyaheader.png" 
          alt="SEYA Driving School" 
          className="w-full h-full object-cover"
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40 dark:bg-black/60"></div>
        {/* Gradient overlay for modern look */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 via-transparent to-blue-600/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-500/20 backdrop-blur-sm border border-yellow-400/30 mb-6 animate-on-load animate-fade-in-up">
            <CheckCircle className="w-4 h-4 mr-2 text-yellow-400" />
            <span className="text-sm font-medium text-yellow-100">
              Professional Driving Instruction Since 2023
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-on-load animate-fade-in-up animate-delay-200">
            Learn to Drive with
            <span className="block text-yellow-400 mt-2">
              SEYA Driving School
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed animate-on-load animate-fade-in-up animate-delay-300">
            Professional driving lessons with experienced instructors. 
            Get your license faster with our proven teaching methods and flexible scheduling.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-on-load animate-fade-in-up animate-delay-400">
            <Button 
              as="a"
              href="https://wa.me/447912941877?text=Hello! I would like to know the available schedules for driving lessons. When are you available for my first lesson?"
              target="_blank"
              rel="noopener noreferrer"
              variant="primary" 
              size="lg" 
              icon={<Calendar />}
              className="text-lg px-8 py-4 hover:scale-105 transform transition-all duration-300 hover:shadow-xl"
            >
              Book Your First Lesson
            </Button>
            <Button 
              as="a"
              href="tel:+447912941877"
              variant="outline" 
              size="lg" 
              icon={<Phone />}
              className="text-lg px-8 py-4 hover:scale-105 transform transition-all duration-300 hover:shadow-xl"
            >
              Call +44 7912 941877
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3 p-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
              <Clock className="w-6 h-6 text-yellow-400 flex-shrink-0" />
              <span className="font-medium">Flexible Scheduling</span>
            </div>
            <div className="flex items-center justify-center space-x-3 p-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
              <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
              <span className="font-medium">High Pass Rate</span>
            </div>
            <div className="flex items-center justify-center space-x-3 p-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
              <MapPin className="w-6 h-6 text-blue-400 flex-shrink-0" />
              <span className="font-medium">Multiple Locations</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Floating Elements for Modern Look */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400/20 rounded-full blur-xl animate-pulse hidden lg:block"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl animate-pulse hidden lg:block"></div>
      <div className="absolute top-1/2 right-8 w-16 h-16 bg-green-400/20 rounded-full blur-lg animate-pulse hidden lg:block"></div>
    </section>
  );
}
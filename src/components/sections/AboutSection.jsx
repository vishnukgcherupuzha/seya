import Button from '../ui/Button';
import { 
  Award, 
  Users, 
  Clock, 
  CheckCircle, 
  Car, 
  Shield, 
  Star,
  MapPin,
  Phone,
  Calendar
} from 'lucide-react';

export function AboutSection() {
  const stats = [
    { icon: Star, label: 'Google Rating', value: '5.0', color: 'text-yellow-500' },
    { icon: Users, label: 'Google Reviews', value: '31+', color: 'text-blue-500' },
    { icon: Clock, label: 'Years Experience', value: '4+', color: 'text-purple-500' },
    { icon: Award, label: 'Success Rate', value: '95%', color: 'text-green-500' }
  ];

  const features = [
    {
      icon: Shield,
      title: 'DVSA Approved',
      description: 'All our instructors are fully qualified and DVSA approved for your safety and confidence.'
    },
    {
      icon: Star,
      title: 'High Pass Rates',
      description: 'Our proven teaching methods result in a 95% first-time pass rate for our students.'
    },
    {
      icon: Clock,
      title: 'Flexible Timing',
      description: 'Choose from morning, afternoon, or evening lessons that fit your busy schedule.'
    },
    {
      icon: MapPin,
      title: 'Multiple Locations',
      description: 'We serve multiple areas across the city with convenient pickup points.'
    }
  ];

  const instructors = [
    {
      id: 1,
      name: 'Sendilkumar Keralasubramanian',
      experience: '4+ years',
      speciality: 'All levels - Beginners to Advanced',
      rating: 5.0,
      reviews: 31,
      initials: 'SK',
      bgColor: 'bg-yellow-500'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-load animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-100 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-800 mb-6">
            <Award className="w-4 h-4 mr-2 text-yellow-600 dark:text-yellow-400" />
            <span className="text-sm font-medium text-yellow-800 dark:text-yellow-300">
              About SEYA Driving School
            </span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Learn to Drive with
            <span className="block text-yellow-500 mt-2">Confidence & Safety</span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            At SEYA Driving School, our experienced instructor brings over 4 years of dedicated driving instruction expertise. 
            We use proven teaching methods to ensure you pass your test with confidence.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20 animate-on-load animate-fade-in-up animate-delay-200">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center">
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-700 mb-4`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20 animate-on-load animate-fade-in-up animate-delay-300">
          
          {/* Left Column - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/seyaHeader1.png" 
                alt="SEYA Driving School Instructor" 
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              
              {/* Floating Achievement Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">5.0</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Google Rating (31 reviews)</div>
                  </div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-400/20 rounded-full blur-xl hidden lg:block"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl hidden lg:block"></div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Why Choose SEYA Driving School?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                We believe learning to drive should be an enjoyable and stress-free experience. Our patient, 
                professional instructors work at your pace to build your confidence behind the wheel.
              </p>
              
              <div className="space-y-4">
                {[
                  'DVSA qualified and experienced instructors',
                  'Modern, well-maintained dual-control vehicles',
                  'Flexible lesson times to suit your schedule',
                  'Competitive pricing with no hidden fees',
                  'Theory and hazard perception training included'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                as="a"
                href="https://wa.me/447912941877?text=Hello! I would like to know the available schedules for driving lessons. When are you available for my first lesson?"
                target="_blank"
                rel="noopener noreferrer"
                variant="primary" 
                size="lg" 
                icon={<Calendar />}
                className="flex-1"
              >
                Book Your First Lesson
              </Button>
              <Button 
                as="a"
                href="tel:+447912941877"
                variant="outline" 
                size="lg" 
                icon={<Phone />}
                className="flex-1"
              >
                Call +44 7912 941877
              </Button>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-12">
            What Sets Us Apart
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 dark:bg-yellow-900/30 rounded-2xl mb-6 group-hover:bg-yellow-200 dark:group-hover:bg-yellow-900/50 transition-colors">
                  <feature.icon className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Instructor Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Meet Your Expert Instructor
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            Sendilkumar brings over 4 years of experience and maintains a perfect 5.0-star Google rating, ensuring you receive the highest quality driving instruction.
          </p>
          
          <div className="flex justify-center mb-12">
            {instructors.map((instructor) => (
              <div key={instructor.id} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:-translate-y-2 hover:scale-105 transition-all duration-300 max-w-md w-full">
                <div className={`w-24 h-24 ${instructor.bgColor} rounded-full mx-auto mb-6 flex items-center justify-center text-white font-bold text-2xl`}>
                  {instructor.initials}
                </div>
                
                <h4 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3 text-center">
                  {instructor.name}
                </h4>
                
                <div className="text-center text-gray-600 dark:text-gray-300 mb-3">
                  {instructor.experience} experience
                </div>
                
                <div className="text-center text-yellow-600 dark:text-yellow-400 mb-4">
                  {instructor.speciality}
                </div>
                
                <div className="flex items-center justify-center space-x-2 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                
                <div className="text-center">
                  <span className="text-lg font-bold text-gray-900 dark:text-white">
                    {instructor.rating}
                  </span>
                  <span className="text-gray-600 dark:text-gray-300 ml-2">
                    ({instructor.reviews} Google Reviews)
                  </span>
                </div>
              </div>
            ))}
          </div>

          <Button 
            as="a"
            href="https://wa.me/447912941877?text=Hello Sendilkumar! I would like to book a driving lesson with you. Could you please let me know your available schedules?"
            target="_blank"
            rel="noopener noreferrer"
            variant="primary" 
            size="lg" 
            icon={<Calendar />}
            className="mx-auto"
          >
            Book a Lesson with Sendilkumar
          </Button>
        </div>

      </div>
    </section>
  );
}
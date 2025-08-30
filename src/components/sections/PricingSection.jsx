import Button from '../ui/Button';
import { 
  Clock, 
  Car, 
  Calendar, 
  CheckCircle, 
  Star,
  Gift,
  CreditCard,
  Banknote,
  Smartphone,
  Shield
} from 'lucide-react';

export function PricingSection() {
  const pricingPlans = [
    {
      id: 'payg',
      name: 'Pay-as-you-go',
      price: '£84',
      period: 'for 2 hours',
      hourlyRate: '£42 per hour',
      popular: false,
      description: 'Perfect for beginners or those who prefer flexibility',
      features: [
        'Manual transmission lessons',
        'Any time subject to availability',
        'Learner driving lessons',
        'Refresher lessons available',
        'Motorway lessons included',
        'Gift vouchers available'
      ],
      bookingMessage: 'Hello! I would like to book pay-as-you-go driving lessons at £42 per hour. Could you please let me know your availability?'
    },
    {
      id: 'block',
      name: 'Block Payment',
      price: '£410',
      period: 'for 10 hours',
      hourlyRate: '£41 per hour',
      popular: true,
      savings: 'Save 10%',
      description: 'Best value with advance payment discount',
      features: [
        'Manual transmission lessons',
        'Any time subject to availability',
        'Learner driving lessons',
        'Refresher lessons available',
        'Motorway lessons included',
        'Gift vouchers available',
        '10% discount'
      ],
      bookingMessage: 'Hello! I would like to book the 10-hour block payment package for £410. Could you please provide more details about availability?'
    },
    {
      id: 'bigblock',
      name: '20-Hour Package',
      price: '£800',
      period: 'for 20 hours',
      hourlyRate: '£40 per hour',
      popular: false,
      savings: 'Save 20%',
      description: 'Maximum savings for committed learners',
      features: [
        'Manual transmission lessons',
        'Any time subject to availability',
        'Learner driving lessons',
        'Refresher lessons available',
        'Motorway lessons included',
        'Gift vouchers available',
        '20% discount'
      ],
      bookingMessage: 'Hello! I would like to book the 20-hour block payment package for £800. Could you please provide more details about availability?'
    }
  ];

  const paymentMethods = [
    {
      icon: Banknote,
      name: 'Bank Transfer',
      description: 'Direct bank transfer via our pupil app',
      details: 'Payment within 48 hours of booking'
    },
    {
      icon: CreditCard,
      name: 'Credit/Debit Cards',
      description: 'Pay through Total Drive App with Adyen',
      details: 'Service charges may apply'
    },
    {
      icon: Smartphone,
      name: 'Cash',
      description: 'Some instructors accept cash payments',
      details: 'Must be paid one lesson in advance'
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white dark:bg-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-load animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-100 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-800 mb-6">
            <Star className="w-4 h-4 mr-2 text-yellow-600 dark:text-yellow-400" />
            <span className="text-sm font-medium text-yellow-800 dark:text-yellow-300">
              Simple Pricing
            </span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Transparent &
            <span className="block text-yellow-500 mt-2">Affordable Rates</span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our simple pricing structure with no hidden fees. Manual transmission lessons, any time subject to availability.
          </p>
        </div>

        {/* Key Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-sm">
            <Car className="w-8 h-8 text-yellow-500 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Manual Transmission</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">Professional manual transmission training</p>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-sm">
            <Clock className="w-8 h-8 text-yellow-500 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Flexible Timing</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">Any time subject to availability</p>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-sm">
            <Gift className="w-8 h-8 text-yellow-500 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Gift Vouchers</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">Available for all lesson types</p>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-sm">
            <Shield className="w-8 h-8 text-yellow-500 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">All Lesson Types</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">Learner, refresher & motorway lessons</p>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16 animate-on-load animate-fade-in-up animate-delay-300">
          {pricingPlans.map((plan) => (
            <div key={plan.id} className={`relative bg-white dark:bg-gray-900 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ${plan.popular ? 'ring-2 ring-yellow-500 scale-105' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center space-x-2">
                    <span className="text-4xl font-bold text-gray-900 dark:text-white">{plan.price}</span>
                    <span className="text-gray-600 dark:text-gray-300">{plan.period}</span>
                  </div>
                  <div className="text-yellow-600 dark:text-yellow-400 font-medium mt-2">{plan.hourlyRate}</div>
                  {plan.savings && (
                    <div className="text-green-600 dark:text-green-400 font-medium text-sm mt-1">{plan.savings}</div>
                  )}
                  <p className="text-gray-600 dark:text-gray-300 mt-4">{plan.description}</p>
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  as="a"
                  href={`https://wa.me/447912941877?text=${encodeURIComponent(plan.bookingMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant={plan.popular ? "primary" : "outline"}
                  size="lg"
                  icon={<Calendar />}
                  className="w-full"
                >
                  Book Now
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Payment Methods */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">Payment Methods</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {paymentMethods.map((method, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 dark:bg-yellow-900/30 rounded-2xl mb-4">
                  <method.icon className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{method.name}</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-2">{method.description}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{method.details}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Important Information */}
        <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-2xl p-8 border border-yellow-200 dark:border-yellow-700">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Important Information</h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-700 dark:text-gray-300">
            <div>
              <h4 className="font-semibold mb-2">Booking & Payment</h4>
              <ul className="space-y-2">
                <li>• Payment required within 48 hours of booking</li>
                <li>• Immediate payment for bookings within 48 hours</li>
                <li>• Unpaid bookings may be released to other customers</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Block Payment Packages</h4>
              <ul className="space-y-2">
                <li>• 10-hour package: 10% discount (£410 total)</li>
                <li>• 20-hour package: 20% discount (£800 total)</li>
                <li>• Payment required within 48 hours of booking</li>
                <li>• Best value for committed learners</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
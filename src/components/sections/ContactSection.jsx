import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Button from '../ui/Button';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle,
  Send,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    subject: 'driving-lessons'
  });
  
  const [formStatus, setFormStatus] = useState({
    type: '', // 'success', 'error', 'loading'
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ type: 'loading', message: 'Sending message...' });

    try {
      const templateParams = {
        subject: formData.subject,
        name: formData.name,
        time: new Date().toLocaleString(),
        message: formData.message,
        email: formData.email,
        phone: formData.phone
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      
      setFormStatus({ 
        type: 'success', 
        message: 'Message sent successfully! We\'ll get back to you soon.' 
      });
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        subject: 'driving-lessons'
      });
    } catch (error) {
      console.error('Failed to send email:', error);
      setFormStatus({ 
        type: 'error', 
        message: 'Failed to send message. Please try again or contact us directly.' 
      });
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      info: '+44 7912 941877',
      description: 'Available 7 days a week',
      link: 'tel:+447912941877',
      color: 'text-blue-500'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      info: 'Quick Response',
      description: 'Message us anytime',
      link: 'https://wa.me/447912941877?text=Hello! I would like to inquire about driving lessons.',
      color: 'text-green-500',
      external: true
    },
    {
      icon: Mail,
      title: 'Email',
      info: 'info@seyadriving.com',
      description: 'We reply within 24 hours',
      link: 'mailto:info@seyadriving.com',
      color: 'text-yellow-500'
    },
    {
      icon: MapPin,
      title: 'Address',
      info: '11A Broom Way, Blackwater',
      description: 'Camberley GU17 9DJ',
      color: 'text-purple-500'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-load animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-100 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-800 mb-6">
            <Mail className="w-4 h-4 mr-2 text-yellow-600 dark:text-yellow-400" />
            <span className="text-sm font-medium text-yellow-800 dark:text-yellow-300">
              Get In Touch
            </span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Contact Us
            <span className="block text-yellow-500 mt-2">Today</span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to start your driving journey? Get in touch with us today and take the first step towards getting your license.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 animate-on-load animate-fade-in-up animate-delay-200">
          {contactInfo.map((contact, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 ${contact.color} bg-opacity-10 group-hover:bg-opacity-20 transition-colors`}>
                <contact.icon className={`w-8 h-8 ${contact.color}`} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{contact.title}</h3>
              {contact.link ? (
                <a 
                  href={contact.link}
                  target={contact.external ? "_blank" : "_self"}
                  rel={contact.external ? "noopener noreferrer" : undefined}
                  className={`block font-medium mb-1 hover:${contact.color} transition-colors`}
                >
                  {contact.info}
                </a>
              ) : (
                <div className="font-medium text-gray-900 dark:text-white mb-1">{contact.info}</div>
              )}
              <p className="text-sm text-gray-600 dark:text-gray-400">{contact.description}</p>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              {/* Phone and Subject Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
                  >
                    <option value="driving-lessons">Driving Lessons</option>
                    <option value="test-booking">Test Day Package</option>
                    <option value="refresher">Refresher Lessons</option>
                    <option value="intensive">Intensive Course</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none transition-colors"
                  placeholder="Tell us about your driving lesson requirements, availability, or any questions you have..."
                ></textarea>
              </div>

              {/* Status Message */}
              {formStatus.message && (
                <div className={`flex items-center space-x-2 p-4 rounded-lg ${
                  formStatus.type === 'success' ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300' :
                  formStatus.type === 'error' ? 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300' :
                  'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300'
                }`}>
                  {formStatus.type === 'success' && <CheckCircle className="w-5 h-5" />}
                  {formStatus.type === 'error' && <AlertCircle className="w-5 h-5" />}
                  {formStatus.type === 'loading' && <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />}
                  <span>{formStatus.message}</span>
                </div>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                variant="primary"
                size="lg"
                icon={<Send />}
                disabled={formStatus.type === 'loading'}
                className="w-full"
              >
                {formStatus.type === 'loading' ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>

          {/* Additional Info */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Why Choose SEYA?</h3>
            
            <div className="space-y-6">
              <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-xl">
                    <Clock className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Quick Response</h4>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  We typically respond to all inquiries within 2-4 hours during business hours. 
                  For urgent matters, call or WhatsApp us directly.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl">
                    <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Personalized Service</h4>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Every student receives a personalized learning plan based on their current skill level, 
                  goals, and availability.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
                    <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Local Knowledge</h4>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  As a Farnborough-based driving school, we know all the local test routes, 
                  traffic patterns, and challenging areas.
                </p>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-2xl border border-yellow-200 dark:border-yellow-800">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Need Immediate Help?</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                For urgent matters or last-minute lesson changes, contact us directly:
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  as="a"
                  href="tel:+447912941877"
                  variant="outline"
                  size="sm"
                  icon={<Phone />}
                  className="flex-1"
                >
                  Call Now
                </Button>
                <Button
                  as="a"
                  href="https://wa.me/447912941877"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  size="sm"
                  icon={<MessageCircle />}
                  className="flex-1"
                >
                  WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
import { Star, Quote, User } from 'lucide-react';

export function ReviewsSection() {
  const reviews = [

  {
    id: 1,
    name: "Rohit Tiwari",
    initials: "RT",
    rating: 5,
    date: "2 weeks ago",
    text: "Thanks for helping me pass my driving test. Sendil is a kind, encouraging and calm person and really helps with simple and logical driving. He prepared me in a very short time and made me feel confident.",
    bgColor: "bg-green-500"
  },
    {
    id: 2,
    name: "Vishnu KG",
    initials: "VK",
    rating: 5,
    date: "2 months ago",
    text: "Sendil is an excellent and budget-friendly driving instructor. I needed only a few lessons to pass my driving test on the first try. A big thank you to Senthil – I highly recommend him!",
    bgColor: "bg-blue-500"
  },
  {
    id: 3,
    name: "Shruti Tripathi",
    initials: "ST",
    rating: 5,
    date: "4 months ago",
    text: "Thanks for helping me pass my driving test in the first attempt! Sendil is a kind, encouraging and calm person and really helps with struggling areas by providing logic and practice.",
    bgColor: "bg-purple-500"
  },
  {
    id: 4,
    name: "Thushana Pirashath",
    initials: "TP",
    rating: 5,
    date: "8 months ago",
    text: "I'm very lucky to have him as a mentor. He taught us really well. I passed my driving practical exam in my first attempt. Lesson fee is also very affordable. Highly recommend!",
    bgColor: "bg-orange-500"
  },
  {
    id: 5,
    name: "Stephen Rerri-Bekibele",
    initials: "SR",
    rating: 5,
    date: "10 months ago",
    text: "You rarely find a better driving instructor who goes above and beyond to help his students. From theory prep to the driving test, Sendil has been an amazing mentor. His patience, knowledge and guidance helped me pass first time!",
    bgColor: "bg-pink-500"
  },
  {
    id: 6,
    name: "Shuhanuzzaman Suhan",
    initials: "SS",
    rating: 5,
    date: "1 month ago",
    text: "Thank you so much Sendil, you are an amazing person. Thank you for helping me pass my test. It was a wonderful journey.",
    bgColor: "bg-indigo-500"
  }
];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${i < rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section id="reviews" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-load animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-100 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-800 mb-6">
            <Star className="w-4 h-4 mr-2 text-yellow-600 dark:text-yellow-400" />
            <span className="text-sm font-medium text-yellow-800 dark:text-yellow-300">
              Student Reviews
            </span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            What Our Students
            <span className="block text-yellow-500 mt-2">Are Saying</span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our students have to say about their experience with SEYA Driving School.
          </p>
        </div>

        {/* Google Rating Summary */}
        <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 mb-16 text-center">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="text-6xl font-bold text-gray-900 dark:text-white">5.0</div>
            <div>
              <div className="flex items-center justify-center mb-2">
                {renderStars(5)}
              </div>
              <div className="text-gray-600 dark:text-gray-300">Based on 31+ Google Reviews</div>
            </div>
          </div>
          <div className="text-lg text-gray-700 dark:text-gray-300">
            Excellent rating on Google Reviews
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 animate-on-load animate-fade-in-up animate-delay-300">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative">
              {/* Quote Icon */}
              <div className="absolute top-4 right-4">
                <Quote className="w-6 h-6 text-yellow-500/30" />
              </div>
              
              {/* User Info */}
              <div className="flex items-center space-x-4 mb-4">
                <div className={`w-12 h-12 ${review.bgColor} rounded-full flex items-center justify-center text-white font-semibold`}>
                  {review.initials}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">{review.name}</h3>
                  <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                    <span>{review.date}</span>
                  </div>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {renderStars(review.rating)}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                "{review.text}"
              </p>
            </div>
          ))}
        </div>

        {/* Google Reviews CTA */}
        <div className="text-center">
          <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Read More Reviews
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              See what more of our students are saying about their experience with SEYA Driving School
            </p>
            <a 
              href="https://maps.app.goo.gl/GBiSqPBBYEhB7Wh8A" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-medium rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              <Star className="w-5 h-5 mr-2" />
              View Google Reviews
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
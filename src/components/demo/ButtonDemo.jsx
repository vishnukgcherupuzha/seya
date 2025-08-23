import Button from '../ui/Button';
import { 
  Phone, 
  Mail, 
  Calendar, 
  Download, 
  Share, 
  Heart,
  Settings,
  User,
  Car,
  MapPin,
  Clock
} from 'lucide-react';

export function ButtonDemo() {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Button Component Variants</h1>
      
      {/* Variants Section */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Variants</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="outline">Outline Button</Button>
          <Button variant="ghost">Ghost Button</Button>
          <Button variant="danger">Danger Button</Button>
          <Button variant="success">Success Button</Button>
        </div>
      </section>

      {/* Sizes Section */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Sizes</h2>
        <div className="flex flex-wrap items-center gap-4">
          <Button size="sm">Small Button</Button>
          <Button size="md">Medium Button</Button>
          <Button size="lg">Large Button</Button>
        </div>
      </section>

      {/* States Section */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">States</h2>
        <div className="flex flex-wrap gap-4">
          <Button>Normal Button</Button>
          <Button loading>Loading Button</Button>
          <Button disabled>Disabled Button</Button>
          <Button variant="outline" loading>Loading Outline</Button>
        </div>
      </section>

      {/* Icon Buttons Section */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Icon Buttons</h2>
        
        {/* Icon with text */}
        <div className="space-y-4">
          <h3 className="font-medium text-gray-700 dark:text-gray-300">Buttons with Icons</h3>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" icon={<Phone />}>Call Now</Button>
            <Button variant="secondary" icon={<Mail />} iconPosition="right">Send Email</Button>
            <Button variant="outline" icon={<Calendar />}>Schedule</Button>
            <Button variant="ghost" icon={<Download />}>Download</Button>
          </div>
        </div>

        {/* Icon only buttons */}
        <div className="space-y-4 mt-6">
          <h3 className="font-medium text-gray-700 dark:text-gray-300">Icon-Only Buttons</h3>
          <div className="flex flex-wrap gap-4">
            <Button variant="icon" iconOnly icon={<Settings />} />
            <Button variant="primary" iconOnly icon={<Phone />} />
            <Button variant="outline" iconOnly icon={<Share />} />
            <Button variant="ghost" iconOnly icon={<Heart />} />
            <Button variant="danger" iconOnly icon={<Settings />} />
          </div>
        </div>

        {/* Different sizes with icons */}
        <div className="space-y-4 mt-6">
          <h3 className="font-medium text-gray-700 dark:text-gray-300">Icon Sizes</h3>
          <div className="flex flex-wrap items-center gap-4">
            <Button size="sm" icon={<User />}>Small</Button>
            <Button size="md" icon={<User />}>Medium</Button>
            <Button size="lg" icon={<User />}>Large</Button>
          </div>
        </div>
      </section>

      {/* Background Aware Buttons */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Background-Aware Buttons</h2>
        <div className="relative rounded-lg overflow-hidden p-8 mb-6">
          <img 
            src="/seyaheader.png" 
            alt="Background demo" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 space-y-4 text-center">
            <h3 className="font-medium text-white mb-4">On Background Image</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="primary" onBackground={true}>Primary on BG</Button>
              <Button variant="secondary" onBackground={true}>Secondary on BG</Button>
              <Button variant="outline" onBackground={true}>Outline on BG</Button>
              <Button variant="ghost" onBackground={true}>Ghost on BG</Button>
              <Button variant="icon" iconOnly onBackground={true} icon={<Settings />} />
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="font-medium text-gray-700 dark:text-gray-300">Standard vs Background Variants</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <h4 className="text-sm font-medium mb-3 text-gray-600 dark:text-gray-400">Standard (Normal background)</h4>
              <div className="space-y-2">
                <Button variant="primary" size="sm">Book Lesson</Button>
                <Button variant="outline" size="sm">View Package</Button>
              </div>
            </div>
            <div className="relative p-4 rounded-lg overflow-hidden">
              <img 
                src="/seyaheader.png" 
                alt="Background" 
                className="absolute inset-0 w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="relative z-10">
                <h4 className="text-sm font-medium mb-3 text-white">Background-aware</h4>
                <div className="space-y-2">
                  <Button variant="primary" size="sm" onBackground={true}>Book Lesson</Button>
                  <Button variant="outline" size="sm" onBackground={true}>View Package</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Driving School Specific Examples */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">SEYA Driving School Examples</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="font-medium text-gray-700 dark:text-gray-300">Call-to-Action Buttons</h3>
            <div className="space-y-2">
              <Button variant="primary" size="lg" icon={<Calendar />} className="w-full">
                Book Your Lesson Now
              </Button>
              <Button variant="outline" size="md" icon={<Car />} className="w-full">
                View Our Packages
              </Button>
              <Button variant="ghost" size="sm" icon={<MapPin />}>
                Find Locations
              </Button>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-medium text-gray-700 dark:text-gray-300">Action Buttons</h3>
            <div className="space-y-2">
              <Button variant="success" size="md" icon={<Clock />}>
                Start Your Test
              </Button>
              <Button variant="secondary" size="md" icon={<Phone />}>
                Contact Instructor
              </Button>
              <Button variant="danger" size="sm">
                Cancel Booking
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Usage Example */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Usage Examples</h2>
        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <pre className="text-sm text-gray-600 dark:text-gray-300 overflow-x-auto">
            <code>{`// Basic usage
<Button>Click me</Button>

// With icons
<Button variant="primary" icon={<Phone />}>
  Call Now
</Button>

// Icon on right side
<Button variant="outline" icon={<Download />} iconPosition="right">
  Download PDF
</Button>

// Icon-only button
<Button variant="icon" iconOnly icon={<Settings />} />

// SEYA specific examples
<Button variant="primary" size="lg" icon={<Calendar />}>
  Book Your Lesson Now
</Button>

// Background-aware buttons (for hero sections)
<Button variant="primary" onBackground={true} icon={<Calendar />}>
  Book Your First Lesson
</Button>

<Button variant="outline" onBackground={true} icon={<Phone />}>
  Call Now: (555) 123-4567
</Button>

<Button variant="success" icon={<Clock />}>
  Start Driving Test
</Button>

// With loading state
<Button loading variant="outline" icon={<Phone />}>
  Calling Instructor...
</Button>`}</code>
          </pre>
        </div>
      </section>
    </div>
  );
}
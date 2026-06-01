import { CheckCircle, Award, Users, Shield, Clock, HeartHandshake } from 'lucide-react';

const reasons = [
  {
    icon: Shield,
    title: 'Registered Company in Japan',
    description: 'Officially registered and recognized by Japanese authorities for visa support services.',
  },
  {
    icon: Users,
    title: 'Experienced International Team',
    description: 'Our multilingual team understands the unique challenges of relocating to Japan.',
  },
  {
    icon: Clock,
    title: 'End-to-End Guidance',
    description: 'From initial consultation to your arrival in Japan, we support you at every step.',
  },
  {
    icon: HeartHandshake,
    title: 'Trusted Track Record',
    description: 'Hundreds of successful students and workers have started their Japan journey with us.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/3889843/pexels-photo-3889843.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional team meeting"
                className="w-full h-80 lg:h-96 object-cover"
              />
            </div>

            {/* Stats card */}
            <div className="absolute -bottom-6 -right-6 bg-brand-gold-500 rounded-xl shadow-xl p-6 hidden lg:block">
              <div className="text-center text-white">
                <p className="text-4xl font-bold">10+</p>
                <p className="text-sm">Years Experience</p>
              </div>
            </div>

            {/* Japan flag colors accent */}
            <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full bg-brand-blue-600 opacity-20 hidden lg:block" />
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-brand-blue-900 mb-4">
                Why Choose <span className="text-brand-gold-500">RG International</span>
              </h2>
              <p className="text-muted-foreground">
                We are committed to providing professional, reliable, and personalized support for your journey to Japan. Our experienced team ensures a smooth and stress-free process.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {reasons.map((reason) => (
                <div key={reason.title} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-brand-blue-100 flex items-center justify-center">
                      <reason.icon className="h-5 w-5 text-brand-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-blue-900 mb-1">{reason.title}</h3>
                    <p className="text-sm text-muted-foreground">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6 pt-4 border-t">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium">Visa Success</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-brand-gold-500" />
                <span className="text-sm font-medium">Verified Agency</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-brand-blue-600" />
                <span className="text-sm font-medium">500+ Clients</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

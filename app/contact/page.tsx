import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import ContactForm from './ContactForm';

const contactInfo = {
  companyName: 'RG International Co., Ltd.',
  representative: 'Gaire Raju',
  phone: '096-237-6573',
  mobile: '080-4690-4311',
  email: 'raju.rgintl@gmail.com',
  country: 'Japan',
};

export default function ContactPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/2025382/pexels-photo-2025382.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Japanese garden"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-blue-900/90 via-brand-blue-900/80 to-brand-blue-900/90" />
        </div>

        <div className="relative container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-sm px-4 py-2 text-sm text-white border border-white/30 mb-6">
              <svg className="w-4 h-4 text-brand-gold-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              Fukuoka, Japan
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Contact <span className="text-brand-gold-400">Us</span>
            </h1>
            <p className="text-lg text-white/90">
              Ready to start your journey to Japan? Get in touch with us today for a free consultation. We are here to help you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <div className="bg-brand-blue-600 text-white rounded-2xl p-6 lg:p-8 h-full">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-brand-blue-500 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">Phone</p>
                      <a href="tel:096-237-6573" className="text-brand-blue-100 hover:text-white transition-colors">
                        {contactInfo.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-brand-blue-500 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">Mobile</p>
                      <a href="tel:080-4690-4311" className="text-brand-blue-100 hover:text-white transition-colors">
                        {contactInfo.mobile}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-brand-blue-500 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:raju.rgintl@gmail.com" className="text-brand-blue-100 hover:text-white transition-colors">
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-brand-blue-500 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-brand-blue-100">{contactInfo.country}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-brand-blue-500 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">Business Hours</p>
                      <p className="text-brand-blue-100">Mon - Fri: 9:00 - 18:00 (JST)</p>
                      <p className="text-brand-blue-100">Sat: 10:00 - 15:00 (JST)</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-brand-blue-500">
                  <p className="text-sm text-brand-blue-100 mb-2">
                    <span className="font-semibold text-white">Company:</span> {contactInfo.companyName}
                  </p>
                  <p className="text-sm text-brand-blue-100">
                    <span className="font-semibold text-white">Representative:</span> {contactInfo.representative}
                  </p>
                </div>

                {/* Social Links */}
                <div className="mt-6 flex gap-4">
                  <a
                    href="https://wa.me/81962376573"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center hover:bg-green-600 transition-colors"
                  >
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </a>
                  <a
                    href="https://line.me/ti/p/@rginternational"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#00B900] flex items-center justify-center hover:bg-[#00A000] transition-colors"
                  >
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.365 9.863c.526-1.39.878-2.832.878-4.352 0-4.036-3.272-7.307-7.308-7.307S3.627 1.475 3.627 5.511c0 4.037 3.272 7.308 7.308 7.308 1.52 0 2.961-.352 4.352-.878l.428-.163 6.318 3.174-1.885-6.318.163-.428zM12.042 9.5c-2.203 0-3.989-1.786-3.989-3.989s1.786-3.989 3.989-3.989 3.989 1.786 3.989 3.989-1.786 3.989-3.989 3.989z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-brand-blue-900 mb-2">Our Location</h2>
            <p className="text-muted-foreground">Fukuoka, Japan</p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13455.84758678761!2d130.68537!3d32.7925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3546946bd26bfc39%3A0x95d51efc9c0e9f9e!2sFukuoka%2C%20Japan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

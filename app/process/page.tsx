import { MessageCircle, FileSearch, Search, Send, FileCheck, Plane } from 'lucide-react';
import CTABanner from '@/components/CTABanner';

const steps = [
  {
    step: 1,
    icon: MessageCircle,
    title: 'Initial Consultation',
    description: 'We start with a comprehensive consultation to understand your goals, assess your eligibility, and discuss the best pathway for your situation - whether student visa, work visa, or SSW.',
    details: [
      'Free consultation via phone, email, or in-person',
      'Assessment of your background and goals',
      'Explanation of visa options and requirements',
      'Timeline and cost estimate',
    ],
  },
  {
    step: 2,
    icon: FileSearch,
    title: 'Document Review',
    description: 'Our team reviews your documents to ensure everything is in order before submission. We help you gather any missing documents and prepare them according to Japanese immigration requirements.',
    details: [
      'Document checklist preparation',
      'Review and verification of all documents',
      'Translation services if needed',
      'Assistance with obtaining missing documents',
    ],
  },
  {
    step: 3,
    icon: Search,
    title: 'School or Job Matching',
    description: 'Based on your goals, we help you find the right Japanese language school or connect you with potential employers. We ensure the match aligns with your career objectives.',
    details: [
      'School recommendations and applications',
      'Job matching with verified employers',
      'Application submission to school/company',
      'Offer letter and contract review',
    ],
  },
  {
    step: 4,
    icon: Send,
    title: 'Application Submission',
    description: 'Once your school or job is confirmed, we prepare and submit your Certificate of Eligibility (COE) application to the Japanese immigration authorities.',
    details: [
      'COE application preparation',
      'Submission to Immigration Bureau',
      'Regular follow-up with authorities',
      'Response handling and updates',
    ],
  },
  {
    step: 5,
    icon: FileCheck,
    title: 'Visa Processing',
    description: 'After receiving your COE, we guide you through the visa application process at the Japanese embassy in your country, ensuring all requirements are met.',
    details: [
      'COE reception and delivery',
      'Embassy appointment scheduling',
      'Visa application preparation',
      'Interview preparation if required',
    ],
  },
  {
    step: 6,
    icon: Plane,
    title: 'Arrival in Japan',
    description: 'Congratulations! Once your visa is approved, we provide pre-departure guidance and post-arrival support to help you settle smoothly in Japan.',
    details: [
      'Pre-departure orientation',
      'Arrival coordination',
      'City registration assistance',
      'Ongoing support for settlement',
    ],
  },
];

export default function ProcessPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/161401/fushimi-inari-torii-shrine-kyoto-japan-temple-161401.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Fushimi Inari Shrine"
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
              Application <span className="text-brand-gold-400">Process</span>
            </h1>
            <p className="text-lg text-white/90">
              A clear, step-by-step journey from your first consultation to your new life in Japan. We guide you through every stage with expertise and care.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="relative">
            {/* Vertical line for desktop */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-brand-blue-100 hidden lg:block" />

            <div className="space-y-12 lg:space-y-0">
              {steps.map((step, index) => (
                <div
                  key={step.step}
                  className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`w-full lg:w-5/12 ${
                      index % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:text-left lg:pl-12'
                    }`}
                  >
                    <div
                      className={`bg-white rounded-xl shadow-lg p-6 lg:p-8 border border-gray-100 ${
                        index % 2 === 0 ? 'lg:ml-auto' : 'lg:mr-auto'
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-4 lg:justify-end">
                        <div className="w-12 h-12 rounded-lg bg-brand-blue-100 flex items-center justify-center">
                          <step.icon className="h-6 w-6 text-brand-blue-600" />
                        </div>
                        <div
                          className={`hidden lg:flex items-center justify-center w-10 h-10 rounded-full bg-brand-gold-500 text-white font-bold ${
                            index % 2 === 0 ? 'lg:order-1' : ''
                          }`}
                        >
                          {step.step}
                        </div>
                      </div>

                      <h3 className="text-xl lg:text-2xl font-bold text-brand-blue-900 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {step.description}
                      </p>
                      <ul
                        className={`space-y-2 ${
                          index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'
                        }`}
                      >
                        {step.details.map((detail, i) => (
                          <li
                            key={i}
                            className={`flex items-center gap-2 text-sm text-muted-foreground ${
                              index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                            }`}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold-400" />
                            {detail}
                          </li>
                        ))}
                      </ul>

                      {/* Mobile step number */}
                      <div className="lg:hidden mt-4 flex items-center justify-center">
                        <div className="w-10 h-10 rounded-full bg-brand-gold-500 text-white font-bold flex items-center justify-center">
                          {step.step}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Center dot for desktop */}
                  <div className="hidden lg:flex w-2/12 justify-center">
                    <div className="w-6 h-6 rounded-full bg-brand-gold-500 border-4 border-white shadow-lg z-10" />
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden lg:block w-5/12" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Duration Info */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-brand-blue-900 mb-4">
                Estimated Timeline
              </h2>
              <p className="text-muted-foreground">
                Processing times vary depending on the type of visa and your specific situation.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
                <p className="text-3xl font-bold text-brand-blue-600 mb-2">2-4 months</p>
                <p className="font-semibold text-brand-blue-900 mb-1">Student Visa</p>
                <p className="text-sm text-muted-foreground">From consultation to visa issuance</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
                <p className="text-3xl font-bold text-brand-blue-600 mb-2">3-6 months</p>
                <p className="font-semibold text-brand-blue-900 mb-1">Work Visa</p>
                <p className="text-sm text-muted-foreground">Including job matching process</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
                <p className="text-3xl font-bold text-brand-blue-600 mb-2">4-8 months</p>
                <p className="font-semibold text-brand-blue-900 mb-1">SSW Visa</p>
                <p className="text-sm text-muted-foreground">Including test preparation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}

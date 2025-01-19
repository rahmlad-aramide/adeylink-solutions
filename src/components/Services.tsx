import { Wifi, Phone, Tv, MessageSquare, FileText, Banknote, Database, Globe } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: <Database className="w-8 h-8 text-blue-600" />,
      title: 'Data Subscription',
      description: 'Affordable data plans for all networks with instant delivery.'
    },
    {
      icon: <Phone className="w-8 h-8 text-blue-600" />,
      title: 'Airtime Topup',
      description: 'Quick and easy airtime recharge at the best rates.'
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      title: 'Utility Bills Payment',
      description: 'Pay your electricity, water, and other utility bills hassle-free.'
    },
    {
      icon: <Tv className="w-8 h-8 text-blue-600" />,
      title: 'Cable TV Subscription',
      description: 'Renew your DSTV, GOTV, and Startimes subscriptions instantly.'
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-blue-600" />,
      title: 'Bulk SMS',
      description: 'Send bulk SMS messages to your customers at competitive rates.'
    },
    {
      icon: <FileText className="w-8 h-8 text-blue-600" />,
      title: 'Exam Result Checker',
      description: 'Check WAEC, NECO, and JAMB results with ease.'
    },
    {
      icon: <Banknote className="w-8 h-8 text-blue-600" />,
      title: 'Airtime to Cash',
      description: 'Convert your airtime to cash at the best rates.'
    },
    {
      icon: <Wifi className="w-8 h-8 text-blue-600" />,
      title: 'Wide Range Data Plans',
      description: 'Flexible data plans to suit your needs and budget.'
    }
  ];

  return (
    <section className="py-16 bg-gray-50" id="services">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Our Services</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          We offer a wide range of digital services to keep you connected and make your life easier.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
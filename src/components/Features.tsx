import { ShieldCheck, Zap, Headphones, CreditCard } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: 'Instant Delivery',
      description: 'Get your data and airtime delivered instantly after payment confirmation.',
      image: 'https://images.unsplash.com/photo-1601972599720-36938d4ecd31?auto=format&fit=crop&q=80'
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
      title: 'Secure Transactions',
      description: 'Your payments are protected with bank-grade security measures.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80'
    },
    {
      icon: <Headphones className="w-8 h-8 text-blue-600" />,
      title: '24/7 Support',
      description: 'Our customer support team is always available to help you.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80'
    },
    {
      icon: <CreditCard className="w-8 h-8 text-blue-600" />,
      title: 'Flexible Payment',
      description: 'Multiple payment options available for your convenience.',
      image: 'https://images.unsplash.com/photo-1559067096-49ebca3406aa?auto=format&fit=crop&q=80'
    }
  ];

  return (
    <section className="py-16 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg">
              <div className="absolute inset-0">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-blue-900/40"></div>
              </div>
              <div className="relative p-6 h-full flex flex-col items-center text-center text-white">
                <div className="mb-4 p-3 bg-white/10 rounded-full backdrop-blur-sm">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-blue-100">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
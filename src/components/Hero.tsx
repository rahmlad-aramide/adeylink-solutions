import { UserPlus, LogIn } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-blue-50 to-white" id="home">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Stay Connected with Affordable Data Plans
            </h1>
            <p className="text-xl mb-8 text-gray-600">
              Get instant access to cheap data bundles and airtime for all networks. Fast delivery, secure transactions, 24/7 support.
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 inline-flex items-center gap-2 max-w-xs justify-center">
                <UserPlus size={20} />
                Create Free Account
              </button>
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-700 hover:text-white px-6 py-3 rounded-md font-semibold inline-flex items-center gap-2 max-w-xs justify-center">
                <LogIn size={20} />
                Merchant Login
              </button>
            </div>
          </div>
          <div className="flex">
            <img
              src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80"
              alt="Happy people using mobile phones"
              className="rounded-lg shadow-xl w-full"
            />
          </div>
        </div>
      </div>
      
      {/* Stats */}
      <div className="max-w-7xl mx-auto px-4 mt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-gray-900">50K+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gray-900">99.9%</div>
            <div className="text-gray-600">Uptime</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gray-900">24/7</div>
            <div className="text-gray-600">Support</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gray-900">Instant</div>
            <div className="text-gray-600">Delivery</div>
          </div>
        </div>
      </div>
    </section>
  );
}
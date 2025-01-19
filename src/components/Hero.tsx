import { UserPlus, LogIn } from 'lucide-react';
import hero from '../assets/hero.jpg';

export function Hero() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-blue-50 to-white" id="home">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className='text-blue-700 font-medium'><span className='w-10 h-1 bg-blue-700 block'></span> Adeylink Solutions</h1>
            <h2 className="text-4xl/tight md:text-5xl/tight font-bold mb-6 text-gray-900">
              Stay Connected with Affordable Data Plans
            </h2>
            <p className="text-xl mb-8 text-gray-600">
              Get instant access to cheap data bundles and airtime for all networks, decoder subscriptions, electricity bill payments, result checkers, and more. We guarantee fast delivery, secure transactions, and unwavering support.
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <a href='https://adeylinksolutions.com.ng/portal' className="border-2 border-blue-600 bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 inline-flex items-center gap-2 max-w-xs justify-center transition duration-200">
                <UserPlus size={20} />
                Create Free Account
              </a>
              <a href='https://adeylinksolutions.com.ng/portal/register.php' className="border-2 border-blue-600 text-blue-600 hover:bg-blue-700 hover:text-white px-6 py-3 rounded-md font-semibold inline-flex items-center gap-2 max-w-xs justify-center transition duration-200">
                <LogIn size={20} />
                Merchant Login
              </a>
            </div>
          </div>
          <div className="flex">
            <img
              src={hero}
              alt="A lady taking selfie on a couch"
              className="rounded-lg shadow-xl w-full"
            />
          </div>
        </div>
      </div>
      
      {/* Stats */}
      <div className="max-w-7xl mx-auto px-4 mt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-gray-900">50+</div>
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
            <div className="text-3xl font-bold text-gray-900">Fast</div>
            <div className="text-gray-600">Delivery</div>
          </div>
        </div>
      </div>
    </section>
  );
}
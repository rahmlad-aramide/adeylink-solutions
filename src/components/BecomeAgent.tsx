import { Users } from 'lucide-react';

export function BecomeAgent() {
  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Become an Agent</h2>
            <p className="text-xl text-blue-100 mb-8">
              Join our network of successful agents and start earning by reselling our services. 
              Enjoy competitive commissions, instant settlements, and dedicated support.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <div className="bg-blue-500 p-3 rounded-full">
                  <Users size={20} />
                </div>
                <span>Access to all services at wholesale prices</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-blue-500 p-3 rounded-full">
                  <Users size={20} />
                </div>
                <span>Automated systems for easy transactions</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-blue-500 p-3 rounded-full">
                  <Users size={20} />
                </div>
                <span>24/7 dedicated agent support</span>
              </li>
            </ul>
            <button className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-blue-50">
              Register as an Agent
            </button>
          </div>
          <div className="hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80"
              alt="Successful business person"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
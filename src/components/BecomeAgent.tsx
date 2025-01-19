import { DatabaseZap, Headset, Workflow } from 'lucide-react';
import agent from '../assets/agent.jpg';

export function BecomeAgent() {
  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Become an Agent</h2>
            <p className="text-xl text-blue-100 mb-8">
              Join our network of successful agents and start earning by reselling our services. 
              Enjoy competitive commissions, instant settlements, and dedicated support.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <div className="bg-blue-500 p-3 rounded-full">
                  <DatabaseZap size={20} />
                </div>
                <span>Access to all services at a low rate</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-blue-500 p-3 rounded-full">
                  <Workflow size={20} />
                </div>
                <span>Automated systems for easy transactions</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-blue-500 p-3 rounded-full">
                  <Headset size={20} />
                </div>
                <span>Dedicated agent support</span>
              </li>
            </ul>
            <a href='https://adeylinksolutions.com.ng/portal' className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-blue-50">
              Register as an Agent
            </a>
          </div>
          <div className="flex">
            <img
              src={agent}
              alt="A man workin on his computer"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
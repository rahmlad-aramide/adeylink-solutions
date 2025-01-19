import { ChevronRight } from "lucide-react";
import about from '../assets/about.jpg'

export function About() {
  return (
    <section className="pb-16 md:pt-16 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-last">
            <img
              src={about}
              alt="A lady and 2 guides looking at something on the phone"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">
              About Adeylink Solutions
            </h2>
            <p className="text-gray-600 mb-6">
              At Adeylink Solutions, we're committed to making digital services
              accessible and affordable for everyone. With years of experience
              in the telecommunications industry, we've built a reputation for
              reliability, speed, and exceptional customer service.
            </p>
            <p className="text-gray-600 mb-8">
              Our automated system ensures instant delivery of services, while
              our dedicated support team is always ready to assist you. We
              pride ourselves on offering the best rates in the market without
              compromising on quality.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 flex items-center gap-2">
              Get Started
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

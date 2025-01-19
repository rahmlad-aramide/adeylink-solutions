import { Mail, MapPin, PhoneCall } from "lucide-react";

export function Contact() {
  return (
    <section className="py-16 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10">
        <h2 className="text-3xl font-bold text-center mb-4">Contact Us</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Have questions? We're here to help. Contact us through any of these
          channels.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="text-blue-600" />
                  <a href="mailto:support@adeylinksolutions.com.ng">support@adeylinksolutions.com.ng</a>
                </div>
                <div className="flex items-center gap-3">
                  <PhoneCall className="text-blue-600" />
                  <span>+234 800 ADEYLINK</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="text-blue-600" />
                  <span>Iwo, Osun State, Nigeria</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
              <p className="text-gray-600">
                Our customer support team is always available to assist you with
                any queries or concerns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

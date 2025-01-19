import { ChevronRight } from "lucide-react";
import { NetworkPricingTable } from "./NetworkPricingTable";

export function Pricing() {
    return (
        <section className="py-16 px-4 max-w-7xl mx-auto" id="pricing">
                <h2 className="text-3xl font-bold text-center px-5 sm:px-8 md:px-10">Our Data Plans</h2>
                <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                  Choose from our wide range of affordable data plans across all
                  networks.
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  <NetworkPricingTable
                    network="MTN"
                    plans={[
                      { size: "500MB", price: "₦150" },
                      { size: "1GB", price: "₦250" },
                      { size: "2GB", price: "₦500" },
                      { size: "5GB", price: "₦1,200" },
                      { size: "10GB", price: "₦2,400" },
                    ]}
                  />
                  <NetworkPricingTable
                    network="Airtel"
                    plans={[
                      { size: "500MB", price: "₦145" },
                      { size: "1GB", price: "₦240" },
                      { size: "2GB", price: "₦480" },
                      { size: "5GB", price: "₦1,150" },
                      { size: "10GB", price: "₦2,300" },
                    ]}
                  />
                  <NetworkPricingTable
                    network="Glo"
                    plans={[
                      { size: "500MB", price: "₦140" },
                      { size: "1GB", price: "₦235" },
                      { size: "2GB", price: "₦470" },
                      { size: "5GB", price: "₦1,100" },
                      { size: "10GB", price: "₦2,200" },
                    ]}
                  />
                  <NetworkPricingTable
                    network="9mobile"
                    plans={[
                      { size: "500MB", price: "₦155" },
                      { size: "1GB", price: "₦255" },
                      { size: "2GB", price: "₦510" },
                      { size: "5GB", price: "₦1,250" },
                      { size: "10GB", price: "₦2,500" },
                    ]}
                  />
                </div>
                <div className="flex justify-center items-center mt-8">
                <a href='https://adeylinksolutions.com.ng/portal' className="border-2 border-blue-600 text-blue-600 hover:bg-blue-700 hover:text-white px-6 py-3 rounded-md font-semibold inline-flex items-center gap-2 max-w-xs justify-center transition duration-200">
                    See more
                    <ChevronRight size={20} />
                </a>
                </div>
              </section>
    )
}
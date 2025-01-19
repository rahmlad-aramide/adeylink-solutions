import mtn from '../assets/mtn-logo.jpg';
import glo from '../assets/glo-logo.jpg';
import airtel from '../assets/airtel-logo.jpg';
import nineMobile from '../assets/9mobile-logo.jpg';

interface Plan {
  size: string;
  price: string;
}

interface NetworkPricingTableProps {
  network: string;
  plans: Plan[];
}

export function NetworkPricingTable({ network, plans }: NetworkPricingTableProps) {
  const getNetworkColor = (network: string) => {
    switch (network.toLowerCase()) {
      case 'mtn':
        return 'bg-yellow-500';
      case 'airtel':
        return 'bg-red-500';
      case 'glo':
        return 'bg-green-600';
      case '9mobile':
        return 'bg-green-800';
      default:
        return 'bg-gray-500';
    }
  };

  const getNetworkLogo = (network: string) => {
    switch (network.toLowerCase()) {
      case 'mtn':
        return mtn;
      case 'airtel':
        return airtel;
      case 'glo':
        return glo;
      case '9mobile':
        return nineMobile;
      default:
        return '';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className={`${getNetworkColor(network)} px-6 py-4 flex items-center gap-4`}>
        <img 
          src={getNetworkLogo(network)} 
          alt={`${network} logo`} 
          className="h-8 w-auto object-contain bg-white rounded p-1"
        />
        <h3 className="text-xl font-bold text-white">{network} Data Plans</h3>
      </div>
      <div className="p-6">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-2">Data Size</th>
              <th className="text-right py-2">Price</th>
            </tr>
          </thead>
          <tbody>
            {plans.map((plan, index) => (
              <tr key={index} className="border-b last:border-b-0">
                <td className="py-3">{plan.size}</td>
                <td className="py-3 text-right">{plan.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-6">
          <button className="w-full bg-blue-600 text-white py-2 rounded-md text-sm hover:bg-blue-700">
            Buy {network} Data
          </button>
        </div>
      </div>
    </div>
  );
}
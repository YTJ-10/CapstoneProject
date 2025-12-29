import { Coins } from 'lucide-react';

function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="bg-teal-100 p-2 rounded-lg">
              <Coins className="w-6 h-6 text-teal-600" />
            </div>
            <span className="text-xl font-bold text-gray-800">MoneyMorph</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition">Features</a>
            <a href="#rates" className="text-gray-600 hover:text-gray-900 transition">Rates</a>
            <a href="#support" className="text-gray-600 hover:text-gray-900 transition">Support</a>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full transition">
              Log In
            </button>
          </nav>

          <button className="md:hidden text-gray-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;

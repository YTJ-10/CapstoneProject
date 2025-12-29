import { Github, Twitter, Instagram } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex space-x-8 text-sm">
            <a href="#terms" className="hover:text-teal-300 transition">Terms of Service</a>
            <a href="#support" className="hover:text-teal-300 transition">Support</a>
            <a href="#privacy" className="hover:text-teal-300 transition">Privacy</a>
          </div>

          <div className="flex space-x-6">
            <a href="#github" className="hover:text-teal-300 transition">
              <Github className="w-5 h-5" />
            </a>
            <a href="#twitter" className="hover:text-teal-300 transition">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#instagram" className="hover:text-teal-300 transition">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

function Hero({ onStartConverting }) {
  return (
    <div className="relative bg-gradient-to-br from-teal-100 via-teal-50 to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              SEAMLESS MONEY<br />
              EXCHANGE,<br />
              <span className="text-teal-600">INSTANTLY</span>
            </h1>

            <p className="text-lg text-gray-600 max-w-md">
              Global currency, at your fingertips
            </p>

            <button
              onClick={onStartConverting}
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-medium transition transform hover:scale-105 shadow-lg"
            >
              START CONVERTING
            </button>
          </div>

          <div className="relative hidden lg:block">
            <div className="w-full h-96 bg-gradient-to-br from-teal-200/30 to-blue-200/30 rounded-3xl flex items-center justify-center">
              <svg className="w-full h-full opacity-20" viewBox="0 0 800 400">
                <circle cx="150" cy="100" r="4" fill="currentColor" className="text-teal-600" />
                <circle cx="280" cy="80" r="4" fill="currentColor" className="text-blue-600" />
                <circle cx="450" cy="120" r="4" fill="currentColor" className="text-teal-600" />
                <circle cx="620" cy="90" r="4" fill="currentColor" className="text-blue-600" />
                <circle cx="700" cy="140" r="4" fill="currentColor" className="text-teal-600" />
                <circle cx="200" cy="200" r="4" fill="currentColor" className="text-blue-600" />
                <circle cx="400" cy="250" r="4" fill="currentColor" className="text-teal-600" />
                <circle cx="600" cy="280" r="4" fill="currentColor" className="text-blue-600" />
                <path d="M 150 100 Q 215 90 280 80" stroke="currentColor" strokeWidth="1" fill="none" className="text-teal-400" opacity="0.3" />
                <path d="M 280 80 Q 365 100 450 120" stroke="currentColor" strokeWidth="1" fill="none" className="text-blue-400" opacity="0.3" />
                <path d="M 450 120 Q 535 105 620 90" stroke="currentColor" strokeWidth="1" fill="none" className="text-teal-400" opacity="0.3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

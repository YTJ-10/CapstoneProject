import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import CurrencyConverter from './components/CurrencyConverter';

function App() {
  const [showConverter, setShowConverter] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {!showConverter ? (
          <Hero onStartConverting={() => setShowConverter(true)} />
        ) : (
          <CurrencyConverter />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;

import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import CurrencySelector from './CurrencySelector';
import AmountInput from './AmountInput';

const API_KEY = import.meta.env.VITE_EXCHANGE_RATE_API_KEY;
const API_BASE_URL = 'https://v6.exchangerate-api.com/v6';

const FALLBACK_RATES = {
  'USD': { 'EUR': 0.92, 'GBP': 0.79, 'JPY': 149.50, 'CAD': 1.36, 'AUD': 1.54, 'CHF': 0.88, 'CNY': 7.24, 'INR': 83.10, 'MXN': 17.05, 'BRL': 4.97 },
  'EUR': { 'USD': 1.09, 'GBP': 0.86, 'JPY': 162.59, 'CAD': 1.48, 'AUD': 1.67, 'CHF': 0.96, 'CNY': 7.87, 'INR': 90.33, 'MXN': 18.54, 'BRL': 5.41 },
  'GBP': { 'USD': 1.27, 'EUR': 1.16, 'JPY': 189.11, 'CAD': 1.72, 'AUD': 1.94, 'CHF': 1.12, 'CNY': 9.15, 'INR': 105.06, 'MXN': 21.56, 'BRL': 6.29 },
  'JPY': { 'USD': 0.0067, 'EUR': 0.0062, 'GBP': 0.0053, 'CAD': 0.0091, 'AUD': 0.0103, 'CHF': 0.0059, 'CNY': 0.0484, 'INR': 0.556, 'MXN': 0.114, 'BRL': 0.0334 },
  'CAD': { 'USD': 0.735, 'EUR': 0.676, 'GBP': 0.580, 'JPY': 109.93, 'AUD': 1.132, 'CHF': 0.647, 'CNY': 5.323, 'INR': 61.03, 'MXN': 12.53, 'BRL': 3.657 },
  'AUD': { 'USD': 0.649, 'EUR': 0.597, 'GBP': 0.513, 'JPY': 97.07, 'CAD': 0.883, 'CHF': 0.571, 'CNY': 4.700, 'INR': 53.93, 'MXN': 11.08, 'BRL': 3.234 },
  'CHF': { 'USD': 1.136, 'EUR': 1.044, 'GBP': 0.893, 'JPY': 170.11, 'CAD': 1.545, 'AUD': 1.752, 'CNY': 8.227, 'INR': 94.49, 'MXN': 19.40, 'BRL': 5.666 },
  'CNY': { 'USD': 0.138, 'EUR': 0.127, 'GBP': 0.109, 'JPY': 20.68, 'CAD': 0.188, 'AUD': 0.213, 'CHF': 0.122, 'INR': 11.49, 'MXN': 2.359, 'BRL': 0.689 },
  'INR': { 'USD': 0.012, 'EUR': 0.0111, 'GBP': 0.0095, 'JPY': 1.80, 'CAD': 0.0163, 'AUD': 0.0185, 'CHF': 0.0106, 'CNY': 0.087, 'MXN': 0.205, 'BRL': 0.060 },
};

function CurrencyConverter() {
  const [currencies, setCurrencies] = useState([]);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('GBP');
  const [amount, setAmount] = useState('100');
  const [convertedAmount, setConvertedAmount] = useState('75.70');
  const [exchangeRate, setExchangeRate] = useState(0.7570);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [lastUpdate, setLastUpdate] = useState(null);
  const [usesFallback, setUsesFallback] = useState(false);

  useEffect(() => {
    fetchCurrencies();
    setExchangeRateFromFallback(fromCurrency, toCurrency);
  }, []);

  useEffect(() => {
    if (fromCurrency && toCurrency) {
      if (API_KEY) {
        fetchExchangeRate();
      } else {
        setExchangeRateFromFallback(fromCurrency, toCurrency);
      }
    }
  }, [fromCurrency, toCurrency]);

  useEffect(() => {
    if (amount && exchangeRate) {
      const result = (parseFloat(amount) * exchangeRate).toFixed(2);
      setConvertedAmount(result);
    }
  }, [amount, exchangeRate]);

  const setExchangeRateFromFallback = (from, to) => {
    if (from === to) {
      setExchangeRate(1);
      return;
    }

    const rate = FALLBACK_RATES[from]?.[to] || FALLBACK_RATES[to]?.[from];
    if (rate) {
      if (FALLBACK_RATES[from]?.[to]) {
        setExchangeRate(rate);
      } else {
        setExchangeRate(1 / rate);
      }
      setUsesFallback(true);
    }
  };

  const fetchCurrencies = async () => {
    try {
      if (!API_KEY) {
        setCurrencies([
          ['USD', 'US Dollar'],
          ['EUR', 'Euro'],
          ['GBP', 'British Pound'],
          ['JPY', 'Japanese Yen'],
          ['CAD', 'Canadian Dollar'],
          ['AUD', 'Australian Dollar'],
          ['CHF', 'Swiss Franc'],
          ['CNY', 'Chinese Yuan'],
          ['INR', 'Indian Rupee'],
          ['MXN', 'Mexican Peso'],
          ['BRL', 'Brazilian Real']
        ]);
        setError(null);
        return;
      }

      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/${API_KEY}/codes`);

      if (!response.ok) {
        throw new Error('Failed to fetch currencies');
      }

      const data = await response.json();

      if (data.result === 'success') {
        setCurrencies(data.supported_codes);
        setError(null);
      } else {
        throw new Error('Invalid API response');
      }
    } catch (err) {
      setCurrencies([
        ['USD', 'US Dollar'],
        ['EUR', 'Euro'],
        ['GBP', 'British Pound'],
        ['JPY', 'Japanese Yen'],
        ['CAD', 'Canadian Dollar'],
        ['AUD', 'Australian Dollar'],
        ['CHF', 'Swiss Franc'],
        ['CNY', 'Chinese Yuan'],
        ['INR', 'Indian Rupee'],
        ['MXN', 'Mexican Peso'],
        ['BRL', 'Brazilian Real']
      ]);
    } finally {
      setLoading(false);
    }
  };

  const fetchExchangeRate = async () => {
    try {
      setLoading(true);
      setError(null);
      setUsesFallback(false);

      const response = await fetch(`${API_BASE_URL}/${API_KEY}/pair/${fromCurrency}/${toCurrency}`);

      if (!response.ok) {
        throw new Error('Failed to fetch exchange rate');
      }

      const data = await response.json();

      if (data.result === 'success') {
        setExchangeRate(data.conversion_rate);
        setLastUpdate(new Date(data.time_last_update_utc));
      } else {
        throw new Error('Invalid API response');
      }
    } catch (err) {
      setExchangeRateFromFallback(fromCurrency, toCurrency);
      setLastUpdate(null);
    } finally {
      setLoading(false);
    }
  };

  const handleConvert = () => {
    if (amount && exchangeRate) {
      const result = (parseFloat(amount) * exchangeRate).toFixed(2);
      setConvertedAmount(result);
    }
  };

  const handleSwapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return (
    <div className="bg-gradient-to-br from-teal-50 via-blue-50 to-teal-100 min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Currency Converter
          </h2>

          {usesFallback && (
            <div className="bg-blue-50 border border-blue-200 text-blue-700 px-4 py-3 rounded-lg mb-6 text-sm">
              Using fallback exchange rates. For real-time rates, add your ExchangeRate-API key to .env
            </div>
          )}

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
              {error}
            </div>
          )}

          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">From</label>
                <CurrencySelector
                  currencies={currencies}
                  selectedCurrency={fromCurrency}
                  onCurrencyChange={setFromCurrency}
                  disabled={loading}
                />
                <AmountInput
                  value={amount}
                  onChange={setAmount}
                  disabled={loading}
                  currency={fromCurrency}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">To</label>
                <CurrencySelector
                  currencies={currencies}
                  selectedCurrency={toCurrency}
                  onCurrencyChange={setToCurrency}
                  disabled={loading}
                />
                <div className="text-3xl font-bold text-teal-600 py-4">
                  {convertedAmount}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <button
                onClick={handleSwapCurrencies}
                className="p-2 rounded-full bg-teal-100 hover:bg-teal-200 transition"
                disabled={loading}
              >
                <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                </svg>
              </button>
            </div>

            <div className="bg-gray-50 rounded-xl p-4 space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Exchange Rate:</span>
                <span className="font-semibold text-gray-800">
                  {amount} {fromCurrency} ≈ {exchangeRate.toFixed(4)} {toCurrency}
                </span>
              </div>
              {lastUpdate && (
                <div className="text-xs text-gray-500">
                  Last updated: {lastUpdate.toLocaleString()}
                </div>
              )}
            </div>

            <button
              onClick={handleConvert}
              disabled={loading || !amount}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-4 rounded-full font-medium text-lg transition transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg"
            >
              {loading ? 'Loading...' : 'CONVERT'}
            </button>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-600">
          <p>Real-time exchange rates powered by ExchangeRate-API</p>
        </div>
      </div>
    </div>
  );
}

export default CurrencyConverter;

function CurrencySelector({ currencies, selectedCurrency, onCurrencyChange, disabled }) {
  const getFlagEmoji = (currencyCode) => {
    const flagMap = {
      'USD': '🇺🇸',
      'EUR': '🇪🇺',
      'GBP': '🇬🇧',
      'JPY': '🇯🇵',
      'CAD': '🇨🇦',
      'AUD': '🇦🇺',
      'CHF': '🇨🇭',
      'CNY': '🇨🇳',
      'INR': '🇮🇳',
      'MXN': '🇲🇽',
      'BRL': '🇧🇷',
      'ZAR': '🇿🇦',
      'NZD': '🇳🇿',
      'SGD': '🇸🇬',
      'HKD': '🇭🇰',
      'KRW': '🇰🇷',
      'SEK': '🇸🇪',
      'NOK': '🇳🇴',
      'DKK': '🇩🇰',
      'PLN': '🇵🇱',
      'THB': '🇹🇭',
      'MYR': '🇲🇾',
      'IDR': '🇮🇩',
      'PHP': '🇵🇭',
      'RUB': '🇷🇺',
      'TRY': '🇹🇷',
      'AED': '🇦🇪',
      'SAR': '🇸🇦',
      'ILS': '🇮🇱',
      'EGP': '🇪🇬',
      'NGN': '🇳🇬',
      'PKR': '🇵🇰',
      'BDT': '🇧🇩',
      'VND': '🇻🇳',
      'ARS': '🇦🇷',
      'CLP': '🇨🇱',
      'COP': '🇨🇴',
      'PEN': '🇵🇪',
    };
    return flagMap[currencyCode] || '🌐';
  };

  return (
    <div className="relative">
      <select
        value={selectedCurrency}
        onChange={(e) => onCurrencyChange(e.target.value)}
        disabled={disabled}
        className="w-full bg-white border-2 border-gray-200 rounded-xl px-4 py-3 text-lg font-medium focus:outline-none focus:border-teal-400 transition appearance-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {currencies.map(([code, name]) => (
          <option key={code} value={code}>
            {getFlagEmoji(code)} {code} - {name}
          </option>
        ))}
      </select>
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
}

export default CurrencySelector;

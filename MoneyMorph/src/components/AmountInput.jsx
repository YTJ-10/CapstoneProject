function AmountInput({ value, onChange, disabled, currency }) {
  const handleChange = (e) => {
    const inputValue = e.target.value;
    if (inputValue === '' || /^\d*\.?\d*$/.test(inputValue)) {
      onChange(inputValue);
    }
  };

  return (
    <div className="relative">
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 font-medium">
        $
      </div>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        disabled={disabled}
        placeholder="0.00"
        className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl pl-8 pr-4 py-3 text-2xl font-bold focus:outline-none focus:border-teal-400 transition disabled:opacity-50 disabled:cursor-not-allowed"
      />
    </div>
  );
}

export default AmountInput;

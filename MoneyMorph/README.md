# MoneyMorph - Currency Converter

A beautiful, responsive currency converter application built with React and Tailwind CSS.

## Features

- Real-time currency exchange rates via ExchangeRate-API
- Support for 150+ currencies
- Clean, modern UI design
- Fully responsive (mobile, tablet, desktop)
- Live conversion as you type
- Currency swap functionality
- Error handling and loading states

## Setup

1. Install dependencies:
```bash
npm install
```

2. Get your free API key from [ExchangeRate-API](https://www.exchangerate-api.com/)

3. Create a `.env` file and add your API key:
```
VITE_EXCHANGE_RATE_API_KEY=your_api_key_here
```

4. Start the development server:
```bash
npm run dev
```

## Build

To create a production build:
```bash
npm run build
```

## API Configuration

The app uses the ExchangeRate-API free tier. Update the API key in `src/components/CurrencyConverter.jsx`:

```javascript
const API_KEY = import.meta.env.VITE_EXCHANGE_RATE_API_KEY || 'YOUR_API_KEY';
```

## Deployment

This project can be deployed to:
- Netlify
- Vercel
- GitHub Pages
- Any static hosting service

Make sure to set your environment variables in your hosting platform's dashboard.

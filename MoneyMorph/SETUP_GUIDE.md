# MoneyMorph Setup Guide

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Get Your Free API Key

1. Visit [ExchangeRate-API](https://www.exchangerate-api.com/)
2. Click "Get Free Key" button
3. Sign up with your email address
4. Check your email and verify your account
5. Copy your API key from the dashboard

The free tier includes:
- 1,500 requests per month
- Access to 160+ currencies
- Real-time exchange rates
- No credit card required

### 3. Configure Environment Variables

Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

Open `.env` and add your API key:

```
VITE_EXCHANGE_RATE_API_KEY=your_actual_api_key_here
```

### 4. Run the Development Server

```bash
npm run dev
```

The app will open at `http://localhost:5173`

## Features Implemented

- Real-time currency exchange rates
- 160+ supported currencies with flag icons
- Responsive design (mobile, tablet, desktop)
- Live conversion as you type
- Currency swap functionality
- Exchange rate display with last update time
- Error handling for network issues
- Loading states
- Clean, modern UI matching the MoneyMorph design

## Project Structure

```
src/
├── App.jsx                          # Main app component
├── main.jsx                         # Entry point
├── index.css                        # Global styles
└── components/
    ├── Header.jsx                   # Navigation header
    ├── Footer.jsx                   # Footer with social links
    ├── Hero.jsx                     # Landing page hero section
    ├── CurrencyConverter.jsx        # Main converter component
    ├── CurrencySelector.jsx         # Currency dropdown
    └── AmountInput.jsx             # Amount input field
```

## Building for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` directory.

## Deployment

### Deploy to Netlify

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Add environment variable: `VITE_EXCHANGE_RATE_API_KEY`

### Deploy to Vercel

1. Push your code to GitHub
2. Import project in Vercel
3. Vercel will auto-detect Vite settings
4. Add environment variable: `VITE_EXCHANGE_RATE_API_KEY`

## Troubleshooting

### API Key Not Working

- Make sure your `.env` file is in the root directory
- Verify the variable name is exactly `VITE_EXCHANGE_RATE_API_KEY`
- Restart the development server after creating/updating `.env`
- Check that you've verified your email with ExchangeRate-API

### Currencies Not Loading

- Check your internet connection
- Verify your API key is valid
- The app will fall back to a default list of 6 major currencies if the API fails

### Build Errors

- Make sure all dependencies are installed: `npm install`
- Clear cache: `rm -rf node_modules dist && npm install`
- Check that you're using Node.js version 16 or higher

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is open source and available under the MIT License.

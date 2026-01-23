# Environment Configuration

This document explains how to configure environment variables for the Wearly Styles Mobile App.

## Setup

The app uses `react-native-dotenv` to manage environment variables. The configuration is set up in:

- `.env` - Main environment file (gitignored)
- `babel.config.js` - Babel plugin configuration
- `src/config/env.ts` - Environment configuration helper

## Environment Variables

### API Configuration

- `API_BASE_URL` - Base URL for API calls (Android emulator: `http://10.0.2.2:3000/api/v1`)
- `API_BASE_URL_IOS` - Base URL for iOS simulator (`http://localhost:3000/api/v1`)

### App Configuration

- `APP_NAME` - Application name
- `APP_VERSION` - Application version
- `APP_ENV` - Environment (development/production)

### Development

- `DEV_SERVER_URL` - Metro bundler URL for development

## Usage

### Import environment variables:

```typescript
import { API_BASE_URL, APP_NAME } from '@env';
```

### Use configuration helper:

```typescript
import { config, getApiBaseUrl } from './src/config/env';

// Use config object
const apiUrl = config.API_BASE_URL;

// Or use helper function
const apiUrl = getApiBaseUrl();
```

### Platform-specific URLs

For development:

- **Android Emulator**: Use `10.0.2.2` (special IP that points to host machine)
- **iOS Simulator**: Use `localhost`
- **Physical Devices**: Use your computer's IP address

## Backend Connection

The backend server should be running on `localhost:3000` with the following configuration:

```env
NODE_ENV=development
PORT=3000
DATABASE_URL="postgresql://postgres:123123@localhost:5432/wearly_styles"
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
```

## Production Deployment

For production builds:

1. Update `.env` with production URLs
2. Change `APP_ENV` to `production`
3. Update API_BASE_URL to your production backend URL
4. Ensure JWT secrets and other sensitive data are properly configured

## Security Notes

- Never commit `.env` files to version control
- Use different secrets for development and production
- For production apps, consider using secure storage for sensitive data

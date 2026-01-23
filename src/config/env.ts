/**
 * Configuration file for environment variables
 * This file demonstrates how to use environment variables in the React Native app
 */

import { API_BASE_URL, API_BASE_URL_IOS, APP_NAME, APP_ENV } from '@env';

// Configuration object
export const config = {
  // API Configuration
  API_BASE_URL: __DEV__
    ? API_BASE_URL
    : 'https://your-production-api.com/api/v1',
  API_BASE_URL_IOS: __DEV__
    ? API_BASE_URL_IOS
    : 'https://your-production-api.com/api/v1',

  // App Configuration
  APP_NAME,
  APP_ENV,

  // Timeouts
  API_TIMEOUT: 10000,

  // Other configurations
  ENABLE_DEBUG: __DEV__,
};

// Helper function to get the correct API URL based on platform
export const getApiBaseUrl = () => {
  // For development, use platform-specific URLs
  if (__DEV__) {
    // You can add platform detection logic here if needed
    // For now, defaulting to Android emulator URL
    return API_BASE_URL;
  }

  // For production, use production URL
  return 'https://your-production-api.com/api/v1';
};

// Export individual values for convenience
export const {
  API_BASE_URL: apiBaseUrl,
  API_BASE_URL_IOS: apiBaseUrlIOS,
  APP_NAME: appName,
  APP_ENV: appEnv,
} = config;

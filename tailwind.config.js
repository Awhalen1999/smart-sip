/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        header: ['Fugaz One', 'cursive'],
        main: ['Exo', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        smartSipDark: {
          primary: '#1E1E1E', // Deep charcoal for primary elements
          'primary-content': '#FFFFFF', // White text for primary elements
          secondary: '#FF3366', // Vibrant pink for secondary elements
          'secondary-content': '#FFFFFF', // White text for secondary elements
          accent: '#FFD700', // Gold for accent elements
          'accent-content': '#000000', // Black text for accent elements
          neutral: '#424242', // Medium gray for neutral elements
          'neutral-content': '#F8F8FF', // Light gray text for neutral elements
          'base-100': '#0A0A0A', // Very dark gray background for base elements
          'base-200': '#141414', // Dark gray background for base elements
          'base-300': '#1E1E1E', // Charcoal background for base elements
          'base-content': '#F8F8FF', // Light gray text for base elements
          info: '#0080FF', // Medium blue for informational elements
          'info-content': '#FFFFFF', // White text for informational elements
          success: '#00CC00', // Bright green for success elements
          'success-content': '#FFFFFF', // White text for success elements
          warning: '#FFA500', // Orange for warning elements
          'warning-content': '#000000', // Black text for warning elements
          error: '#FF0000', // Red for error elements
          'error-content': '#FFFFFF', // White text for error elements
        },
      },
      {
        smartSipLight: {
          primary: '#FFFFFF', // White for primary elements
          'primary-content': '#262626', // Dark gray text for primary elements
          secondary: '#FF3366', // Vibrant pink for secondary elements
          'secondary-content': '#FFFFFF', // White text for secondary elements
          accent: '#FFD700', // Gold for accent elements
          'accent-content': '#000000', // Black text for accent elements
          neutral: '#D3D3D3', // Light gray for neutral elements
          'neutral-content': '#262626', // Dark gray text for neutral elements
          'base-100': '#FFFDD0', // Pale yellow background for base elements
          'base-200': '#EFE8B0', // Light yellow background for base elements
          'base-300': '#DFD292', // Slightly darker light yellow background for base elements
          'base-content': '#262626', // Dark gray text for base elements
          info: '#0080FF', // Medium blue for informational elements
          'info-content': '#FFFFFF', // White text for informational elements
          success: '#00CC00', // Bright green for success elements
          'success-content': '#FFFFFF', // White text for success elements
          warning: '#FFA500', // Orange for warning elements
          'warning-content': '#000000', // Black text for warning elements
          error: '#FF0000', // Red for error elements
          'error-content': '#FFFFFF', // White text for error elements
        },
      },
    ],
  },
};

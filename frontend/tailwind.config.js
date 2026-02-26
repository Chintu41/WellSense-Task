/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    primary: 'var(--brand-primary)',
                    secondary: 'var(--brand-secondary)',
                    accent: 'var(--brand-accent)',
                    50: '#f9f6f4',
                    100: '#f2ebe6',
                    200: '#e1cdc2',
                    300: '#ceae9b',
                    400: '#bc9175', // Primary
                    500: '#a8795c',
                    600: '#94664c',
                    700: '#7b5340',
                    800: '#664537',
                    900: '#52392e',
                    950: '#2c1e18',
                },
                emerald: {
                    primary: 'var(--brand-emerald)',
                    dark: 'var(--brand-emerald-dark)',
                    light: 'var(--brand-emerald-light)',
                },
                accent: {
                    50: '#f6f7f4',
                    100: '#eaede5',
                    200: '#ced5c0',
                    300: '#afbc97',
                    400: '#91a171',
                    500: '#758553',
                    600: '#5a693e',
                    700: '#4c552a', // Secondary
                    800: '#3e4526',
                    900: '#353a22',
                    950: '#1b1f10',
                },
                tertiary: {
                    50: '#fbf8f3',
                    100: '#f5efe3',
                    200: '#e8d7bb',
                    300: '#d9bb8e',
                    400: '#cba063',
                    500: '#bc863e',
                    600: '#a36931',
                    700: '#834f2a',
                    800: '#693e26',
                    900: '#543221',
                    950: '#2d180f',
                },
                slate: {
                    50: '#faf9f8',
                    100: '#f3f1ee',
                    200: '#e4dfd8',
                    300: '#d0c8be',
                    400: '#b4a899',
                    500: '#9b8c7c',
                    600: '#847363',
                    700: '#6d5e51',
                    800: '#5a4e44',
                    900: '#4b413a',
                    950: '#28221e',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Outfit', 'sans-serif'],
            },
            boxShadow: {
                'soft': '0 20px 40px -15px rgba(0,0,0,0.05)',
                'float': '0 30px 60px -20px rgba(0,0,0,0.12)',
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-out',
                'slide-up': 'slideUp 0.8s ease-out forwards',
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'float-slow': 'float 6s ease-in-out infinite',
                'spin-slow': 'spin 8s linear infinite',
                'pulse-glow': 'pulseGlow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                pulseGlow: {
                    '0%, 100%': { opacity: '1', transform: 'scale(1)' },
                    '50%': { opacity: '.8', transform: 'scale(1.05)', filter: 'brightness(1.1)' },
                }
            }
        },
    },
    plugins: [],
}

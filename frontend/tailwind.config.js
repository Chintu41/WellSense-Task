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
                    50: '#fef8f4',
                    100: '#fdf1e8',
                    200: '#fae1d0',
                    300: '#f4c7ab',
                    400: '#eea77f',
                    500: '#d48e5c', // Saturated Primary
                    600: '#c17242',
                    700: '#a15c36',
                    800: '#824b2e',
                    900: '#6a3f28',
                    950: '#391f14',
                },
                emerald: {
                    50: '#f8faf1',
                    100: '#f1f4e1',
                    200: '#e1e8c4',
                    300: '#cbd89e',
                    400: '#acc472',
                    500: '#749814', // Saturated Secondary
                    600: '#5c7a0d',
                    700: '#465c0c',
                    800: '#37490d',
                    900: '#2f3d10',
                    950: '#182006',
                },
                accent: {
                    50: '#fefbf8',
                    100: '#fcf4ed',
                    200: '#f9e8db',
                    300: '#f4d2bb',
                    400: '#eea77f',
                    500: '#d48e5c',
                    600: '#b16c3b',
                    700: '#8e542f',
                    800: '#6d4026',
                    900: '#4e2f1e',
                    950: '#391f14',
                },
                tertiary: {
                    50: '#fdf9f4',
                    100: '#fbf1e7',
                    200: '#f6dfce',
                    300: '#efc4ab',
                    400: '#e5a181',
                    500: '#d48e5c',
                    600: '#ba7647',
                    700: '#9a5d3a',
                    800: '#7e4d32',
                    900: '#67402c',
                    950: '#382015',
                },
                slate: {
                    50: '#fcfbfc',
                    100: '#f7f6f5',
                    200: '#e9e7e4',
                    300: '#d4d1cc',
                    400: '#b7b2aa',
                    500: '#9b948a',
                    600: '#83796d',
                    700: '#6c6258',
                    800: '#595048',
                    900: '#4a433d',
                    950: '#272320',
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

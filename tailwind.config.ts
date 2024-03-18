import type { Config } from 'tailwindcss'

const config = {
    darkMode: ['class'],
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    prefix: '',
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px',
            },
        },
        extend: {
            backgroundImage: {
                'app-background':
                    "url('/images/background-billing-time-log.png')",
            },
            colors: {
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))',
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))',
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))',
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))',
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))',
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))',
                },
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))',
                },
                success: {
                    DEFAULT: 'hsl(var(--success))',
                },
                error: {
                    DEFAULT: 'hsl(var(--error))',
                },
                'gradient-primary':
                    'linear-gradient(270deg, hsl(230deg 100% 50%) 0%, hsl(230deg 100% 52%) 3%, hsl(230deg 100% 55%) 6%, hsl(230deg 100% 57%) 9%, hsl(230deg 100% 60%) 12%, hsl(230deg 100% 62%) 15%, hsl(230deg 100% 64%) 19%, hsl(230deg 100% 67%) 23%, hsl(230deg 100% 69%) 27%, hsl(230deg 100% 71%) 31%, hsl(230deg 100% 74%) 35%, hsl(230deg 100% 76%) 39%, hsl(230deg 100% 79%) 44%, hsl(230deg 100% 81%) 49%, hsl(230deg 100% 83%) 54%, hsl(230deg 100% 86%) 60%, hsl(229deg 100% 88%) 65%, hsl(229deg 100% 90%) 72%, hsl(230deg 100% 93%) 78%, hsl(230deg 100% 95%) 85%, hsl(230deg 100% 98%) 92%, hsl(0deg 0% 100%) 100%)',
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
            },
        },
    },
    plugins: [require('tailwindcss-animate')],
} satisfies Config

export default config

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                'arctic-powder': '#F1F6F4',
                'mystic-mint': '#D9E8E2',
                'forsythia': '#FFC801',
                'deep-saffron': '#FF9932',
                'nocturnal-expedition': '#114C5A',
                'oceanic-noir': '#172836',
            },
            fontFamily: {
                sans: ['var(--font-inter)'],
                mono: ['var(--font-jetbrains)'],
            },
        },
    },
};
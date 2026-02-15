/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#a92b2b", // Dark Red from checkout
                secondary: "#e60000", // Bright Red for timer/accents
            },
        },
    },
    plugins: [],
}

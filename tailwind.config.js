module.exports = {
    purge: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            textColor: (theme) => ({
                Orange: "#FF9F39",
              }),
        },
    },
    variants: {
        extend: {
            textColor: ["active"],
        },
    },
    plugins: [],
};

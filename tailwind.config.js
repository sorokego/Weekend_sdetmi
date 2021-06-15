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
                Gray: "#212121",
                White: "#FFFFFF",
                Green: "#68CFBE",
            }),
            backgroundColor: (theme) => ({
                primary: "#68CFBE",
            }),
        },
        fontFamily: {
            sans: ["Montserrat", "system-ui"],
            alt: ["Montserrat Alternates", "system-ui"],
        },
    },
    variants: {
        extend: {
            textColor: ["active"],
        },
    },
    plugins: [],
};

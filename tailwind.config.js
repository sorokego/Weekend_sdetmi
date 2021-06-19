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
            }),
            backgroundColor: (theme) => ({
                green: "#68CFBE",
                footer: "#E6FAF6"

            }),
            footerBackgroundColor: (theme) => ({
                Green: "#E6FAF6",

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
            backgroundColor: ["active"],
        },
    },
    plugins: [],
};

module.exports = {
    content: ["./src/**/*.{ts,tsx}"],
    darkMode: "media",
    theme: {
        extend: {
            fontFamily: {
                roboto: ['"Roboto Serif"', "serif"],
            },
            backgroundImage: {
                "track-pattern": "url('/assets/images/track.svg')",
            },
            transitionProperty: {
                kuka: ["left"],
            },
        },
        variants: {
            extend: {},
        },
        plugins: [],
    },
}

import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: "#b50063",
                secondary: "#10a56d",
            },

            fontSize: {
                md: "17px",
            },

            fontFamily: {
                "roboto-mono": "'Roboto Mono', sans-sherif",
                poppins: "'Poppins', sans-sherif",
                "jockey-one": "'Jockey One', sans-sherif",
            },
        },
    },
    plugins: [],
};
export default config;

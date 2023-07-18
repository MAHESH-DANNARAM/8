/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        whitesmoke: {
          "100": "#f5f5f7",
          "200": "rgba(245, 245, 245, 0.24)",
        },
        royalblue: "rgba(84, 104, 231, 0.5)",
        gray: {
          "100": "#fafafa",
          "200": "rgba(20, 21, 34, 0.04)",
          "300": "rgba(255, 255, 255, 0.08)",
          "400": "rgba(35, 35, 64, 0.6)",
          "500": "rgba(35, 35, 64, 0.9)",
        },
        "desaturated-blue": "#7676b2",
        "soft-blue": "#5468e7",
        "primary-0": "#fff",
        "secondary-500": "#141522",
        "primary-500": "#546fff",
        "secondary-400": "#54577a",
        "off-white": "#f5f5f5",
        "grayish-blue": "#d1ecfd",
        darkslategray: "rgba(37, 49, 60, 0.9)",
        "dark-blue": "#232340",
        "light-grey": "#bbc8d4",
        "soft-violet": "#c897e4",
        black: "#25313c",
        blueviolet: "#4353ff",
      },
      fontFamily: {
        "paragraph-mobile": "'Lexend Deca'",
        "plus-jakarta-sans": "'Plus Jakarta Sans'",
      },
      borderRadius: {
        "3xs": "10px",
        "4xs-3": "8.3px",
        "12xs-8": "0.8px",
        "146xl-8": "165.8px",
        "6xs-4": "6.4px",
        "108xl-7": "127.7px",
        "7xs-1": "5.1px",
        "44xl-9": "63.9px",
        "mini-7": "14.7px",
        "12xs-6": "0.6px",
        "11xs-3": "1.3px",
        "11xl-7": "30.7px",
        "9xs-7": "3.7px",
        "55xl-5": "74.5px",
        "10xs": "3px",
      },
    },
    fontSize: {
      sm: "0.88rem",
      "5xl": "1.5rem",
      "33xl": "3.25rem",
      "31xl": "3.13rem",
      lg: "1.13rem",
      base: "1rem",
      "xs-6": "0.73rem",
      "3xs": "0.63rem",
      "sm-3": "0.83rem",
      "4xs-9": "0.56rem",
      "2xs-2": "0.64rem",
      "5xs-7": "0.48rem",
      "base-3": "0.96rem",
      "smi-8": "0.8rem",
      "xs-5": "0.72rem",
      "xl-4": "1.27rem",
      "mid-9": "1.12rem",
      "21xl-9": "2.56rem",
      "11xl-7": "1.92rem",
      "7xs-2": "0.33rem",
      "7xs": "0.38rem",
      "8xs-5": "0.28rem",
      "15xl": "2.13rem",
      xs: "0.75rem",
    },
  },
  corePlugins: {
    preflight: false,
  },
};

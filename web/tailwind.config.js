/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "main-blue": "#3A9DF9",
        "secondary-blue": "#E0EBFF",
        "main-gray": "#E8E7EF",
        "secondary-gray": "#F4F3F6",
        "image-gray": "#888888",
      },
      padding: {
        "px-default": "10rem",
        "px-default-left": "10rem",
        "px-default-right": "10rem",
        custom_432px: "27rem",
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
      spacing: {
        custom_9_18px: "0.574rem",
        custom_23_72px: "1.483rem",
        custom_24px: "1.5rem",
        custom_29px: "1.813rem",
        custom_37px: "2.313rem",
        custom_60px: "3.75rem",
        custom_73px: "4.563rem",
        custom_120px: "7.5rem",
        custom_140px: "8.75rem",
        custom_184px: "11.5rem",
        custom_237px: "14.813rem",
        custom_342px: "21.375rem",
        custom_432px: "27rem",
        custom_532px: "33.25rem",
        custom_810px: "50.625rem",
        custom_1056px: "66rem",
        custom_1236px: "77.25rem",
      },
      margin: {
        "mx-default-left": "10rem",
      },
      borderRadius: {
        DEFAULT: "0.25rem",
      },
    },
  },
  plugins: [],
};

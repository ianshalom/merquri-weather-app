import backgroundLightImage from "assets/bg-light.png";
import backgroundDarkImage from "assets/bg-dark.png";

export const theme = {
  fontSize: {
    h1: "60px",
    h2: "45px",
    h3: "30px",
    title: "1em", // 16px
    body: "0.875em", // 14px
    caption: "0.625em", // 10px
  },
  fontWeight: {
    light: 300,
    regular: 400,
    bold: 700,
  },
};

export const lightTheme = {
  colors: {
    primary: {
      default: "#000000",
      secondary: "#FFFFFF",
      grey: "#666666",
      purple: "#6C40B5",
    },
  },
  background: {
    primary: "#ffffff33",
    backgroundImage: backgroundLightImage,
  },
};

export const darkTheme = {
  colors: {
    primary: {
      default: "#FFFFFF",
      secondary: "#000000",
      grey: "#666666",
      purple: "#6C40B5",
    },
  },
  background: {
    primary: "#ffffff33",
    backgroundImage: backgroundDarkImage,
  },
};

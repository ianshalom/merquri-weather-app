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
      danger: "#C70039",
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
      danger: "#C70039",
      grey: "#FFFFFF80",
      purple: "#28124D",
    },
  },
  background: {
    primary: "#1A1A1A4D",
    secondary: "#1A1A1A80",
    backgroundImage: backgroundDarkImage,
  },
};

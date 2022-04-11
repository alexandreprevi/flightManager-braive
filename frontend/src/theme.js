const theme = {
  colors: {
    darkFill: "#03045E",
    mediumFill: "#023E8A",
    lightFill: "#0077B6",
    darkGrey: "#343a40",
    mediumGrey: "#6c757d",
    lightGrey: "#adb5bd",
    darkBg: "#90E0EF",
    mediumBg: "#ADE8F4",
    lightBg: "#f1faee",
  },
  breakPoints: {
    largeDesktop: "1440px",
    desktop: "1280px",
    laptop: "1024px",
    tablet: "640px",
  },
  contentSize: {
    "1/1": "100%",
    "1/2": "50%",
    "1/3": `${100 / 3}%`,
    "1/4": "25%",
    "2/3": `${(100 / 3) * 2}%`,
    small: "240px",
    medium: "320px",
    large: "420px",
    extraLarge: "640px",
    "fit-content": "fit-content",
  },
  spacing: {
    none: "0",
    pixel: "1px",
    extraSmall: "0.25rem",
    small: "0.5rem",
    default: "1rem",
    medium: "1.5rem",
    large: "3rem",
    extraLarge: "6rem",
    edges: (value) => {
      if (typeof value === "string") return theme.spacing[value]

      return [
        theme.spacing[value.top ?? value.vertical ?? "none"],
        theme.spacing[value.left ?? value.horizontal ?? "none"],
        theme.spacing[value.bottom ?? value.vertical ?? "none"],
        theme.spacing[value.right ?? value.horizontal ?? "none"],
      ].join(" ")
    },
    axis: (value) => {
      if (typeof value === "string") return theme.spacing[value]

      return [
        theme.spacing[value.vertical ?? "none"],
        theme.spacing[value.horizontal ?? "none"],
      ].join(" ")
    },
  },
  card: {
    radius: {
      small: "0.125rem",
      medium: "0.5rem",
      large: "1rem",
      default: "0.25rem",
    },
    shadows: {
      small:
        "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
      large: "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px",
      default: `rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px`,
    },
  },
  button: {
    fontSize: {
      small: "0.875rem",
      large: "1rem",
    },
    height: {
      small: "2.5rem",
      large: "3.5rem",
    },
    padding: {
      small: "0.5rem 1rem",
      large: "2rem 3rem",
    },
  },
}

export default theme

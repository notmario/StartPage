const themeArr = {
  "dark": ()=>{return {
    bg: "#121212",
    bg2: "#101010",
    textCol: "white",
    linkCol: "lightgray",
    linkHov: "gray",
    settingSrc: "img/settings.png",
    bgImg: {
      display: "none",
      src: "",
      opacity: "0"
    },
    font: "Roboto"
  }},
  "light": ()=>{return {
    bg: "#e0e0e0",
    bg2: "#d8d8d8",
    textCol: "black",
    linkCol: "#181818",
    linkHov: "#090909",
    settingSrc: "img/settingsBlack.png",
    bgImg: {
      display: "none",
      src: "",
      opacity: "0"
    },
    font: "Roboto"
  }},
  "funMode": ()=>{return {
    bg: "#121212",
    bg2: "#101010",
    textCol: "white",
    linkCol: "lightgray",
    linkHov: "gray",
    settingSrc: "img/settings.png",
    bgImg: {
      display: "block",
      src: "img/funMode.jpeg",
      opacity: "0.2",
    },
    font: "Roboto"
  }},
  "trueFunMode": ()=>{return {
    bg: "#e0e0e0",
    bg2: "#d8d8d8",
    textCol: "black",
    linkCol: "#181818",
    linkHov: "#090909",
    settingSrc: "img/settingsBlack.png",
    bgImg: {
      display: "block",
      src: "img/funMode.jpeg",
      opacity: "0.7",
    },
    font: "Roboto"
  }},
  "abyss": ()=>{return {
    bg: "#000b15",
    bg2: "#000a14",
    textCol: "white",
    linkCol: "gray",
    linkHov: "lightgray",
    settingSrc: "img/settings.png",
    bgImg: {
      display: "none",
      src: "",
      opacity: "0",
    },
    font: "Roboto"
  }},
  "solLight": ()=>{return {
    bg: "#FCF5E4",
    bg2: "#F2EBDA",
    textCol: "black",
    linkCol: "#181818",
    linkHov: "#090909",
    settingSrc: "img/settingsBlack.png",
    bgImg: {
      display: "none",
      src: "",
      opacity: "0",
    },
    font: "Roboto"
  }},
  "rngDark": ()=>{
    const hue = Math.floor(Math.random()*360)
    return {
    bg: hslToHex(hue,20,8),
    bg2: hslToHex(hue,30,6),
    textCol: "white",
    linkCol: "lightgray",
    linkHov: "gray",
    settingSrc: "img/settings.png",
    bgImg: {
      display: "none",
      src: "",
      opacity: "0",
    },
    font: "Roboto"
  }},
  "rngLight": ()=>{
    const hue = Math.floor(Math.random()*360)
    return {
    bg: hslToHex(hue,20,80),
    bg2: hslToHex(hue,30,75),
    textCol: "black",
    linkCol: "#181818",
    linkHov: "#090909",
    settingSrc: "img/settingsBlack.png",
    bgImg: {
      display: "none",
      src: "",
      opacity: "0",
    },
    font: "Roboto"
  }},
  "purple": ()=>{return {
    bg: "#0c0019",
    bg2: "#0a0017",
    textCol: "white",
    linkCol: "lightgray",
    linkHov: "gray",
    settingSrc: "img/settings.png",
    bgImg: {
      display: "none",
      src: "",
      opacity: "0",
    },
    font: "Roboto"
  }},
  "graphicDesign": ()=>{return {
    bg: "orange",
    bg2: "yellow",
    textCol: "green",
    linkCol: "red",
    linkHov: "blue",
    settingSrc: "img/settings.png",
    bgImg: {
      display: "block",
      src: "",
      opacity: "0.2",
    },
    font: "Comic Sans MS"
  }},
  "shrek": ()=>{return {
    bg: "#C3BC95",
    bg2: "#D3CCA5",
    textCol: "#523213",
    linkCol: "#795A2D",
    linkHov: "#523213",
    settingSrc: "img/settingsBlack.png",
    bgImg: {
      display: "none",
      src: "",
      opacity: "0",
    },
    font: "Roboto"
  }},
  "shrekDark": ()=>{return {
    bg: "#523213",
    bg2: "#503011",
    textCol: "#D3CCA5",
    linkCol: "#B0C400",
    linkHov: "#D5DE2E",
    settingSrc: "img/settings.png",
    bgImg: {
      display: "none",
      src: "",
      opacity: "0",
    },
    font: "Roboto"
  }},
  "neon": ()=>{return {
    bg: "black",
    bg2: "black",
    textCol: "red",
    linkCol: "orange",
    linkHov: "yellow",
    settingSrc: "img/settings.png",
    bgImg: {
      display: "none",
      src: "",
      opacity: "0",
    },
    font: "Roboto"
  }},
  "red": ()=>{return {
    bg: "red",
    bg2: "red",
    textCol: "black",
    linkCol: "black",
    linkHov: "red",
    settingSrc: "img/settingsBlack.png",
    bgImg: {
      display: "none",
      src: "",
      opacity: "0",
    },
    font: "Roboto"
  }},
  "funModePlus": ()=>{return {
    bg: "black",
    bg2: "black",
    textCol: "black",
    linkCol: "black",
    linkHov: "black",
    settingSrc: "img/settingsBlack.png",
    bgImg: {
      display: "block",
      src: "img/funModePlus.jpeg",
      opacity: "1",
    },
    font: "Roboto"
  }},
  "literallyNightMode": ()=>{return {
    bg: "black",
    bg2: "black",
    textCol: "black",
    linkCol: "black",
    linkHov: "black",
    settingSrc: "img/settings.png",
    bgImg: {
      display: "none",
      src: "",
      opacity: "0",
    },
    font: "Roboto"
  }},
}
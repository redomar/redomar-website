import localFont from "next/font/local";

const univers = localFont({
  src: [
    {
      path: "../fonts/UniversLight.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/UniversRegular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/UniversBold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: '--font-univers',
});

const universCondensed = localFont({
  src: [
    {
      path: "../fonts/UniversCnRg.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/UniversCnBold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: '--font-univers-condensed',
});

export { univers, universCondensed };
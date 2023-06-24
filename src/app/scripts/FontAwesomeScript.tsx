import Script from "next/script";

const fontAwesomeKitId = "32b3d98784";

const FontAwesomeScript = () => (
  <Script src={`https://kit.fontawesome.com/${fontAwesomeKitId}.js`} />
);

export default FontAwesomeScript;

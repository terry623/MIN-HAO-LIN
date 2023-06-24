import Script from "next/script";

const measurementId = "G-QJ0JBRE0H7";

const script =
  `window.dataLayer = window.dataLayer || [];` +
  `function gtag(){dataLayer.push(arguments);}` +
  `gtag('js', new Date());` +
  `gtag('config', '${measurementId}');`;

const GAScript = () => (
  <>
    <Script
      async={true}
      src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
    />
    <Script
      id="gtag"
      dangerouslySetInnerHTML={{
        __html: script,
      }}
    />
  </>
);

export default GAScript;

import "../index.css";
import Ribbon from "../components/Ribbon.jsx";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Ribbon />
      <Component {...pageProps} />
    </>
  );
}

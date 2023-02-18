import "@/styles/globals.css";

import AnalysisContextProvider from "../store/AnalysisContextProvider";
export default function App({ Component, pageProps }) {
  return (
    <AnalysisContextProvider>
      <Component {...pageProps} />
    </AnalysisContextProvider>
  );
}

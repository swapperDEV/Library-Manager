import "../styles/globals.css";
import type { AppProps } from "next/app";
import "../styles/theme.scss";
import useDarkMode from "../utils/hooks/useTheme";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

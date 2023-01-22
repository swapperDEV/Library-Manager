import "../styles/globals.css";
import type { AppProps } from "next/app";
import "../styles/theme.scss";
import { ThemeProvider } from "next-themes";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { UserProvider } from "../routes/UserProvider";
import { apiIP } from "../utils/data/config";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <UserProvider>
        <>
          <Component {...pageProps} />
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </>
      </UserProvider>
    </ThemeProvider>
  );
}

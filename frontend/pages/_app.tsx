import "../styles/globals.css";
import type { AppProps } from "next/app";
import "../styles/theme.scss";
import { ThemeProvider } from "next-themes";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { UserProvider } from "../routes/UserProvider";
import { apiIP } from "../utils/data/config";
export default function App({ Component, pageProps, data }: AppProps) {
  if (data && data.message !== "Authentication Failed") {
    console.log("yes", data);
  }
  return (
    <ThemeProvider>
      <UserProvider
        data={data.message !== "Authentication Failed" && pageProps.user}
      >
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

App.getInitialProps = async ({
  Component,
  ctx,
}: {
  Component: { getInitialProps: Function };
  ctx: AppProps;
}) => {
  const res = await fetch(`${apiIP}/auth/checklogin`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  console.log(data, res);
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  return {
    pageProps,
    data,
  };
};

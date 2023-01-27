import Head from "next/head";
import { QueryClient } from "react-query";
import { QueryClientProvider } from "react-query";
import { Dashboard } from "../../components/Manager/Manager";
import { LibraryProvider } from "../../routes/LibraryProvider";
import { PrivateRoute } from "../../routes/PrivateRoute";

export default function Index() {
  const queryClient = new QueryClient();

  return (
    <>
      <Head>
        <title>Books manager.</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PrivateRoute is={true}>
        <QueryClientProvider client={queryClient}>
          <LibraryProvider>
            <Dashboard />
          </LibraryProvider>
        </QueryClientProvider>
      </PrivateRoute>
    </>
  );
}
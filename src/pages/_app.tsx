import { type AppType } from "next/app";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Layout from "~/components/Layout";
import { Toaster } from "react-hot-toast";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider {...pageProps}>
      <Layout>
        <Toaster position="bottom-center" />
        <Component {...pageProps} />;
      </Layout>
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);

import { Global } from "@emotion/react";
import { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import ApolloSetting from "../src/commons/apollo";
import { globalStyles } from "../src/commons/styles/globalStyles";
import Layout from "../src/components/common/layout";
import "antd/dist/antd.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${String(
      process.env.NEXT_PUBLIC_API_KEY
    )}&libraries=services,clusterer&autoload=false`;
    document.head.appendChild(script);
  }, []);
  return (
    <RecoilRoot>
      <ApolloSetting>
        <>
          <Global styles={globalStyles} />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </>
      </ApolloSetting>
    </RecoilRoot>
  );
}

export default MyApp;

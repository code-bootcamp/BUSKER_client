import Head from "next/script";
import { useEffect } from "react";

declare global {
  interface Window {
    kakao: any;
  }
}

const KakaoMap = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=742b7bcfe05cf57b5cb459032650c7af&libraries=services";
    script.defer = true;
    document.head.appendChild(script);

    script.onload = () => {
      const { kakao } = window;
      kakao.maps.load(() => {
        const mapContainer = document.getElementById("map"); // 지도를 표시할 div
        const mapOption = {
          center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
          level: 3, // 지도의 확대 레벨
        };

        let map = new kakao.maps.Map(mapContainer, mapOption);
      });
    };
  }, []);

  return (
    <>
      <Head></Head>
      <div id="map" style={{ width: "300px", height: "300px" }}></div>
    </>
  );
};

export default KakaoMap;

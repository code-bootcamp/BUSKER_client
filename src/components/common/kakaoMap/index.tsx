import Head from "next/script";
import { useEffect } from "react";

declare global {
  interface Window {
    kakao: any;
  }
}

interface IKakaoMapProps {
  address?: any;
  position?: {
    lat: number;
    lng: number;
  };
}

const KakaoMap = ({ position, address }: IKakaoMapProps) => {
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
        const map = new kakao.maps.Map(mapContainer, mapOption);
        const coords = new kakao.maps.LatLng(position?.lat, position?.lng);
        if (address) {
          const geocoder = new kakao.maps.services.Geocoder();

          // 주소로 좌표를 검색합니다
          geocoder.addressSearch(address, function (result: any, status: any) {
            // 정상적으로 검색이 완료됐으면
            if (status === kakao.maps.services.Status.OK) {
              const coords = new kakao.maps.LatLng(result[0].y, result[0].x);

              // 결과값으로 받은 위치를 마커로 표시합니다
              const marker = new kakao.maps.Marker({
                map,
                position: coords,
              });
              console.log(marker);
              // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
              map.setCenter(coords);
            }
          });
        } else {
          const bounds = map.getBounds(); // 영역 정보를 얻어옵니다
          const PlMaLatitude = Number(((bounds.pa - bounds.qa) / 2).toFixed(6));
          const PlMaLongitude = (bounds.oa - bounds.ha) / 2;
          console.log(`위도 오차: ${PlMaLatitude} 경도 오차: ${PlMaLongitude}`);
          const positions = [
            {
              title: "카카오",
              latlng: new kakao.maps.LatLng(
                Number(position?.lat) + PlMaLatitude - 0.0005,
                position?.lng
              ),
            },
            {
              title: "생태연못",
              latlng: new kakao.maps.LatLng(
                Number(position?.lat) - PlMaLatitude + 0.0005,
                position?.lng
              ),
            },
            {
              title: "텃밭",
              latlng: new kakao.maps.LatLng(
                position?.lat,
                Number(position?.lng) + PlMaLongitude
              ),
            },
            {
              title: "근린공원",
              latlng: new kakao.maps.LatLng(
                position?.lat,
                Number(position?.lng) - PlMaLongitude
              ),
            },
          ];

          // 마커 이미지의 이미지 주소입니다
          const imageSrc =
            "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

          for (let i = 0; i < positions.length; i++) {
            // 마커 이미지의 이미지 크기 입니다
            const imageSize = new kakao.maps.Size(24, 35);

            // 마커 이미지를 생성합니다
            const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

            // 마커를 생성합니다
            const marker = new kakao.maps.Marker({
              map, // 마커를 표시할 지도
              position: positions[i].latlng, // 마커를 표시할 위치
              title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
              image: markerImage, // 마커 이미지
            });
            console.log(marker);
          }
          // 마우스 드래그로 지도 이동 가능여부를 설정합니다
          map.setCenter(coords);
          map.setDraggable(false);
          map.setZoomable(false);

          // 위도 +-0.005
          // 경도 +-0.015
          // bounds.pa: 상
          // bounds.qa: 하
          // bounds.ha: 좌
          // bounds.oa: 우
        }
      });
    };
  }, [address, position]);

  return (
    <>
      <Head></Head>
      <div
        id="map"
        style={{
          maxWidth: "1440px",
          width: "100%",
          height: "100%",
          margin: "0 auto",
        }}
      ></div>
    </>
  );
};

export default KakaoMap;

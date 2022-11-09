import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { deviceState } from "../../../commons/store";
import { MapMarker, Map } from "react-kakao-maps-sdk";
import IndexedMarker from "../../../../pages/map/indexedMarkerTemplate";
import { UseFormSetValue } from "react-hook-form";
import { IFormData } from "../../units/artregister/artregister.types";

interface IKakaoMapProps {
  address: string;
  position?: {
    lat: string;
    lng: string;
  };
  isMap: boolean;
  setValue: UseFormSetValue<IFormData>;
}

const KakaoMap = ({ position, address, isMap, setValue }: IKakaoMapProps) => {
  const [dummyPosition, setPosition] = useState([
    { lat: Number(position?.lat) - 0.001, lng: Number(position?.lng) - 0.003 },
    { lat: Number(position?.lat) + 0.002, lng: Number(position?.lng) + 0.003 },
    { lat: Number(position?.lat) - 0.003, lng: Number(position?.lng) - 0.009 },
    { lat: Number(position?.lat) + 0.004, lng: Number(position?.lng) + 0.009 },
  ]);
  const [isMobile] = useRecoilState(deviceState);
  const [center, setCenter] = useState({
    lat: "",
    lng: "",
  });
  // console.log(dummyPosition);
  useEffect(() => {
    //   const script = document.createElement("script");
    //   script.src =
    //     "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=742b7bcfe05cf57b5cb459032650c7af&libraries=services";
    //   script.defer = true;
    //   document.head.appendChild(script);

    // script.onload = () => {

    kakao.maps.load(() => {
      //       const mapContainer = document.getElementById("map"); // 지도를 표시할 div
      //       const mapOption = {
      //         center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
      //         level: isMobile ? 4 : 3, // 지도의 확대 레벨
      //       };
      //       const map = new kakao.maps.Map(mapContainer, mapOption);
      //       const coords = new kakao.maps.LatLng(position?.lat, position?.lng);
      //       if (address) {
      const geocoder = new kakao.maps.services.Geocoder();

      //         // 주소로 좌표를 검색합니다

      geocoder.addressSearch(address, function (result, status) {
        //           // 정상적으로 검색이 완료됐으면
        if (status === kakao.maps.services.Status.OK) {
          console.log("!", result[0]);
          const newSearch = result[0];
          setCenter({ lat: newSearch.y, lng: newSearch.x });
          if (!isMap) {
            setValue("boardAddressInput.lat", newSearch.y);
            setValue("boardAddressInput.lng", newSearch.x);
          }
        }
      });
      //             // 결과값으로 받은 위치를 마커로 표시합니다
      //             const marker = new kakao.maps.Marker({
      //               map,
      //               position: coords,
      //             });
      //             console.log(marker);
      //             // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
      //             map.setCenter(coords);
      //           }
      //         });
      //       } else {
      //         const bounds = map.getBounds(); // 영역 정보를 얻어옵니다
      //         const PlMaLatitude = Number(((bounds.pa - bounds.qa) / 2).toFixed(6));
      //         const PlMaLongitude = (bounds.oa - bounds.ha) / 2;
      //         console.log(`위도 오차: ${PlMaLatitude} 경도 오차: ${PlMaLongitude}`);
      //         const positions = [
      //           {
      //             title: "카카오",
      //             latlng: new kakao.maps.LatLng(
      //               Number(position?.lat) + PlMaLatitude - 0.0005,
      //               position?.lng
      //             ),
      //           },
      //           {
      //             title: "생태연못",
      //             latlng: new kakao.maps.LatLng(
      //               Number(position?.lat) - PlMaLatitude + 0.0005,
      //               position?.lng
      //             ),
      //           },
      //           {
      //             title: "텃밭",
      //             latlng: new kakao.maps.LatLng(
      //               position?.lat,
      //               Number(position?.lng) + PlMaLongitude
      //             ),
      //           },
      //           {
      //             title: "근린공원",
      //             latlng: new kakao.maps.LatLng(
      //               position?.lat,
      //               Number(position?.lng) - PlMaLongitude
      //             ),
      //           },
      //         ];

      //         // 마커 이미지의 이미지 주소입니다
      //         const imageSrc =
      //           "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

      //         for (let i = 0; i < positions.length; i++) {
      //           // 마커 이미지의 이미지 크기 입니다
      //           const imageSize = new kakao.maps.Size(24, 35);

      //           // 마커 이미지를 생성합니다
      //           const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

      //           // 마커를 생성합니다
      //           const marker = new kakao.maps.Marker({
      //             map, // 마커를 표시할 지도
      //             position: positions[i].latlng, // 마커를 표시할 위치
      //             image: markerImage, // 마커 이미지
      //           });
      //           const closeOverlay = () => {
      //             overlay?.setMap(null);
      //           };

      //           const content = `<div class="wrap">
      //                 <div class="info">
      //                     <div class="title">
      //                         카카오 스페이스닷원
      //                         <div class="close" onclick={${closeOverlay}} title="닫기"></div>
      //                     </div>
      //                     <div class="body">
      //                         <div class="img">
      //                             <img src="https://cfile181.uf.daum.net/image/250649365602043421936D" width="73" height="70">
      //                         </div>
      //                         <div class="desc">
      //                             <div class="ellipsis">제주특별자치도 제주시 첨단로 242</div>
      //                             <div class="jibun ellipsis">(우) 63309 (지번) 영평동 2181</div>
      //                         </div>
      //                     </div>
      //                 </div>
      //             </div>
      //             `;
      //           const overlay = new kakao.maps.CustomOverlay({
      //             content,
      //             map,
      //             position: marker.getPosition(),
      //           });

      //           kakao.maps.event.addListener(marker, "click", function () {
      //             overlay.setMap(map);
      //           });
      //         }

      //         // 마우스 드래그로 지도 이동 가능여부를 설정합니다
      //         map.setCenter(coords);
      //         map.setDraggable(false);
      //         map.setZoomable(false);

      //         // 위도 +-0.005
      //         // 경도 +-0.015
      //         // bounds.pa: 상
      //         // bounds.qa: 하
      //         // bounds.ha: 좌
      //         // bounds.oa: 우
      //       }
      //     });
      //   };
      setPosition([
        {
          lat: Number(position?.lat) - 0.001,
          lng: Number(position?.lng) - 0.003,
        },
        {
          lat: Number(position?.lat) + 0.002,
          lng: Number(position?.lng) + 0.003,
        },
        {
          lat: Number(position?.lat) - 0.003,
          lng: Number(position?.lng) + 0.002,
        },
        {
          lat: Number(position?.lat) + 0.002,
          lng: Number(position?.lng) - 0.004,
        },
      ]);
    });
  }, [position, address]);

  return (
    <Map
      center={{
        lat: Number(center.lat) || Number(position?.lat),
        lng: Number(center.lng) || Number(position?.lng),
      }}
      style={{
        maxWidth: "1100px",
        width: "100%",
        aspectRatio: `${isMobile ? 1 / 1 : 1.5 / 1}`,
        margin: "0 auto",
      }}
      level={isMobile ? 4 : 3}
    >
      {address ? (
        <MapMarker
          position={{ lat: Number(center.lat), lng: Number(center.lng) }}
        ></MapMarker>
      ) : null}
      {dummyPosition.map((pos) => (
        <IndexedMarker key={pos.lat} markerPosition={pos} />
      ))}
    </Map>
  );
};

export default KakaoMap;

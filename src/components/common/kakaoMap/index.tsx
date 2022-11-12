import { useEffect, useState } from "react";
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
  isMap?: boolean;
  setValue?: UseFormSetValue<IFormData>;
}

const KakaoMap = ({ position, address, isMap, setValue }: IKakaoMapProps) => {
  const [dummyPosition, setPosition] = useState([
    { lat: Number(position?.lat) - 0.001, lng: Number(position?.lng) - 0.003 },
    { lat: Number(position?.lat) + 0.002, lng: Number(position?.lng) + 0.004 },
    { lat: Number(position?.lat) - 0.003, lng: Number(position?.lng) - 0.008 },
    { lat: Number(position?.lat) + 0.004, lng: Number(position?.lng) + 0.009 },
  ]);

  const [center, setCenter] = useState({
    lat: position?.lat,
    lng: position?.lng,
  });
  useEffect(() => {
    kakao.maps.load(() => {
      if (!isMap) {
        const geocoder = new kakao.maps.services.Geocoder();

        geocoder.addressSearch(address, function (result, status) {
          if (status === kakao.maps.services.Status.OK) {
            // 정상적으로 검색이 완료됐으면
            console.log("!", result[0]);
            const newSearch = result[0];
            setCenter({ lat: newSearch.y, lng: newSearch.x });

            setValue?.("boardAddressInput.lat", newSearch.y);
            setValue?.("boardAddressInput.lng", newSearch.x);
          }
        });
      }
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
  console.log(center);
  return (
    <Map
      center={{
        lat: Number(center.lat) || Number(position?.lat),
        lng: Number(center.lng) || Number(position?.lng),
      }}
      style={{
        width: "100%",
        height: "100%",
        margin: "0 auto",
      }}
      level={typeof window !== "undefined" && window.outerWidth > 1000 ? 4 : 5}
    >
      {address ? (
        <MapMarker
          position={{ lat: Number(center.lat), lng: Number(center.lng) }}
        ></MapMarker>
      ) : (
        dummyPosition.map((pos, i) => (
          <IndexedMarker key={pos.lat + i} markerPosition={pos} />
        ))
      )}
    </Map>
  );
};

export default KakaoMap;

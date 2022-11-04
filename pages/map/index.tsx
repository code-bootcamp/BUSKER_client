import { useEffect, useState } from "react";
import KakaoMap from "../../src/components/common/kakaoMap";

export default function KaKaoMapPage() {
  const [userPosition, setUserPostion] = useState({
    lat: 0,
    lng: 0,
  });
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(`lat: ${position.coords.latitude}`);
      console.log(`long: ${position.coords.longitude}`);
      setUserPostion({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  }, []);
  return <KakaoMap position={userPosition} />;
}

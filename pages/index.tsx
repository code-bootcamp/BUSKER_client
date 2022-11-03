import { useEffect } from "react";
import KakaoMap from "../src/commons/kakaoMap";

export default function Home() {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(`lat: ${position.coords.latitude}`);
      console.log(`long: ${position.coords.longitude}`);
    });
  });
  return (
    <div>
      <KakaoMap />
    </div>
  );
}

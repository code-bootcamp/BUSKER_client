import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { userPositionState } from "../src/commons/store";

export default function Home() {
  const router = useRouter();
  const [, setUserPosition] = useRecoilState(userPositionState);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(`lat: ${position.coords.latitude}`);
      console.log(`long: ${position.coords.longitude}`);
      setUserPosition({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  }, []);
  return (
    <>
      <div>랜딩 페이지 입니다.</div>
      <button onClick={async () => await router.push("/map")}>
        근처의 버스킹 확인하기
      </button>
    </>
  );
}

import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const onClickMoveToMap = async () => {
    await router.push("/map");
  };
  return (
    <>
      <div>랜딩 페이지</div>
      <button onClick={onClickMoveToMap}>주변 버스킹 공연 보러가기</button>
    </>
  );
}

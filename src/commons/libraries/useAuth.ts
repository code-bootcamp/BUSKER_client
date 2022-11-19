import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../store";
import { getAccessToken } from "./getAccessToken";

const useAuth = () => {
  const router = useRouter();
  const [token] = useRecoilState(accessTokenState);
  useEffect(() => {
    if (!token) {
      void getAccessToken().then((newAccessToken) => {
        if (!newAccessToken) {
          alert("로그인 후 이용 가능합니다.");
          void router.push("/login");
        }
      });
    }
  }, []);
};

export default useAuth;

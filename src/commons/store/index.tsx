import { atom } from "recoil";

export const userPositionState = atom({
  key: "userPositionState",
  default: {
    lat: 33.450701,
    lng: 126.570667,
  },
});

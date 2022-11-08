import { atom } from "recoil";

export const userPositionState = atom({
  key: "userPositionState",
  default: {
    lat: "",
    lng: "",
  },
});

export const deviceState = atom({
  key: "deviceState",
  default: false,
});

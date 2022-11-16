import { UseFormSetValue } from "react-hook-form";
import { IQuery } from "../../src/commons/types/generated/types";
import { IFormData } from "../../src/components/units/artregister/artregister.types";
export interface IKakaoMapProps {
  address: string;
  position?: {
    lat: string;
    lng: string;
  };
  isMap?: boolean;
  setValue?: UseFormSetValue<IFormData>;
  data?: Pick<IQuery, "fetchMapBoards">;
}

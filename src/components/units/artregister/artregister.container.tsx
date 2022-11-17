import { yupResolver } from "@hookform/resolvers/yup";
import { SelectProps } from "antd";
import { useState } from "react";
import { useForm } from "react-hook-form";
import ArtRegisterPageWriteUI from "./artregister.presenter";
import { ArtRegisterYup } from "./artregister.schema";
import type { DatePickerProps, RangePickerProps } from "antd/es/date-picker";
import { IFormData } from "./artregister.types";
import { Address } from "react-daum-postcode";
import { useMutation } from "@apollo/client";
import {
  IMutation,
  // IMutationCreateBoardImagesArgs,
  IMutationCreateBoardsArgs,
  // IQuery,
  // IQueryFetchArtistArgs,
  // IMutationUploadFileArgs,
} from "../../../commons/types/generated/types";
import { CREATE_BOARD } from "./ArtRegister.Quries";
import { useRouter } from "next/router";

interface IArtRegisterPageWriteProps {
  isEdit?: boolean;
}

const ArtRegisterPageWrite = ({ isEdit }: IArtRegisterPageWriteProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [address, setAddress] = useState("");
  const [genre, setGenre] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  // const [imgUrl, setImgUrl] = useState([]);

  const [createBoards] = useMutation<
    Pick<IMutation, "createBoards">,
    IMutationCreateBoardsArgs
  >(CREATE_BOARD);

  // const [createBoardImages] = useMutation<
  //   Pick<IMutation, "createBoardImages">,
  //   IMutationCreateBoardImagesArgs
  // >(CREATE_BOARD_IMAGES);

  // const { data: ArtistData } = useQuery<
  //   Pick<IQuery, "fetchArtist">,
  //   IQueryFetchArtistArgs
  // >(FETCH_ARTIST);

  const router = useRouter();

  const { register, formState, handleSubmit, setValue } = useForm<IFormData>({
    resolver: yupResolver(ArtRegisterYup),
  });

  const TimeChange = (
    value: DatePickerProps["value"] | RangePickerProps["value"],
    dateString: [string, string] | string
  ) => {
    setStartTime(dateString[0]);
    setEndTime(dateString[1]);
    setValue("start_time", dateString[0]);
    setValue("end_time", dateString[1]);
    console.log(dateString);
  };

  const onClickAddressOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const onClickHandleCancel = () => {
    setIsOpen(false);
  };

  const onCompleteAddressSearch = (data: Address) => {
    setAddress(data.address);
    setIsOpen((prev) => !prev);
    setValue("boardAddressInput.address", data.address);
  };

  const NameArr = ["춤", "노래", "마술", "악기연주"];
  const ValueArr = [
    "43684efd-63f6-11ed-9601-42010a36c002",
    "5a783215-63f6-11ed-9601-42010a36c002",
    "5444244e-63f6-11ed-9601-42010a36c002",
    "4048c94a-63f6-11ed-9601-42010a36c002",
  ];

  const options: SelectProps["options"] = [];

  for (let i = 0; i < ValueArr.length; i++) {
    options.push({
      value: ValueArr[i],
      label: NameArr[i],
    });
  }

  const handleChange = (value: any) => {
    setGenre(value);
    setValue("genre", value);
  };

  // const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
  //   const file = event.target.files?.[0];
  //   const result = await createBoardImages({
  //     variables: {
  //       urls: [String(file)],
  //     },
  //   });
  //   setImgUrl([result.data?.createBoardImages]);
  // };

  const onClickRegister = async (data: IFormData) => {
    try {
      const result = await createBoards({
        variables: {
          createBoardInput: {
            contents: data.contents,
            category: data.genre,
            start_time: data.start_time,
            end_time: data.end_time,
            boardAddressInput: {
              address,
              lat: Number(data.boardAddressInput.lat),
              lng: Number(data.boardAddressInput.lng),
            },
          },
        },
      });

      await router.push(`/main/list/${String(result.data?.createBoards.id)}`);
    } catch (error) {
      if (error instanceof Error) {
        alert(error);
      }
    }
  };

  return (
    <ArtRegisterPageWriteUI
      onClickAddressOpen={onClickAddressOpen}
      isOpen={isOpen}
      onClickHandleCancel={onClickHandleCancel}
      onCompleteAddressSearch={onCompleteAddressSearch}
      address={address}
      register={register}
      formState={formState}
      handleSubmit={handleSubmit}
      onClickRegister={onClickRegister}
      handleChange={handleChange}
      options={options}
      genre={genre}
      TimeChange={TimeChange}
      startTime={startTime}
      // onChangeFile={onChangeFile}
      // imgUrl={imgUrl}
      endTime={endTime}
      setValue={setValue}
    />
  );
};

export default ArtRegisterPageWrite;

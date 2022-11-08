import { yupResolver } from "@hookform/resolvers/yup";
import { SelectProps } from "antd";
import { useState } from "react";
import { useForm } from "react-hook-form";
import ArtRegisterPageWriteUI from "./artregister.presenter";
import { ArtRegisterYup } from "./artregister.schema";
import type { DatePickerProps, RangePickerProps } from "antd/es/date-picker";
import { IFormData } from "./artregister.types";
import { Address } from "react-daum-postcode";
import { useMutation, useQuery } from "@apollo/client";
// import { UPLOAD_FILE } from "./ArtRegister.Quries";
import {
  IMutation,
  IMutationCreateBoardsArgs,
  IQuery,
  IQueryFetchArtistArgs,
  // IMutationUploadFileArgs,
} from "../../../commons/types/generated/types";
import { CREATE_BOARD, FETCH_ARTIST } from "./ArtRegister.Quries";


const ArtRegisterPageWrite = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [address, setAddress] = useState("");
  const [genre, setGenre] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  // const [imgUrl, setImgUrl] = useState([]);
  const [count, setCount] = useState(0);
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);

  const [createBoards] = useMutation<
    Pick<IMutation, "createBoards">,
    IMutationCreateBoardsArgs
  >(CREATE_BOARD);

  const { data: ArtistData } = useQuery<
    Pick<IQuery, "fetchArtist">,
    IQueryFetchArtistArgs
  >(FETCH_ARTIST);

  // const [uploadFile] = useMutation<
  //   Pick<IMutation, "uploadFile">,
  //   IMutationUploadFileArgs
  // >(UPLOAD_FILE);

  const { register, formState, handleSubmit } = useForm<IFormData>({
    resolver: yupResolver(ArtRegisterYup),
  });

  const TimeChange = (
    value: DatePickerProps["value"] | RangePickerProps["value"],
    dateString: [string, string] | string
  ) => {
    setStartTime(dateString[0]);
    setEndTime(dateString[1]);
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
    setLat(data.address.lat);
    setLng(data.address.lng);
  };

  const ValueArr = ["춤", "노래", "마술", "악기연주"];

  const options: SelectProps["options"] = [];

  for (let i = 0; i < ValueArr.length; i++) {
    options.push({
      value: ValueArr[i],
      label: ValueArr[i],
    });
  }

  const onClickCount = () => {
    setCount((prev) => prev + 1);
  };

  const handleChange = (value: any) => {
    setGenre(value);
  };

  // const onChangeFile =
  //   (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
  //     const file = event.target.files?.[0];
  //     const result = uploadFile({ variables: { file } });
  //     const newImgUrls = [...imgUrl];
  //     newImgUrls[index] = result.data?.uploadFile.url;
  //     setImgUrl(newImgUrls);
  //   };

  const onClickRegister = async (data: IFormData) => {
    await createBoards({
      variables: {
        createBoardInput: {
          contents: data.contents,
          artist: String(ArtistData?.fetchArtist.active_name),
          category: data.genre,
          start_time: String(startTime.slice(11, 16)),
          end_time: String(endTime.slice(11, 16)),
          day: String(startTime.slice(0, 11)),
          boardAddressInput: {
            address: data.place,
            lat,
            lng,
          },
        },
      },
    });
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
      onClickCount={onClickCount}
      count={count}
      endTime={endTime}
    />
  );
};

export default ArtRegisterPageWrite;

import { yupResolver } from "@hookform/resolvers/yup";
import { SelectProps } from "antd";
import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import ArtRegisterPageWriteUI from "./artregister.presenter";
import { ArtRegisterYup } from "./artregister.schema";
import type { DatePickerProps, RangePickerProps } from "antd/es/date-picker";
import { IFormData } from "./artregister.types";
import { Address } from "react-daum-postcode";
import { useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreateBoardsArgs,
  IMutationUploadFileArgs,
} from "../../../commons/types/generated/types";
import { CREATE_BOARDS, UPLOAD_FILE } from "./ArtRegister.Quries";
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
  const [imgUrl, setImgUrl] = useState(["", "", ""]);
  const [preview, setPreview] = useState(["", "", ""]);

  const [createBoards] = useMutation<
    Pick<IMutation, "createBoards">,
    IMutationCreateBoardsArgs
  >(CREATE_BOARDS);

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

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

  const NameArr = ["춤", "노래", "랩"];
  const ValueArr = [
    "1dbc3953-2195-4f45-92c7-4d31d4bbd448",
    "8bc06edc-0454-4098-9b53-c96b201ef01e",
    "12e5e0d3-8b8c-448d-a5a9-1b058d29dbf8",
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
    setValue("category", value);
  };

  const onChangeFile =
    (index: number) => async (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (!file) return;
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = (event) => {
        const newPreview = [...preview];
        if (event.target === null) return;
        newPreview[index] = String(event.target.result);
        setPreview(newPreview);
      };

      const result = await uploadFile({ variables: { file } });
      const newImgUrls = [...imgUrl];
      newImgUrls[index] = String(result.data?.uploadFile);
      setImgUrl(newImgUrls);
      setValue("boardImageURL", imgUrl);
    };

  const onClickRegister = async (data: IFormData) => {
    try {
      const result = await createBoards({
        variables: {
          createBoardInput: {
            contents: data.contents,
            category: data.category,
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
      onChangeFile={onChangeFile}
      imgUrl={imgUrl}
      endTime={endTime}
      setValue={setValue}
      preview={preview}
    />
  );
};

export default ArtRegisterPageWrite;

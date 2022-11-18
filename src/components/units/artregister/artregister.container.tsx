import { yupResolver } from "@hookform/resolvers/yup";
import { SelectProps } from "antd";
import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import ArtRegisterPageWriteUI from "./artregister.presenter";
import { ArtRegisterYup } from "./artregister.schema";
import type { DatePickerProps, RangePickerProps } from "antd/es/date-picker";
import { IFormData } from "./artregister.types";
import { Address } from "react-daum-postcode";
import { useMutation, useQuery } from "@apollo/client";
import {
  IMutation,
  IMutationCreateBoardsArgs,
  IMutationUploadFileArgs,
  IQuery,
} from "../../../commons/types/generated/types";
import {
  CREATE_BOARDS,
  FECTH_CATEGORIES,
  UPLOAD_FILE,
} from "./ArtRegister.Quries";
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

  const { data: CategoryData } =
    useQuery<Pick<IQuery, "fetchCategories">>(FECTH_CATEGORIES);

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

  const options: SelectProps["options"] = [];

  for (let i = 0; i < Number(CategoryData?.fetchCategories.length); i++) {
    options.push({
      value: CategoryData?.fetchCategories[i].id,
      label: CategoryData?.fetchCategories[i].name,
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

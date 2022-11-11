import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { SelectProps } from "antd";
import { useState } from "react";
import { Address } from "react-daum-postcode";
import { useForm } from "react-hook-form";
import {
  IMutation,
  IMutationCreateArtistArgs,
  // IMutationUploadFileArgs,
} from "../../../commons/types/generated/types";
import ArtistSignupPageWriteUI from "./artistsignup.presenter";
import { CREATE_ARTIST } from "./ArtistSignup.Quries";
import { ArtistSignupYup } from "./ArtistSignup.Schema";
import { IArtistSignupPageWrite, IFormData } from "./artistsignup.types";

const ArtistSignupPageWrite = ({ isEdit }: IArtistSignupPageWrite) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTeam, setIsTeam] = useState(false);
  const [addCount, setAddCount] = useState(1);
  const [address, setAddress] = useState("");
  const [genre, setGenre] = useState("");
  // const [imgUrl, setImgUrl] = useState("");

  const { register, handleSubmit, formState, setValue } = useForm<IFormData>({
    resolver: yupResolver(ArtistSignupYup),
  });

  const [createArtist] = useMutation<
    Pick<IMutation, "createArtist">,
    IMutationCreateArtistArgs
  >(CREATE_ARTIST);

  // const [uploadFile] = useMutation<
  //   Pick<IMutation, "uploadFile">,
  //   IMutationUploadFileArgs
  // >(UPLOAD_FILE);

  const onClickSearchAddress = () => {
    setIsOpen((prev) => !prev);
  };

  const onClickHandleCancel = () => {
    setIsOpen(false);
  };

  const onCompleteAddressSearch = (data: Address) => {
    setIsOpen((prev) => !prev);
    setAddress(data.address);
    localStorage.setItem("address", JSON.stringify(data.address));
  };

  const onClickTeam = () => {
    setIsTeam((prev) => !prev);
  };

  const onClickAddTeam = () => {
    setAddCount((prev) => prev + 1);
  };

  const onClickEdit = () => {};

  const ValueArr = ["춤", "노래", "마술", "악기연주"];

  const options: SelectProps["options"] = [];

  for (let i = 0; i < ValueArr.length; i++) {
    options.push({
      value: ValueArr[i],
      label: ValueArr[i],
    });
  }

  const handleChange = (value: any) => {
    setGenre(value);
    setValue("category", value);
  };

  const onClickSignup = async (data: IFormData) => {
    await createArtist({
      variables: {
        createArtistInput: data,
      },
    });
  };

  // const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
  //   const file = event.target.files?.[0];
  //   const result = await uploadFile({ variables: { file } });
  //   setImgUrl(result.data?.uploadFile.url);
  //   setValue("artist_image", imgUrl);
  //   console.log(result);
  // };

  return (
    <ArtistSignupPageWriteUI
      onClickSearchAddress={onClickSearchAddress}
      isOpen={isOpen}
      onClickHandleCancel={onClickHandleCancel}
      onCompleteAddressSearch={onCompleteAddressSearch}
      onClickTeam={onClickTeam}
      isTeam={isTeam}
      onClickAddTeam={onClickAddTeam}
      addCount={addCount}
      isEdit={isEdit}
      handleSubmit={handleSubmit}
      register={register}
      onClickSignup={onClickSignup}
      onClickEdit={onClickEdit}
      formState={formState}
      address={address}
      handleChange={handleChange}
      options={options}
      genre={genre}
      // onChangeFile={onChangeFile}
      // imgUrl={imgUrl}
    />
  );
};

export default ArtistSignupPageWrite;

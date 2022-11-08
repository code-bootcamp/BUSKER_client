import { yupResolver } from "@hookform/resolvers/yup";
import { SelectProps } from "antd";
import { useState } from "react";
import { useForm } from "react-hook-form";
import ArtistSignupPageWriteUI from "./artistsignup.presenter";
import { ArtistSignupYup } from "./ArtistSignup.Schema";
import { IArtistSignupPageWrite, IFormData } from "./artistsignup.types";

const ArtistSignupPageWrite = ({ isEdit }: IArtistSignupPageWrite) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTeam, setIsTeam] = useState(false);
  const [addCount, setAddCount] = useState(1);
  const [address, setAddress] = useState("");
  const [genre, setGenre] = useState("");

  const { register, handleSubmit, formState } = useForm<IFormData>({
    resolver: yupResolver(ArtistSignupYup),
    mode: "onChange",
  });

  const onClickSearchAddress = () => {
    setIsOpen((prev) => !prev);
  };

  const onClickHandleCancel = () => {
    setIsOpen(false);
  };

  const onCompleteAddressSearch = (data: any) => {
    setIsOpen((prev) => !prev);
    setAddress(data.address);
  };

  const onClickTeam = () => {
    setIsTeam((prev) => !prev);
  };

  const onClickAddTeam = () => {
    setAddCount((prev) => prev + 1);
  };

  const onClickSignup = () => {};

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
  };

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
    />
  );
};

export default ArtistSignupPageWrite;

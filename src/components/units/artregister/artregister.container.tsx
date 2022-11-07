import { yupResolver } from "@hookform/resolvers/yup";
import { SelectProps } from "antd";
import { useState } from "react";
import { useForm } from "react-hook-form";
import ArtRegisterPageWriteUI from "./artregister.presenter";
import { ArtRegisterYup } from "./artregister.schema";
import { IFormData } from "./artregister.types";

const ArtRegisterPageWrite = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [address, setAddress] = useState("");

  const { register, formState, handleSubmit } = useForm<IFormData>({
    resolver: yupResolver(ArtRegisterYup),
    mode: "onChange",
  });

  const onClickAddressOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const onClickHandleCancel = () => {
    setIsOpen(false);
  };

  const onCompleteAddressSearch = (data: any) => {
    setAddress(data.address);
    setIsOpen((prev) => !prev);
  };

  const GenreArr = ["dance", "sing", "magic"];
  const ValueArr = ["춤", "노래", "마술"];

  const options: SelectProps["options"] = [];

  for (let i = 0; i < GenreArr.length; i++) {
    options.push({
      value: GenreArr[i],
      label: ValueArr[i],
    });
  }

  const handleChange = (value: string | string[]) => {
    register("genre");
  };

  const onClickRegister = () => {};

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
    />
  );
};

export default ArtRegisterPageWrite;

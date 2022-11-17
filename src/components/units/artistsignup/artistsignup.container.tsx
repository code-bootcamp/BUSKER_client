import { useMutation, useQuery } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { SelectProps } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { Address } from "react-daum-postcode";
import { useForm } from "react-hook-form";
import {
  IMutation,
  IMutationCreateArtistArgs,
  IMutationUpdateArtistArgs,
  IQuery,
} from "../../../commons/types/generated/types";
import ArtistSignupPageWriteUI from "./artistsignup.presenter";
import {
  CREATE_ARTIST,
  FETCH_ARTIST,
  UPDATE_ARTIST,
} from "./ArtistSignup.Quries";
import { ArtistSignupYup } from "./ArtistSignup.Schema";
import { IArtistSignupPageWrite, IFormData } from "./artistsignup.types";

const ArtistSignupPageWrite = ({ isEdit }: IArtistSignupPageWrite) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isTeam, setIsTeam] = useState(false);
  const [addCount, setAddCount] = useState(1);
  const [address, setAddress] = useState("");
  const [genre, setGenre] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  const { register, handleSubmit, formState, setValue } = useForm<IFormData>({
    resolver: yupResolver(ArtistSignupYup),
  });

  const [createArtist] = useMutation<
    Pick<IMutation, "createArtist">,
    IMutationCreateArtistArgs
  >(CREATE_ARTIST);

  const [updateArtist] = useMutation<
    Pick<IMutation, "updateArtist">,
    IMutationUpdateArtistArgs
  >(UPDATE_ARTIST);

  const { data } = useQuery<Pick<IQuery, "fetchArtist">>(FETCH_ARTIST);

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

  const handleChange = (value: string) => {
    setGenre(value);
    setValue("category", value);
  };

  const onClickSignup = async (data: IFormData) => {
    try {
      const result = await createArtist({
        variables: {
          createArtistInput: data,
        },
      });
      await router.push(
        `/artistdetail/${String(result.data?.createArtist.id)}`
      );
    } catch (error) {
      alert(error);
    }
  };

  const onClickEdit = async (data: IFormData) => {
    const result = await updateArtist({
      variables: {
        updateArtistInput: data,
      },
    });
    console.log(result);
    void router.push(`/`);
  };

  const onClickEditArtistImage = async (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (event) => {
      if (typeof event.target?.result === "string") {
        setImgUrl(event.target.result);
      }
    };
    setValue("artistImageURL", imgUrl);
  };

  const onCreateArtistImage = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (event) => {
      if (typeof event.target?.result === "string") {
        console.log(event.target.result);
        setImgUrl(event.target.result);
      }
    };
    setValue("artistImageURL", imgUrl);
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
      onCreateArtistImage={onCreateArtistImage}
      imgUrl={imgUrl}
      data={data}
      onClickEditArtistImage={onClickEditArtistImage}
    />
  );
};

export default ArtistSignupPageWrite;

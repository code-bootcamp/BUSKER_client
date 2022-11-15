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
  IMutationCreateArtistImageArgs,
  IMutationUpdateArtistArgs,
  IMutationUpdateArtistImageArgs,
  IQuery,
} from "../../../commons/types/generated/types";
import ArtistSignupPageWriteUI from "./artistsignup.presenter";
import {
  CREATE_ARTIST,
  CREATE_ARTIST_IMAGE,
  FETCH_ARTIST,
  FETCH_USER,
  UPDATE_ARTIST,
  UPDATE_ARTIST_IMAGE,
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

  const [createArtistImage] = useMutation<
    Pick<IMutation, "createArtistImage">,
    IMutationCreateArtistImageArgs
  >(CREATE_ARTIST_IMAGE);

  const [updateArtistImage] = useMutation<
    Pick<IMutation, "updateArtistImage">,
    IMutationUpdateArtistImageArgs
  >(UPDATE_ARTIST_IMAGE);

  const [updateArtist] = useMutation<
    Pick<IMutation, "updateArtist">,
    IMutationUpdateArtistArgs
  >(UPDATE_ARTIST);

  const { data: user } = useQuery<Pick<IQuery, "fetchUser">>(FETCH_USER);

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
    setValue("category", value);
  };

  const onClickSignup = async (data: IFormData) => {
    await createArtist({
      variables: {
        createArtistInput: data,
      },
    });
    await router.push("/main/list");
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
    const result = await updateArtistImage({
      variables: {
        updateArtistImageInput: {
          url: String(file),
        },
      },
    });
    setImgUrl(String(result.data?.updateArtistImage.url));
  };

  const onCreateArtistImage = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    const result = await createArtistImage({
      variables: {
        createArtistImageInput: {
          userId: String(user?.fetchUser.id),
          url: String(file),
        },
      },
    });
    setImgUrl(String(result.data?.createArtistImage.url));
    setValue("artist_image", imgUrl);
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

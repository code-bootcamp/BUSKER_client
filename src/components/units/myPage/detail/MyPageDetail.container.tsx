import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useRef, useState } from "react";
import {
  IMutation,
  IMutationArtistLikeToggleArgs,
  IMutationUpdateUserArgs,
  IMutationUploadFileArgs,
  IQuery,
} from "../../../../commons/types/generated/types";
import MyPageDetailUI from "./MyPageDetail.presenter";
import {
  ARTIST_LIKE_TOGGLE,
  FETCH_USER,
  UPDATE_USER,
  UPLOAD_FILE,
} from "./MyPageDetail.queries";

const MyPageDetail = () => {
  const router = useRouter();
  const imageRef = useRef<HTMLInputElement>(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [nickname, setNickname] = useState("");
  const [userImageURL, setUserImageURL] = useState("");
  const { data } = useQuery<Pick<IQuery, "fetchUser">>(FETCH_USER);

  const [artistLikeToggle] = useMutation<
    Pick<IMutation, "artistLikeToggle">,
    IMutationArtistLikeToggleArgs
  >(ARTIST_LIKE_TOGGLE);

  const [updateUser] = useMutation<
    Pick<IMutation, "updateUser">,
    IMutationUpdateUserArgs
  >(UPDATE_USER);

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onClickPickedArtist =
    (id: string) => (event: MouseEvent<HTMLLIElement>) => {
      void router.push(`/artistdetail/${id}`);
    };

  const onClickEditPassword = () => {
    void router.push("/password/change");
  };

  const onClickEditName = async () => {
    try {
      await updateUser({
        variables: { updateUserInput: { nickname, userImageURL } },
        refetchQueries: [
          {
            query: FETCH_USER,
          },
        ],
      });
      Modal.success({ content: "유저정보가 변경되었습니다." });
      setIsEditMode(false);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };
  const onClickEditProfileImage = () => imageRef.current?.click();
  const onChangeImage = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file == null) return;
    try {
      const result = await uploadFile({ variables: { file } });
      setUserImageURL(String(result.data?.uploadFile));
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };
  const onClickPickOff =
    (id: string) => async (event: MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();
      try {
        await artistLikeToggle({
          variables: { status: true, artistId: id },
          refetchQueries: [
            {
              query: FETCH_USER,
            },
          ],
        });
      } catch (error) {
        if (error instanceof Error) alert(error.message);
      }
    };

  const onClickTab = (event: MouseEvent<HTMLButtonElement>) => {
    event.currentTarget.id === "pick" ? setIsEdit(false) : setIsEdit(true);
  };

  const onToggleEditMode = () => {
    setIsEditMode((prev) => !prev);
  };

  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setNickname(event.target.value);
  };
  return (
    <MyPageDetailUI
      onChangeName={onChangeName}
      onToggleEditMode={onToggleEditMode}
      onChangeImage={onChangeImage}
      onClickEditPassword={onClickEditPassword}
      onClickEditName={onClickEditName}
      onClickEditProfileImage={onClickEditProfileImage}
      imageRef={imageRef}
      onClickTab={onClickTab}
      isEdit={isEdit}
      isEditMode={isEditMode}
      onClickPickOff={onClickPickOff}
      onClickPickedArtist={onClickPickedArtist}
      data={data}
      userImageURL={userImageURL}
    />
  );
};

export default MyPageDetail;

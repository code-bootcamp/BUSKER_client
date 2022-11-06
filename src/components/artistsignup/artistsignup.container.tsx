import { useState } from "react";
import ArtistSignupPageWriteUI from "./artistsignup.presenter";

const ArtistSignupPageWrite = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTeam, setIsTeam] = useState(false);
  const [addCount, setAddCount] = useState(1);

  const onClickSearchAddress = () => {
    setIsOpen((prev) => !prev);
  };

  const onClickHandleCancel = () => {
    setIsOpen(false);
  };

  const onCompleteAddressSearch = () => {
    setIsOpen((prev) => !prev);
  };

  const onClickTeam = () => {
    setIsTeam((prev) => !prev);
  };

  const onClickAddTeam = () => {
    setAddCount((prev) => prev + 1);
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
    />
  );
};

export default ArtistSignupPageWrite;

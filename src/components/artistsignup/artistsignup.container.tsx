import { useState } from "react";
import ArtistSignupPageWriteUI from "./artistsignup.presenter";

const ArtistSignupPageWrite = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClickSearchAddress = () => {
    setIsOpen((prev) => !prev);
  };

  const onClickHandleCancel = () => {
    setIsOpen(false);
  };

  const onCompleteAddressSearch = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <ArtistSignupPageWriteUI
      onClickSearchAddress={onClickSearchAddress}
      isOpen={isOpen}
      onClickHandleCancel={onClickHandleCancel}
      onCompleteAddressSearch={onCompleteAddressSearch}
    />
  );
};

export default ArtistSignupPageWrite;

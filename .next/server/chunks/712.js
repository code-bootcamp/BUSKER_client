"use strict";
exports.id = 712;
exports.ids = [712];
exports.modules = {

/***/ 2712:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AW": () => (/* binding */ FETCH_USER),
/* harmony export */   "fo": () => (/* binding */ ARTIST_LIKE_TOGGLE),
/* harmony export */   "AX": () => (/* binding */ UPDATE_USER)
/* harmony export */ });
/* unused harmony exports UPDATE_USER_IMAGE, NON_LOGIN_RESET_PASSWORD */
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

const FETCH_USER = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  query {
    fetchUser {
      id
      email
      nickname
      wrong_pass
      liked_artist {
        id
        artist {
          id
          active_name
        }
      }
      userImageURL
    }
  }
`;
const ARTIST_LIKE_TOGGLE = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  mutation artistLikeToggle($status: Boolean!, $artistId: String!) {
    artistLikeToggle(status: $status, artistId: $artistId)
  }
`;
const UPDATE_USER = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  mutation updateUser($updateUserInput: UpdateUserInput!) {
    updateUser(updateUserInput: $updateUserInput) {
      id
      nickname
    }
  }
`;
const UPDATE_USER_IMAGE = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  mutation updateUserImage($updateUserImageInput: UpdateUserImageInput) {
    updateUserImage(updateUserImageInput: $updateUserImageInput) {
      id
      url
    }
  }
`;
const NON_LOGIN_RESET_PASSWORD = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  mutation nonLoginResetPassword(
    $email: String!
    $updatePasswordInput: UpdatePasswordInput!
  ) {
    nonLoginResetPassword(
      email: $email
      updatePasswordInput: $updatePasswordInput
    )
  }
`;


/***/ })

};
;
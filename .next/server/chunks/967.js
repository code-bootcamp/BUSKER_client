exports.id = 967;
exports.ids = [967];
exports.modules = {

/***/ 107:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Input01)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5193);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1480);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _commons_styles_globalStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3240);



const LoginInputStyle = (_emotion_styled__WEBPACK_IMPORTED_MODULE_1___default().input)`
  margin: 1rem 0;
  height: 50px;
  font-size: 1.5rem;
  border-radius: 10px;
  padding: 20px;
  border: 1px solid #ddd;
  :focus {
    outline: 1px solid ${_commons_styles_globalStyles__WEBPACK_IMPORTED_MODULE_2__/* .stylePrimaryColor */ .EB};
    border: none;
  }
`;
function Input01(props) {
    return(/*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LoginInputStyle, {
        placeholder: props.placeholder,
        type: props.type,
        ...props.register,
        onChange: props.onChange,
        readOnly: props.readOnly,
        value: props.value
    }));
};


/***/ }),

/***/ 4941:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cv": () => (/* binding */ CREATE_ARTIST),
/* harmony export */   "z2": () => (/* binding */ CREATE_ARTIST_IMAGE),
/* harmony export */   "AW": () => (/* binding */ FETCH_USER)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

const CREATE_ARTIST = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  mutation createArtist($createArtistInput: CreateArtistInput!) {
    createArtist(createArtistInput: $createArtistInput) {
      id
    }
  }
`;
const CREATE_ARTIST_IMAGE = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  mutation createArtistImage($createArtistImageInput: CreateArtistImageInput!) {
    createArtistImage(createArtistImageInput: $createArtistImageInput) {
      id
      url
    }
  }
`;
const FETCH_USER = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  query fetchUser {
    fetchUser {
      id
    }
  }
`;


/***/ }),

/***/ 3858:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ ArtistSignupYup)
/* harmony export */ });
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_0__);

const ArtistSignupYup = yup__WEBPACK_IMPORTED_MODULE_0__.object({
    active_name: yup__WEBPACK_IMPORTED_MODULE_0__.string().required("팀명을 입력해주세요"),
    category: yup__WEBPACK_IMPORTED_MODULE_0__.string().required("공연 주장르를 설정해 주세요"),
    description: yup__WEBPACK_IMPORTED_MODULE_0__.string().required("소개글을 적어주세요"),
    promotion_url: yup__WEBPACK_IMPORTED_MODULE_0__.string()
});


/***/ }),

/***/ 9967:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5193);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1908);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5641);
/* harmony import */ var _artistsignup_presenter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8598);
/* harmony import */ var _ArtistSignup_Quries__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4941);
/* harmony import */ var _ArtistSignup_Schema__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3858);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_2__, react_hook_form__WEBPACK_IMPORTED_MODULE_5__]);
([_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_2__, react_hook_form__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const ArtistSignupPageWrite = ({ isEdit  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { 0: isOpen , 1: setIsOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const { 0: isTeam , 1: setIsTeam  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const { 0: addCount , 1: setAddCount  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(1);
    const { 0: address , 1: setAddress  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)("");
    const { 0: genre , 1: setGenre  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)("");
    const { 0: imgUrl , 1: setImgUrl  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)("");
    const { register , handleSubmit , formState , setValue  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useForm)({
        resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_2__.yupResolver)(_ArtistSignup_Schema__WEBPACK_IMPORTED_MODULE_8__/* .ArtistSignupYup */ .M)
    });
    const [createArtist] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useMutation)(_ArtistSignup_Quries__WEBPACK_IMPORTED_MODULE_7__/* .CREATE_ARTIST */ .Cv);
    const [createArtistImage] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useMutation)(_ArtistSignup_Quries__WEBPACK_IMPORTED_MODULE_7__/* .CREATE_ARTIST_IMAGE */ .z2);
    const { data: data1  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(_ArtistSignup_Quries__WEBPACK_IMPORTED_MODULE_7__/* .FETCH_USER */ .AW);
    const onClickSearchAddress = ()=>{
        setIsOpen((prev)=>!prev
        );
    };
    const onClickHandleCancel = ()=>{
        setIsOpen(false);
    };
    const onCompleteAddressSearch = (data)=>{
        setIsOpen((prev)=>!prev
        );
        setAddress(data.address);
        localStorage.setItem("address", JSON.stringify(data.address));
    };
    const onClickTeam = ()=>{
        setIsTeam((prev)=>!prev
        );
    };
    const onClickAddTeam = ()=>{
        setAddCount((prev)=>prev + 1
        );
    };
    const onClickEdit = ()=>{};
    const ValueArr = [
        "춤",
        "노래",
        "마술",
        "악기연주"
    ];
    const options = [];
    for(let i = 0; i < ValueArr.length; i++){
        options.push({
            value: ValueArr[i],
            label: ValueArr[i]
        });
    }
    const handleChange = (value)=>{
        setGenre(value);
        setValue("category", value);
    };
    const onClickSignup = async (data)=>{
        await createArtist({
            variables: {
                createArtistInput: data
            }
        });
        await router.push("/main/list");
    };
    const onCreateArtistImage = async (event)=>{
        var ref, ref1;
        const file = (ref = event.target.files) === null || ref === void 0 ? void 0 : ref[0];
        const result = await createArtistImage({
            variables: {
                createArtistImageInput: {
                    userId: String(data1 === null || data1 === void 0 ? void 0 : data1.fetchUser.id),
                    url: String(file)
                }
            }
        });
        setImgUrl(String((ref1 = result.data) === null || ref1 === void 0 ? void 0 : ref1.createArtistImage.url));
        setValue("artist_image", imgUrl);
    };
    return(/*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_artistsignup_presenter__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        onClickSearchAddress: onClickSearchAddress,
        isOpen: isOpen,
        onClickHandleCancel: onClickHandleCancel,
        onCompleteAddressSearch: onCompleteAddressSearch,
        onClickTeam: onClickTeam,
        isTeam: isTeam,
        onClickAddTeam: onClickAddTeam,
        addCount: addCount,
        isEdit: isEdit,
        handleSubmit: handleSubmit,
        register: register,
        onClickSignup: onClickSignup,
        onClickEdit: onClickEdit,
        formState: formState,
        address: address,
        handleChange: handleChange,
        options: options,
        genre: genre,
        onCreateArtistImage: onCreateArtistImage,
        imgUrl: imgUrl
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArtistSignupPageWrite);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8598:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ artistsignup_presenter)
});

// EXTERNAL MODULE: external "@emotion/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5193);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(5725);
// EXTERNAL MODULE: ./src/components/common/inputs/01/index.tsx
var _01 = __webpack_require__(107);
// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(1480);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
// EXTERNAL MODULE: external "react-daum-postcode"
var external_react_daum_postcode_ = __webpack_require__(478);
var external_react_daum_postcode_default = /*#__PURE__*/__webpack_require__.n(external_react_daum_postcode_);
// EXTERNAL MODULE: ./node_modules/antd/dist/antd.css
var antd = __webpack_require__(4722);
// EXTERNAL MODULE: ./src/commons/styles/globalStyles.ts
var globalStyles = __webpack_require__(3240);
;// CONCATENATED MODULE: ./src/components/units/artistsignup/artistsignup.styles.ts





const MainWrapper = (styled_default()).form`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 5rem;
`;
const ContentsWrapper = (styled_default()).div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 30px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  @media ${globalStyles/* breakPoints.mobile */.Eg.mobile} {
    width: 280px;
  }
`;
const ContentsTopWrapper = (styled_default()).div`
  display: flex;
  flex-direction: column;
  padding: 3rem 0;
  width: 100%;
`;
const ArtistProfileWrapper = (styled_default()).div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 300px;
  width: 100%;
`;
const PlaceGenreWrapper = (styled_default()).div`
  display: flex;
  flex-direction: column;
  @media ${globalStyles/* breakPoints.mobile */.Eg.mobile} {
    display: flex;
    flex-direction: column;
    width: 200px;
  }
`;
const ArtistPlaceWrapper = (styled_default()).div`
  gap: 5rem;
  width: 100%;
  @media ${globalStyles/* breakPoints.mobile */.Eg.mobile} {
    display: flex;
    flex-direction: column;
    width: 200px;
    justify-content: center;
  }
`;
const MainPlaceGenreWrapper = (styled_default()).div`
  display: flex;
  flex-direction: column;
  width: 100%;
  input {
    width: 200px;
    margin-right: 20px;
  }
  button {
    height: 50px;
    width: 80px;
    border-radius: 1.5rem;
    font-weight: 600;
    aspect-ratio: 1/1;
    cursor: pointer;
    color: ${globalStyles/* stylePrimaryColor */.EB};
    background: none;
    border: 1px solid ${globalStyles/* stylePrimaryColor */.EB};
    :hover {
      background-color: ${globalStyles/* stylePrimaryColor */.EB};
      color: white;
    }
  }
  @media ${globalStyles/* breakPoints.mobile */.Eg.mobile} {
    display: flex;
    flex-direction: column;
  }
`;
const RemarksLinkWrapper = (styled_default()).div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const AddressWrapper = (styled_default()).div`
  display: flex;
  align-items: center;
  width: 100%;
  @media ${globalStyles/* breakPoints.mobile */.Eg.mobile} {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
  }
`;
const RemarksInputWrapper = (styled_default()).div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const TextStyle = (styled_default()).div`
  font-size: 1.8rem;
  padding: 10px 0;
  color: ${globalStyles/* stylePrimaryColor */.EB};
`;
const ContentsBottomWrapper = (styled_default()).div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const TeamBtn = (styled_default()).button`
  height: 3rem;
  width: 30%;
  border-radius: 1.5rem;
  font-weight: 600;
  cursor: pointer;
  color: ${globalStyles/* stylePrimaryColor */.EB};
  background: none;
  border: 1px solid ${globalStyles/* stylePrimaryColor */.EB};
  :hover {
    background-color: ${globalStyles/* stylePrimaryColor */.EB};
    color: white;
  }
`;
const AddTeamWrapper = (styled_default()).div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const AddTeamInputWrapper = (styled_default()).div`
  display: flex;
  align-items: center;
  gap: 10px;
  border: 1px solid ${globalStyles/* stylePrimaryColor */.EB};
  border-radius: 10px;
  margin: 20px 0;
  padding: 10px;
  width: 80%;
  max-width: 600px;
  @media ${globalStyles/* breakPoints.mobile */.Eg.mobile} {
    display: flex;
    flex-direction: column;
    input {
      width: 100%;
    }
  }
`;
const AddBtn = (styled_default()).button`
  height: 50px;
  width: 50px;
  border-radius: 1.5rem;
  font-weight: 600;
  font-size: 1.7rem;
  cursor: pointer;
  color: white;
  background: ${globalStyles/* stylePrimaryColor */.EB};
  border: 1px solid ${globalStyles/* stylePrimaryColor */.EB};
`;
const ImgBtn = (styled_default()).label`
  display: inline-block;
  width: 80px;
  margin-right: 24px;
  background-color: #ccc;
  cursor: pointer;
  text-align: center;
  line-height: 7.6rem;
  font-size: 2.5rem;
  aspect-ratio: 1/1;
`;
const FileInput = (styled_default()).input`
  display: none;
`;
const MemberImgBtn = (styled_default()).label`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-align: center;
  font-size: 2.5rem;
  border-radius: 100px;
  background-color: #ccc;
  width: 50px;
  height: 50px;
  aspect-ratio: 1/1;
`;
const SubmitBtn = (styled_default()).button`
  height: 5rem;
  width: 20%;
  min-width: 200px;
  border-radius: 1.5rem;
  font-weight: 600;
  cursor: pointer;
  color: ${globalStyles/* stylePrimaryColor */.EB};
  background: none;
  border: 1px solid ${globalStyles/* stylePrimaryColor */.EB};
  :hover {
    background-color: ${globalStyles/* stylePrimaryColor */.EB};
    color: white;
  }
  margin: 40px auto;
`;
const AddressModal = styled_default()(external_antd_.Modal)``;
const AddressSearchInput = styled_default()((external_react_daum_postcode_default()))``;
const ErrorMsg = (styled_default()).div`
  font-size: 1.5rem;
  color: red;
  padding: 0 20px;
`;

;// CONCATENATED MODULE: ./src/components/units/artistsignup/artistsignup.presenter.tsx




const ArtistSignupPageWriteUI = ({ onClickSearchAddress , isOpen , onClickHandleCancel , onCompleteAddressSearch , onClickTeam , isTeam , addCount , onClickAddTeam , isEdit , onClickSignup , handleSubmit , register , onClickEdit , formState , address , handleChange , options , genre , onCreateArtistImage , imgUrl  })=>{
    var ref, ref1, ref2;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            isOpen && /*#__PURE__*/ jsx_runtime_.jsx(AddressModal, {
                open: true,
                onCancel: onClickHandleCancel,
                children: /*#__PURE__*/ jsx_runtime_.jsx(AddressSearchInput, {
                    onComplete: onCompleteAddressSearch
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(MainWrapper, {
                onSubmit: isEdit ? handleSubmit(onClickEdit) : handleSubmit(onClickSignup),
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ContentsWrapper, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ContentsTopWrapper, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ArtistPlaceWrapper, {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ArtistProfileWrapper, {
                                            children: [
                                                imgUrl ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ImgBtn, {
                                                        style: {
                                                            backgroundImage: `url(https://storage.googleapis.com/${String(imgUrl)})`,
                                                            backgroundColor: "#fff",
                                                            backgroundSize: "cover"
                                                        },
                                                        htmlFor: "file",
                                                        children: [
                                                            "+",
                                                            /*#__PURE__*/ jsx_runtime_.jsx(FileInput, {
                                                                type: "file",
                                                                id: "file",
                                                                onChange: onCreateArtistImage
                                                            })
                                                        ]
                                                    })
                                                }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ImgBtn, {
                                                        children: [
                                                            "+",
                                                            /*#__PURE__*/ jsx_runtime_.jsx(FileInput, {
                                                                onChange: onCreateArtistImage,
                                                                type: "file"
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(TextStyle, {
                                                    children: "아티스트 이름(팀명)"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(_01/* default */.Z, {
                                                    type: "text",
                                                    register: register("active_name")
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(ErrorMsg, {
                                                    children: (ref = formState.errors.active_name) === null || ref === void 0 ? void 0 : ref.message
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(PlaceGenreWrapper, {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MainPlaceGenreWrapper, {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(TextStyle, {
                                                            children: "공연 주장소"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(AddressWrapper, {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx(_01/* default */.Z, {
                                                                    type: "text",
                                                                    readOnly: true,
                                                                    value: address
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                                    onClick: onClickSearchAddress,
                                                                    type: "button",
                                                                    children: "주소찾기"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MainPlaceGenreWrapper, {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(TextStyle, {
                                                            children: "공연 장르"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Select, {
                                                            placeholder: "Please select",
                                                            onChange: handleChange,
                                                            style: {
                                                                width: "30%",
                                                                minWidth: "200px"
                                                            },
                                                            options: options
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(ErrorMsg, {
                                                            children: (ref1 = formState.errors.category) === null || ref1 === void 0 ? void 0 : ref1.message
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(RemarksLinkWrapper, {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(RemarksInputWrapper, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(TextStyle, {
                                                    children: "소개"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(_01/* default */.Z, {
                                                    type: "text",
                                                    placeholder: "소개글을 적어주세요",
                                                    register: register("description")
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(ErrorMsg, {
                                                    children: (ref2 = formState.errors.description) === null || ref2 === void 0 ? void 0 : ref2.message
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(RemarksInputWrapper, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(TextStyle, {
                                                    children: "SNS링크 또는 유튜브 URL"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(_01/* default */.Z, {
                                                    type: "text",
                                                    placeholder: "SNS링크 또는 유튜브 URL을 올려주세요",
                                                    register: register("promotion_url")
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ContentsBottomWrapper, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(AddTeamWrapper, {}),
                                /*#__PURE__*/ jsx_runtime_.jsx(SubmitBtn, {
                                    children: isEdit ? "수정하기" : "등록하기"
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    }));
};
/* harmony default export */ const artistsignup_presenter = (ArtistSignupPageWriteUI);


/***/ }),

/***/ 4722:
/***/ (() => {



/***/ })

};
;
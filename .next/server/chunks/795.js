"use strict";
exports.id = 795;
exports.ids = [795];
exports.modules = {

/***/ 6620:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LK": () => (/* binding */ userPositionState),
/* harmony export */   "iq": () => (/* binding */ deviceState),
/* harmony export */   "LR": () => (/* binding */ accessTokenState),
/* harmony export */   "Bz": () => (/* binding */ sidebarState)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_1__);


const userPositionState = (0,recoil__WEBPACK_IMPORTED_MODULE_1__.atom)({
    key: `userPositionState${(0,lodash__WEBPACK_IMPORTED_MODULE_0__.uniqueId)()}`,
    default: {
        lat: "",
        lng: ""
    }
});
const deviceState = (0,recoil__WEBPACK_IMPORTED_MODULE_1__.atom)({
    key: `deviceState${(0,lodash__WEBPACK_IMPORTED_MODULE_0__.uniqueId)()}`,
    default: false
});
const accessTokenState = (0,recoil__WEBPACK_IMPORTED_MODULE_1__.atom)({
    key: `accessTokenState${(0,lodash__WEBPACK_IMPORTED_MODULE_0__.uniqueId)()}`,
    default: ""
});
const sidebarState = (0,recoil__WEBPACK_IMPORTED_MODULE_1__.atom)({
    key: `sidebarState${(0,lodash__WEBPACK_IMPORTED_MODULE_0__.uniqueId)()}`,
    default: false
}); // export const districtDataState = atom({
 //   key: `districtListState${uniqueId()}`,
 //   default: {},
 // });


/***/ }),

/***/ 9654:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5193);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1480);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__);


const ImageBox = (props)=>{
    return(/*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledImageBox, {
        style: {
            width: props.width,
            height: props.height
        },
        children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledImage, {
            src: props.src || "/avatar.png"
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageBox);
const StyledImageBox = (_emotion_styled__WEBPACK_IMPORTED_MODULE_1___default().div)`
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ddd;
`;
const StyledImage = (_emotion_styled__WEBPACK_IMPORTED_MODULE_1___default().img)`
  width: 80%;
  height: 80%;
`;


/***/ }),

/***/ 536:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5193);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_kakao_maps_sdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8373);
/* harmony import */ var _imageBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9654);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1480);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_kakao_maps_sdk__WEBPACK_IMPORTED_MODULE_2__]);
react_kakao_maps_sdk__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







// 모바일 범위 0.008
// 데탑 범위 0.005 -> 지도 밖 마커 표시 기능 넣으면 0.001 까지 가능..!
const KakaoMap = ({ position: position1 , address , isMap , setValue , data  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    // console.log("주변 버스킹 데이터:", data);
    const { 0: isOpen , 1: setIsOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: center , 1: setCenter  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        lat: position1 === null || position1 === void 0 ? void 0 : position1.lat,
        lng: position1 === null || position1 === void 0 ? void 0 : position1.lng
    });
    const onClickMarker = (i)=>()=>{
            console.log(i, "클릭됨");
            setIsOpen((prev)=>{
                const filteredPrev = prev.map((TF, index)=>index === i ? !TF : TF
                );
                return filteredPrev;
            });
        }
    ;
    console.log(isOpen);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        kakao.maps.load(()=>{
            if (!isMap) {
                const geocoder = new kakao.maps.services.Geocoder();
                geocoder.addressSearch(address, function(result, status) {
                    if (status === kakao.maps.services.Status.OK) {
                        // 정상적으로 검색이 완료됐으면
                        const newSearch = result[0];
                        setCenter({
                            lat: newSearch.y,
                            lng: newSearch.x
                        });
                        setValue === null || setValue === void 0 ? void 0 : setValue("boardAddressInput.lat", newSearch.y);
                        setValue === null || setValue === void 0 ? void 0 : setValue("boardAddressInput.lng", newSearch.x);
                    }
                });
            }
        });
        if (data) setIsOpen(new Array(data.fetchMapBoards.length).fill(false));
    }, [
        position1,
        address,
        isMap,
        setValue,
        data
    ]);
    const onClickMoveToArtDetail = (id)=>async ()=>{
            await router.push(`/main/list/${id}`);
        }
    ;
    return(/*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_kakao_maps_sdk__WEBPACK_IMPORTED_MODULE_2__.Map, {
        center: {
            lat: address ? Number(center.lat) : Number(position1 === null || position1 === void 0 ? void 0 : position1.lat),
            lng: address ? Number(center.lng) : Number(position1 === null || position1 === void 0 ? void 0 : position1.lng)
        },
        style: {
            width: "100%",
            height: "100%",
            margin: "0 auto"
        },
        level:  false ? 0 : 5,
        zoomable: false,
        children: address ? /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_kakao_maps_sdk__WEBPACK_IMPORTED_MODULE_2__.MapMarker, {
            position: {
                lat: Number(center.lat),
                lng: Number(center.lng)
            }
        }) : /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_kakao_maps_sdk__WEBPACK_IMPORTED_MODULE_2__.CustomOverlayMap, {
                    position: {
                        lat: Number(position1 === null || position1 === void 0 ? void 0 : position1.lat),
                        lng: Number(position1 === null || position1 === void 0 ? void 0 : position1.lng)
                    },
                    clickable: false,
                    children: [
                        /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(UserPosition, {}),
                        /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            style: {
                                color: "red",
                                fontWeight: "bold",
                                position: "relative",
                                left: "-20px",
                                fontSize: "1.5rem",
                                cursor: "none"
                            },
                            children: "현재 위치"
                        })
                    ]
                }),
                data === null || data === void 0 ? void 0 : data.fetchMapBoards.map((board, i)=>{
                    const position = {
                        lat: board.boardAddress.lat,
                        lng: board.boardAddress.lng
                    };
                    const startAt = new Intl.DateTimeFormat("ko-KR", {
                        hour: "numeric",
                        minute: "numeric"
                    }).format(new Date(board.start_time));
                    const endAt = new Intl.DateTimeFormat("ko-KR", {
                        hour: "numeric",
                        minute: "numeric"
                    }).format(new Date(board.end_time));
                    return(/*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_kakao_maps_sdk__WEBPACK_IMPORTED_MODULE_2__.MapMarker, {
                                position: position,
                                onClick: onClickMarker(i)
                            }),
                            isOpen[i] && /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_kakao_maps_sdk__WEBPACK_IMPORTED_MODULE_2__.CustomOverlayMap, {
                                position: position,
                                zIndex: 99,
                                children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "wrap",
                                    children: /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "info",
                                        children: [
                                            /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "title",
                                                children: [
                                                    board.artist.active_name,
                                                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "close",
                                                        onClick: onClickMarker(i),
                                                        title: "닫기",
                                                        children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.CloseOutlined, {})
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "body",
                                                children: [
                                                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "img",
                                                        children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_imageBox__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                            width: "75px",
                                                            height: "75px",
                                                            src: ""
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "desc",
                                                        children: [
                                                            /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "ellipsis",
                                                                children: [
                                                                    "# ",
                                                                    board.category.name
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "jibun ellipsis",
                                                                children: [
                                                                    "시작: ",
                                                                    startAt
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "jibun ellipsis",
                                                                children: [
                                                                    "종료: ",
                                                                    endAt
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "link",
                                                                title: "",
                                                                onClick: onClickMoveToArtDetail(board.id),
                                                                children: "버스킹 정보 보러가기"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    }, i));
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KakaoMap);
const UserPosition = (_emotion_styled__WEBPACK_IMPORTED_MODULE_6___default().div)`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: red;

  animation: flicker 1.5s infinite;

  @keyframes flicker {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
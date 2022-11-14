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
});


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
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_kakao_maps_sdk__WEBPACK_IMPORTED_MODULE_2__]);
react_kakao_maps_sdk__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const KakaoMap = ({ position , address , isMap , setValue  })=>{
    const { 0: dummyPosition , 1: setPosition  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([
        {
            lat: Number(position === null || position === void 0 ? void 0 : position.lat) - 0.001,
            lng: Number(position === null || position === void 0 ? void 0 : position.lng) - 0.003
        },
        {
            lat: Number(position === null || position === void 0 ? void 0 : position.lat) + 0.002,
            lng: Number(position === null || position === void 0 ? void 0 : position.lng) + 0.004
        },
        {
            lat: Number(position === null || position === void 0 ? void 0 : position.lat) - 0.003,
            lng: Number(position === null || position === void 0 ? void 0 : position.lng) - 0.008
        },
        {
            lat: Number(position === null || position === void 0 ? void 0 : position.lat) + 0.004,
            lng: Number(position === null || position === void 0 ? void 0 : position.lng) + 0.009
        }, 
    ]);
    const { 0: isOpen , 1: setIsOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Array(4).fill(false));
    const { 0: center , 1: setCenter  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        lat: position === null || position === void 0 ? void 0 : position.lat,
        lng: position === null || position === void 0 ? void 0 : position.lng
    });
    const onClickMarker = (i)=>()=>{
            setIsOpen((prev)=>{
                const filteredPrev = prev.map((TF, index)=>index === i ? !TF : TF
                );
                return filteredPrev;
            });
        }
    ;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        kakao.maps.load(()=>{
            if (!isMap) {
                const geocoder = new kakao.maps.services.Geocoder();
                geocoder.addressSearch(address, function(result, status) {
                    if (status === kakao.maps.services.Status.OK) {
                        // 정상적으로 검색이 완료됐으면
                        console.log("!", result[0]);
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
            setPosition([
                {
                    lat: Number(position === null || position === void 0 ? void 0 : position.lat) - 0.001,
                    lng: Number(position === null || position === void 0 ? void 0 : position.lng) - 0.003
                },
                {
                    lat: Number(position === null || position === void 0 ? void 0 : position.lat) + 0.002,
                    lng: Number(position === null || position === void 0 ? void 0 : position.lng) + 0.003
                },
                {
                    lat: Number(position === null || position === void 0 ? void 0 : position.lat) - 0.003,
                    lng: Number(position === null || position === void 0 ? void 0 : position.lng) + 0.002
                },
                {
                    lat: Number(position === null || position === void 0 ? void 0 : position.lat) + 0.002,
                    lng: Number(position === null || position === void 0 ? void 0 : position.lng) - 0.004
                }, 
            ]);
        });
    }, [
        position,
        address,
        isMap,
        setValue
    ]);
    console.log(center);
    return(/*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_kakao_maps_sdk__WEBPACK_IMPORTED_MODULE_2__.Map, {
        center: {
            lat: address ? Number(center.lat) : Number(position === null || position === void 0 ? void 0 : position.lat),
            lng: address ? Number(center.lng) : Number(position === null || position === void 0 ? void 0 : position.lng)
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
        }) : dummyPosition.map((pos, i)=>/*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_kakao_maps_sdk__WEBPACK_IMPORTED_MODULE_2__.MapMarker, {
                        position: pos,
                        onClick: onClickMarker(i)
                    }),
                    isOpen[i] && /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_kakao_maps_sdk__WEBPACK_IMPORTED_MODULE_2__.CustomOverlayMap, {
                        position: pos,
                        children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "wrap",
                            children: /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "info",
                                children: [
                                    /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "title",
                                        children: [
                                            "아티스트 이름",
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
                                                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "ellipsis",
                                                        children: "# 악기 연주"
                                                    }),
                                                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "jibun ellipsis",
                                                        children: "오후 7시 30분 ~ 오후 9시 30분"
                                                    }),
                                                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
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
            }, i)
        )
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KakaoMap);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
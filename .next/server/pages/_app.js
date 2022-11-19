(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 5656:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5193);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2805);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_commons_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4034);
/* harmony import */ var _src_commons_styles_globalStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3240);
/* harmony import */ var _src_components_common_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3436);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4780);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4722);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_commons_apollo__WEBPACK_IMPORTED_MODULE_3__]);
_src_commons_apollo__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










function MyApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(recoil__WEBPACK_IMPORTED_MODULE_2__.RecoilRoot, {
        children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_commons_apollo__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            children: /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_emotion_react__WEBPACK_IMPORTED_MODULE_1__.Global, {
                        styles: _src_commons_styles_globalStyles__WEBPACK_IMPORTED_MODULE_4__/* .globalStyles */ .W0
                    }),
                    /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src_components_common_layout__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP, {
                        children: [
                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_6___default()), {
                                type: "text/javascript",
                                src: "//dapi.kakao.com/v2/maps/sdk.js?appkey=742b7bcfe05cf57b5cb459032650c7af&libraries=services,clusterer&autoload=false",
                                strategy: "beforeInteractive"
                            }),
                            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                                ...pageProps
                            })
                        ]
                    })
                ]
            })
        })
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4034:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ApolloSetting)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5193);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var apollo_upload_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3706);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _libraries_getAccessToken__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(627);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6620);
/* harmony import */ var _apollo_client_link_error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4394);
/* harmony import */ var _apollo_client_link_error__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_link_error__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([apollo_upload_client__WEBPACK_IMPORTED_MODULE_2__]);
apollo_upload_client__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const GLOBAL_STATE = new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.InMemoryCache();
function ApolloSetting(props) {
    const [accessToken, setAccessToken] = (0,recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilState)(_store__WEBPACK_IMPORTED_MODULE_6__/* .accessTokenState */ .LR);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        void (0,_libraries_getAccessToken__WEBPACK_IMPORTED_MODULE_5__/* .getAccessToken */ .h)().then((newAccessToken)=>{
            setAccessToken(newAccessToken);
        });
    }, []);
    const errorLink = (0,_apollo_client_link_error__WEBPACK_IMPORTED_MODULE_7__.onError)(({ graphQLErrors , operation , forward  })=>{
        if (graphQLErrors) {
            for (const err of graphQLErrors){
                if (err.extensions.code === "UNAUTHENTICATED") {
                    return (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.fromPromise)((0,_libraries_getAccessToken__WEBPACK_IMPORTED_MODULE_5__/* .getAccessToken */ .h)().then((newAccessToken)=>{
                        setAccessToken(newAccessToken);
                        if (typeof newAccessToken !== "string") return;
                        operation.setContext({
                            headers: {
                                ...operation.getContext().headers,
                                Authorization: `Bearer ${newAccessToken}`
                            }
                        });
                    })).flatMap(()=>forward(operation)
                    );
                }
            }
        }
    });
    const uploadLink = (0,apollo_upload_client__WEBPACK_IMPORTED_MODULE_2__.createUploadLink)({
        uri: "https://chansweb.shop/graphql",
        headers: {
            Authorization: `Bearer ${accessToken}`
        },
        credentials: "include"
    });
    const client = new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.ApolloClient({
        link: _apollo_client__WEBPACK_IMPORTED_MODULE_1__.ApolloLink.from([
            errorLink,
            uploadLink
        ]),
        cache: GLOBAL_STATE,
        connectToDevTools: true
    });
    return(/*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_apollo_client__WEBPACK_IMPORTED_MODULE_1__.ApolloProvider, {
        client: client,
        children: props.children
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 627:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "h": () => (/* binding */ getAccessToken)
});

;// CONCATENATED MODULE: external "graphql-request"
const external_graphql_request_namespaceObject = require("graphql-request");
;// CONCATENATED MODULE: ./src/commons/libraries/getAccessToken.ts

const RESTORE_ACCESS_TOKEN = external_graphql_request_namespaceObject.gql`
  mutation restoreAccessToken {
    restoreAccessToken
  }
`;
const getAccessToken = async ()=>{
    try {
        const graphQLClient = new external_graphql_request_namespaceObject.GraphQLClient("https://chansweb.shop/graphql", {
            credentials: "include"
        });
        const result = await graphQLClient.request(RESTORE_ACCESS_TOKEN);
        const newAccessToken = result.restoreAccessToken;
        return newAccessToken;
    } catch (error) {}
};


/***/ }),

/***/ 6620:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 3436:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ZP": () => (/* binding */ layout)
});

// UNUSED EXPORTS: Greeting, HomeWrapper, MenuLi, MenuUl, Sidebar

// EXTERNAL MODULE: external "@emotion/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5193);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(9114);
// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(1480);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
;// CONCATENATED MODULE: external "aos"
const external_aos_namespaceObject = require("aos");
var external_aos_default = /*#__PURE__*/__webpack_require__.n(external_aos_namespaceObject);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "recoil"
var external_recoil_ = __webpack_require__(9755);
// EXTERNAL MODULE: ./src/commons/store/index.tsx
var store = __webpack_require__(6620);
// EXTERNAL MODULE: ./src/commons/styles/globalStyles.ts
var globalStyles = __webpack_require__(3240);
// EXTERNAL MODULE: ./src/components/units/myPage/detail/MyPageDetail.queries.ts
var MyPageDetail_queries = __webpack_require__(2712);
;// CONCATENATED MODULE: ./src/components/common/logo/index.tsx




const LogoIcon = (styled_default()).span``;
const HomeLink = (styled_default()).a`
  display: block;
  width: 100%;
  height: 100%;
  font-size: 3rem;

  padding: 1em;
  letter-spacing: 5px;
  cursor: pointer;

  @media ${globalStyles/* breakPoints.mobile */.Eg.mobile} {
    font-size: 1.5rem;
  }
`;
const Logo = ()=>{
    const router = (0,router_.useRouter)();
    const onClickLogo = async ()=>{
        await router.push("/");
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx(LogoIcon, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(HomeLink, {
            style: {
                color: router.asPath === "/" ? "white" : "black"
            },
            onClick: onClickLogo,
            children: "BUSKER"
        })
    }));
};
/* harmony default export */ const logo = (Logo);

;// CONCATENATED MODULE: ./src/components/common/layout/header/index.tsx







const Header = ()=>{
    const router = (0,router_.useRouter)();
    const [isOpen, setIsOpen] = (0,external_recoil_.useRecoilState)(store/* sidebarState */.Bz);
    const onOpenMenu = ()=>{
        setIsOpen((prev)=>!prev
        );
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            router.asPath !== "/" && /*#__PURE__*/ jsx_runtime_.jsx(HeaderDiv, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Wrapper, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(HeaderBox, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(logo, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(Menu, {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MenuButton, {
                                onClick: onOpenMenu,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: `bar f ${isOpen ? "isClicked" : ""} ${router.asPath === "/" ? "isHome" : ""}`
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: `bar f ${isOpen ? "isClicked" : ""} ${router.asPath === "/" ? "isHome" : ""}`
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: `bar f ${isOpen ? "isClicked" : ""} ${router.asPath === "/" ? "isHome" : ""}`
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        ]
    }));
};
/* harmony default export */ const header = (Header);
const HeaderDiv = (styled_default()).div`
  width: 100%;
  height: 100px;
  @media ${globalStyles/* breakPoints.mobile */.Eg.mobile} {
    height: 50px;
  }
`;
const Wrapper = (styled_default()).div`
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 100;
  @media ${globalStyles/* breakPoints.mobile */.Eg.mobile} {
    height: 50px;
  }
  background-color: transparent;
`;
const HeaderBox = (styled_default()).div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Menu = (styled_default()).div`
  position: relative;
  top: 0;
  width: 80px;
  height: 100%;
  padding: 1em;
  padding-right: 50px;
  @media ${globalStyles/* breakPoints.mobile */.Eg.mobile} {
    padding-right: 0px;
    width: 70px;
  }
  z-index: 3;
`;
const MenuButton = (styled_default()).button`
  background-color: transparent;
  border: none;
  display: flex;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;

  .bar {
    position: relative;
    display: block;
    width: 30px;
    height: 5px;
    background: black;
    border-radius: 5px;
    transition: 0.3s;
  }

  .bar.isClicked {
    background: white;
  }

  .bar:nth-child(1).isClicked {
    transform: translateY(10px) rotate(45deg) scaleX(1.2);
  }

  .bar:nth-child(2).isClicked {
    transform: scale(0);
  }

  .bar:nth-child(3).isClicked {
    transform: translateY(-10px) rotate(-45deg) scaleX(1.2);
  }

  .bar.isHome {
    background-color: white;
  }
`;

;// CONCATENATED MODULE: ./src/components/common/layout/index.tsx











const LOGOUT = client_.gql`
  mutation {
    logout
  }
`;
const Layout = ({ children  })=>{
    const router = (0,router_.useRouter)();
    const { data  } = (0,client_.useQuery)(MyPageDetail_queries/* FETCH_USER */.AW);
    const [isOpen, setIsOpen] = (0,external_recoil_.useRecoilState)(store/* sidebarState */.Bz);
    const [logout] = (0,client_.useMutation)(LOGOUT);
    (0,external_react_.useEffect)(()=>{
        external_aos_default().init();
    }, []);
    const onClickMove = (path)=>async ()=>{
            await router.push(path);
            setIsOpen(false);
        }
    ;
    const onClickLogout = async ()=>{
        try {
            await logout({
                update (cache) {
                    cache.modify({
                        fields: ()=>{}
                    });
                }
            });
            alert("로그아웃 되었습니다.");
        } catch (error) {
            if (error instanceof Error) alert(error.message);
        }
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Sidebar, {
                className: isOpen ? "open" : "",
                children: [
                    data ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Greeting, {
                        children: [
                            data.fetchUser.nickname,
                            "님 어서오세요!"
                        ]
                    }) : null,
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MenuUl, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(MenuLi, {
                                onClick: onClickMove("/main/list"),
                                children: "List"
                            }),
                            data && /*#__PURE__*/ jsx_runtime_.jsx(MenuLi, {
                                onClick: onClickMove("/myPage"),
                                children: "MyPage"
                            }),
                            data && /*#__PURE__*/ jsx_runtime_.jsx(MenuLi, {
                                onClick: onClickLogout,
                                children: "Logout"
                            }),
                            data ? null : /*#__PURE__*/ jsx_runtime_.jsx(MenuLi, {
                                onClick: onClickMove("/login"),
                                children: "Login"
                            }),
                            data ? null : /*#__PURE__*/ jsx_runtime_.jsx(MenuLi, {
                                onClick: onClickMove("/signup"),
                                children: "SignUp"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(header, {}),
            router.asPath === "/" ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                style: {
                    width: "100%",
                    position: "relative"
                },
                children: children
            }) : /*#__PURE__*/ jsx_runtime_.jsx(HomeWrapper, {
                onClick: ()=>setIsOpen(false)
                ,
                children: children
            })
        ]
    }));
};
/* harmony default export */ const layout = (Layout);
const HomeWrapper = (styled_default()).div`
  @media ${globalStyles/* breakPoints.desktop */.Eg.desktop} {
    /* background-color: green; */
    max-width: 1440px;
  }
  @media ${globalStyles/* breakPoints.tablet */.Eg.tablet} {
    /* background-color: blue; */
    /* max-width: 991px; */
  }
  @media ${globalStyles/* breakPoints.mobile */.Eg.mobile} {
    /* background-color: red; */
    /* min-width: 250px; */
  }
  width: 100%;
  margin: 0 auto;
  position: relative;
`;
const Greeting = (styled_default()).div`
  width: 100%;

  padding-top: 80px;
  padding-left: 50px;
  font-size: 2rem;
  color: white;
  font-weight: bold;
`;
const Sidebar = (styled_default()).div`
  position: fixed;
  top: -1px;
  right: -360px;
  min-width: 250px;
  max-width: 350px;
  width: 100%;
  height: 100vh;
  background-color: ${globalStyles/* stylePrimaryColor */.EB};
  z-index: 98;
  transition: all 0.5s ease-in-out;
  @media ${globalStyles/* breakPoints.mobile */.Eg.mobile} {
    padding-top: 50px;
  }
  box-shadow: -1px 0px 10px 10px rgba(0, 0, 0, 0.4);

  &.open {
    right: 0;
  }

  @media ${globalStyles/* breakPoints.mobile */.Eg.mobile} {
    right: -300px;
    max-width: 280px;
  }
`;
const MenuUl = (styled_default()).ul`
  padding-top: 100px;
  list-style: none;
`;
const MenuLi = (styled_default()).li`
  padding: 1rem;
  color: white;
  border-bottom: 1px solid white;
  font-size: 2.5rem;
  margin-left: 10px;
  margin-bottom: 10px;
  text-indent: 3rem;
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: bold;
  :hover {
    font-size: 3rem;
    letter-spacing: 3px;
  }
`;


/***/ }),

/***/ 4722:
/***/ (() => {



/***/ }),

/***/ 9114:
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client");

/***/ }),

/***/ 4394:
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client/link/error");

/***/ }),

/***/ 2805:
/***/ ((module) => {

"use strict";
module.exports = require("@emotion/react");

/***/ }),

/***/ 5193:
/***/ ((module) => {

"use strict";
module.exports = require("@emotion/react/jsx-runtime");

/***/ }),

/***/ 1480:
/***/ ((module) => {

"use strict";
module.exports = require("@emotion/styled");

/***/ }),

/***/ 6517:
/***/ ((module) => {

"use strict";
module.exports = require("lodash");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 4780:
/***/ ((module) => {

"use strict";
module.exports = require("next/script");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 9755:
/***/ ((module) => {

"use strict";
module.exports = require("recoil");

/***/ }),

/***/ 3706:
/***/ ((module) => {

"use strict";
module.exports = import("apollo-upload-client");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [240,712], () => (__webpack_exec__(5656)));
module.exports = __webpack_exports__;

})();
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[263],{8988:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/main/list",function(){return c(7457)}])},7457:function(a,b,c){"use strict";c.r(b),c.d(b,{"default":function(){return _}});var d=c(5944),e=c(4051),f=c.n(e),g=c(4332),h=c(166),i=c(3926);function j(a,b){return b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}}))}function k(){var a=j(["\n  max-width: 1440px;\n  width: 100%;\n  margin: 0 auto;\n"]);return k=function(){return a},a}function l(){var a=j(["\n  width: 100%;\n  height: 100px;\n  background-color: ",";\n"]);return l=function(){return a},a}function m(){var a=j(["\n  width: 100%;\n  height: 100px;\n  background: rgb(113, 0, 189);\n  background: linear-gradient(\n    90deg,\n    rgba(113, 0, 189, 1) 0%,\n    rgba(153, 0, 255, 1) 50%,\n    rgba(113, 0, 189, 1) 100%\n  );\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 5%;\n\n  .ant-cascader {\n    width: 100%;\n  }\n\n  .ant-select {\n    outline: none !important;\n    min-width: 100px;\n  }\n\n  .ant-select-selector {\n    background-color: transparent !important;\n    border: none !important;\n    border-bottom: 1px solid white !important;\n\n    & span {\n      font-size: 1.3rem;\n      background-color: transparent;\n    }\n  }\n\n  .ant-select-selector input {\n    color: white;\n  }\n\n  .ant-select-arrow {\n    color: white;\n  }\n\n  .ant-select-clear {\n    background-color: #9900ff;\n    color: white;\n  }\n\n  .ant-select-selection-item {\n    color: white;\n    background-color: #9900ff;\n  }\n\n  .ant-select-selection-item-remove {\n    color: white;\n  }\n"]);return m=function(){return a},a}function n(){var a=j([""]);return n=function(){return a},a}function o(){var a=j([""]);return o=function(){return a},a}function p(){var a=j(["\n  height: 100%;\n  & > div {\n    display: grid;\n    grid-auto-flow: row dense;\n    grid-auto-rows: minmax(min-content, max-content);\n    gap: 3%;\n    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n    padding: 0 30px;\n    padding-top: 2rem;\n  }\n  list-style: none;\n"]);return p=function(){return a},a}var q=h.Z.div(k());h.Z.div(l(),i.EB);var r=h.Z.div(m()),s=h.Z.div(n()),t=h.Z.div(o()),u=h.Z.ul(p()),v=c(2485);function w(a,b){return b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}}))}function x(){var a=w(["\n  max-width: 355px;\n  width: 100%;\n  aspect-ratio: 1 / 1.2;\n  margin: 0 auto;\n"]);return x=function(){return a},a}function y(){var a=w(["\n  width: 100%;\n  aspect-ratio: 1 / 1;\n  background-color: #ddd;\n  border-radius: 15px;\n  overflow: hidden;\n"]);return y=function(){return a},a}function z(){var a=w(["\n  width: 100%;\n  height: 100%;\n"]);return z=function(){return a},a}function A(){var a=w(["\n  padding: 1rem 2rem;\n  padding-top: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n\n  & > span {\n    font-size: 1.5rem;\n  }\n"]);return A=function(){return a},a}var B=function(a){var b,c,e=a.board,f=a.onClickListItem;return(0,d.tZ)(v.E.div,{layout:!0,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},onClick:f(null!==(c=null==e?void 0:e.id)&& void 0!==c?c:""),style:{cursor:"pointer"},children:(0,d.BX)(C,{children:[(0,d.tZ)(D,{children:(0,d.tZ)(E,{src:"https://storage.googleapis.com/busker-storage/".concat(String(null===(b=null==e?void 0:e.boardImageURL[0])|| void 0===b?void 0:b.url))})}),(0,d.BX)(F,{children:[(0,d.tZ)("span",{style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:null==e?void 0:e.boardAddress.address}),(0,d.tZ)("span",{children:null==e?void 0:e.category.name})]})]})})},C=h.Z.div(x()),D=h.Z.div(y()),E=h.Z.img(z()),F=h.Z.div(A()),G=c(8431),H=c(4041),I=c(3035),J=c(246),K=c.n(J),L=function(a){var b;return(0,d.BX)(q,{children:[(0,d.BX)(r,{children:[(0,d.tZ)(s,{children:(0,d.tZ)(G.Z,{options:a.locationOptions,onChange:a.handleChangeLocation,placeholder:"지역 검색"})}),(0,d.tZ)(t,{children:(0,d.tZ)(H.Z,{mode:"multiple",allowClear:!0,placeholder:"장르 검색",onChange:a.handleChangeGenre,options:a.genreOptions})}),(0,d.tZ)(I.Z,{onClick:a.onClickMoveToArtRegister,children:"버스킹 등록하기"})]}),(0,d.tZ)(u,{children:(0,d.tZ)(g.M,{children:(0,d.tZ)(K(),{pageStart:0,loadMore:a.loadMore,hasMore:!0,children:null===(b=a.data)|| void 0===b?void 0:b.fetchBoardsBySearch.map(function(b){return(0,d.tZ)(B,{board:b,onClickListItem:a.onClickListItem},b.id)})})})}),(0,d.tZ)(I.Z,{style:{position:"fixed",bottom:"40px",left:"50%",transform:"translate(-50%,-50%)",zIndex:"2",backgroundColor:"".concat(i.EB),color:"white",boxShadow:"3px 5px 10px 3px rgba(0,0,0,0.5)"},onClick:a.onClickToMap,children:"주변 버스킹 확인하기"})]})},M=c(928),N=c(1163),O=c(7887),P=c(6217),Q=[{value:"경기",label:"경기",children:[{value:"광명시",label:"광명시"},{value:"구리시",label:"구리시"},{value:"군포시",label:"군포시"},{value:"부천시",label:"부천시"},{value:"안성시",label:"안성시"},{value:"여주시",label:"여주시"},{value:"오산시",label:"오산시"},{value:"연천군",label:"연천군"},{value:"성남시",label:"성남시"},{value:"포천시",label:"포천시"},{value:"화성시",label:"화성시"},{value:"용인시",label:"용인시"},{value:"의왕시",label:"의왕시"},{value:"여주군",label:"여주군"},{value:"광주시",label:"광주시"},{value:"김포시",label:"김포시"},{value:"가평군",label:"가평군"},{value:"의정부시",label:"의정부시"},{value:"시흥시",label:"시흥시"},{value:"수원시",label:"수원시"},{value:"남양주시",label:"남양주시"},{value:"하남시",label:"하남시"},{value:"양평군",label:"양평군"},{value:"동두천시",label:"동두천시"},{value:"고양시",label:"고양시"},{value:"안양시",label:"안양시"},{value:"과천시",label:"과천시"},{value:"안산시",label:"안산시"},{value:"평택시",label:"평택시"},{value:"파주시",label:"파주시"},{value:"양주시",label:"양주시"},{value:"이천시",label:"이천시"},]},{value:"대구",label:"대구",children:[{value:"달성군",label:"달성군"},{value:"동구",label:"동구"},{value:"남구",label:"남구"},{value:"북구",label:"북구"},{value:"서구",label:"서구"},{value:"중구",label:"중구"},{value:"달서구",label:"달서구"},{value:"수성구",label:"수성구"},]},{value:"대전",label:"대전",children:[{value:"유성구",label:"유성구"},{value:"중구",label:"중구"},{value:"대덕구",label:"대덕구"},{value:"동구",label:"동구"},{value:"서구",label:"서구"},]},{value:"부산",label:"부산",children:[{value:"서구",label:"서구"},{value:"사상구",label:"사상구"},{value:"금정구",label:"금정구"},{value:"수영구",label:"수영구"},{value:"동래구",label:"동래구"},{value:"연제구",label:"연제구"},{value:"해운대구",label:"해운대구"},{value:"기장군",label:"기장군"},{value:"남구",label:"남구"},{value:"동구",label:"동구"},{value:"강서구",label:"강서구"},{value:"북구",label:"북구"},{value:"사하구",label:"사하구"},{value:"중구",label:"중구"},{value:"영도구",label:"영도구"},{value:"부산진구",label:"부산진구"},]},{value:"서울",label:"서울",children:[{value:"강동구",label:"강동구"},{value:"광진구",label:"광진구"},{value:"영등포구",label:"영등포구"},{value:"강남구",label:"강남구"},{value:"성동구",label:"성동구"},{value:"노원구",label:"노원구"},{value:"동대문구",label:"동대문구"},{value:"강북구",label:"강북구"},{value:"도봉구",label:"도봉구"},{value:"중구",label:"중구"},{value:"종로구",label:"종로구"},{value:"마포구",label:"마포구"},{value:"서초구",label:"서초구"},{value:"동작구",label:"동작구"},{value:"강서구",label:"강서구"},{value:"성북구",label:"성북구"},{value:"송파구",label:"송파구"},{value:"금천구",label:"금천구"},{value:"양천구",label:"양천구"},{value:"서대문구",label:"서대문구"},{value:"관악구",label:"관악구"},{value:"중랑구",label:"중랑구"},{value:"구로구",label:"구로구"},{value:"은평구",label:"은평구"},{value:"용산구",label:"용산구"},]},{value:"울산",label:"울산",children:[{value:"남구",label:"남구"},{value:"동구",label:"동구"},{value:"중구",label:"중구"},{value:"울주군",label:"울주군"},{value:"북구",label:"북구"},]},{value:"인천",label:"인천",children:[{value:"미추홀구",label:"미추홀구"},{value:"강화군",label:"강화군"},{value:"옹진군",label:"옹진군"},{value:"남구",label:"남구"},{value:"부평구",label:"부평구"},{value:"서구",label:"서구"},{value:"동구",label:"동구"},{value:"연수구",label:"연수구"},{value:"중구",label:"중구"},{value:"계양구",label:"계양구"},{value:"남동구",label:"남동구"},]},],R=c(7294),S=c(7704),T=c(2712);function U(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=new Array(b);c<b;c++)d[c]=a[c];return d}function V(a,b,c,d,e,f,g){try{var h=a[f](g),i=h.value}catch(j){c(j);return}h.done?b(i):Promise.resolve(i).then(d,e)}function W(a){return function(){var b=this,c=arguments;return new Promise(function(d,e){var f=a.apply(b,c);function g(a){V(f,d,e,g,h,"next",a)}function h(a){V(f,d,e,g,h,"throw",a)}g(void 0)})}}function X(a,b){return null!=b&&"undefined"!=typeof Symbol&&b[Symbol.hasInstance]?b[Symbol.hasInstance](a):a instanceof b}function Y(a){return(function(a){if(Array.isArray(a))return U(a)})(a)||(function(a){if("undefined"!=typeof Symbol&&null!=a[Symbol.iterator]||null!=a["@@iterator"])return Array.from(a)})(a)||Z(a)||(function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")})()}function Z(a,b){if(a){if("string"==typeof a)return U(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);if("Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c)return Array.from(c);if("Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return U(a,b)}}var $=function(){var a,b,c,e,g,h=(0,N.useRouter)(),i=Y(Q),j=(0,O.a)(P.GS),k=j.data,l=j.refetch,m=j.fetchMore,n=(0,O.a)(S.WN).data,o=(0,O.a)(T.AW).data,p=(0,R.useState)(null),q=p[0],r=p[1],s=(0,R.useState)(null),t=s[0],u=s[1],v=(a=W(f().mark(function a(b){return f().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(r(b),!b.length){a.next=6;break}return a.next=4,l({searchBoardInput:{category:b,district:t}});case 4:a.next=9;break;case 6:return a.next=8,l({searchBoardInput:{page:1,district:t}});case 8:r(null);case 9:case"end":return a.stop()}},a)})),function(b){return a.apply(this,arguments)}),w=(b=W(f().mark(function a(b){var c;return f().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(u(c="".concat(null==b?void 0:b[0]," ").concat(null==b?void 0:b[1])),"undefined undefined"!==c){a.next=8;break}return a.next=5,l({searchBoardInput:{page:1,category:q}});case 5:u(null),a.next=10;break;case 8:return a.next=10,l({searchBoardInput:{district:c,category:q}});case 10:case"end":return a.stop()}},a)})),function(a){return b.apply(this,arguments)}),x=(c=W(f().mark(function a(){return f().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,h.push("/map");case 2:case"end":return a.stop()}},a)})),function(){return c.apply(this,arguments)}),y=(e=W(f().mark(function a(){return f().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!n){a.next=5;break}return a.next=3,h.push("/artregister");case 3:a.next=12;break;case 5:if(!o){a.next=9;break}M.Z.confirm({content:(0,d.BX)("div",{style:{width:"100%",textAlign:"center"},children:[(0,d.tZ)("span",{style:{textAlign:"center"},children:"버스커로 등록 후 이용 가능합니다."}),(0,d.tZ)("br",{}),(0,d.tZ)("span",{style:{textAlign:"center"},children:"버스커로 등록하시겠습니까?"})]}),onOk:function(){h.push("/artistsignup")}}),a.next=12;break;case 9:return M.Z.warning({bodyStyle:{fontSize:"1.5rem"},content:"로그인 후에 이용하실 수 있습니다."}),a.next=12,h.push("/login");case 12:case"end":return a.stop()}},a)})),function(){return e.apply(this,arguments)}),z=(g=W(f().mark(function a(){return f().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(void 0!==k){a.next=2;break}return a.abrupt("return");case 2:return a.prev=2,a.next=5,m({variables:{searchBoardInput:{page:Math.ceil(k.fetchBoardsBySearch.length/12)+1,district:t,category:q}},updateQuery:function(a,b){return(console.log(a,b),void 0===b.fetchMoreResult.fetchBoardsBySearch)?{fetchBoardsBySearch:Y(a.fetchBoardsBySearch)}:{fetchBoardsBySearch:Y(a.fetchBoardsBySearch).concat(Y(b.fetchMoreResult.fetchBoardsBySearch))}}});case 5:a.next=10;break;case 7:a.prev=7,a.t0=a.catch(2),X(a.t0,Error)&&console.log(a.t0);case 10:case"end":return a.stop()}},a,null,[[2,7]])})),function(){return g.apply(this,arguments)});return(0,d.tZ)(L,{onClickToMap:x,onClickListItem:function(a){return W(f().mark(function b(){return f().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,h.push("/main/list/".concat(a));case 2:case"end":return b.stop()}},b)}))},handleChangeGenre:v,handleChangeLocation:w,locationOptions:i,genreOptions:[{value:"c1aaac2c-cff4-4615-b0f0-e193ab5b23bc",label:"노래"},{value:"a27e5a6b-592f-4975-809c-7067abd17573",label:"랩"},{value:"d89e1e22-32f7-4c4b-9ed0-c0d85f9396cc",label:"마술"},{value:"6131d818-3140-4d4b-98ca-a84bd3e8398c",label:"악기 연주"},{value:"6c63004f-144a-4f51-9f64-c0e91ef878fd",label:"춤"},],data:k,onClickMoveToArtRegister:y,loadMore:z})},_=function(){return(0,d.tZ)($,{})}},3035:function(a,b,c){"use strict";var d=c(5944),e=c(166),f=c(3926);function g(){var a,b,c=(a=["\n  border: 1px solid ",";\n  background-color: white;\n  padding: 0.5rem 1.5rem;\n  font-size: 1.4rem;\n  border-radius: 5px;\n  color: ",";\n  cursor: pointer;\n"],b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}})));return g=function(){return c},c}b.Z=function(a){return(0,d.tZ)(h,{id:a.id,style:a.style,onClick:a.onClick,children:(0,d.tZ)(d.HY,{children:a.children})})};var h=e.Z.button(g(),f.EB,f.EB)},7704:function(a,b,c){"use strict";c.d(b,{uw:function(){return i},TU:function(){return j},WN:function(){return k}});var d=c(1230);function e(a,b){return b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}}))}function f(){var a=e(["\n  query fetchBoard($boardId: String!) {\n    fetchBoard(boardId: $boardId) {\n      id\n      title\n      contents\n      start_time\n      end_time\n      isShowTime\n      createAt\n      category {\n        id\n        name\n      }\n      artist {\n        id\n        active_name\n        artistImageURL\n      }\n      boardAddress {\n        id\n        address\n        address_city\n        address_district\n        lat\n        lng\n      }\n      boardImageURL {\n        id\n        url\n      }\n    }\n  }\n"]);return f=function(){return a},a}function g(){var a=e(["\n  mutation deleteBoard($boardId: String!) {\n    deleteBoard(boardId: $boardId)\n  }\n"]);return g=function(){return a},a}function h(){var a=e(["\n  query {\n    fetchArtist {\n      id\n    }\n  }\n"]);return h=function(){return a},a}var i=(0,d.Ps)(f()),j=(0,d.Ps)(g()),k=(0,d.Ps)(h())},6217:function(a,b,c){"use strict";c.d(b,{GS:function(){return j},Hw:function(){return k}});var d=c(1230);function e(a,b){return b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}}))}function f(){var a=e(["\n  query fetchBoardsBySearch($searchBoardInput: SearchBoardInput) {\n    fetchBoardsBySearch(searchBoardInput: $searchBoardInput) {\n      id\n      artist {\n        id\n        active_name\n      }\n      title\n      contents\n      start_time\n      end_time\n      isShowTime\n      boardAddress {\n        id\n        address\n        lat\n        lng\n      }\n      boardImageURL {\n        id\n        url\n      }\n      category {\n        id\n        name\n      }\n    }\n  }\n"]);return f=function(){return a},a}function g(){var a=e(["\n  query fetchCity($name: String!) {\n    fetchCity(name: $name) {\n      name\n      district\n    }\n  }\n"]);return g=function(){return a},a}function h(){var a=e(["\n  query {\n    fetchCitys {\n      id\n      name\n    }\n  }\n"]);return h=function(){return a},a}function i(){var a=e(["\n  query {\n    fetchCategories {\n      id\n      name\n    }\n  }\n"]);return i=function(){return a},a}var j=(0,d.Ps)(f());(0,d.Ps)(g()),(0,d.Ps)(h());var k=(0,d.Ps)(i())}},function(a){a.O(0,[939,937,928,33,41,346,774,888,179],function(){return a(a.s=8988)}),_N_E=a.O()}])
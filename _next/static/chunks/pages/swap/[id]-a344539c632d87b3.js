(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[319],{99644:function(e,n,r){"use strict";r.d(n,{u:function(){return C}});var o=r(14956),t=r(89822),i=r(13631),a=r(23263),s=r(34085),l=r(24375),c=r(48755),u=r(2784),d=r(34756),p=r(18549),g=r(72034);function f(){return f=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},f.apply(this,arguments)}function m(e,n){if(null==e)return{};var r,o,t={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],n.indexOf(r)>=0||(t[r]=e[r]);return t}var v={exit:{scale:.85,opacity:0,transition:{opacity:{duration:.15,easings:"easeInOut"},scale:{duration:.2,easings:"easeInOut"}}},enter:{scale:1,opacity:1,transition:{opacity:{easings:"easeOut",duration:.2},scale:{duration:.2,ease:[.175,.885,.4,1.1]}}}},w=["openDelay","closeDelay","closeOnClick","closeOnMouseDown","closeOnEsc","onOpen","onClose","placement","id","isOpen","defaultIsOpen","arrowSize","arrowShadowColor","arrowPadding","modifiers","isDisabled","gutter","offset","direction"];var b=["children","label","shouldWrapChildren","aria-label","hasArrow","bg","portalProps","background","backgroundColor","bgColor"],h=(0,i.m$)(l.E.div),C=(0,i.Gp)((function(e,n){var r,l,C=(0,i.mq)("Tooltip",e),x=(0,i.Lr)(e),O=(0,i.Fg)(),k=x.children,E=x.label,y=x.shouldWrapChildren,P=x["aria-label"],_=x.hasArrow,S=x.bg,T=x.portalProps,M=x.background,j=x.backgroundColor,D=x.bgColor,I=m(x,b),N=null!=(r=null!=(l=null!=M?M:j)?l:S)?r:D;N&&(C.bg=N,C[o.j.arrowBg.var]=(0,a.K1)(O,"colors",N));var z,A=function(e){void 0===e&&(e={});var n=e,r=n.openDelay,t=void 0===r?0:r,i=n.closeDelay,s=void 0===i?0:i,l=n.closeOnClick,c=void 0===l||l,v=n.closeOnMouseDown,b=n.closeOnEsc,h=void 0===b||b,C=n.onOpen,x=n.onClose,O=n.placement,k=n.id,E=n.isOpen,y=n.defaultIsOpen,P=n.arrowSize,_=void 0===P?10:P,S=n.arrowShadowColor,T=n.arrowPadding,M=n.modifiers,j=n.isDisabled,D=n.gutter,I=n.offset,N=n.direction,z=m(n,w),A=(0,d.qY)({isOpen:E,defaultIsOpen:y,onOpen:C,onClose:x}),B=A.isOpen,R=A.onOpen,W=A.onClose,$=(0,o.D)({enabled:B,placement:O,arrowPadding:T,modifiers:M,gutter:D,offset:I,direction:N}),F=$.referenceRef,X=$.getPopperProps,q=$.getArrowInnerProps,H=$.getArrowProps,Z=(0,d.Me)(k,"tooltip"),K=u.useRef(null),L=u.useRef(),U=u.useRef(),G=u.useCallback((function(){j||(L.current=window.setTimeout(R,t))}),[j,R,t]),Y=u.useCallback((function(){L.current&&clearTimeout(L.current),U.current=window.setTimeout(W,s)}),[s,W]),J=u.useCallback((function(){c&&Y()}),[c,Y]),Q=u.useCallback((function(){v&&Y()}),[v,Y]),V=u.useCallback((function(e){B&&"Escape"===e.key&&Y()}),[B,Y]);(0,p.b)("keydown",h?V:void 0),u.useEffect((function(){return function(){clearTimeout(L.current),clearTimeout(U.current)}}),[]),(0,p.b)("mouseleave",Y,(function(){return K.current}));var ee=u.useCallback((function(e,n){return void 0===e&&(e={}),void 0===n&&(n=null),f({},e,{ref:(0,g.lq)(K,n,F),onMouseEnter:(0,a.v0)(e.onMouseEnter,G),onClick:(0,a.v0)(e.onClick,J),onMouseDown:(0,a.v0)(e.onMouseDown,Q),onFocus:(0,a.v0)(e.onFocus,G),onBlur:(0,a.v0)(e.onBlur,Y),"aria-describedby":B?Z:void 0})}),[G,Y,Q,B,Z,J,F]),ne=u.useCallback((function(e,n){var r;return void 0===e&&(e={}),void 0===n&&(n=null),X(f({},e,{style:f({},e.style,(r={},r[o.j.arrowSize.var]=_?(0,a.px)(_):void 0,r[o.j.arrowShadowColor.var]=S,r))}),n)}),[X,_,S]),re=u.useCallback((function(e,n){return void 0===e&&(e={}),void 0===n&&(n=null),f({ref:n},z,e,{id:Z,role:"tooltip",style:f({},e.style,{position:"relative",transformOrigin:o.j.transformOrigin.varRef})})}),[z,Z]);return{isOpen:B,show:G,hide:Y,getTriggerProps:ee,getTooltipProps:re,getTooltipPositionerProps:ne,getArrowProps:H,getArrowInnerProps:q}}(f({},I,{direction:O.direction}));if((0,a.HD)(k)||y)z=u.createElement(i.m$.span,f({tabIndex:0},A.getTriggerProps()),k);else{var B=u.Children.only(k);z=u.cloneElement(B,A.getTriggerProps(B.props,B.ref))}var R=!!P,W=A.getTooltipProps({},n),$=R?(0,a.CE)(W,["role","id"]):W,F=(0,a.ei)(W,["role","id"]);return E?u.createElement(u.Fragment,null,z,u.createElement(c.M,null,A.isOpen&&u.createElement(t.h_,T,u.createElement(i.m$.div,f({},A.getTooltipPositionerProps(),{__css:{zIndex:C.zIndex,pointerEvents:"none"}}),u.createElement(h,f({variants:v},$,{initial:"exit",animate:"enter",exit:"exit",__css:C}),E,R&&u.createElement(s.TX,F,P),_&&u.createElement(i.m$.div,{"data-popper-arrow":!0,className:"chakra-tooltip__arrow-wrapper"},u.createElement(i.m$.div,{"data-popper-arrow-inner":!0,className:"chakra-tooltip__arrow",__css:{bg:C.bg}}))))))):u.createElement(u.Fragment,null,k)}));a.Ts&&(C.displayName="Tooltip")},67805:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/swap/[id]",function(){return r(55655)}])},55655:function(e,n,r){"use strict";r.r(n),r.d(n,{SwapDisplay:function(){return g},__N_SSP:function(){return p}});var o=r(52322),t=r(86334),i=r(64033),a=r(69204),s=r(77973),l=r(54281),c=r(62661),u=r(5632),d=(r(2784),r(60163)),p=!0,g=function(e){var n=e.name,r=e.image,p=e.description,g=(0,u.useRouter)().query.id,f=(0,s.X)(g),m=(0,l.Z)(f),v=m.tokenBonding,w=m.loading;return(0,o.jsxs)(i.xu,{w:"full",backgroundColor:"#f9f9f9",height:"100vh",overflow:"auto",paddingBottom:"200px",children:[(0,o.jsx)(t.y,{title:"Strata Swap | ".concat(n),description:p,image:r,url:"".concat(d._O,"/swap/").concat(null===f||void 0===f?void 0:f.toString(),"/")}),(0,o.jsx)(i.xu,{padding:"54px",backgroundColor:"black.500"}),(0,o.jsxs)(i.W2,{mt:"-72px",justifyContent:"stretch",maxW:"460px",children:[(0,o.jsx)(i.X6,{mb:2,color:"white",fontSize:"24px",fontWeight:600,children:"Swap"}),(0,o.jsxs)(i.xu,{padding:4,zIndex:1,bg:"white",shadow:"xl",rounded:"lg",minH:"400px",children:[w&&(0,o.jsx)(i.M5,{children:(0,o.jsx)(a.$,{})}),!w&&v&&(0,o.jsx)(c.H,{id:f})]})]})]})};n.default=g},62661:function(e,n,r){"use strict";r.d(n,{t:function(){return v},H:function(){return m}});var o=r(39696),t=r(11929),i=r(50099),a=r(44720),s=r(69900);var l=r(54281),c=r(2784),u=r(62202),d=r(78728),p=r(21438),g=r(10622);const f=()=>{},m=({id:e,onConnectWallet:n,onSuccess:r=(e=>{u.ZP.custom((n=>c.createElement(p.P,{show:n.visible,type:"success",heading:"Transaction Successful",message:`Succesfully purchased ${Number(e.targetAmount).toFixed(9)}!`,onDismiss:()=>u.ZP.dismiss(n.id)})))})})=>{const{loading:m,error:v,execute:w}=((e={})=>{const{connected:n,publicKey:r}=(0,a.O)(),{tokenBondingSdk:o,loading:l}=(0,s.D)(),{result:c,execute:u,error:d,loading:p}=(0,t.UK)((async t=>{if(!n||!r||!o)throw new i.oS;return await o.swap({...t,...e})}));return{execute:u,data:c,loading:p,error:d}})(),{handleErrors:b}=(0,o.U)();b(v);const{tokenBonding:h,numRemaining:C,childEntangler:x,parentEntangler:O}=(0,l.Z)(e),[k,E]=(0,c.useState)({base:h?.baseMint,target:O&&x?O.parentMint:h?.targetMint});c.useEffect((()=>{if((!k.base||!k.target)&&h){if(x&&O)return void E({base:h.baseMint,target:O.parentMint});E({base:h.baseMint,target:h.targetMint})}}),[h,k]);const{loading:y,...P}=(0,d.d)({tradingMints:k,onConnectWallet:n||f,onTradingMintsChange:E,swap:e=>w({entangled:O?.parentMint,...e}).then((n=>{r({...e,...n})})).catch(console.error),id:e});return c.createElement(g.i,{isLoading:y,isSubmitting:m,...P})},v=c.memo(m)}},function(e){e.O(0,[38,1,476,538,574,774,888,179],(function(){return n=67805,e(e.s=n);var n}));var n=e.O();_N_E=n}]);
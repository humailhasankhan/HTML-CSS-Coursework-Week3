(window.webpackJsonp=window.webpackJsonp||[]).push([["collection-route~collections-feed-route~photos-route~search-collections-route~user-feed-sub-route"],{"Bcq+":function(e,a,t){"use strict";var c=t("GBJA");a.a=Object(c.a)("M25.3 13.3h-2V10c0-4-3.3-7.3-7.3-7.3S8.7 6 8.7 10v3.3h-2c-.8 0-1.3.5-1.3 1.3V28c0 .8.5 1.3 1.3 1.3h18.7c.8 0 1.3-.5 1.3-1.3V14.7c0-.8-.6-1.4-1.4-1.4zm-4.6 0h-9.3V10c0-2.5 2.1-4.7 4.7-4.7s4.7 2.1 4.7 4.7v3.3z")},Me4T:function(e,a,t){e.exports={colorWhite:"#fff",colorGrey400:"#d1d1d1",placeholderBackground:"_2VWD4",horizontalGutter:"24px",verticalGutter:"48px",container:"_3iCs8",placeholderAspectRatioWrapper:"_3VwIT",placeholderContainer:"_2V1b2",placeholder:"ZWvqJ _2VWD4",placeholderTextBox:"_3C33c _2VWD4",placeholderTextBox2:"_1Nf5O _2VWD4",placeholderTextBox3:"_1NKp1 _2VWD4",placeholderTextBox1:"_29VYt _2VWD4"}},ZGnK:function(e,a,t){"use strict";t.d(a,"a",(function(){return K}));var c=t("mrSG"),l=t("SDew"),r=t("q1tI"),n=t.n(r),o=t("QH2T"),s=t("jRy8"),i=t("mjVK"),m=t("/MKj"),p=t("55Ip"),d=t("aOk/"),u=t("x4cj"),b=t("pq3u"),h=t("aMqU"),g=t("2Fwo"),O=t("C8EU"),j=t("Bcq+"),E=t("OM6L"),_=t("IVTL"),I=t("wmOD"),v=t("Jekn"),N=t("Ja2L"),f=t("JOe8"),k=t("Wdkd"),x=t("XoIJ"),B=t("NldO"),W=t("eSEV"),C=t("eodw"),w=t("NbrK"),y=t("PCiO"),V=t("gDEP"),T=t("uYHa"),z=t("d/M0"),M=t.n(z);const S=w.h({styles:M.a,key:"maxWidth"});var D;!function(e){e.Full="full",e.Half="half"}(D||(D={}));const G=e=>{switch(e){case D.Full:return Object(T.g)(w.h({styles:M.a,key:"bigImagePercentage"}));case D.Half:return Object(T.g)(w.h({styles:M.a,key:"smallImagePercentage"}))}},q=Object(_.b)()({showUserInfo:!0}),L=({photoId:e,size:a,className:t,placement:c})=>{const r=Object(O.a)(a=>Object(v.f)(a,e)),{src:o,srcSet:s}=n.a.useMemo(()=>Object(l.k)(f.c(c),f.b(r),e=>((e,a)=>({src:Object(V.b)(a)({w:S}),srcSet:Object(y.b)({baseUrl:a,width:S*G(e)})}))(a,e.urls.raw)),[c,r,a]);return n.a.createElement(B.a,{role:"presentation",containerClassName:t,className:M.a.image,src:o,srcSet:s})},P=Object(b.d)()(()=>{const e=Object(u.h)(({state:e,showUserInfo:a,collection:t})=>a?s.I(Object(N.a)(e,t.userId)):s.E);return(a,{showUserInfo:t,collection:c})=>({isLoggedIn:Object(I.j)(a),userOption:e({showUserInfo:t,state:a,collection:c})})});var F=Object(l.k)(({collection:e,isLoggedIn:a,userOption:t})=>{const{total_photos:c,previewPhotoIds:o,private:i,tags:m}=e,u=Object(r.useMemo)(()=>k.b.collectionFromEntity(e),[e]),b=Object(r.useMemo)(()=>f.a.Union.CollectionThumbnail({id:e.id}),[e.id]),g=n.a.useMemo(()=>s.q(o),[o]),O=Object(l.k)(g,s.e(E.x(0))),_=Object(l.k)(g,s.e(E.x(1))),I=Object(l.k)(g,s.e(E.x(2))),v=Object(l.k)(t,s.B(e=>n.a.createElement("span",null," ","· Curated by"," ",a?n.a.createElement(x.a,{userId:e.id},a=>n.a.createElement(p.a,{to:a,className:M.a.userLink},e.name)):e.name)),s.K);return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:M.a.collectionContainer},n.a.createElement(p.a,{to:{pathname:u},className:M.a.linkWrapper},n.a.createElement("div",{className:M.a.imagesContainerOuter},n.a.createElement("div",{className:M.a.imagesContainer},Object(l.k)(O,s.B(e=>n.a.createElement(L,{placement:b,photoId:e,size:D.Full,className:M.a.bigImageWrapper})),s.u(n.a.createElement("div",{className:M.a.bigImageWrapper}))),n.a.createElement("div",{className:M.a.smallImagesContainer},Object(l.k)(_,s.B(e=>n.a.createElement(L,{placement:b,photoId:e,size:D.Half,className:M.a.smallImageWrapper})),s.u(n.a.createElement("div",{className:M.a.smallImageWrapper}))),Object(l.k)(I,s.B(e=>n.a.createElement(L,{placement:b,photoId:e,size:D.Half,className:M.a.smallImageWrapper})),s.u(n.a.createElement("div",{className:M.a.smallImageWrapper})))))),n.a.createElement("div",{className:M.a.titleContainer},i&&n.a.createElement("span",null,n.a.createElement(C.a,{label:"This collection is private. To share, copy the URL or make the collection public.",width:200},n.a.createElement(j.a,{className:M.a.iconPrivate}))),n.a.createElement("div",{className:M.a.title},e.title))),n.a.createElement("div",{className:M.a.description},Object(h.f)(c),v)),n.a.createElement(W.a,{tags:Object(l.k)(m,E.L(3)),emplacement:d.a.CollectionCard}))},Object(m.c)(P),e=>Object(g.a)(e,q)),U=t("Me4T"),H=t.n(U);const J=e=>{var{collection:a}=e,t=Object(c.d)(e,["collection"]);return n.a.createElement("div",Object.assign({},Object(i.a)(o.d)),Object(l.k)(s.q(a),s.B(e=>n.a.createElement(F,Object.assign({collection:e},t))),s.t(()=>n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:H.a.placeholderAspectRatioWrapper},n.a.createElement("div",{className:H.a.placeholderContainer},n.a.createElement("div",{className:H.a.placeholder}),n.a.createElement("div",{className:H.a.placeholderTextBox}),n.a.createElement("div",{className:H.a.placeholderTextBox2}))),n.a.createElement("div",{className:H.a.placeholderTextBox3})))))};var K=({collections:e,cardProps:a})=>n.a.createElement("div",{className:H.a.container},e.map((e,t)=>n.a.createElement(J,Object.assign({key:t,collection:e},a))))},"d/M0":function(e,a,t){e.exports={colorGrey100:"#f5f5f5",colorGrey700:"#767676",colorBlack:"#111",headingXs:"_2uOAz _2956j _2jIq8 _1eXFm",fontWeightSemibold:"_13Ib2",truncate:"_1ByhS",textDecorationNone:"_1CBrG",transitionSpeedBase:"0.1s",maxWidth:"416px",smallImagePercentage:"30%",bigImagePercentage:"70%",collectionContainer:"_28_Yu",linkWrapper:"fM0CB _1CBrG",imagesContainer:"_2zwgf",imagesContainerOuter:"hNzsd",image:"Kh8bw",bigImageWrapper:"_2vGrb",smallImagesContainer:"_2gO6E",smallImageWrapper:"mTW0H",titleContainer:"_3zVYZ _1ByhS",iconPrivate:"_39uDR",title:"_2LKkn _2uOAz _2956j _2jIq8 _1eXFm _13Ib2 _1ByhS",description:"_3-HBj _1ByhS",userLink:"_37zDu"}}}]);
//# sourceMappingURL=collection-route~collections-feed-route~photos-route~search-collections-route~user-feed-sub-route.35c1e.js.map
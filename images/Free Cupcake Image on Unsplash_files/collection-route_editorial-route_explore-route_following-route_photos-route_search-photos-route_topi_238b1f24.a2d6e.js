(window.webpackJsonp=window.webpackJsonp||[]).push([["collection-route~editorial-route~explore-route~following-route~photos-route~search-photos-route~topi~238b1f24"],{JQ16:function(e,t,o){e.exports={clearfix:"_2KLco",container:"_2sCnE PrOBO _1CR66","col-12":"wRfkF","sm-col-6":"_2cVF0","md-col-4":"_1hITE",placeholderBackground:"_2VWD4",placeholderGutter:"24px",buttonFooterContainer:"_3sS4m",placeholdersContainer:"ILvgD",placeholderItemsContainer:"vbiZb",placeholderItemContainer:"_1fA3Q wRfkF _2cVF0 _1hITE",placeholderItem:"IjvFe _2VWD4",scrollFooterElContainer:"_3zg_a"}},Nb12:function(e,t,o){"use strict";o.d(t,"b",(function(){return x})),o.d(t,"a",(function(){return P}));var n=o("SDew"),i=o("6l12"),l=o("q1tI"),r=o.n(l),a=o("/MKj"),c=o("QFtp"),s=o("b2r9"),d=o("OcE/"),p=o("pq3u"),h=o("2Fwo"),u=o("LAdA"),I=o("OM6L"),O=o("JzW6"),f=o("jRy8"),b=o("0eW+"),m=o("QZHf"),g=o("IVTL"),E=o("x5qg"),S=o("zPuE"),j=o("FXv3"),v=o("Z14c"),C=o("ALSr"),F=o("6SPB"),R=o("GavU"),_=o("JQ16"),q=o.n(_);const P=()=>r.a.createElement("div",{className:q.a.placeholdersContainer},r.a.createElement("div",{className:q.a.placeholderItemsContainer},I.F(0,17).map(e=>r.a.createElement("div",{key:e,className:q.a.placeholderItemContainer},r.a.createElement("div",{className:q.a.placeholderItem}))))),N=Object(g.b)()({shouldRequireInfiniteScrollOptIn:!1,getNoContentEl:Object(i.a)(()=>r.a.createElement(v.a,{type:"photos"})),getPlaceholderEl:Object(i.a)(()=>r.a.createElement(P,null))}),w=Object(c.unionize)({OptInRequired:Object(c.ofType)(),Enabled:{}});class A extends l.Component{constructor(){super(...arguments),this.getInfiniteScrollSetting=({shouldRequireInfiniteScrollOptIn:e})=>e?w.OptInRequired({optedIn:!1}):w.Enabled(),this.state={infiniteScrollSetting:this.getInfiniteScrollSetting(this.props)},this.toggleInfiniteScrollOptIn=()=>{const{infiniteScrollSetting:e}=this.state;w.match({OptInRequired:({optedIn:e})=>{const t=w.OptInRequired({optedIn:Object(b.b)(e)});this.setState({infiniteScrollSetting:t})},default:m.a})(e)},this.fetchDataAndBuildActions=Object(i.a)(e=>Object(n.e)(e,O.j(Object(n.e)(u.k,d.g,({entities:e,result:t})=>[Object(s.C)(e),s.a.HandleNextPhotoFeedPageResponse({feedId:this.props.feedId,photoIds:t})])))),this.createPhotoFeedIdContextValue=Object(i.a)(e=>f.I(e))}UNSAFE_componentWillReceiveProps(e){if(e.shouldRequireInfiniteScrollOptIn!==this.props.shouldRequireInfiniteScrollOptIn){const t=this.getInfiniteScrollSetting(e);this.setState({infiniteScrollSetting:t})}}render(){const{photoFeedOption:e,photosOption:t,children:o,getNoContentEl:n,getPlaceholderEl:i,feedId:l,fetchPhotos:a,notifier$:c,intersectionObserverRoot:s,intersectionObserverRootMarginBottom:d}=this.props,{infiniteScrollSetting:p}=this.state,h=!1===w.match({OptInRequired:({optedIn:e})=>e,Enabled:()=>!0})(p);return r.a.createElement(R.a.Provider,{value:this.createPhotoFeedIdContextValue(l)},r.a.createElement(C.a,{key:l,renderItems:o,feedItemsOption:t,feedStateOption:e,getScrollFooterEl:()=>r.a.createElement("div",{className:q.a.scrollFooterElContainer},w.match({OptInRequired:({optedIn:e})=>e?r.a.createElement(F.a,null):r.a.createElement("div",{className:q.a.buttonFooterContainer},r.a.createElement(j.a,{tag:"button",buttonType:S.a.Outline,onClick:this.toggleInfiniteScrollOptIn,type:"button"},"Load more photos")),Enabled:()=>r.a.createElement(F.a,null)})(p)),getNoContentEl:n,getPlaceholderEl:i,shouldDisableInfiniteScroll:h,fetchDataAndBuildActions:this.fetchDataAndBuildActions(a),notifier$:c,intersectionObserverRoot:s,intersectionObserverRootMarginBottom:d}))}}const k=Object(p.d)()(()=>{const e=Object(E.d)(),t=Object(E.e)();return(o,n)=>({photoFeedOption:e(o,n.feedId),photosOption:t(o,n.feedId)})});var x=Object(n.k)(A,Object(a.c)(k),e=>Object(h.a)(e,N))}}]);
//# sourceMappingURL=collection-route~editorial-route~explore-route~following-route~photos-route~search-photos-route~topi~238b1f24.a2d6e.js.map
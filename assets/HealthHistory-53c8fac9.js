import{_ as R,u as T,h as P,i as z,j as A,k as x,c as y,a as o,b as t,w as l,n as v,F as w,r as u,o as $,t as h,d as E,l as J,e as k,v as H}from"./index-394e1ad9.js";const O={name:"HealthHistory",displayName:"HealthHistory",methods:{getFormattedDate(e){if(!e)return"";var a="";e=e.replace(/\s/gi,"");try{e.length==8&&(a=e.replace(/(\d{4})(\d{2})(\d{2})/,"$1-$2-$3"))}catch(n){a=e,console.log(n)}return a},goto(e,a){this.$router.push({path:e,hash:a})},clickResult(e,a){let n="/home/pageoneresult";this.$router.push({path:n})},clickDetailed(e){let a="/home/pageoneresultdetail",n="#result_detail_detailed";this.$router.push({path:a,hash:n})},clickBloodVessel(e){let a="/home/pageoneresultdetail",n="#result_detail_bloodvessel";this.$router.push({path:a,hash:n})},clickBrainDock(e){let a="/home/pageoneresultdetail",n="#result_detail_braindock";this.$router.push({path:a,hash:n})},clickEtc(e){let a="/home/pageoneresultdetail",n="#result_detail_etc";this.$router.push({path:a,hash:n})}},setup(){const e=T(),{t:a}=P({useScope:"global"});let n=z(!0),_=e.state.userId,D=e.state.patientNum;const m=A(()=>a("common.age"));let c=e.state.patientName+"  "+e.state.patientAge+m.value+" "+e.state.patientGender,p="male";return e.state.selected_result_id=-1,x(()=>{e.state.examinationSummaryResult=[],e.dispatch("getExaminationResult",e.state.patientNum).then(b=>{for(let i=0;i<e.state.examinationResult.data.length;i++){let f=e.state.examinationResult.data[i];if(f.HSB1020!=null){const C=f.HSB1020;let S=C.length||0;console.log("index = ",i);let g=-1;for(let r=0;r<S;r++)if(C[r].EXTYPE==="%"){e.state.examinationResult.data[i].PJCODE=f.PJCODE=C[r].PJCODE,console.log("Date=%s, PJCODE =%s ",e.state.examinationResult.data[i].HSSDAT,e.state.examinationResult.data[i].PJCODE),g=r;break}g>-1&&(e.state.examinationResult.data[i].HSB1020=e.state.examinationResult.data[i].HSB1020.slice(g+1,S-1))}}e.commit("setExaminationResult",e.state.examinationResult.data),n.value=!1})}),{isLoading:n,userId:_,patientNum:D,patientNameAndAge:c,userGender:p,columns:[{label:a("health.date"),key:"HSSDAT",_style:{minWidth:"100px",width:"20%"},_props:{color:"primary",class:"fw-semibold",align:"middle"}},{label:a("health.course"),key:"COSNME",_style:{minWidth:"100px"},sorter:!1},{label:a("health.judgment"),key:"PJCODE",sorter:!1},{label:a("health.result"),key:"HSB1020",sorter:!1},{label:a("health.detailed"),key:"HSB1023",sorter:!1},{label:a("health.bloodvessel"),key:"HSB1029",sorter:!1},{label:a("health.braindock"),key:"HSB4010",sorter:!1},{label:a("health.etc"),key:"HSB1025",sorter:!1}]}}},V={id:"history_1"},j={class:"p-2"},F={id:"history_2"},I={class:"px-2"},L={key:0},G={class:"p-1"},M={class:"p-1"},U={class:"p-1"},W={class:"p-1"},X={class:"p-1"},Y=o("br",null,null,-1),q=o("div",null,[o("br")],-1);function K(e,a,n,_,D,m){const c=u("CIcon"),p=u("CCol"),b=u("CRow"),i=u("CCardHeader"),f=u("CCardTitle"),C=u("CCardTex"),S=u("CCardBody"),g=u("CCard"),r=u("CButton"),N=u("CSmartTable");return $(),y(w,null,[o("div",V,[t(g,{class:v(["mb-3 border-top-3 border-primary",e.border-e.top-e.info])},{default:l(()=>[t(i,{component:"h5"},{default:l(()=>[t(b,{class:"justify-content-between"},{default:l(()=>[t(p,{xs:"12",sm:"6"},{default:l(()=>[t(c,{icon:_.userGender=="male"?"cilUser":"cilUserFemale",size:"xl"},null,8,["icon"]),o("strong",j,h(e.$t("health.patientinfo")),1)]),_:1})]),_:1})]),_:1}),t(S,null,{default:l(()=>[t(f),t(C,null,{default:l(()=>[t(b,null,{default:l(()=>[t(p,{sm:"auto"},{default:l(()=>[o("strong",null,h(e.$t("common.patientnum"))+" : ",1),E(" "+h(_.patientNum),1)]),_:1}),t(p,{sm:"auto"},{default:l(()=>[o("strong",null,h(e.$t("common.patientname"))+" : ",1),E(" "+h(_.patientNameAndAge),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["class"])]),o("div",F,[t(g,{class:v(["mb-3 border-primary",e.border-e.top-e.info])},{default:l(()=>[t(i,{component:"h5"},{default:l(()=>[t(b,{class:"justify-content-between"},{default:l(()=>[t(p,{xs:"12",sm:"6"},{default:l(()=>[t(c,{icon:"cilList",size:"xl"}),o("strong",I,h(e.$t("health.history")),1)]),_:1})]),_:1})]),_:1}),t(S,null,{default:l(()=>[t(f),t(C,null,{default:l(()=>[t(N,{tableProps:{striped:!0,hover:!0},tableHeadProps:{color:"primary"},activePage:1,header:"",items:e.$store.state.examinationResult.data,columns:_.columns,columnSorter:"",pagination:"",itemsPerPage:10,loading:_.isLoading,sorterValue:{column:"HSSDAT",state:"desc"}},{HSSDAT:l(({item:s,index:d})=>[o("td",null,h(m.getFormattedDate(s.HSSDAT)),1)]),PJCODE:l(({item:s,index:d})=>[o("td",null,[s.PJCODE!=null||s.PJCODE!=null?($(),y("strong",L,h(s.PJCODE),1)):J("",!0)])]),HSB1020:l(({item:s,index:d})=>[o("td",G,[k(t(r,{color:"info",round:"",size:"sm",onClick:B=>{m.clickResult(s,d),e.$store.state.selected_result_id=s._id}},{default:l(()=>[t(c,{icon:"cilDescription",size:"sm"})]),_:2},1032,["onClick"]),[[H,s.HSB1020!=null]])])]),HSB1023:l(({item:s,index:d})=>[o("td",M,[k(t(r,{color:"info",round:"",size:"sm",onClick:B=>{m.clickDetailed(s,d),e.$store.state.resultDate=s.HSSDAT,e.$store.state.selected_result_id=s._id}},{default:l(()=>[t(c,{icon:"cilDescription",size:"sm"})]),_:2},1032,["onClick"]),[[H,s.HSB1023!=null&&s.HSB1023.length>0]])])]),HSB1029:l(({item:s,index:d})=>[o("td",U,[k(t(r,{color:"info",round:"",size:"sm",onClick:B=>{m.clickBloodVessel(s,d),e.$store.state.selected_result_id=s._id}},{default:l(()=>[t(c,{icon:"cilDescription",size:"sm"})]),_:2},1032,["onClick"]),[[H,s.HSB1029!=null]])])]),HSB4010:l(({item:s,index:d})=>[o("td",W,[k(t(r,{color:"info",round:"",size:"sm",onClick:B=>{m.clickBrainDock(s,d),e.$store.state.selected_result_id=s._id}},{default:l(()=>[t(c,{icon:"cilDescription",size:"sm"})]),_:2},1032,["onClick"]),[[H,s.HSB4010!=null]])])]),HSB1025:l(({item:s,index:d})=>[o("td",X,[k(t(r,{color:"info",round:"",size:"sm",onClick:B=>{m.clickEtc(s,d),e.$store.state.selected_result_id=s._id}},{default:l(()=>[t(c,{icon:"cilDescription",size:"sm"})]),_:2},1032,["onClick"]),[[H,s.HSB1025!=null&&s.HSB1025.length>0]])])]),_:1},8,["items","columns","loading"])]),_:1})]),_:1})]),_:1},8,["class"])]),Y,t(r,{color:"primary",class:"px-4",onClick:a[0]||(a[0]=s=>{m.goto("/home/dashboard"),e.$store.state.menu_id=0,e.$store.state.selected_result_id=-1})},{default:l(()=>[t(c,{icon:"cilArrowThickToLeft",size:"sm"})]),_:1}),q],64)}const Z=R(O,[["render",K]]);export{Z as default};

const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Home-DgaCF14D.js","assets/index-CjgUKMd_.js","assets/index-Da_KHGr4.css","assets/About-B4xqoB_A.js","assets/Projects-DEAlng0T.js"])))=>i.map(i=>d[i]);
import{c as t,l as e,_ as o,s as i}from"./index-CjgUKMd_.js";const r=e(()=>o(()=>import("./Home-DgaCF14D.js"),__vite__mapDeps([0,1,2]))),a=e(()=>o(()=>import("./About-B4xqoB_A.js"),__vite__mapDeps([3,1,2]))),s=e(()=>o(()=>import("./Projects-DEAlng0T.js"),__vite__mapDeps([4,1,2]))),_=i("main")`
    flex: 1;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;

    @media (max-width: 1000px) {
        width: 100%;
    }
`,n=()=>t(_,{get children(){return[t(r,{id:"home"}),t(s,{id:"projects"}),t(a,{id:"about"})]}});export{n as default};

const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Home-CaNUUZuD.js","assets/index-BsjldD8i.js","assets/index-B8ruX9TP.css","assets/About-DUdUasF9.js","assets/index-BoabWN6a.js","assets/Projects-Dj5jISyi.js"])))=>i.map(i=>d[i]);
import{c as t,l as e,_ as o,s as i}from"./index-BsjldD8i.js";const r=e(()=>o(()=>import("./Home-CaNUUZuD.js"),__vite__mapDeps([0,1,2]))),a=e(()=>o(()=>import("./About-DUdUasF9.js"),__vite__mapDeps([3,1,2,4]))),s=e(()=>o(()=>import("./Projects-Dj5jISyi.js"),__vite__mapDeps([5,1,2]))),_=i("main")`
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

import{c as e,m as j,s as t,a as f,o as B,S as x,b as v,G as z,d as D}from"./index-BsjldD8i.js";import{C as l,F as w,a as b,b as y,c as I,d as F}from"./Contact-8MfWFSPn.js";import"./index-BoabWN6a.js";const T=t("p")`
    color: var(--color6);
    position: relative;
    text-decoration: none;
    display: inline-block;
    padding-bottom: 4px;

    &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 4px;
        border-radius: 4px;
        background-color: var(--color3);
        bottom: 0;
        left: 0;
        transform-origin: right;
        transform: scaleX(0);
        transition: transform .3s ease-in-out;
    }

    &:hover::before {
        transform-origin: left;
        transform: scaleX(1);
    }
`,S=a=>{const{children:r,...i}=a;return e(T,j(i,{children:r}))},E=t("nav")`
    ${z};
    position: sticky;
    top: 0;
    flex-shrink: 0;
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 20px;
    gap: 10px;
    border-bottom: 1px solid var(--color8);
    z-index: 10;
`,d=t("div")`
    width: 33.33%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    &:first-child {
        justify-content: start;
    }

    &:last-child {
        justify-content: end;
    }
`,p=t(S)`
    color: var(--color5);
    cursor: pointer;
`,Y=t("div")`
    width: 100%;
    height: 60px;
    flex-shrink: 0;
`,L=t("nav")`
    ${z};
    padding: 0 20px;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid var(--color8);
    z-index: 10;
    position: fixed;
    top: 0;
`,R=t("div")`
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`,q=t("div")`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    overflow: hidden;
    max-height: 0;
    padding: 0;
    opacity: 0;
    transform: translateY(-8px);
    transition: max-height 320ms ease, opacity 240ms ease, transform 240ms ease, padding 240ms ease;

    &.open {
        padding: 5px 0;
        max-height: 500px;
        opacity: 1;
        transform: translateY(0);
    }
`,h=t("a")`
    width: 100%;
    text-align: center;
    padding: 10px 0;
    color: var(--color5);
    cursor: pointer;
    text-decoration: none;
    border: 1px solid var(--color8);

    &:hover {
        background-color: var(--color8);
    }
`,G=t(F)`
    display: none;
    color: var(--color5);
    width: 28px;
    height: 28px;
    cursor: pointer;

    @media (max-width: 1000px) {
        display: block;
        margin-left: 12px;
    }
`,P=t(I)`
    display: none;
    color: var(--color5);
    width: 28px;
    height: 28px;
    cursor: pointer;

    @media (max-width: 1000px) {
        display: block;
        margin-left: 12px;
    }
`,W=t("div")`
    display: flex;
    flex-direction: row;
    gap: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
`,k=t("div")`
    display: flex;
    flex-direction: row;
    gap: 5px;
`,C=t(S)`
    color: var(--color5);
    font-size: clamp(16px, 10vw, 30px);
    font-weight: bold;
    left: 20px;
    cursor: pointer;
`,X=a=>{let r=a;for(;r&&r.parentElement;){const i=r.parentElement,n=getComputedStyle(i).overflowY;if((n==="auto"||n==="scroll"||n==="overlay")&&i.scrollHeight>i.clientHeight)return i;r=i}return window},A=()=>{const[a,r]=f(!1),[i,g]=f(window.innerWidth);B(()=>{const o=()=>g(window.innerWidth);window.addEventListener("resize",o),D(()=>window.removeEventListener("resize",o))});const n=o=>{const s=document.getElementById(o);if(!s)return;const m=X(s),u=80;if(m===window){const c=s.getBoundingClientRect().top+window.pageYOffset-u;window.scrollTo({top:c,behavior:"smooth"})}else{const c=m,M=s.getBoundingClientRect().top-c.getBoundingClientRect().top+c.scrollTop-u;c.scrollTo({top:M,behavior:"smooth"})}r(!1)};return[e(x,{get when(){return i()>1e3},get children(){return e(E,{get children(){return[e(d,{get children(){return e(C,{onClick:o=>{o.preventDefault(),n("home")},children:"Madax Tech"})}}),e(d,{get children(){return[e(p,{onClick:o=>{o.preventDefault(),n("home")},children:"Inicio"}),e(p,{onClick:o=>{o.preventDefault(),n("projects")},children:"Projetos"}),e(p,{onClick:o=>{o.preventDefault(),n("about")},children:"Sobre"})]}}),e(d,{get children(){return e(k,{get children(){return[e(l,{size:40,color:"var(--color5)",component:w}),e(l,{size:40,color:"var(--color5)",component:b}),e(l,{size:40,color:"var(--color5)",component:y})]}})}})]}})}}),e(x,{get when(){return i()<=1e3},get children(){return[e(Y,{}),e(L,{get children(){return[e(R,{get children(){return[e(C,{onClick:o=>{o.preventDefault(),n("home")},children:"Madax Tech"}),v(()=>v(()=>!!a())()?e(P,{onClick:()=>r(o=>!o)}):e(G,{onClick:()=>r(o=>!o)}))]}}),e(q,{get class(){return a()?"open":""},get"aria-hidden"(){return!a()},get children(){return[e(h,{onClick:o=>{o.preventDefault(),n("home")},children:"Inicio"}),e(h,{onClick:o=>{o.preventDefault(),n("projects")},children:"Projetos"}),e(h,{onClick:o=>{o.preventDefault(),n("about")},children:"Sobre"}),e(W,{get children(){return e(k,{get children(){return[e(l,{size:35,color:"var(--color5)",component:w}),e(l,{size:35,color:"var(--color5)",component:b}),e(l,{size:35,color:"var(--color5)",component:y})]}})}})]}})]}})]}})]};export{A as default};

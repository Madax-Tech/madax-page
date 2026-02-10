import{c as e,F as i,i as o,G as d,s as r,t as s}from"./index-BsjldD8i.js";const c="/assets/img3-DoqQuGq7.jpg",l="/assets/img4-Pi8r-W1J.jpg";var p=s("<h2>"),g=s("<p>");const m=[{id:1,title:"Daily Words",image:c,tech:["React","Expressjs","Golang"],description:"Uma aplicação que envia palavras diárias para os usuários, versos bíblicos, autoajuda, dicas de bem-estar e motivação."},{id:2,title:"Checklist",image:l,tech:["React","Django","AWS EC2"],description:"Um Projeto para gerenciamento de tempo inteligente, com uma dashboard integrada"}],h=r("section")`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 16px;
    width: clamp(60%, 90%, 1000px);  
`,x=r("article")`
    ${d};
    border: 1px solid var(--color8);
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    box-shadow: 0 1px 6px rgba(0,0,0,0.04);
    transition: transform .15s ease, box-shadow .15s ease;

    &:hover {
        transform: translateY(-6px);
        box-shadow: 0 8px 24px rgba(0,0,0,0.08);
        cursor: pointer;
    }
`,u=r("div")`
    width: 100%;
    aspect-ratio: 16/9;
    overflow: hidden;
`,f=r("img")`
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
`,v=r("div")`
    padding: 12px 14px 16px;
    display: flex;
    flex-direction: column;
    gap: 8px;

    h2 { margin: 0; font-size: 1.125rem; }
    p { margin: 0; color: var(--color7); font-size: 0.95rem; font-weight: 300; line-height: 1.4; }
`,b=r("ul")`
    list-style: none;
    padding: 0;
    margin: 8px 0 0;
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
`,w=r("li")`
    padding: 4px 8px;
    border-radius: 999px;
    font-size: 0.8rem;
`,y=n=>e(h,{get id(){return n.id},get children(){return e(i,{each:m,children:a=>e(x,{get children(){return[e(u,{get children(){return e(f,{get src(){return a.image},get alt(){return a.title}})}}),e(v,{get children(){return[(()=>{var t=p();return o(t,()=>a.title),t})(),(()=>{var t=g();return o(t,()=>a.description),t})(),e(b,{get children(){return e(i,{get each(){return a.tech},children:t=>e(w,{children:t})})}})]}})]}})})}});export{y as default};

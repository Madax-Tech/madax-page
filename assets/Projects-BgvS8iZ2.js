import{c as e,F as a,i as o,G as c,s as i,t as s}from"./index-D5m__NuO.js";const d="/assets/img3-U6LUs_eI.jpg",p="/assets/img4-BGXRToJ7.jpg",l="/assets/img5-BQmoxccw.jpg";var m=s("<h2>"),g=s("<p>");const h=[{id:1,title:"Madax Dashboard",image:d,tech:["TypeScript","React","Nestjs"],description:"Painel administrativo com gráficos em tempo real, autenticação e gerenciamento de usuários."},{id:2,title:"Loja Virtual",image:p,tech:["Solid Start","Stripe","Prisma"],description:"E-commerce com checkout integrado, catálogo dinâmico e painel de pedidos."},{id:3,title:"App Mobile",image:l,tech:["Ionic","GraphQL","Expo"],description:"Aplicativo móvel multiplataforma com sync offline e notificações push."}],x=i("section")`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 16px;
    width: clamp(60%, 90%, 1000px);  
`,u=i("article")`
    ${c};
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
`,f=i("div")`
    width: 100%;
    aspect-ratio: 16/9;
    overflow: hidden;
`,v=i("img")`
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
`,b=i("div")`
    padding: 12px 14px 16px;
    display: flex;
    flex-direction: column;
    gap: 8px;

    h2 { margin: 0; font-size: 1.125rem; }
    p { margin: 0; color: #374151; font-size: 0.95rem; }
`,w=i("ul")`
    list-style: none;
    padding: 0;
    margin: 8px 0 0;
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
`,y=i("li")`
    padding: 4px 8px;
    border-radius: 999px;
    font-size: 0.8rem;
`,G=n=>e(x,{get id(){return n.id},get children(){return e(a,{each:h,children:r=>e(u,{get children(){return[e(f,{get children(){return e(v,{get src(){return r.image},get alt(){return r.title}})}}),e(b,{get children(){return[(()=>{var t=m();return o(t,()=>r.title),t})(),(()=>{var t=g();return o(t,()=>r.description),t})(),e(w,{get children(){return e(a,{get each(){return r.tech},children:t=>e(y,{children:t})})}})]}})]}})})}});export{G as default};

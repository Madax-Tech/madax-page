import{c as e,s as t,G as h,t as s}from"./index-D5m__NuO.js";const x="/assets/img1-DsDhHdnT.jpg",m="/assets/img2-C25j2Pkh.jpg";var g=s("<h3>Davi Lima"),u=s("<h3>Marcos Paulo");const f=t("section")`
    padding: 24px;
    max-width: 1100px;
    margin: 0 auto;
    font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
`,v=t("section")`
    display: flex;
    gap: 16px;
    align-items: stretch;

    @media (max-width: 720px) {
        flex-direction: column;
    }
`,i=t("a")`
    flex: 1;
    ${h};
    border: 1px solid var(--color8);
    border-radius: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    box-shadow: 0 1px 6px rgba(0,0,0,0.04);
    text-decoration: none;
    color: inherit;

    transition: transform .15s ease, box-shadow .15s ease;

    &:hover {
        transform: translateY(-6px);
        box-shadow: 0 8px 24px rgba(0,0,0,0.08);
        cursor: pointer;
    }
`,n=t("div")`
    display: flex;
    flex-direction: row;
    gap: 8px;

    @media (max-width: 720px) {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
`,a=t("div")`
    display: flex;
    gap: 5px;
    align-items: start;
    justify-content: center;
    flex-direction: column;

    @media (max-width: 720px) {
        align-items: center;
    }
`,o=t("img")`
    width: clamp(80px, 15vw, 90px);
    height: clamp(80px, 15vw, 90px);
    border-radius: 12px;
    object-fit: cover;
    flex-shrink: 0;
`,c=t("p")`
    color: var(--color5);
    font-size: 0.9rem;
`,l=t("p")`
    color: var(--color7);
    font-size: 0.95rem;
`,d=t("ul")`
    list-style: none;
    padding: 0;
    margin: 6px 0 0;
    gap: 8px;
    flex-wrap: wrap;
    
    display: flex;
    @media (max-width: 720px) {
        align-items: center;
        justify-content: center;
    }
`,r=t("li")`
    padding: 6px 10px;
    border-radius: 999px;
    font-size: clamp(12px, 5vw, 16px);
`,w=p=>e(f,{get id(){return p.id},get children(){return e(v,{get children(){return[e(i,{href:"https://github.com/Zelchi",target:"_blank",get children(){return[e(n,{get children(){return[e(o,{src:x,alt:"Dev 1"}),e(a,{get children(){return[g(),e(c,{children:"Desenvolvedor Full-stack"}),e(l,{children:"Criando soluções de software modernas com alta eficiência."})]}})]}}),e(d,{get children(){return[e(r,{children:"TypeScript"}),e(r,{children:"Nodejs"}),e(r,{children:"Nestjs"}),e(r,{children:"Reactjs"}),e(r,{children:"PostgresSQL"}),e(r,{children:"MongoDB"}),e(r,{children:"Docker"}),e(r,{children:"Golang"})]}})]}}),e(i,{href:"https://github.com/Marcosdev03",target:"_blank",get children(){return[e(n,{get children(){return[e(o,{src:m,alt:"Dev 2"}),e(a,{get children(){return[u(),e(c,{children:"Engenheiro de Qualidade / DevOps"}),e(l,{children:"Garantindo a qualidade e eficiência dos sistemas e confiabilidade em ambiente de nuvem."})]}})]}}),e(d,{get children(){return[e(r,{children:"Python"}),e(r,{children:"Django"}),e(r,{children:"Anaconda"}),e(r,{children:"Selenium"}),e(r,{children:"Docker"}),e(r,{children:"AWS"}),e(r,{children:"EC2"}),e(r,{children:"S3"}),e(r,{children:"Linux"})]}})]}})]}})}});export{w as default};

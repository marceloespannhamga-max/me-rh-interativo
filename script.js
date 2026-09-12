// ME RH — interações e camada premium
(function(){
  const addNR1Link=()=>{const nav=document.querySelector('.nav nav');if(nav&&!nav.querySelector('[href="nr1.html"]')){const a=document.createElement('a');a.href='nr1.html';a.textContent='NR-1';a.title='NR-1 · Riscos Psicossociais';nav.appendChild(a)}};
  const ready=fn=>document.readyState==='loading'?document.addEventListener('DOMContentLoaded',fn):fn();
  ready(()=>{
    addNR1Link();
    const top=document.querySelector('.topbar');
    const scrollState=()=>top&&top.classList.toggle('scrolled',window.scrollY>12);
    scrollState();window.addEventListener('scroll',scrollState,{passive:true});
    document.querySelectorAll('.section,.retention-section').forEach(el=>el.classList.add('reveal'));
    const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.08});
    document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

    const profileData={crescimento:['Seu perfil: Crescimento','Você tende a permanecer onde existe futuro visível. A ME RH responde com trilhas de carreira, PDI, mentoria e oportunidades internas.'],seguranca:['Seu perfil: Segurança','Você valoriza previsibilidade e confiança. A ME RH combina clareza, benefícios, processos e uma relação transparente com a empresa.'],reconhecimento:['Seu perfil: Reconhecimento','Você precisa perceber que seu esforço importa. A ME RH trabalha com feedback, reconhecimento e visibilidade das entregas.'],qualidade:['Seu perfil: Qualidade de vida','Você busca equilíbrio. A ME RH entende que produtividade sustentável nasce de respeito, flexibilidade, saúde e uma vida que continua fora do trabalho.']};
    document.querySelectorAll('.profile-option,.choice').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.profile-option,.choice').forEach(x=>x.classList.remove('active'));btn.classList.add('active');const d=profileData[btn.dataset.profile];const r=document.getElementById('profileResult')||document.getElementById('profile-result');if(d&&r){r.innerHTML=`<strong>${d[0]}</strong><p>${d[1]}</p>`;r.classList.remove('hidden')}}));

    const salary=document.getElementById('salary');
    const checks=[...document.querySelectorAll('.benefitCheck')];
    const out=document.getElementById('salaryOut'),total=document.getElementById('totalValue'),bar=document.getElementById('valueBar');
    const money=v=>v.toLocaleString('pt-BR',{style:'currency',currency:'BRL',maximumFractionDigits:0});
    function calc(){if(!salary)return;const s=+salary.value,b=checks.reduce((a,c)=>a+(c.checked?+c.value:0),0),t=s+b;if(out)out.textContent=money(s);if(total)total.textContent=money(t);if(bar)bar.style.width=Math.min(100,t/15000*100)+'%'}
    if(salary){salary.addEventListener('input',calc);checks.forEach(c=>c.addEventListener('change',calc));calc()}

    const careerData=[['Entrada','Você começa sabendo onde está, o que se espera de você e quais são os primeiros passos para crescer.',['Onboarding humano','Metas claras','Mentoria inicial']],['Desenvolvimento','Aqui o crescimento deixa de ser promessa e vira plano.',['PDI individual','Trilhas de aprendizagem','Feedback contínuo']],['Especialista','Você ganha autonomia, domínio técnico e espaço para gerar impacto.',['Projetos estratégicos','Certificações','Reconhecimento técnico']],['Liderança','Liderar passa a significar desenvolver pessoas e resultados.',['Formação de líderes','1:1 estruturado','Indicadores de pessoas']],['Gestão','A carreira chega à estratégia: decisões que conectam negócio e pessoas.',['Visão sistêmica','People Analytics','Planejamento estratégico']]];
    document.querySelectorAll('.career-step').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.career-step').forEach(x=>x.classList.remove('active'));btn.classList.add('active');const d=careerData[+btn.dataset.step];const r=document.getElementById('careerDetail')||document.getElementById('career-content');if(d&&r)r.innerHTML=`<h3>${d[0]}</h3><p>${d[1]}</p><div class="tags">${d[2].map(x=>`<span class="tag">${x}</span>`).join('')}</div>`}));

    document.querySelectorAll('[data-job]').forEach(btn=>btn.addEventListener('click',()=>{const box=document.getElementById('candidatura');const title=document.getElementById('jobTitle');if(box){box.style.display='block';if(title)title.textContent=`Candidate-se: ${btn.dataset.job}`;box.scrollIntoView({behavior:'smooth',block:'center')}}}));
    document.querySelectorAll('[data-feel]').forEach(btn=>btn.addEventListener('click',()=>{const r=document.getElementById('listenResult');if(r)r.innerHTML=`<strong>Obrigado por compartilhar.</strong><br>${btn.dataset.feel}. Sua percepção importa e merece acompanhamento.`}));
    const listen=document.getElementById('openListen');if(listen)listen.addEventListener('click',()=>document.querySelector('.listen')?.scrollIntoView({behavior:'smooth',block:'center'}));
  });
  if(!document.querySelector('link[href="premium.css"]')){const premium=document.createElement('link');premium.rel='stylesheet';premium.href='premium.css';document.head.appendChild(premium)}
})();

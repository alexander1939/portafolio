(function(){
  const GROUPS=[["all","Todo","Todos mis proyectos"],["front","Frontend","Web y móvil"],["back","Backend","APIs y datos"],["infra","Infra","DevOps y hardware"]];
  const cards=[...document.querySelectorAll('#grid .card')];
  const count={};
  cards.forEach(c=>{c._t=c.dataset.tech.split(',');c._g=new Set(c._t.map(t=>(META[t]||[0,'infra'])[1]));c._t.forEach(t=>count[t]=(count[t]||0)+1)});
  const order=Object.keys(count).sort((a,b)=>count[b]-count[a]||a.localeCompare(b));
  const seg=document.getElementById('seg'),fc=document.getElementById('fchips'),st=document.getElementById('fstatus'),clr=document.getElementById('fclear');
  let G='all',TT=null;
  const gCount=g=>g==='all'?cards.length:cards.filter(c=>c._g.has(g)).length;
  GROUPS.forEach(([id,name,sub])=>{
    const b=document.createElement('button');b.type='button';b.className='seg-b';b.dataset.g=id;
    b.innerHTML='<span class="seg-n">'+name+' <small>'+gCount(id)+'</small></span><span class="seg-s">'+sub+'</span>';
    b.onclick=()=>{G=id;TT=null;draw()};seg.appendChild(b);
  });
  function techChip(t){
    const b=document.createElement('button');b.type='button';b.className='tc';b.dataset.t=t;
    b.innerHTML=icon(t,18)+'<span>'+t+'</span><small>'+count[t]+'</small>';
    b.onclick=()=>{TT=TT===t?null:t;draw()};return b;
  }
  const SHOW=5;
  cards.forEach(c=>{const tg=c.querySelector('.tags');c._t.forEach((t,i)=>{const b=document.createElement('button');b.type='button';b.dataset.t=t;b.innerHTML=icon(t,13)+t;if(i>=SHOW){b.className='more';b.style.setProperty('--k',i-SHOW)}b.onclick=()=>{G=(META[t]||[0,'infra'])[1];TT=t;draw();document.getElementById('proyectos').scrollIntoView({behavior:'smooth'})};tg.appendChild(b)});
    const extra=c._t.length-SHOW;
    if(extra>0){const m=document.createElement('button');m.type='button';m.className='tg-more';m.setAttribute('aria-expanded','false');const lab=()=>c.classList.contains('tags-open')?'Ver menos':'+'+extra+' más';m.textContent=lab();m.onclick=e=>{e.stopPropagation();c.classList.toggle('tags-open');m.setAttribute('aria-expanded',c.classList.contains('tags-open'));m.textContent=lab();if(window.fitOver)fitOver()};tg.appendChild(m)}
  });
  clr.onclick=()=>{G='all';TT=null;draw()};
  function draw(){
    seg.querySelectorAll('.seg-b').forEach(b=>b.setAttribute('aria-pressed',b.dataset.g===G));
    const list=G==='all'?order.slice(0,matchMedia('(max-width:600px)').matches?8:12):order.filter(t=>(META[t]||[0,'infra'])[1]===G);
    fc.innerHTML='';list.forEach((t,i)=>{const b=techChip(t);b.style.animationDelay=(i*18)+'ms';b.setAttribute('aria-pressed',t===TT);fc.appendChild(b)});
    let n=0;
    cards.forEach(c=>{const ok=(G==='all'||c._g.has(G))&&(!TT||c._t.includes(TT));c.hidden=!ok;if(ok)n++});
    document.querySelectorAll('.tags button').forEach(b=>b.classList.toggle('on',b.dataset.t===TT));
    const gname=GROUPS.find(g=>g[0]===G)[1];
    st.innerHTML=TT?'<b>'+n+'</b> '+(n===1?'proyecto usa':'proyectos usan')+' <b>'+TT+'</b>':(G==='all'?'Mostrando <b>'+n+'</b> proyectos':'<b>'+n+'</b> proyectos con <b>'+gname+'</b>');
    clr.hidden=G==='all'&&!TT;
  }
  draw();
  document.getElementById('nproj').textContent=cards.length+' en este sitio';
  const Lg=document.getElementById('langs'),mx=count[order[0]];
  order.slice(0,6).forEach(t=>{const d=document.createElement('div');d.className='bar';d.innerHTML='<span>'+t+'</span><i style="width:'+Math.round(count[t]/mx*100)+'%"></i><em>'+count[t]+'</em>';Lg.appendChild(d)});
})();

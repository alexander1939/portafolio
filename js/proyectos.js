function esc(t){return String(t).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]))}
function drawArch(host,layers){
  let h='<div class="dg">';
  layers.forEach((L,i)=>{
    const [k,nodes,conn]=L;
    h+='<div class="dg-l" style="--i:'+i+'"><span class="dg-k">'+esc(k)+'</span><div class="dg-ns">';
    nodes.forEach(([t,sub,tech],j)=>{h+='<div class="dg-n" style="--j:'+j+'">'+(tech&&META[tech]?icon(tech,18):'<span class="dg-dot" aria-hidden="true"></span>')+'<span class="dg-t"><b>'+esc(t)+'</b><small>'+esc(sub)+'</small></span></div>'});
    h+='</div></div>';
    if(i<layers.length-1)h+='<div class="dg-c" style="--i:'+i+'"><i aria-hidden="true"></i>'+(conn?'<span>'+esc(conn)+'</span>':'')+'</div>';
  });
  host.innerHTML=h+'</div>';
}
window.fitOver=fitOver;function fitOver(){document.querySelectorAll('#grid .card:not(.big)').forEach(c=>{const o=c.querySelector('.dg-over'),t=c.querySelector('.tags');if(o&&t)o.style.height=Math.max(180,t.offsetTop-10)+'px'})}
addEventListener('resize',fitOver);addEventListener('load',fitOver);
function play(c,on){const d=c.querySelector('.dg');if(!d)return;if(on){d.classList.remove('play');void d.offsetWidth;d.classList.add('play')}else d.classList.remove('play')}
const canHover=matchMedia('(hover:hover)').matches;
document.querySelectorAll('#grid .card').forEach(c=>{
  const host=c.querySelector('.dg-host');if(host)drawArch(host,ARCH[c.dataset.id]);
  if(!c.classList.contains('big')&&canHover){c.addEventListener('mouseenter',()=>play(c,true));c.addEventListener('mouseleave',()=>play(c,false))}
  if(c.classList.contains('big')){try{const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){play(c,true);io.disconnect()}}),{threshold:.35});io.observe(c)}catch(e){}}
  const btn=c.querySelector('.arch-btn');
  if(btn){
    btn.addEventListener('click',e=>{e.stopPropagation();const on=!c.classList.contains('show');document.querySelectorAll('#grid .card.show').forEach(x=>{x.classList.remove('show');x.querySelector('.arch-btn').setAttribute('aria-expanded','false');x.querySelector('.arch-btn').textContent='Ver arquitectura'});c.classList.toggle('show',on);play(c,on);btn.setAttribute('aria-expanded',on);btn.textContent=on?'Cerrar':'Ver arquitectura'});
  }
});
fitOver();
try{new ResizeObserver(fitOver).observe(document.getElementById('grid'))}catch(e){}

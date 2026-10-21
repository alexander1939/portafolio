// Menú móvil
(function(){const b=document.getElementById('menuBtn'),n=b.closest('nav');
b.onclick=()=>{const o=!n.classList.contains('open');n.classList.toggle('open',o);b.setAttribute('aria-expanded',o)};
n.querySelectorAll('ul a').forEach(a=>a.addEventListener('click',()=>{n.classList.remove('open');b.setAttribute('aria-expanded','false')}));})();

// Botones "Copiar" de contacto
document.querySelectorAll('.copy').forEach(b=>{
  b.addEventListener('click',()=>{
    const el=document.getElementById(b.dataset.copy);
    const done=()=>{b.textContent='Copiado';setTimeout(()=>b.textContent='Copiar',1600)};
    const sel=()=>{const r=document.createRange();r.selectNodeContents(el);const s=getSelection();s.removeAllRanges();s.addRange(r)};
    try{navigator.clipboard.writeText(el.textContent.trim()).then(done,sel)}catch(e){sel()}
  });
});

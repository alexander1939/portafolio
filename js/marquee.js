const track=document.getElementById('track');
function render(){
  track.innerHTML='';
  for(let r=0;r<2;r++){TECH.forEach(n=>{const d=document.createElement('span');d.className='chip';d.innerHTML=icon(n,26)+n;if(r)d.setAttribute('aria-hidden','true');track.appendChild(d)})}
}
render();

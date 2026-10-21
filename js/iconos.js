function icon(n,sz){
  const m=META[n]||['888888'],hex=m[0],path=ICONS[n];
  const dark=parseInt(hex.slice(0,2),16)+parseInt(hex.slice(2,4),16)+parseInt(hex.slice(4,6),16)<160;
  const fill=dark?'currentColor':'#'+hex;
  return path?'<svg class="ic" width="'+sz+'" height="'+sz+'" viewBox="0 0 24 24" aria-hidden="true"><path fill="'+fill+'" d="'+path+'"/></svg>':'<svg class="ic" width="'+sz+'" height="'+sz+'" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" fill="'+fill+'"/><text x="12" y="16.5" text-anchor="middle" font-size="12" font-weight="700" fill="#fff" font-family="sans-serif">'+n[0]+'</text></svg>';
}

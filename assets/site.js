// ══════════════════════════════════════════════
// assets/site.js — comportamentos comuns a todas as páginas
// (barra de progresso, botão topo, contadores, menu, destaque
//  do link ativo no menu, animação de entrada dos cards)
// ══════════════════════════════════════════════

// Scroll Progress & Botão Topo
const btnTopo = document.getElementById('btnTopo');
window.addEventListener('scroll', () => {
  const el = document.getElementById('scrollProgress');
  const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
  if(el) el.style.width = scrolled + '%';

  if(btnTopo) {
    if(window.scrollY > 500) {
      btnTopo.style.opacity = '1';
      btnTopo.style.pointerEvents = 'auto';
      btnTopo.style.transform = 'translateY(0)';
    } else {
      btnTopo.style.opacity = '0';
      btnTopo.style.pointerEvents = 'none';
      btnTopo.style.transform = 'translateY(10px)';
    }
  }
});

// Contadores animados (usado no hero da Início)
function animateCounter(el){
  const target = parseInt(el.dataset.target);
  const duration = 1500;
  const start = performance.now();
  const update = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(eased * target);
    if(progress < 1) requestAnimationFrame(update);
    else el.textContent = target;
  };
  requestAnimationFrame(update);
}
const counterObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if(e.isIntersecting && e.target.dataset.target) {
      animateCounter(e.target);
      counterObs.unobserve(e.target);
    }
  });
},{threshold: 0.5});
document.querySelectorAll('.stat-num[data-target]').forEach(el => counterObs.observe(el));

// Destaque do link ativo no menu (só afeta links de âncora na própria página)
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
const navObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if(e.isIntersecting) {
      navLinks.forEach(a => a.classList.remove('active'));
      const active = document.querySelector('.nav-links a[href="#'+e.target.id+'"]');
      if(active) active.classList.add('active');
    }
  });
},{threshold: 0.3, rootMargin: '-80px 0px 0px 0px'});
sections.forEach(s => navObs.observe(s));

// Menu Hamburguer (mobile)
function toggleMenu() { document.getElementById('navLinks').classList.toggle('open'); }
document.querySelectorAll('.nav-links a').forEach(l => l.addEventListener('click', () => {
  const nl = document.getElementById('navLinks');
  if(nl) nl.classList.remove('open');
}));

// Animação de entrada (fade-up) ao rolar a página
const fadeObs = new IntersectionObserver(entries => {
  entries.forEach(el => { if(el.isIntersecting) el.target.classList.add('visible'); });
}, {threshold: 0.1});
document.querySelectorAll('.fade-up').forEach(el => fadeObs.observe(el));

// ══════════════════════════════════════════════
// Busca global (ícone de lupa no menu) — usa assets/search-index.js
// ══════════════════════════════════════════════
function normalizeSearch(str){ return str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,''); }

function openGlobalSearch(){
  const overlay = document.getElementById('searchOverlay');
  if(!overlay) return;
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  const input = document.getElementById('globalSearchInput');
  if(input){ input.value = ''; input.focus(); }
  const results = document.getElementById('globalSearchResults');
  if(results) results.innerHTML = '<div class="search-hint">Digite para buscar em contatos, sistemas, áreas, regimento e mais.</div>';
}

function closeGlobalSearch(){
  const overlay = document.getElementById('searchOverlay');
  if(!overlay) return;
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

function runGlobalSearch(q){
  const raw = q.trim();
  const container = document.getElementById('globalSearchResults');
  if(!container) return;

  if(!raw){
    container.innerHTML = '<div class="search-hint">Digite para buscar em contatos, sistemas, áreas, regimento e mais.</div>';
    return;
  }

  const term = normalizeSearch(raw);
  const index = window.SEARCH_INDEX || [];
  const results = index.filter(item =>
    normalizeSearch(item.title).includes(term) ||
    normalizeSearch(item.snippet).includes(term) ||
    normalizeSearch(item.cat).includes(term)
  ).slice(0, 10);

  if(results.length === 0){
    container.innerHTML = `<div class="search-empty">Nenhum resultado para "${raw}"</div>`;
    return;
  }

  container.innerHTML = results.map(r => `
    <a class="search-result-item" href="${r.url}">
      <span class="search-result-cat">${r.cat}</span>
      <div class="search-result-title">${r.title}</div>
      <div class="search-result-snippet">${r.snippet}</div>
    </a>
  `).join('');
}

document.addEventListener('keydown', e => {
  if(e.key === 'Escape') closeGlobalSearch();
  const tag = document.activeElement ? document.activeElement.tagName : '';
  if(e.key === '/' && tag !== 'INPUT' && tag !== 'TEXTAREA'){
    e.preventDefault();
    openGlobalSearch();
  }
});

// Menu Baía Mall — nomes e preços conforme publicados em thekingofthegrill.africa/menu-moz
const MENU = [
  { cat: "Grelhados", img: "assets/dishes/steak.webp", items: [
    ["beef skewer", "1150"], ["beef rib rack", "1450"], ["t-bone steak", "1350"], ["ribeye steak", "1350"],
    ["pork spare ribs", "1450"], ["grilled lamb chops", "1350"], ["rump steak", "1150"], ["fillet steak", "1180"],
    ["ladies fillet steak", "950"], ["gourmet mignon fillet", "1260"], ["rich & tender lamb shank", "1460"],
    ["souvlaki short ribs", "1460"], ["king's black forest", "1650"], ["the king's plate", "1650"], ["chicken & rib combo", "1350"],
  ]},
  { cat: "Frango", img: "assets/dishes/crispy-wings.webp", items: [
    ["portuguese peri-peri chicken", "940"], ["grilled chicken", "550 / 980"], ["zambezian chicken", "550 / 920"],
    ["crispy fried chicken", "650 / 1160"], ["crispy cheesy chicken breasts", "860"], ["chicken espetada", "960"],
    ["king's wings", "950"], ["grilled wings", "560"], ["king's double chicken", "1350"],
  ]},
  { cat: "Burgers", img: "assets/dishes/burger.webp", items: [
    ["king of the grill", "650"], ["cheese burger", "550"], ["chicken burger", "550"], ["single crispy", "600"],
    ["bacon cheese burger", "650"], ["bacon, avo & cream cheese", "650"], ["double fried chicken burger", "650"],
    ["giant cheese burger", "850"], ["king's double beef", "1350"],
  ]},
  { cat: "Do Mar", img: "assets/img/10_capa_reel_comida.webp", photo: true, items: [
    ["lula's calamari heads", "980"], ["red fish", "1560"], ["garopa fish", "1640"], ["12 queen prawns", "1660"],
    ["6 prawns & calamari", "1950"], ["coconut crabs with rice", "1250"], ["kingklip fillet", "1150"],
    ["grilled salmon fillet", "1248"], ["seafood platter", "1360"], ["rice ala paella", "980"],
  ]},
  { cat: "Entradas", img: "assets/dishes/crispy-wings.webp", items: [
    ["3 wings", "230"], ["calamari", "650"], ["chicken livers", "460"], ["butternut soup", "350"],
    ["chicken gizzards", "600"], ["focaccia", "450"], ["creamy mussels", "550"], ["chicken strips", "550"],
    ["half-moon prawns", "230"], ["calamari squid heads", "600"], ["chorizo with peri-peri", "450"],
    ["caldo verde", "480"], ["haloumi with bacon", "550"], ["creamy snails", "550"], ["beef or fish samoosa", "230"],
  ]},
  { cat: "Pizzas", img: "assets/img/pizza-curve.webp", photo: true, items: [
    ["margarita", "450"], ["veggie", "650"], ["bacon & chorizo", "750"], ["chicken & mushroom", "750"],
    ["mexicana", "830"], ["beef santorini", "850"], ["king's picnic pizza", "860"], ["king's fusion pizza", "860"],
    ["macon salami beef pizza", "890"], ["seafood", "950"],
  ]},
  { cat: "Massas", img: "assets/img/kitchen-pass.webp", photo: true, items: [
    ["traditional bolognaise", "690"], ["spaghetti & meatballs", "690"], ["creamy alfredo", "750"], ["al pollo", "750"],
    ["vegetarian pasta", "750"], ["creamy chicken pasta", "780"], ["beef lasagne", "860"], ["chicken liver pasta", "860"],
    ["bistecca pasta", "990"], ["seafood extravaganza pasta", "990"],
  ]},
  { cat: "Caril & Guisados", img: "assets/img/steak-veg.webp", photo: true, items: [
    ["beef stew", "1160"], ["lamb curry", "1260"], ["prawn curry", "1350"], ["lamb neck", "1350"],
  ]},
  { cat: "Saladas", img: "assets/img/steak-salad.webp", photo: true, items: [
    ["greek salad", "550"], ["chicken salad", "600"], ["prawn salad", "800"],
  ]},
  { cat: "Pequeno-almoço", img: "assets/img/burger-beer.webp", photo: true, items: [
    ["country early bird", "430"], ["king's cheese griller", "480"], ["french toast", "530"], ["farmhouse", "590"],
    ["eggs benedict", "630"], ["full house", "650"], ["omelette plain", "340"], ["omelette mince & cheddar", "480"],
    ["omelette ham, tomato & cheddar", "490"], ["omelette bacon, mushroom & mozzarella", "490"], ["omelette pizza", "560"],
  ]},
  { cat: "Sandes & Wraps", img: "assets/dishes/burger.webp", items: [
    ["200g prego", "620"], ["200g sirloin sandwich", "790"], ["bacon, egg & cheese", "690"], ["chicken", "690"],
    ["beef", "690"], ["prawn & avo", "790"], ["bacon & cheese toastie", "340"], ["cheese & tomato toastie", "420"],
    ["bacon, egg & cheese toastie", "430"], ["ham, cheese & tomato toastie", "430"], ["bacon, avo & halloumi", "456"],
    ["chicken mayo", "460"], ["tuna mayo", "490"],
  ]},
  { cat: "Kids", img: "assets/img/pizza-slice.webp", photo: true, items: [
    ["kiddies hotdog", "330"], ["mac 'n cheese", "330"], ["scrambled eggs & toast", "350"], ["fish fingers & chips", "360"],
    ["kiddies breakfast", "420"], ["grilled or fried chicken strips", "420"], ["kiddies bolognaise", "420"],
  ]},
];

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- Menu ---------- */
const tabsEl = document.getElementById("menuTabs");
const listEl = document.getElementById("menuList");
const titleEl = document.getElementById("menuCatTitle");
const countEl = document.getElementById("menuCount");
const imgEl = document.getElementById("menuImg");

function renderCategory(index) {
  const { cat, img, photo, items } = MENU[index];
  tabsEl.querySelectorAll(".menu__tab").forEach((t, i) => {
    t.setAttribute("aria-selected", i === index);
    t.tabIndex = i === index ? 0 : -1;
  });
  titleEl.textContent = cat;
  countEl.textContent = String(index + 1).padStart(2, "0");
  listEl.innerHTML = items.map(([name, price], i) => `
    <li class="menu__item" style="--i:${i}">
      <span class="menu__name">${name}</span>
      <span class="menu__dots" aria-hidden="true"></span>
      <span class="menu__price"><small>MTN</small>${price}</span>
    </li>`).join("");

  if (imgEl.getAttribute("src") !== img) {
    imgEl.classList.add("is-out");
    setTimeout(() => {
      imgEl.src = img;
      imgEl.style.borderRadius = photo ? "50%" : "";
      imgEl.style.objectFit = photo ? "cover" : "";
      imgEl.classList.remove("is-out");
    }, reduceMotion ? 0 : 380);
  }
}

MENU.forEach(({ cat }, i) => {
  const b = document.createElement("button");
  b.className = "menu__tab";
  b.type = "button";
  b.role = "tab";
  b.textContent = cat;
  b.addEventListener("click", () => {
    renderCategory(i);
    b.scrollIntoView({ block: "nearest", inline: "center", behavior: reduceMotion ? "auto" : "smooth" });
  });
  tabsEl.appendChild(b);
});
tabsEl.addEventListener("keydown", (e) => {
  const tabs = [...tabsEl.children];
  const cur = tabs.findIndex((t) => t.getAttribute("aria-selected") === "true");
  const dir = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[e.key];
  if (!dir) return;
  e.preventDefault();
  const next = (cur + dir + tabs.length) % tabs.length;
  renderCategory(next);
  tabs[next].focus();
});
renderCategory(0);

/* ---------- Nav ---------- */
const nav = document.getElementById("nav");
const burger = document.getElementById("burger");
const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 40);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();
burger.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  burger.setAttribute("aria-expanded", open);
  document.body.style.overflow = open ? "hidden" : "";
});
document.querySelectorAll("#navLinks a").forEach((a) => a.addEventListener("click", () => {
  nav.classList.remove("is-open");
  burger.setAttribute("aria-expanded", "false");
  document.body.style.overflow = "";
}));

/* ---------- Reveal on scroll ---------- */
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

/* ---------- Hero parallax ---------- */
const dish = document.getElementById("heroDish");
if (!reduceMotion && window.matchMedia("(pointer: fine)").matches) {
  window.addEventListener("pointermove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;
    dish.style.transform = `translate(${x * 14}px, ${y * 10}px) rotate(${x * 3}deg)`;
  });
}

/* ---------- Embers ---------- */
(() => {
  if (reduceMotion) return;
  const c = document.getElementById("embers");
  const ctx = c.getContext("2d");
  let w, h, dpr;
  const parts = [];
  const resize = () => {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = c.width = innerWidth * dpr;
    h = c.height = innerHeight * dpr;
  };
  resize();
  addEventListener("resize", resize);
  const count = innerWidth < 700 ? 28 : 60;
  const spawn = (p = {}) => Object.assign(p, {
    x: Math.random() * w,
    y: h + Math.random() * h * 0.5,
    r: (Math.random() * 1.8 + 0.6) * dpr,
    vy: (Math.random() * 0.6 + 0.3) * dpr,
    drift: Math.random() * Math.PI * 2,
    life: Math.random() * 0.6 + 0.4,
    hue: 20 + Math.random() * 25,
  });
  for (let i = 0; i < count; i++) { const p = spawn(); p.y = Math.random() * h; parts.push(p); }
  const tick = () => {
    ctx.clearRect(0, 0, w, h);
    for (const p of parts) {
      p.y -= p.vy;
      p.drift += 0.02;
      p.x += Math.sin(p.drift) * 0.4 * dpr;
      const a = Math.max(0, Math.min(1, p.y / h)) * p.life;
      ctx.beginPath();
      ctx.fillStyle = `hsla(${p.hue}, 100%, 60%, ${a})`;
      ctx.shadowBlur = 8 * dpr;
      ctx.shadowColor = `hsla(${p.hue}, 100%, 50%, ${a})`;
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
      if (p.y < -10) spawn(p);
    }
    requestAnimationFrame(tick);
  };
  tick();
})();

document.getElementById("year").textContent = new Date().getFullYear();

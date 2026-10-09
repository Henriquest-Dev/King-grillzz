/* =========================================================
   Traduções (PT / EN)
   ========================================================= */
const I18N = {
  pt: {
    "nav.menu": "Menu", "nav.drinks": "Bebidas", "nav.experience": "Experiência", "nav.gallery": "Galeria",
    "nav.contact": "Contacto", "nav.reserve": "Reservar",
    "hero.kicker": "Forjado no fogo · Maputo", "hero.script": "Rei da Brasa", "hero.cta": "Ver Menu",
    "hero.lede": "Onde a brasa encontra o convívio. Do bife grelhado ao burger gigante, do marisco aos cocktails do after work — cada prato sai do fogo com carácter.",
    "from": "desde", "cat.grill": "Grelhados", "cat.chicken": "Frango",
    "menu.eyebrow": "A carta", "menu.title": "O Menu",
    "menu.note": "Preços em meticais (MTN), conforme publicados pela marca. Sujeitos a confirmação no restaurante.",
    "drinks.eyebrow": "Para brindar", "drinks.title": "Bebidas",
    "drinks.note": "Cocktails da casa e refrigerantes. Preços disponíveis no restaurante.",
    "prev": "Anterior", "next": "Seguinte",
    "show.reserve": "Reservar mesa", "show.order": "Pedir no WhatsApp", "show.tabList": "Pratos", "show.tabAbout": "Sobre",
    "show.dishes": "pratos", "show.food": "Comida", "show.rank": "Nº {n} · A carta", "show.from": "desde MTN {p}",
    "show.wa": "Olá King of the Grill! Gostaria de pedir da secção {c}.",
    "exp.eyebrow": "A experiência", "exp.title": "Brasa, mesa & convívio",
    "exp.text": "Mesas escuras, luz quente e o cheiro do grelhador. No King of the Grill do Baía Mall a comida chega ao centro da mesa para ser partilhada — e os jogos grandes passam no ecrã.",
    "exp.p1t": "Grelhador", "exp.p1": "Bifes, costelas, espetadas e frango peri-peri.",
    "exp.p2t": "Do mar", "exp.p2": "Camarão, lulas, kingklip, garoupa e salmão.",
    "exp.p3": "Cocktails frescos para fechar o dia.",
    "exp.p4t": "Transmissões", "exp.p4": "Futebol ao vivo na sala.",
    "gal.title": "Saído do fogo",
    "contact.eyebrow": "Reserve já a sua mesa", "contact.title": "A brasa está acesa.", "contact.city": "Maputo, Moçambique",
    "contact.wa": "Reservar por WhatsApp", "contact.call": "Ligar agora",
    "footer.rights": "Todos os direitos reservados.", "footer.credits": "Créditos das imagens das bebidas",
    marquee: ["Grelhados", "Burgers", "Marisco", "Pizzas", "Cocktails", "After Work"],
  },
  en: {
    "nav.menu": "Menu", "nav.drinks": "Drinks", "nav.experience": "Experience", "nav.gallery": "Gallery",
    "nav.contact": "Contact", "nav.reserve": "Book a table",
    "hero.kicker": "Fire forged · Maputo", "hero.script": "King of the Flame", "hero.cta": "See the Menu",
    "hero.lede": "Where the fire meets good company. From flame-grilled steaks to giant burgers, from seafood to after-work cocktails — every dish leaves the grill with character.",
    "from": "from", "cat.grill": "Grills", "cat.chicken": "Chicken",
    "menu.eyebrow": "The menu", "menu.title": "Our Menu",
    "menu.note": "Prices in meticais (MTN), as published by the brand. Subject to confirmation at the restaurant.",
    "drinks.eyebrow": "Raise a glass", "drinks.title": "Drinks",
    "drinks.note": "House cocktails and soft drinks. Prices available at the restaurant.",
    "prev": "Previous", "next": "Next",
    "show.reserve": "Book a table", "show.order": "Order on WhatsApp", "show.tabList": "Dishes", "show.tabAbout": "About",
    "show.dishes": "dishes", "show.food": "Food", "show.rank": "No. {n} · The menu", "show.from": "from MTN {p}",
    "show.wa": "Hello King of the Grill! I would like to order from the {c} section.",
    "exp.eyebrow": "The experience", "exp.title": "Fire, table & good company",
    "exp.text": "Dark tables, warm light and the smell of the grill. At King of the Grill Baía Mall, food lands in the middle of the table to be shared — and the big games play on the screen.",
    "exp.p1t": "The grill", "exp.p1": "Steaks, ribs, skewers and peri-peri chicken.",
    "exp.p2t": "From the sea", "exp.p2": "Prawns, calamari, kingklip, grouper and salmon.",
    "exp.p3": "Fresh cocktails to close the day.",
    "exp.p4t": "Live sports", "exp.p4": "Football live in the dining room.",
    "gal.title": "Straight off the fire",
    "contact.eyebrow": "Book your table", "contact.title": "The fire is lit.", "contact.city": "Maputo, Mozambique",
    "contact.wa": "Book via WhatsApp", "contact.call": "Call now",
    "footer.rights": "All rights reserved.", "footer.credits": "Drink image credits",
    marquee: ["Grills", "Burgers", "Seafood", "Pizzas", "Cocktails", "After Work"],
  },
};

let lang = "pt";
try { lang = localStorage.getItem("kotg-lang") === "en" ? "en" : "pt"; } catch (e) {}
const t = (v) => (typeof v === "string" ? v : v[lang]);
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* =========================================================
   Menu de comida — nomes e preços conforme thekingofthegrill.africa/menu-moz
   ========================================================= */
const MENU = [
  { name: { pt: "Grelhados", en: "Grills" }, sub: { pt: "Do grelhador", en: "From the grill" }, theme: "#c8202a", img: "assets/dishes/steak.webp", items: [
    ["beef skewer", "1150"], ["beef rib rack", "1450"], ["t-bone steak", "1350"], ["ribeye steak", "1350"],
    ["pork spare ribs", "1450"], ["grilled lamb chops", "1350"], ["rump steak", "1150"], ["fillet steak", "1180"],
    ["ladies fillet steak", "950"], ["gourmet mignon fillet", "1260"], ["rich & tender lamb shank", "1460"],
    ["souvlaki short ribs", "1460"], ["king's black forest", "1650"], ["the king's plate", "1650"], ["chicken & rib combo", "1350"],
  ]},
  { name: { pt: "Frango", en: "Chicken" }, sub: { pt: "Peri-peri & crocante", en: "Peri-peri & crispy" }, theme: "#e0612a", img: "assets/dishes/crispy-wings.webp", items: [
    ["portuguese peri-peri chicken", "940"], ["grilled chicken", "550 / 980"], ["zambezian chicken", "550 / 920"],
    ["crispy fried chicken", "650 / 1160"], ["crispy cheesy chicken breasts", "860"], ["chicken espetada", "960"],
    ["king's wings", "950"], ["grilled wings", "560"], ["king's double chicken", "1350"],
  ]},
  { name: { pt: "Burgers", en: "Burgers" }, sub: { pt: "Feitos na brasa", en: "Flame-grilled" }, theme: "#e9a72c", img: "assets/dishes/burger.webp", items: [
    ["king of the grill", "650"], ["cheese burger", "550"], ["chicken burger", "550"], ["single crispy", "600"],
    ["bacon cheese burger", "650"], ["bacon, avo & cream cheese", "650"], ["double fried chicken burger", "650"],
    ["giant cheese burger", "850"], ["king's double beef", "1350"],
  ]},
  { name: { pt: "Do Mar", en: "Seafood" }, sub: { pt: "Marisco & peixe", en: "Shellfish & fish" }, theme: "#2e8a8f", img: "assets/dishes/calamari.webp", items: [
    ["lula's calamari heads", "980"], ["red fish", "1560"], ["garopa fish", "1640"], ["12 queen prawns", "1660"],
    ["6 prawns & calamari", "1950"], ["coconut crabs with rice", "1250"], ["kingklip fillet", "1150"],
    ["grilled salmon fillet", "1248"], ["seafood platter", "1360"], ["rice ala paella", "980"],
  ]},
  { name: { pt: "Entradas", en: "Starters" }, sub: { pt: "Para partilhar", en: "To share" }, theme: "#c2562e", img: "assets/img/06_capa_reel.webp", round: true, items: [
    ["3 wings", "230"], ["calamari", "650"], ["chicken livers", "460"], ["butternut soup", "350"],
    ["chicken gizzards", "600"], ["focaccia", "450"], ["creamy mussels", "550"], ["chicken strips", "550"],
    ["half-moon prawns", "230"], ["calamari squid heads", "600"], ["chorizo with peri-peri", "450"],
    ["caldo verde", "480"], ["haloumi with bacon", "550"], ["creamy snails", "550"], ["beef or fish samoosa", "230"],
  ]},
  { name: { pt: "Pizzas", en: "Pizzas" }, sub: { pt: "Do forno", en: "From the oven" }, theme: "#d9822b", img: "assets/dishes/pizza.webp", items: [
    ["margarita", "450"], ["veggie", "650"], ["bacon & chorizo", "750"], ["chicken & mushroom", "750"],
    ["mexicana", "830"], ["beef santorini", "850"], ["king's picnic pizza", "860"], ["king's fusion pizza", "860"],
    ["macon salami beef pizza", "890"], ["seafood", "950"],
  ]},
  { name: { pt: "Massas", en: "Pasta" }, sub: { pt: "Clássicos da casa", en: "House classics" }, theme: "#b98a3e", img: "assets/img/kitchen-pass.webp", round: true, items: [
    ["traditional bolognaise", "690"], ["spaghetti & meatballs", "690"], ["creamy alfredo", "750"], ["al pollo", "750"],
    ["vegetarian pasta", "750"], ["creamy chicken pasta", "780"], ["beef lasagne", "860"], ["chicken liver pasta", "860"],
    ["bistecca pasta", "990"], ["seafood extravaganza pasta", "990"],
  ]},
  { name: { pt: "Caril", en: "Curries" }, sub: { pt: "& guisados", en: "& stews" }, theme: "#c4452f", img: "assets/img/steak-veg.webp", round: true, items: [
    ["beef stew", "1160"], ["lamb curry", "1260"], ["prawn curry", "1350"], ["lamb neck", "1350"],
  ]},
  { name: { pt: "Saladas", en: "Salads" }, sub: { pt: "Frescas", en: "Fresh" }, theme: "#6f9a3c", img: "assets/img/steak-salad.webp", round: true, items: [
    ["greek salad", "550"], ["chicken salad", "600"], ["prawn salad", "800"],
  ]},
  { name: { pt: "Pequeno-almoço", en: "Breakfast" }, sub: { pt: "& omeletes", en: "& omelettes" }, theme: "#e3b04a", img: "assets/img/burger-beer.webp", round: true, items: [
    ["country early bird", "430"], ["king's cheese griller", "480"], ["french toast", "530"], ["farmhouse", "590"],
    ["eggs benedict", "630"], ["full house", "650"], ["omelette plain", "340"], ["omelette mince & cheddar", "480"],
    ["omelette ham, tomato & cheddar", "490"], ["omelette bacon, mushroom & mozzarella", "490"], ["omelette pizza", "560"],
  ]},
  { name: { pt: "Sandes", en: "Sandwiches" }, sub: { pt: "Pregos & tostas", en: "Pregos & toasties" }, theme: "#b8382c", img: "assets/dishes/burger.webp", items: [
    ["200g prego", "620"], ["200g sirloin sandwich", "790"], ["bacon, egg & cheese", "690"], ["chicken", "690"],
    ["beef", "690"], ["prawn & avo", "790"], ["bacon & cheese toastie", "340"], ["cheese & tomato toastie", "420"],
    ["bacon, egg & cheese toastie", "430"], ["ham, cheese & tomato toastie", "430"], ["bacon, avo & halloumi", "456"],
    ["chicken mayo", "460"], ["tuna mayo", "490"],
  ]},
  { name: { pt: "Kids", en: "Kids" }, sub: { pt: "Para os pequenos", en: "For the little ones" }, theme: "#d0566a", img: "assets/dishes/pizza.webp", items: [
    ["kiddies hotdog", "330"], ["mac 'n cheese", "330"], ["scrambled eggs & toast", "350"], ["fish fingers & chips", "360"],
    ["kiddies breakfast", "420"], ["grilled or fried chicken strips", "420"], ["kiddies bolognaise", "420"],
  ]},
];

// Texto do separador "Sobre" de cada categoria (mesma ordem do MENU)
const ABOUT = [
  { pt: "Cortes de vaca, borrego e porco no grelhador a carvão, servidos para partilhar ou a solo.", en: "Beef, lamb and pork cuts on the charcoal grill, served to share or on your own." },
  { pt: "Frango peri-peri à portuguesa, zambeziano, grelhado ou crocante — em dose individual ou para a mesa.", en: "Portuguese peri-peri, Zambezian, grilled or crispy chicken — single portions or for the table." },
  { pt: "Burgers montados na hora, do clássico de queijo ao gigante da casa.", en: "Burgers built to order, from the classic cheeseburger to the house giant." },
  { pt: "Lulas, camarão, caranguejo, peixe grelhado e a travessa de marisco.", en: "Calamari, prawns, crab, grilled fish and the seafood platter." },
  { pt: "Petiscos para abrir a mesa: asas, moelas, fígados, mexilhões e sopas.", en: "Small plates to open the table: wings, gizzards, livers, mussels and soups." },
  { pt: "Pizzas do forno, da margarita às receitas da casa.", en: "Oven pizzas, from the margarita to the house recipes." },
  { pt: "Massas clássicas e cremosas, com carne, frango, marisco ou vegetarianas.", en: "Classic and creamy pastas with beef, chicken, seafood or vegetarian." },
  { pt: "Caril e guisados de cozedura lenta.", en: "Slow-cooked curries and stews." },
  { pt: "Saladas frescas com frango ou camarão.", en: "Fresh salads with chicken or prawns." },
  { pt: "Pequenos-almoços completos e omeletes.", en: "Full breakfasts and omelettes." },
  { pt: "Pregos, tostas e sandes para qualquer hora.", en: "Pregos, toasties and sandwiches for any time." },
  { pt: "Pratos pensados para os mais novos.", en: "Dishes made for the little ones." },
];

/* =========================================================
   Bebidas — fotos dos refrigerantes do Wikimedia Commons (créditos no rodapé); SVG para a água e as decorações
   ========================================================= */
const SVG = {
  slice: (rind, flesh, seg) => `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="48" fill="${rind}"/><circle cx="50" cy="50" r="42" fill="#fffbe8"/><circle cx="50" cy="50" r="39" fill="${flesh}"/>${
    Array.from({ length: 8 }, (_, i) => `<path d="M50 50 L${50 + 36 * Math.cos(i * Math.PI / 4 + .12)} ${50 + 36 * Math.sin(i * Math.PI / 4 + .12)} A36 36 0 0 1 ${50 + 36 * Math.cos((i + 1) * Math.PI / 4 - .12)} ${50 + 36 * Math.sin((i + 1) * Math.PI / 4 - .12)} Z" fill="${seg}"/>`).join("")
  }<circle cx="50" cy="50" r="4" fill="#fffbe8"/></svg>`,
  mint: () => `<svg viewBox="0 0 100 100"><path d="M50 95 C20 70 12 35 50 5 C88 35 80 70 50 95Z" fill="#4f9a45"/><path d="M50 92 V12" stroke="#2f6e2c" stroke-width="3"/>${[25, 40, 55, 70].map((y) => `<path d="M50 ${y + 10} L32 ${y}M50 ${y + 10} L68 ${y}" stroke="#2f6e2c" stroke-width="2"/>`).join("")}</svg>`,
  strawberry: () => `<svg viewBox="0 0 100 100"><path d="M50 95 C20 80 8 50 18 32 C30 20 70 20 82 32 C92 50 80 80 50 95Z" fill="#e0384a"/>${[[35, 45], [50, 40], [65, 45], [42, 60], [58, 60], [50, 75], [30, 58], [70, 58]].map(([x, y]) => `<ellipse cx="${x}" cy="${y}" rx="2" ry="3" fill="#ffe08a"/>`).join("")}<path d="M50 30 L30 18 L42 26 L36 8 L50 22 L64 8 L58 26 L70 18Z" fill="#3f8f3a"/></svg>`,
  berries: () => `<svg viewBox="0 0 100 100">${[[35, 55, 20, "#8e2a4f"], [62, 48, 18, "#a8325c"], [52, 72, 16, "#6e1f3f"]].map(([x, y, r, c]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${c}"/><circle cx="${x - r / 3}" cy="${y - r / 3}" r="${r / 4}" fill="#fff" opacity=".35"/>`).join("")}<path d="M60 30 C55 20 45 18 40 22" stroke="#3f8f3a" stroke-width="3" fill="none"/></svg>`,
  ice: () => `<svg viewBox="0 0 100 100"><rect x="14" y="14" width="72" height="72" rx="14" fill="#e8f5fb" opacity=".9" transform="rotate(12 50 50)"/><rect x="24" y="22" width="22" height="10" rx="5" fill="#fff" transform="rotate(12 50 50)"/><rect x="14" y="14" width="72" height="72" rx="14" fill="none" stroke="#b9dcea" stroke-width="3" transform="rotate(12 50 50)"/></svg>`,
  bubbles: () => `<svg viewBox="0 0 100 100" fill="none" stroke="#fff" stroke-width="3" opacity=".9">${[[30, 70, 14], [62, 48, 20], [40, 26, 9], [78, 80, 8]].map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r}"/>`).join("")}</svg>`,
  bottle: () => `<svg viewBox="0 0 120 230" role="img" aria-label="Água"><path d="M48 6 H72 V30 C72 40 96 48 96 74 V208 C96 218 88 224 78 224 H42 C32 224 24 218 24 208 V74 C24 48 48 40 48 30Z" fill="#d7eef7" stroke="#9fcbe0" stroke-width="3"/><rect x="46" y="2" width="28" height="14" rx="3" fill="#2f7fb0"/><rect x="24" y="110" width="72" height="56" fill="#2f7fb0"/><text x="60" y="144" fill="#fff" font-family="Fraunces, Georgia, serif" font-weight="900" font-size="18" text-anchor="middle">ÁGUA</text><path d="M34 80 V200" stroke="#fff" stroke-width="5" opacity=".6" stroke-linecap="round"/></svg>`,
};
const lime = () => SVG.slice("#5f9e32", "#cfe58a", "#b6d65f");
const lemon = () => SVG.slice("#f2c230", "#fff2a8", "#f7e070");
const orange = () => SVG.slice("#ef8a1f", "#ffc879", "#ffb04d");

// Nomes dos cocktails a confirmar com o restaurante (fotos do Instagram @kingofthegrill_baia).
const SODA = { pt: ["330 ml", "Lata", "Bem gelada"], en: ["330 ml", "Can", "Ice cold"] };
const COCKTAIL = { pt: ["Cocktail", "Feito na hora"], en: ["Cocktail", "Made to order"] };
const DRINKS = [
  { name: "Mojito", sub: { pt: "Cocktail", en: "Cocktail" }, theme: "#a7ad50", img: "assets/drinks/mojito.webp", g: [lime, SVG.mint], tags: COCKTAIL,
    desc: { pt: "Hortelã fresca, lima e gelo picado. O clássico para refrescar.", en: "Fresh mint, lime and crushed ice. The classic refresher." } },
  { name: { pt: "Mojito Morango", en: "Strawberry Mojito" }, sub: { pt: "Cocktail", en: "Cocktail" }, theme: "#e06aa6", img: "assets/drinks/morango.webp", g: [SVG.strawberry, SVG.mint], tags: COCKTAIL,
    desc: { pt: "O mojito com morango fresco e um toque de laranja.", en: "The mojito with fresh strawberry and a hint of orange." } },
  { name: { pt: "Frutos Vermelhos", en: "Berry Lemonade" }, sub: { pt: "Limonada", en: "Cocktail" }, theme: "#ad97cf", img: "assets/drinks/frutos.webp", g: [lemon, SVG.berries], tags: COCKTAIL,
    desc: { pt: "Frutos vermelhos, limão e hortelã num copo alto.", en: "Red berries, lemon and mint in a tall glass." } },
  { name: { pt: "Frozen Manga", en: "Mango Frozen" }, sub: { pt: "Frozen", en: "Frozen" }, theme: "#e8bd45", img: "assets/drinks/frozen.webp", g: [orange, lime], tags: COCKTAIL,
    desc: { pt: "Manga batida com gelo, servida em taça.", en: "Mango blended with ice, served in a coupe." } },
  { name: "Coca-Cola", sub: { pt: "Original", en: "Original taste" }, theme: "#d83c3a", img: "assets/drinks/coca-cola.webp", g: [SVG.ice, lemon], tags: SODA,
    desc: { pt: "O sabor original, bem gelado, para acompanhar o grelhado.", en: "The original taste, ice cold, to go with the grill." } },
  { name: "Coca-Cola Zero", sub: { pt: "Zero açúcar", en: "Zero sugar" }, theme: "#3a3434", img: "assets/drinks/coca-cola-zero.webp", g: [SVG.ice, lime], tags: SODA,
    desc: { pt: "O sabor Coca-Cola sem açúcar.", en: "Coca-Cola taste with zero sugar." } },
  { name: "Pepsi", sub: { pt: "Cola", en: "Cola" }, theme: "#2f62c0", img: "assets/drinks/pepsi.webp", g: [SVG.ice, SVG.bubbles], tags: SODA,
    desc: { pt: "Cola fresca com bolhas finas.", en: "Crisp cola with fine bubbles." } },
  { name: "Fanta", sub: { pt: "Laranja", en: "Orange" }, theme: "#f08d2b", img: "assets/drinks/fanta.webp", g: [orange, SVG.ice], tags: SODA,
    desc: { pt: "Laranja com gás, doce e frutada.", en: "Fizzy orange, sweet and fruity." } },
  { name: "Sprite", sub: { pt: "Lima-limão", en: "Lemon-lime" }, theme: "#45a865", img: "assets/drinks/sprite.webp", g: [lime, SVG.ice], tags: SODA,
    desc: { pt: "Lima-limão leve e refrescante.", en: "Light and refreshing lemon-lime." } },
  { name: "Schweppes", sub: { pt: "Pink tónica · zero", en: "Pink tonic · zero" }, theme: "#e889ad", img: "assets/drinks/schweppes.webp", g: [SVG.berries, SVG.ice], tags: SODA,
    desc: { pt: "Água tónica rosa, sem açúcar, com notas de frutos vermelhos.", en: "Pink tonic water, zero sugar, with red berry notes." } },
  { name: { pt: "Água", en: "Water" }, sub: { pt: "Mineral", en: "Mineral" }, theme: "#86bfd6", svg: () => SVG.bottle(), g: [SVG.ice, SVG.bubbles],
    tags: { pt: ["Sem gás", "Com gás"], en: ["Still", "Sparkling"] },
    desc: { pt: "Água mineral, natural ou com gás.", en: "Mineral water, still or sparkling." } },
];

/* =========================================================
   Carrossel em roda (modelo do vídeo de referência)
   ========================================================= */
function inkFor(hex) {
  const n = parseInt(hex.slice(1), 16);
  const l = (0.299 * (n >> 16) + 0.587 * ((n >> 8) & 255) + 0.114 * (n & 255)) / 255;
  return l > 0.62 ? "#1a0b0b" : "#fff";
}

function createWheel(root, items, { onChange, autoplay } = {}) {
  const stage = root.querySelector(".wheel__stage");
  const ring = root.querySelector(".wheel__ring");
  const title = root.querySelector(".wheel__title");
  const nameEl = root.querySelector(".wheel__name");
  const subEl = root.querySelector(".wheel__sub");
  const countEl = root.querySelector(".wheel__count");
  const chipsEl = root.querySelector(".wheel__chips");
  const garnish = [...root.querySelectorAll(".wheel__garnish")];
  const info = root.querySelector(".wheel__info");
  const N = items.length;
  let cur = 0;
  let timer = null;

  const nodes = items.map((it) => {
    const n = document.createElement("div");
    n.className = "wheel__item";
    if (it.svg) n.innerHTML = it.svg();
    else {
      const img = document.createElement("img");
      img.src = it.img; img.alt = ""; img.decoding = "async";
      if (it.round) img.className = "is-round";
      if (it.wide) img.className = "is-wide";
      if (it.plate) n.insertAdjacentHTML("beforeend", '<span class="wheel__plate"></span>');
      n.appendChild(img);
    }
    ring.appendChild(n);
    return n;
  });

  const chips = items.map((it, i) => {
    const c = document.createElement("button");
    c.type = "button"; c.className = "wheel__chip"; c.setAttribute("role", "tab");
    c.innerHTML = `<span class="wheel__chip-img">${it.svg ? it.svg() : `<img src="${it.img}" alt="" loading="lazy">`}</span><span class="wheel__chip-name"></span>`;
    c.addEventListener("click", () => { stop(); go(i); });
    chipsEl.appendChild(c);
    return c;
  });

  function fitTitle() {
    const len = nameEl.textContent.length;
    const max = ring.offsetTop * 2 * 0.86; // altura da área da roda (o anel está a meio)
    const px = Math.min(parseFloat(getComputedStyle(nameEl).getPropertyValue("--max")) || 96, max / (len * 0.58));
    nameEl.style.fontSize = Math.max(28, px) + "px";
  }

  function setLabels() {
    const it = items[cur];
    nameEl.textContent = t(it.name);
    subEl.textContent = t(it.sub);
    fitTitle();
    chips.forEach((c, i) => { c.querySelector(".wheel__chip-name").textContent = t(items[i].name); });
    if (info) {
      info.querySelector(".wheel__index").textContent = String(cur + 1).padStart(2, "0");
      info.querySelector(".wheel__desc").textContent = it.desc ? t(it.desc) : "";
      info.querySelector(".wheel__tags").innerHTML = it.tags ? t(it.tags).map((x) => `<li>${x}</li>`).join("") : "";
    }
  }

  function go(i, instant = false) {
    cur = (i + N) % N;
    const it = items[cur];
    root.style.setProperty("--theme", it.theme);
    root.style.setProperty("--ink", inkFor(it.theme));

    nodes.forEach((n, k) => {
      let d = (k - cur + N) % N;
      if (d > N / 2) d -= N;
      const far = Math.abs(d) > 1;
      n.classList.toggle("is-far", far);
      n.style.setProperty("--a", far ? (d > 0 ? -180 : 180) + "deg" : -d * 90 + "deg");
    });

    chips.forEach((c, k) => {
      c.setAttribute("aria-selected", k === cur);
      c.tabIndex = k === cur ? 0 : -1;
    });
    const chip = chips[cur];
    chipsEl.scrollTo({ left: chip.offsetLeft - chipsEl.clientWidth / 2 + chip.clientWidth / 2, behavior: instant || reduceMotion ? "auto" : "smooth" });
    countEl.textContent = `${String(cur + 1).padStart(2, "0")} / ${String(N).padStart(2, "0")}`;

    const swap = () => {
      setLabels();
      garnish.forEach((g, gi) => { g.innerHTML = it.g ? it.g[gi]() : ""; });
      onChange && onChange(it);
    };
    if (instant || reduceMotion) { swap(); return; }
    title.classList.add("is-swapping");
    info && info.classList.add("is-swapping");
    garnish.forEach((g) => g.classList.add("is-swapping"));
    setTimeout(() => {
      swap();
      title.classList.remove("is-swapping");
      info && info.classList.remove("is-swapping");
      garnish.forEach((g) => g.classList.remove("is-swapping"));
    }, 420);
  }

  root.querySelectorAll(".wheel__nav").forEach((b) => b.addEventListener("click", () => { stop(); go(cur + Number(b.dataset.dir)); }));
  chipsEl.addEventListener("keydown", (e) => {
    const dir = { ArrowRight: 1, ArrowLeft: -1 }[e.key];
    if (!dir) return;
    e.preventDefault(); stop(); go(cur + dir); chips[cur].focus();
  });

  // Swipe no palco
  let sx = null, sy = null;
  stage.addEventListener("pointerdown", (e) => { sx = e.clientX; sy = e.clientY; });
  stage.addEventListener("pointerup", (e) => {
    if (sx === null) return;
    const dx = e.clientX - sx, dy = e.clientY - sy;
    sx = null;
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) { stop(); go(cur + (dx < 0 ? 1 : -1)); }
  });

  // Autoplay enquanto estiver visível; pára quando o utilizador interage
  function stop() { clearInterval(timer); timer = null; autoplay = false; }
  if (autoplay && !reduceMotion) {
    new IntersectionObserver(([e]) => {
      clearInterval(timer); timer = null;
      if (e.isIntersecting && autoplay) timer = setInterval(() => go(cur + 1), autoplay);
    }, { threshold: 0.5 }).observe(stage);
    stage.addEventListener("pointerenter", () => { clearInterval(timer); timer = null; });
    stage.addEventListener("pointerleave", () => { if (autoplay && !timer) timer = setInterval(() => go(cur + 1), autoplay); });
  }

  addEventListener("resize", fitTitle);
  go(0, true);
  return { refresh: setLabels };
}

/* =========================================================
   Vitrine do menu de comida (modelo do vídeo "UI/UX Bunker")
   ========================================================= */
function createShowcase(root, items) {
  const plateBox = root.querySelector(".show__plate");
  const rank = root.querySelector(".show__rank");
  const lines = [...root.querySelectorAll(".show__line")];
  const track = root.querySelector(".show__track");
  const badge = root.querySelector(".show__badge b");
  const cat = root.querySelector(".show__cat");
  const from = root.querySelector(".show__from");
  const list = root.querySelector(".show__list");
  const about = root.querySelector(".show__about");
  const inner = root.querySelector(".show__card-inner");
  const order = root.querySelector("#showOrder");
  const tabs = [...root.querySelectorAll(".show__tab")];
  const N = items.length;
  let cur = 0;

  const plateHTML = (it) => `<span class="plate"></span><img src="${it.img}" alt="" class="${it.round ? "is-round" : ""}" decoding="async">`;
  const minPrice = (it) => Math.min(...it.items.map(([, p]) => parseInt(p, 10)));

  const thumbs = items.map((it, i) => {
    const b = document.createElement("button");
    b.type = "button"; b.className = "show__thumb"; b.setAttribute("role", "tab");
    b.innerHTML = `<span class="show__thumb-plate">${plateHTML(it)}</span><span class="show__thumb-name"></span>`;
    b.addEventListener("click", () => go(i));
    track.appendChild(b);
    return b;
  });

  function setText(animate) {
    const it = items[cur];
    rank.textContent = I18N[lang]["show.rank"].replace("{n}", String(cur + 1).padStart(2, "0"));
    [t(it.sub), t(it.name)].forEach((txt, k) => {
      const span = document.createElement("span");
      span.textContent = txt;
      if (animate) span.style.animationDelay = k * 90 + "ms";
      else span.style.animation = "none";
      lines[k].replaceChildren(span);
    });
    badge.textContent = it.items.length;
    cat.textContent = t(it.name);
    from.textContent = I18N[lang]["show.from"].replace("{p}", minPrice(it));
    about.textContent = t(ABOUT[cur]);
    order.href = "https://wa.me/258853015130?text=" + encodeURIComponent(I18N[lang]["show.wa"].replace("{c}", t(it.name)));
    thumbs.forEach((b, i) => { b.querySelector(".show__thumb-name").textContent = t(items[i].name); });
  }

  function renderList(it) {
    list.innerHTML = it.items.map(([name, price], i) => `
      <li class="menu__item" style="--i:${i}">
        <span class="menu__name">${name}</span>
        <span class="menu__dots" aria-hidden="true"></span>
        <span class="menu__price"><small>MTN</small>${price}</span>
      </li>`).join("");
    list.scrollTop = 0;
  }

  function go(i, instant = false) {
    const prev = cur;
    cur = (i + N) % N;
    const it = items[cur];
    root.style.setProperty("--theme", it.theme);
    root.style.setProperty("--ink", inkFor(it.theme));

    // Prato: o atual sai a rodar por cima, o novo cai a rodar no lugar
    const dir = cur >= prev ? 1 : -1;
    plateBox.querySelectorAll(".show__dish").forEach((old) => {
      if (instant || reduceMotion) return old.remove();
      old.style.setProperty("--dir", dir);
      old.classList.add("is-out");
      old.addEventListener("animationend", () => old.remove(), { once: true });
    });
    const d = document.createElement("div");
    d.className = "show__dish" + (instant || reduceMotion ? "" : " is-in");
    d.style.setProperty("--dir", dir);
    d.innerHTML = plateHTML(it);
    plateBox.appendChild(d);

    thumbs.forEach((b, k) => { b.setAttribute("aria-selected", k === cur); b.tabIndex = k === cur ? 0 : -1; });
    const tb = thumbs[cur];
    track.scrollTo({ left: tb.offsetLeft - track.clientWidth / 2 + tb.clientWidth / 2, behavior: instant || reduceMotion ? "auto" : "smooth" });

    if (!instant && !reduceMotion) {
      inner.classList.remove("is-in"); void inner.offsetWidth; inner.classList.add("is-in");
    }
    setText(!instant);
    renderList(it);
  }

  tabs.forEach((tab) => tab.addEventListener("click", () => {
    const showList = tab.dataset.tab === "list";
    tabs.forEach((x) => x.setAttribute("aria-selected", x === tab));
    list.hidden = !showList;
    about.hidden = showList;
  }));
  root.querySelectorAll(".show__nav").forEach((b) => b.addEventListener("click", () => go(cur + Number(b.dataset.dir))));
  track.addEventListener("keydown", (e) => {
    const dir = { ArrowRight: 1, ArrowLeft: -1 }[e.key];
    if (!dir) return;
    e.preventDefault(); go(cur + dir); thumbs[cur].focus();
  });
  let sx = null;
  plateBox.addEventListener("pointerdown", (e) => { sx = e.clientX; });
  addEventListener("pointerup", (e) => {
    if (sx === null) return;
    const dx = e.clientX - sx; sx = null;
    if (Math.abs(dx) > 40) go(cur + (dx < 0 ? 1 : -1));
  });

  go(0, true);
  return { refresh: () => setText(false) };
}

const foodShow = createShowcase(document.getElementById("foodShow"), MENU);
const drinkWheel = createWheel(document.getElementById("drinkWheel"), DRINKS, { autoplay: 3800 });

/* =========================================================
   Idioma
   ========================================================= */
function applyLang(l) {
  lang = l;
  try { localStorage.setItem("kotg-lang", l); } catch (e) {}
  document.documentElement.lang = l;
  const dict = I18N[l];
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const v = dict[el.dataset.i18n];
    if (v) el.textContent = v;
  });
  document.querySelectorAll(".lang__btn").forEach((b) => b.setAttribute("aria-pressed", b.dataset.lang === l));
  const words = dict.marquee.map((w) => `<span>${w}</span><i>✦</i>`).join("");
  document.getElementById("marquee").innerHTML = words + words;
  foodShow.refresh();
  drinkWheel.refresh();
}
document.querySelectorAll(".lang__btn").forEach((b) => b.addEventListener("click", () => applyLang(b.dataset.lang)));
applyLang(lang);

/* =========================================================
   Nav, reveal, parallax, brasas
   ========================================================= */
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

const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

const dish = document.getElementById("heroDish");
if (!reduceMotion && window.matchMedia("(pointer: fine)").matches) {
  window.addEventListener("pointermove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;
    dish.style.transform = `translate(${x * 14}px, ${y * 10}px) rotate(${x * 3}deg)`;
  });
}

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

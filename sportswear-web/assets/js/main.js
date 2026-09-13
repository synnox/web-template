/* ── TEMPLATE E-COMMERCE SPORTSWEAR (générique) ───────────────────────
   Toutes les données produits + la logique du shop se trouvent ici.
   Pour personnaliser le template : éditez la liste PRODUCTS ci-dessous
   (nom, prix, image, badge, catégorie…). Rien d'autre à modifier.      */

(function () {
  'use strict';

  /* ══ CATALOGUE PRODUITS ═══════════════════════════════════════════ */
  const img = (n) => 'assets/images/' + n;

  const COLORS = {
    Noir: '#17181a',
    Blanc: '#f4f2ee',
    'Vert forêt': '#1e7a5e',
    Terracotta: '#b4552d',
    Gris: '#9ea1a4',
    'Bleu nuit': '#26324a',
    Sable: '#d9c7a7',
    Framboise: '#a3244b'
  };

  const CATDESC = {
    'Catégorie 1': 'Description générique du produit. Personnalisez ce texte directement dans main.js.',
    'Catégorie 2': 'Description générique du produit. Personnalisez ce texte directement dans main.js.',
    'Catégorie 3': 'Description générique du produit. Personnalisez ce texte directement dans main.js.',
    'Catégorie 4': 'Description générique du produit. Personnalisez ce texte directement dans main.js.',
    'Catégorie 5': 'Description générique du produit. Personnalisez ce texte directement dans main.js.'
  };

  // badge : 'sale' | 'new' | 'top' | ''
  const PRODUCTS = [
    { id: 1,  name: '[[Produit 1]]',          cat: 'Catégorie 1', price: 49.9, old: 59.9, img: img('image7.jpg'),  badge: 'sale', isNew: true, top: true, sales: 2310, colors: ['Noir', 'Blanc', 'Vert'] },
    { id: 2,  name: '[[Produit 2]]',          cat: 'Catégorie 2', price: 34.9, old: 0,    img: img('image8.jpg'),  badge: 'new', isNew: true, top: false, sales: 1240, colors: ['Noir', 'Blanc', 'Rose'] },
    { id: 3,  name: '[[Produit 3]]',          cat: 'Catégorie 3', price: 79.9, old: 95,  img: img('image9.jpg'),  badge: 'sale', isNew: false, top: true, sales: 1980, colors: ['Noir', 'Blanc'] },
    { id: 4,  name: '[[Produit 4]]',          cat: 'Catégorie 4', price: 29.9, old: 0,    img: img('image10.jpg'), badge: 'new', isNew: true, top: false, sales: 870,  colors: ['Sable', 'Noir'] },
    { id: 5,  name: '[[Produit 5]]',          cat: 'Catégorie 5', price: 69.9, old: 0,    img: img('image11.jpg'), badge: 'top', isNew: false, top: true, sales: 1510, colors: ['Noir', 'Bleu'] },
    { id: 6,  name: '[[Produit 6]]',          cat: 'Catégorie 1', price: 49.9, old: 0,    img: img('image12.jpg'), badge: 'new', isNew: true, top: false, sales: 2010, colors: ['Noir', 'Blanc', 'Gris'] },
    { id: 7,  name: '[[Produit 7]]',          cat: 'Catégorie 2', price: 32.9, old: 0,    img: img('image13.jpg'), badge: 'top', isNew: false, top: true, sales: 1400, colors: ['Noir', 'Blanc'] },
    { id: 8,  name: '[[Produit 8]]',          cat: 'Catégorie 3', price: 84.9, old: 0,    img: img('image14.jpg'), badge: 'new', isNew: true, top: false, sales: 760,  colors: ['Noir', 'Bleu'] },
    { id: 9,  name: '[[Produit 9]]',          cat: 'Catégorie 4', price: 27.9, old: 0,    img: img('image15.jpg'), badge: 'top', isNew: false, top: true, sales: 1130, colors: ['Blanc', 'Noir'] },
    { id: 10, name: '[[Produit 10]]',         cat: 'Catégorie 5', price: 74.9, old: 0,    img: img('image16.jpg'), badge: 'new', isNew: true, top: false, sales: 640,  colors: ['Noir', 'Gris'] },
    { id: 11, name: '[[Produit 11]]',         cat: 'Catégorie 1', price: 44.9, old: 0,    img: img('image17.jpg'), badge: 'top', isNew: false, top: true, sales: 1670, colors: ['Noir', 'Blanc', 'Vert'] },
    { id: 12, name: '[[Produit 12]]',         cat: 'Catégorie 2', price: 29.9, old: 0,    img: img('image18.jpg'), badge: 'new', isNew: true, top: false, sales: 520,  colors: ['Noir', 'Rose'] },
    { id: 13, name: '[[Produit 13]]',         cat: 'Catégorie 3', price: 89.9, old: 0, img: img('assets_74024d7be33d4bbd8808e0788c7710b5_68ad86724b574bf6ac0f-20da5771.webp'), badge: 'top', isNew: false, top: true, sales: 1750, colors: ['Noir', 'Blanc'] },
    { id: 14, name: '[[Produit 14]]',         cat: 'Catégorie 4', price: 24.9, old: 0,    img: img('assets_74024d7be33d4bbd8808e0788c7710b5_68ad86724b574bf6ac0f-2ba7fa75.jpg'), badge: 'new', isNew: true, top: false, sales: 480,  colors: ['Noir', 'Blanc', 'Bleu'] },
    { id: 15, name: '[[Produit 15]]',         cat: 'Catégorie 5', price: 94.9, old: 0,    img: img('assets_74024d7be33d4bbd8808e0788c7710b5_03133e8e0db34b7da04c-b6e86932.webp'), badge: 'top', isNew: false, top: true, sales: 1320, colors: ['Noir', 'Gris'] },
    { id: 16, name: '[[Produit 16]]',         cat: 'Catégorie 1', price: 54.9, old: 0,    img: img('assets_74024d7be33d4bbd8808e0788c7710b5_03133e8e0db34b7da04c-94423d32.webp'), badge: 'new', isNew: true, top: false, sales: 1560, colors: ['Noir', 'Blanc', 'Terracotta'] }
  ];

  const SIZES = ['XS', 'S', 'M', 'L', 'XL'];
  const CART_ELS = { body: null, footer: null, empty: null };
  const FREE_SHIP = 60;
  const SHIP_COST = 4.9;

  // Note moyenne (étoiles) — à personnaliser dans votre catalogue
  const RATING = { 1: 4.9, 2: 4.6, 3: 4.8, 4: 4.4, 5: 4.7, 6: 4.9, 7: 4.8, 8: 4.5, 9: 4.6, 10: 4.7, 11: 4.8, 12: 4.5, 13: 4.9, 14: 4.3, 15: 4.7, 16: 4.8 };

  let cart = load('volt_cart', {});
  let wish = new Set(load('volt_wish', []));
  let currentProduct = null;

  /* ══ PERSISTANCE (localStorage) ═══════════════════════════════════ */
  function load(key, fallback) {
    try { return JSON.parse(localStorage.getItem(key)) ?? fallback; }
    catch (e) { return fallback; }
  }
  function save(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) {}
  }

  /* ══ OUTILS ═══════════════════════════════════════════════════════ */
  const $ = (s, c) => (c || document).querySelector(s);
  const $$ = (s, c) => Array.from((c || document).querySelectorAll(s));
  const fmt = (n) => n.toFixed(2).replace('.', ',') + ' €';

  function showToast(msg) {
    const t = $('#toast');
    if (!t) return;
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(t._timer);
    t._timer = setTimeout(() => t.classList.remove('show'), 2500);
  }

  function badgeHtml(p) {
    if (p.badge === 'sale') return '<span class="badge badge-sale">−20 %</span>';
    if (p.badge === 'new') return '<span class="badge badge-new">Nouveau</span>';
    if (p.badge === 'top') return '<span class="badge badge-top">Best-seller</span>';
    return '';
  }

  function priceHtml(p) {
    const old = p.old > p.price ? '<span class="price-before">' + fmt(p.old) + '</span>' : '';
    return '<span class="price-now">' + fmt(p.price) + '</span>' + old;
  }

  function ratingOf(p) { return RATING[p.id] || 0; }

  function starsHtml(p) {
    const r = ratingOf(p);
    const full = Math.max(1, Math.min(5, Math.round(r)));
    let s = '';
    for (let i = 1; i <= 5; i++) s += i <= full ? '★' : '☆';
    return '<span class="stars" aria-hidden="true">' + s + '</span><span class="rating-val">' + r.toFixed(1) + '</span>';
  }

  function cardHtml(p) {
    const name = p.name.replace(/'/g, '&#39;');
    return '' +
      '<article class="product-card" data-id="' + p.id + '">' +
        '<div class="product-img">' +
          badgeHtml(p) +
          '<button class="wish' + (wish.has(p.id) ? ' active' : '') + '" data-wish="' + p.id + '" aria-label="Ajouter aux favoris">' + (wish.has(p.id) ? '♥' : '♡') + '</button>' +
          '<img src="' + p.img + '" alt="' + name + '" loading="lazy"/>' +
        '</div>' +
        '<div class="product-info">' +
          '<span class="product-cat">' + p.cat + '</span>' +
          '<h3>' + name + '</h3>' +
          '<div class="product-rating">' + starsHtml(p) + '</div>' +
          '<div class="product-price">' + priceHtml(p) + '</div>' +
          '<button class="btn btn-dark btn-add" data-add="' + p.id + '">Ajouter au panier</button>' +
        '</div>' +
      '</article>';
  }

  /* ══ RENDU DES GRILLES ════════════════════════════════════════════ */
  function nouveau(list) { return list.slice().sort((a, b) => (b.isNew - a.isNew) || (b.sales - a.sales)); }
  function bestsellers(list) { return list.slice().sort((a, b) => (b.top - a.top) || (b.sales - a.sales)); }

  function applyFilters(list, catSel, sortSel) {
    let out = catSel ? list.filter((p) => p.cat === catSel) : list.slice();
    if (sortSel === 'price-asc') out.sort((a, b) => a.price - b.price);
    else if (sortSel === 'price-desc') out.sort((a, b) => b.price - a.price);
    else if (sortSel === 'newest') out.sort((a, b) => b.sales - a.sales);
    else if (sortSel === 'rated') out.sort((a, b) => ratingOf(b) - ratingOf(a));
    return out;
  }

  function renderGrid(gridId, list) {
    const grid = document.getElementById(gridId);
    if (!grid) return;
    grid.innerHTML = list.map(cardHtml).join('');
  }

  function initProducts() {
    // Grille 1 : Nouveautés (avec bouton "Voir plus")
    const list1 = nouveau(PRODUCTS);
    let limit = 8;

    function filtered1() {
      return applyFilters(list1, $('#filterCat')?.value || '', $('#filterSort')?.value || '');
    }
    function renderNew() {
      renderGrid('productGridNouveautes', filtered1().slice(0, limit));
      const btn = $('#loadMoreBtn');
      if (btn) btn.style.display = filtered1().length > limit ? 'inline-flex' : 'none';
    }
    renderNew();
    $('#filterCat')?.addEventListener('change', () => { limit = 8; renderNew(); });
    $('#filterSort')?.addEventListener('change', () => { limit = 8; renderNew(); });
    $('#loadMoreBtn')?.addEventListener('click', () => { limit += 8; renderNew(); });

    // Grille 2 : Best-sellers
    const list2 = bestsellers(PRODUCTS);
    renderGrid('productGridBestsellers', applyFilters(list2, $('#filterCat2')?.value || '', $('#filterSort2')?.value || ''));
    $('#filterCat2')?.addEventListener('change', () => renderGrid('productGridBestsellers', applyFilters(list2, $('#filterCat2').value, $('#filterSort2').value)));
    $('#filterSort2')?.addEventListener('change', () => renderGrid('productGridBestsellers', applyFilters(list2, $('#filterCat2').value, $('#filterSort2').value)));
  }

  /* ══ FAVORIS ══════════════════════════════════════════════════════ */
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-wish]');
    if (!btn) return;
    e.preventDefault();
    e.stopPropagation();
    const id = +btn.dataset.wish;
    if (wish.has(id)) { wish.delete(id); showToast('Retiré des favoris'); }
    else { wish.add(id); showToast('Ajouté aux favoris ♥'); }
    save('volt_wish', Array.from(wish));
    btn.classList.toggle('active', wish.has(id));
    btn.innerHTML = wish.has(id) ? '♥' : '♡';
  });

  /* ══ PANIER ═══════════════════════════════════════════════════════ */
  function keyOf(id, size, color) { return id + '::' + size + '::' + color; }
  function splitKey(key) { const [id, size, color] = key.split('::'); return { id: +id, size, color }; }

  function addToCart(id, size, color, qty) {
    const key = keyOf(id, size, color);
    cart[key] = (cart[key] || 0) + (qty || 1);
    save('volt_cart', cart);
    updateCart();
    showToast('Ajouté au panier ✓');
  }

  function changeQty(key, delta) {
    cart[key] = (cart[key] || 0) + delta;
    if (cart[key] <= 0) delete cart[key];
    save('volt_cart', cart);
    updateCart();
  }

  function removeItem(key) {
    delete cart[key];
    save('volt_cart', cart);
    updateCart();
  }

  function cartCount() {
    return Object.values(cart).reduce((s, q) => s + q, 0);
  }

  function cartSubtotal() {
    return Object.entries(cart).reduce((sum, [key, qty]) => {
      const byId = PRODUCTS.find((p) => p.id === splitKey(key).id);
      return sum + (byId ? byId.price * qty : 0);
    }, 0);
  }

  function cartItemHtml(key, qty) {
    const { id, size, color } = splitKey(key);
    const p = PRODUCTS.find((x) => x.id === id);
    if (!p) return '';
    return '' +
      '<div class="cart-item" data-key="' + key.replace(/"/g, '') + '">' +
        '<img src="' + p.img + '" alt="' + p.name + '"/>' +
        '<div class="cart-item-info">' +
          '<span class="cart-item-name">' + p.name + '</span>' +
          '<span class="cart-item-meta">' + p.cat + ' · Taille ' + size + ' · ' + color + '</span>' +
          '<div class="cart-item-qty">' +
            '<button class="qty-btn" data-dec="' + key + '" aria-label="Diminuer">−</button>' +
            '<span>' + qty + '</span>' +
            '<button class="qty-btn" data-inc="' + key + '" aria-label="Augmenter">+</button>' +
          '</div>' +
        '</div>' +
        '<div class="cart-item-side">' +
          '<span class="cart-item-price">' + fmt(p.price * qty) + '</span>' +
          '<button class="cart-item-remove" data-remove="' + key + '" aria-label="Retirer">&#10005;</button>' +
        '</div>' +
      '</div>';
  }

  function updateCart() {
    const badge = $('.cart-btn .cart-count');
    if (badge) badge.textContent = cartCount();

    if (!CART_ELS.body) {
      CART_ELS.body = $('#cartBody');
      CART_ELS.footer = $('#cartFooter');
      CART_ELS.empty = $('.cart-empty');
    }
    const entries = Object.entries(cart);
    CART_ELS.empty.style.display = entries.length ? 'none' : 'block';
    CART_ELS.footer.style.display = entries.length ? 'block' : 'none';
    CART_ELS.body.querySelectorAll('.cart-item').forEach((el) => el.remove());
    if (entries.length) {
      CART_ELS.body.insertAdjacentHTML('beforeend', entries.map(([k, q]) => cartItemHtml(k, q)).join(''));
    }
    const sub = cartSubtotal();
    $('#cartSubtotal').textContent = fmt(sub);
    $('#cartShipping').textContent = sub >= FREE_SHIP || sub === 0 ? 'Offerte' : fmt(SHIP_COST);
    $('#cartTotal').textContent = fmt(sub === 0 ? 0 : sub + (sub >= FREE_SHIP ? 0 : SHIP_COST));
  }

  function openCart() { $('#cartSidebar').classList.add('open'); $('#overlay').classList.add('show'); }
  function closeCart() { $('#cartSidebar').classList.remove('open'); $('#overlay').classList.remove('show'); }

  function initCart() {
    $('#openCart')?.addEventListener('click', (e) => { e.preventDefault(); openCart(); });
    $('#closeCart')?.addEventListener('click', closeCart);
    $('#checkoutBtn')?.addEventListener('click', () => {
      if (!Object.keys(cart).length) { showToast('Votre panier est vide.'); return; }
      cart = {}; save('volt_cart', cart);
      updateCart(); closeCart();
      showToast('Commande simulée — merci ! (démo)');
    });

    CART_ELS.body = $('#cartBody');
    CART_ELS.body?.addEventListener('click', (e) => {
      const dec = e.target.closest('[data-dec]');
      const inc = e.target.closest('[data-inc]');
      const rem = e.target.closest('[data-remove]');
      if (dec) changeQty(dec.dataset.dec, -1);
      else if (inc) changeQty(inc.dataset.inc, 1);
      else if (rem) removeItem(rem.dataset.remove);
    });

    $('#overlay')?.addEventListener('click', closeCart);
    updateCart();
  }

  /* ══ MODALE PRODUIT ═══════════════════════════════════════════════ */
  let selSize = SIZES[0];
  let selColor = '';
  let selQty = 1;

  function colorSwatch(name) {
    const hex = COLORS[name] || '#999';
    return '<button class="color-opt' + (name === selColor ? ' active' : '') + '" data-color="' + name + '" style="background:' + hex + '" role="radio" aria-label="' + name + '" title="' + name + '"><span class="color-tip">' + name + '</span></button>';
  }

  function openModal(id) {
    const p = PRODUCTS.find((x) => x.id === id);
    if (!p) return;
    currentProduct = p;
    selSize = SIZES[0];
    selColor = p.colors[0];
    selQty = 1;

    $('#modalImg').src = p.img;
    $('#modalImg').alt = p.name;
    $('#modalCat').textContent = p.cat;
    $('#modalTitle').textContent = p.name;
    $('#modalPrice').textContent = fmt(p.price);
    const old = $('#modalOldPrice');
    old.style.display = p.old > p.price ? 'inline' : 'none';
    if (old.style.display === 'inline') old.textContent = fmt(p.old);
    $('#modalDesc').textContent = CATDESC[p.cat] || p.desc || '';

    $('#modalSizes').innerHTML = SIZES.map((s) =>
      '<button class="size-opt' + (s === selSize ? ' active' : '') + '" data-size="' + s + '">' + s + '</button>'
    ).join('');

    $('#modalColors').innerHTML = p.colors.map(colorSwatch).join('');
    $('#modalQty').value = selQty;

    $('#productModal').classList.add('open');
    $('#overlay').classList.add('show');
    document.body.style.overflow = 'hidden';
    nCount++;
  }

  function closeModal() {
    $('#productModal').classList.remove('open');
    if (!$('#cartSidebar').classList.contains('open')) $('#overlay').classList.remove('show');
    document.body.style.overflow = '';
  }

  function initModal() {
    // Ouverture au clic sur une carte
    document.addEventListener('click', (e) => {
      const card = e.target.closest('.product-card');
      if (card && !e.target.closest('[data-add]') && !e.target.closest('[data-wish]')) {
        openModal(+card.dataset.id);
      }
    });

    // Ajout rapide depuis la carte
    document.addEventListener('click', (e) => {
      if (e.target.closest('#searchResults')) return;
      const add = e.target.closest('[data-add]');
      if (!add) return;
      e.preventDefault();
      e.stopPropagation();
      const p = PRODUCTS.find((x) => x.id === +add.dataset.add);
      if (p) addToCart(p.id, SIZES[0], p.colors[0], 1);
    });

    $('#closeModal')?.addEventListener('click', closeModal);
    $('#modalQty')?.addEventListener('input', () => {
      selQty = Math.max(1, Math.min(10, +$('#modalQty').value || 1));
      $('#modalQty').value = selQty;
    });
    $('.qty-btn.minus')?.addEventListener('click', () => {
      selQty = Math.max(1, selQty - 1);
      $('#modalQty').value = selQty;
    });
    $('.qty-btn.plus')?.addEventListener('click', () => {
      selQty = Math.min(10, selQty + 1);
      $('#modalQty').value = selQty;
    });

    $('#modalSizes')?.addEventListener('click', (e) => {
      const s = e.target.closest('[data-size]');
      if (!s) return;
      selSize = s.dataset.size;
      $$('.size-opt', $('#modalSizes')).forEach((b) => b.classList.toggle('active', b === s));
    });

    $('#modalColors')?.addEventListener('click', (e) => {
      const c = e.target.closest('[data-color]');
      if (!c) return;
      selColor = c.dataset.color;
      $$('.color-opt', $('#modalColors')).forEach((b) => b.classList.toggle('active', b === c));
    });

    $('#modalAddCart')?.addEventListener('click', () => {
      if (currentProduct) addToCart(currentProduct.id, selSize, selColor, selQty);
    });

    $('#modalWish')?.addEventListener('click', () => {
      if (!currentProduct) return;
      const id = currentProduct.id;
      if (wish.has(id)) { wish.delete(id); showToast('Retiré des favoris'); }
      else { wish.add(id); showToast('Ajouté aux favoris ♥'); }
      save('volt_wish', Array.from(wish));
      $('#modalWish').innerHTML = wish.has(id) ? '♥ Ajouté aux favoris' : '♡ Ajouter aux favoris';
    });
  }

  /* ══ RECHERCHE ════════════════════════════════════════════════════ */
  function doSearch(q) {
    const t = q.trim().toLowerCase();
    const res = $('#searchResults');
    if (!res) return;
    if (!t) { res.innerHTML = '<p class="search-none">Tapez un produit, une catégorie…</p>'; return; }
    const matches = PRODUCTS.filter((p) =>
      p.name.toLowerCase().includes(t) || p.cat.toLowerCase().includes(t)
    );
    if (!matches.length) { res.innerHTML = '<p class="search-none">Aucun résultat pour « ' + q.trim() + ' ».</p>'; return; }
    res.innerHTML = matches.slice(0, 20).map((p) =>
      '<div class="search-item">' +
        '<img src="' + p.img + '" alt=""/>' +
        '<div class="search-info"><span class="product-cat">' + p.cat + '</span><strong>' + p.name + '</strong>' +
          '<span class="price-now">' + fmt(p.price) + '</span></div>' +
        '<button class="btn btn-dark btn-sm" data-add="' + p.id + '">Ajouter</button>' +
      '</div>'
    ).join('');
  }

  function initSearch() {
    $('#openSearch')?.addEventListener('click', (e) => { e.preventDefault(); $('#searchModal').classList.add('open'); $('#searchInput').focus(); });
    $('#closeSearch')?.addEventListener('click', () => $('#searchModal').classList.remove('open'));
    $('#searchForm')?.addEventListener('submit', (e) => { e.preventDefault(); doSearch($('#searchInput').value); });
    $('#searchInput')?.addEventListener('input', (e) => doSearch(e.target.value));

    // Suggestions (catégories)
    const tags = $('#searchTags');
    const cats = Array.from(new Set(PRODUCTS.map((p) => p.cat)));
    if (tags) {
      tags.innerHTML = cats.map((c) => '<button class="tag" data-tag="' + c + '">' + c + '</button>').join('');
      tags.addEventListener('click', (e) => {
        const t = e.target.closest('[data-tag]');
        if (!t) return;
        $('#searchInput').value = t.dataset.tag;
        doSearch(t.dataset.tag);
      });
    }

    // Boutons "Ajouter" dans les résultats
    document.addEventListener('click', (e) => {
      const add = e.target.closest('#searchResults [data-add]');
      if (!add) return;
      const p = PRODUCTS.find((x) => x.id === +add.dataset.add);
      if (p) addToCart(p.id, SIZES[0], p.colors[0], 1);
    });
  }

  /* ══ AUTH (démo) ══════════════════════════════════════════════════ */
  function initAuth() {
    $('#openAuth')?.addEventListener('click', (e) => { e.preventDefault(); $('#authModal').classList.add('open'); });
    $('#closeAuth')?.addEventListener('click', () => $('#authModal').classList.remove('open'));

    $$('.auth-tab').forEach((tab) => tab.addEventListener('click', () => {
      $$('.auth-tab').forEach((t) => t.classList.toggle('active', t === tab));
      const mode = tab.dataset.tab;
      $('#loginForm').classList.toggle('hidden', mode !== 'login');
      $('#registerForm').classList.toggle('hidden', mode !== 'register');
    }));

    $('#loginForm')?.addEventListener('submit', (e) => { e.preventDefault(); showToast('Connexion simulée (démo)'); e.target.reset(); $('#authModal').classList.remove('open'); });
    $('#registerForm')?.addEventListener('submit', (e) => { e.preventDefault(); showToast('Compte créé (démo)'); e.target.reset(); $('#authModal').classList.remove('open'); });
    $('#forgotLink')?.addEventListener('click', (e) => { e.preventDefault(); showToast('Lien de réinitialisation envoyé (démo)'); });
  }

  /* ══ NEWSLETTER ═══════════════════════════════════════════════════ */
  function initNewsletter() {
    const popup = $('#newsletterPopup');
    const hideToggle = popup?.querySelector('.checkbox input');
    setTimeout(() => {
      if (popup && !sessionStorage.getItem('volt_nl_shown')) {
        popup.classList.add('show');
        sessionStorage.setItem('volt_nl_shown', '1');
      }
    }, 4000);
    $('#closeNewsletter')?.addEventListener('click', () => popup.classList.remove('show'));
    $('#newsletterForm')?.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Bienvenue dans le club ! −20 % envoyé (démo)');
      e.target.reset();
      popup.classList.remove('show');
    });
    hideToggle?.addEventListener('change', () => {
      if (hideToggle.checked) {
        sessionStorage.setItem('volt_nl_off', '1');
        sessionStorage.setItem('volt_nl_shown', '1');
        popup.classList.remove('show');
      }
    });
    if (sessionStorage.getItem('volt_nl_off')) popup.classList.remove('show');
  }

  /* ══ COOKIES ══════════════════════════════════════════════════════ */
  function initCookies() {
    const banner = $('#cookieBanner');
    if (!banner) return;
    if (load('volt_cookies', null)) { banner.remove(); return; }
    $('#cookieAccept')?.addEventListener('click', (e) => { e.preventDefault(); save('volt_cookies', 'ok'); banner.remove(); showToast('Merci !'); });
    $('#cookieReject')?.addEventListener('click', (e) => { e.preventDefault(); save('volt_cookies', 'no'); banner.remove(); });
  }

  /* ══ COMPORTEMENTS EXISTANTS (héro, menu, scroll, reveal) ══════════ */
  function initHero() {
    const slides = $$('.hero-slide');
    const dots = $('.hero-dots');
    const prev = $('.hero-arrow.prev');
    const next = $('.hero-arrow.next');
    if (!slides.length || !dots) return;
    let current = 0;
    let timer = null;

    slides.forEach((_, i) => {
      const b = document.createElement('button');
      b.className = 'hero-dot' + (i === 0 ? ' active' : '');
      b.setAttribute('aria-label', 'Slide ' + (i + 1));
      b.addEventListener('click', () => { goTo(i); });
      dots.appendChild(b);
    });
    const dotBtns = $$('.hero-dot', dots);

    function show(index) {
      slides[current].classList.remove('active');
      dotBtns[current].classList.remove('active');
      current = (index + slides.length) % slides.length;
      slides[current].classList.add('active');
      dotBtns[current].classList.add('active');
    }
    function goTo(i) { show(i); reset(); }
    function nextSlide() { goTo(current + 1); }
    function prevSlide() { goTo(current - 1); }
    function start() { timer = setInterval(nextSlide, 5000); }
    function reset() { clearInterval(timer); start(); }

    prev?.addEventListener('click', prevSlide);
    next?.addEventListener('click', nextSlide);
    $('.hero')?.addEventListener('mouseenter', () => clearInterval(timer));
    $('.hero')?.addEventListener('mouseleave', start);
    start();
  }

  function initMenu() {
    const btn = $('.menu-btn');
    const nav = $('.nav');
    if (!btn || !nav) return;
    const set = (open) => {
      nav.classList.toggle('open', open);
      btn.setAttribute('aria-expanded', open);
      document.body.style.overflow = open ? 'hidden' : '';
      const spans = btn.querySelectorAll('span');
      spans[0].style.transform = open ? 'rotate(45deg) translate(5px, 5px)' : '';
      spans[1].style.opacity = open ? '0' : '';
      spans[2].style.transform = open ? 'rotate(-45deg) translate(5px, -5px)' : '';
    };
    btn.addEventListener('click', () => set(!nav.classList.contains('open')));
    nav.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => set(false)));
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && nav.classList.contains('open')) set(false); });
  }

  function initSmoothScroll() {
    $$('a[href^="#"]').forEach((a) => a.addEventListener('click', (e) => {
      const id = a.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        history.pushState(null, '', '#' + id);
      }
    }));
  }

  function initReveal() {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    $$('.product-card, .cat-card, .brand-text, .brand-img').forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity .6s ease, transform .6s ease';
      obs.observe(el);
    });
  }

  /* ══ MODE SOMBRE MANUEL ════════════════════════════════════════════ */
  function initTheme() {
    const btn = $('#themeBtn');
    if (!btn) return;
    const sys = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    applyTheme(localStorage.getItem('volt_theme') || sys);

    btn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      applyTheme(current === 'dark' ? 'light' : 'dark');
    });

    function applyTheme(t) {
      document.documentElement.setAttribute('data-theme', t);
      try { localStorage.setItem('volt_theme', t); } catch (e) {}
      btn.innerHTML = t === 'dark' ? '☀' : '☾';
      btn.setAttribute('aria-label', t === 'dark' ? 'Activer le mode clair' : 'Activer le mode sombre');
    }
  }

  /* ══ RETOUR EN HAUT ═══════════════════════════════════════════════ */
  function initBackToTop() {
    const btn = $('#backToTop');
    if (!btn) return;
    window.addEventListener('scroll', () => {
      btn.classList.toggle('show', (window.scrollY || document.documentElement.scrollTop) > 500);
    }, { passive: true });
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  /* ══ CLAVIER (Escape ferme tout) ═══════════════════════════════════ */
  function initKeys() {
    document.addEventListener('keydown', (e) => {
      if (e.key !== 'Escape') return;
      if ($('#productModal').classList.contains('open')) closeModal();
      if ($('#searchModal').classList.contains('open')) $('#searchModal').classList.remove('open');
      if ($('#authModal').classList.contains('open')) $('#authModal').classList.remove('open');
      if ($('#cartSidebar').classList.contains('open')) closeCart();
    });
  }

  /* ══ INIT ═════════════════════════════════════════════════════════ */
  function init() {
    initProducts();
    initHero();
    initMenu();
    initSmoothScroll();
    initReveal();
    initCart();
    initModal();
    initSearch();
    initAuth();
    initNewsletter();
    initCookies();
    initTheme();
    initBackToTop();
    initKeys();

    console.log('[TEMPLATE] E-commerce chargé — personnalisez PRODUCTS dans main.js.');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
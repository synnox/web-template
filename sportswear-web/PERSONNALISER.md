# PERSONNALISER CE TEMPLATE E-COMMERCE

Site e-commerce **générique** (sportswear) : HTML + CSS + JS, aucun nom de marque ni produit réel.
Ouvrez simplement `index.html` dans un navigateur pour le voir.

---

## 1. Changer le nom de la marque

Cherchez `[[Votre marque]]` dans `index.html` (header + footer) et remplacez-le.

## 2. Remplacer les textes

Tous les textes à modifier sont entre `[[ ... ]]` dans `index.html` :
titre, descriptions, avis, FAQ, réassurance, catégories… Remplacez-les par votre contenu.

## 3. Personnaliser les produits

Tout est dans `assets/js/main.js`, liste `PRODUCTS` :

```js
{ id: 1,
  name: '[[Produit 1]]',      // nom du produit
  cat: 'Catégorie 1',         // catégorie (doit exister dans les menus déroulants)
  price: 49.9,                // prix affiché
  old: 59.9,                  // prix barré (ancien prix). Mettre 0 si aucun
  img: img('image7.jpg'),     // image (dans assets/images/)
  badge: 'sale',              // 'sale' (-20%) | 'new' | 'top' | '' pour aucun
  isNew: true,                // true = apparaît dans Nouveautés
  top: true,                  // true = apparaît en Best-sellers
  sales: 2310,                // popularité (trier par pertinence)
  colors: ['Noir', 'Blanc']   // couleurs disponibles
}
```

- Ajoutez / supprimez des lignes librement.
- Les notes (étoiles) se personnalisent dans le tableau `RATING` juste en dessous.
- Les catégories affichées dans les menus déroulants (`index.html`) doivent correspondre aux `cat` de vos produits.

## 4. Remplacer les images

- Produits : déposez vos images dans `assets/images/` puis référencez-les via `img('votre-fichier.jpg')`.
- Héro (grandes images) : lignes `style="background-image:...image1.jpg"` de la section `.hero` dans `index.html`.
- Logo, favicon : remplacez `assets/images/logo.svg` et les fichiers `favicon-*`, `apple-touch-icon.png`.

## 5. Changer les couleurs

Toutes les couleurs sont dans les variables CSS en haut de `assets/css/style.css` :
`--bg`, `--fg` (texte), `--accent` (vert), `--muted`, etc.
Le mode sombre est automatique + bouton ☾/☀ dans le header (préférence mémorisée).

## 6. Réglages pratiques

| Réglage | Où |
|---|---|
| Livraison offerte dès 60 € | `FREE_SHIP = 60` dans `main.js` |
| Frais de port sinon | `SHIP_COST = 4.9` dans `main.js` |
| Texte du panier / commande | éléments `#cart...` dans `index.html` |
| Newsletter / cookies | popups en bas de `index.html` |

## 7. Vérifier

- Passez la souris sur les produits (ajout panier, favoris ♥, modale).
- Testez la recherche, les filtres, le panier, la commande (simulée), le mode sombre et le mobile.
- Chaque page de console (`F12`) montre l'état du template.

Rappel : c'est un **template de démonstration** — aucun paiement réel ni compte serveur.
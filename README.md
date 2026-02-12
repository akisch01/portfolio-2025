# 🚀 Portfolio 2026 - Akisch Akpo (Architect Edition)

> **"Data-Driven, Interactive & Immersive."**

Ce projet n'est pas un simple portfolio statique. C'est une application web **Next.js 16 (Turbopack)** conçue pour démontrer une expertise en **Architecture Logicielle**, **Data Engineering** et **UX Design**.

![Status](https://img.shields.io/badge/Status-Production_Ready-success)
![Stack](https://img.shields.io/badge/Tech-Next.js_16_•_Tailwind_v4_•_Framer_Motion-blue)

---

## ✨ Fonctionnalités Clés (Killer Features)

### 🧠 1. Neural Network Background (Canvas)
Un réseau neuronal interactif codé en **HTML5 Canvas** pur (pas de librairie lourde).
- Réagit à la souris.
- Gère la physique des particules (rebonds, connexions dynamiques).
- Optimisé pour 60 FPS.

### 📡 2. GitHub Live Telemetry (Data Engineering)
Un module ETL (Extract, Transform, Load) côté client qui se connecte à l'API GitHub en temps réel.
- **Extract :** Récupère les repos et événements publics.
- **Transform :** Calcule la distribution des langages (Python vs JS) et détecte le dernier commit.
- **Load :** Affiche les métriques dans un Dashboard "Data Command Center".
- *Cache intelligent (LocalStorage) pour éviter le rate-limiting.*

### ⌨️ 3. Command Palette (Power User UX)
Appuyez sur `Ctrl + K` (ou `Cmd + K`) pour ouvrir un terminal de commande.
- Navigation rapide au clavier.
- Actions rapides (Copier Email, Changer Langue).
- Inspiration : Linear, VS Code, Spotlight.

### 🎨 4. Design System "Magma & Obsidian"
- **Thème :** Sombre profond (Obsidian) avec accents Ambre/Orange (Magma).
- **Interactions :** Boutons magnétiques, Spotlight effect, Curseur liquide.
- **Mobile First :** Layout adaptatif (Grid sur Desktop, Marquee infini sur Mobile).

---

## 🛠️ Stack Technique

| Catégorie | Technologie | Justification |
| :--- | :--- | :--- |
| **Framework** | Next.js 16 (App Router) | Performance, SSR, et architecture moderne. |
| **Styling** | Tailwind CSS v4 | Nouveau moteur de styles, variables CSS natives. |
| **Animation** | Framer Motion | Animations physiques fluides (Spring physics). |
| **Icons** | Lucide React & React Icons | Cohérence visuelle. |
| **Deployment** | Vercel / Netlify | CI/CD automatisé. |

---

## 📂 Structure du Projet

L'architecture sépare strictement la **Donnée** de la **Présentation**.

```bash
/app              # Pages & Layouts (Next.js App Router)
/components       # Composants React Réutilisables
  /ui             # Composants "atomiques" (Boutons, Canvas, Cursor)
/data             # ⚡ LE COEUR DU PROJET
  portfolio.ts    # Toute la donnée (Projets, Expérience, Certifs) est ici.
/public           # Assets statiques (Images, PDFs)
```

> **Note :** Pour mettre à jour le contenu, il suffit de modifier `data/portfolio.ts`. Pas besoin de toucher au code React.

---

## 🚀 Installation & Démarrage

### Pré-requis
- Node.js 18+
- npm ou pnpm

### Lancer en local

```bash
# 1. Cloner le repo
git clone https://github.com/akisch01/portfolio-2025.git

# 2. Installer les dépendances (avec legacy-peer-deps si conflit)
npm install --legacy-peer-deps

# 3. Lancer le serveur de développement
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) pour voir le résultat.

---

## 🔧 Personnalisation

### Modifier les Projets / Expérience
Editez le fichier `data/portfolio.ts`. La structure est typée, vous ne pouvez pas vous tromper.

### Modifier le Thème (Couleurs)
Editez `app/globals.css`. Les variables sont définies dans le bloc `@theme`.
```css
@theme {
  --color-primary: hsl(35 100% 55%); /* Changer ici pour modifier la couleur principale */
}
```

### Configurer le Formulaire de Contact
Le formulaire utilise **Formsubmit.co** (pas de backend requis).
1. Allez dans `components/contact.tsx`.
2. Remplacez l'email dans l'attribut `action` du formulaire.
3. Testez une fois pour activer le service via l'email de confirmation.

---

## 🚢 Déploiement

Ce projet est optimisé pour **Vercel**.

1. Poussez le code sur GitHub.
2. Connectez votre repo sur Vercel.
3. Déployez. C'est tout.

---

© 2025 Akisch Akpo. Construit avec passion et rigueur.

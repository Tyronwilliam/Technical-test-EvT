# 🧩 Card Component

Composant de présentation générique destiné à encapsuler du contenu.  
Utilise un simple `<slot />` pour permettre une grande flexibilité dans les éléments insérés.

---

## 💡 Description

Ce composant agit comme un **wrapper visuel**.  
Il ne contient aucune logique métier ni style par défaut (sauf si tu les ajoutes toi-même). L'idée est de standardiser le fait qu'un élément se trouve "dans une carte" pour appliquer un style et une structure cohérente à travers toute l'application.

---

## 📦 API

### ✅ Slots

| Slot    | Description                                   |
| ------- | --------------------------------------------- |
| default | Contenu libre qui sera affiché à l'intérieur. |

---

## 🧠 Comportement

Aucun comportement particulier, ce composant est purement **structurel et visuel**.  
Il est souvent utilisé conjointement avec des classes tailwind injectées là où il est utilisé :

```vue
<Card class="bg-slate-800 rounded-md shadow-lg p-4">
  <p>I am inside a Card!</p>
</Card>
```

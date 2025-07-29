# 🧱 Column Component

Composant utilisé pour structurer les **colonnes** dans une interface, en particulier pour des vues de type _Kanban_ ou _Todo list_.

---

## 💡 Description

`Column` fournit une structure visuelle et une mise en page verticale pour accueillir une liste d’éléments (généralement des cartes Todo).  
Il affiche un **titre** en haut et un conteneur stylisé pour les éléments en-dessous (slot).

---

## 📦 API

### ✅ Props

| Prop  | Type     | Description                             |
| ----- | -------- | --------------------------------------- |
| title | `string` | Le titre affiché en haut de la colonne. |

### ✅ Slots

| Slot    | Description                                                       |
| ------- | ----------------------------------------------------------------- |
| default | Les éléments (souvent des `<Card />`) à afficher dans la colonne. |

---

## 🎨 Style et comportement

- Le `title` est affiché dans une `span` stylisée.
- Le slot est contenu dans un div scrollable verticalement (`overflow-y-scroll`) avec une hauteur max (`max-h-[600px]`).
- La colonne est responsive : `flex` horizontal en mobile, vertical en desktop (`lg:flex-col`).

---

## 📘 Exemple d'utilisation

```vue
<Column title="Todo Incomplete">
  <Card v-for="todo in incompleteTodos" :key="todo.id">
    {{ todo.title }}
  </Card>
</Column>
```

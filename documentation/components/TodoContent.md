# 🧩 TodoContent Component

Composant responsable de l'affichage d'une carte Todo avec son titre, son état (`completed` ou non), et des actions de suppression avec confirmation.

---

## 💡 Description

`TodoContent` est utilisé à l'intérieur d'une carte (Card.vue) pour afficher les détails d’un `todo`.  
Il offre une interaction utilisateur avec un mécanisme de suppression sécurisé via une confirmation (`Yes` / `No`).

---

## 📦 API

### ✅ Props

| Prop   | Type      | Requis | Description                                              |
| ------ | --------- | ------ | -------------------------------------------------------- |
| `todo` | `Todo`    | ✅     | Objet représentant un todo (voir type/todo.ts)           |
| `open` | `boolean` | ✅     | Détermine si la confirmation de suppression est affichée |

### 📤 Emits

| Événement      | Payload   | Description                                        |
| -------------- | --------- | -------------------------------------------------- |
| `toggleIsOpen` | `todo.id` | Ouvre ou ferme le bloc de confirmation             |
| `deleteTodo`   | `todo.id` | Émet lorsque l’utilisateur confirme la suppression |

---

## 🎨 Comportement UI

- Le titre du todo est affiché avec une capitalisation automatique.
- Un indicateur coloré (vert ou rouge) montre si le todo est complété (`completed`).
- Un bloc de confirmation apparaît si `open === true`, avec deux boutons :
  - ✅ `Yes` → supprime le todo
  - ❌ `No` → annule la suppression (replie le bloc)

---

## 🧱 Exemple d’utilisation

```vue
<TodoContent
  :todo="todo"
  :open="openedTodoId === todo.id"
  @toggle-is-open="toggleIsOpen"
  @delete-todo="deleteTodo"
/>
```

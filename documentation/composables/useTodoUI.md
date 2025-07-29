# 🎛️ Composable `useTodoUI`

Ce composable gère l’état d’ouverture d’un todo. Il permet d’afficher ou de masquer dynamiquement des informations supplémentaires (par exemple : confirmation de suppression) pour un seul todo à la fois.

---

## 🧩 Objectif

Permettre une interaction UI **contrôlée et centralisée** autour de l’ouverture d’un `Todo`, sans dupliquer la logique dans plusieurs composants.

---

## ⚙️ API

### 📤 Valeurs retournées

| Nom            | Type                           | Description                                                |
| -------------- | ------------------------------ | ---------------------------------------------------------- |
| `openedTodoId` | `Ref<Todo['id'] \| null>`      | Référence à l’ID du todo actuellement "ouvert" (ou `null`) |
| `toggleIsOpen` | `(todoId: Todo['id']) => void` | Bascule entre ouverture et fermeture d’un todo             |

---

## 🔁 Fonctionnement

### 🧠 Logique

- Lorsque l'utilisateur clique sur un bouton lié à un todo :
  - Si c’est **le même todo déjà ouvert**, il sera **fermé** (`null`).
  - Sinon, son `id` devient l’`openedTodoId`.

Cela permet de gérer proprement une logique **d’affichage conditionnel** dans l’interface utilisateur.

---

## 📌 Exemple d’utilisation

```ts
import { useTodoUI } from '@/composables/useTodoUI'

const { openedTodoId, toggleIsOpen } = useTodoUI()

const isOpen = computed(() => openedTodoId.value === currentTodo.id)

const onToggle = () => {
  toggleIsOpen(currentTodo.id)
}
```

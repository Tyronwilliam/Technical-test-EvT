# 🧠 Composable `useDragDropTodos`

Composable responsable de la gestion complète du **drag & drop** des todos, ainsi que de la modification de leur statut (`completed` / `incomplete`) et de leur réorganisation dans la liste.

---

## 🧩 Objectif

Encapsuler toute la logique liée au **glisser-déposer** d’éléments de type `Todo` dans une interface utilisateur.

---

## ⚙️ API

### 🔧 Paramètre

| Nom        | Type          | Description                                           |
| ---------- | ------------- | ----------------------------------------------------- |
| `todoList` | `Ref<Todo[]>` | Liste réactive des todos manipulables via drag & drop |

---

### 🔁 Valeurs retournées

| Nom               | Type                             | Description                                     |
| ----------------- | -------------------------------- | ----------------------------------------------- |
| `draggingTodoId`  | `Ref<Todo['id'] \| null>`        | ID du todo actuellement en train d’être déplacé |
| `dragOverTodoId`  | `Ref<Todo['id'] \| null>`        | ID du todo actuellement survolé pendant le drag |
| `handleDragStart` | `(id: Todo['id']) => void`       | Déclenche le début du déplacement d’un todo     |
| `handleDragEnd`   | `() => void`                     | Réinitialise les états liés au drag             |
| `handleDragOver`  | `(id, completed, event) => void` | Gère le survol d’un todo pendant le drag        |
| `handleDrop`      | `(id, completed) => void`        | Finalise le déplacement et met à jour la liste  |

---

## 🧠 Fonctionnement

1. `handleDragStart(id)` :

   - Active l’ID du todo en cours de déplacement (`draggingTodoId`).

2. `handleDragOver(id, completed, event)` :

   - Capture l’élément survolé pendant le drag.
   - Met à jour `dragOverTodoId`.

3. `handleDrop(id, completed)` :

   - Change le statut du todo (`completed` ou non).
   - Réorganise le tableau en fonction du todo cible (`targetTodoId`).
   - Supprime le todo de son ancienne position et le réinsère à la nouvelle.

4. `handleDragEnd()` :
   - Réinitialise les IDs du drag en cours.

---

## 💡 Exemple d'utilisation

```ts
import { useDragDropTodos } from '@/composables/useDragDropTodos'
import { ref } from 'vue'

const todoList = ref<Todo[]>([]) // injecté ou local

const {
  draggingTodoId,
  dragOverTodoId,
  handleDragStart,
  handleDragEnd,
  handleDragOver,
  handleDrop
} = useDragDropTodos(todoList)
```

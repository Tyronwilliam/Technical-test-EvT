# 📦 Composable `useTodoList`

Ce composable encapsule toute la **logique de gestion des todos** : récupération des données via une API, suppression locale, gestion du loading et des erreurs.

---

## 🧩 Objectif

Fournir un composable centralisé pour :

- charger les données depuis l’API ;
- simuler un délai de chargement ;
- gérer les erreurs d’appel réseau ;
- supprimer un todo de la liste.

---

## ⚙️ API

### 📤 Valeurs retournées

| Nom             | Type           | Description                                           |
| --------------- | -------------- | ----------------------------------------------------- |
| `todoList`      | `Ref<Todo[]>`  | Liste réactive des todos                              |
| `isLoading`     | `Ref<boolean>` | Indicateur de chargement (`true` pendant fetch)       |
| `errorApi`      | `Ref<string>`  | Contient un message d’erreur si la requête échoue     |
| `fetchTodolist` | `Function`     | Fonction pour récupérer les todos (avec delay simulé) |
| `deleteTodo`    | `Function`     | Supprime un todo localement via son `id`              |

---

## ⚙️ Fonctionnement

### 📥 `fetchTodolist()`

1. Active l’état de chargement (`isLoading` à `true`).
2. Attend un délai simulé de `2500ms` via `delay()`.
3. Appelle la fonction `getTodo()` pour récupérer les todos.
4. Vérifie le `status` de la réponse :
   - Si non `200`, lève une erreur.
   - Sinon, conserve les 10 premiers résultats (`slice(0, 10)`).
5. Capture les erreurs dans `errorApi`.
6. Remet `isLoading` à `false` à la fin.

### 🗑️ `deleteTodo(todoId)`

Supprime immédiatement de la liste locale un todo ayant l’identifiant correspondant.

---

## 🧪 Dépendances

- **`getTodo`** : fonction d’appel API (définie dans `services/todo.ts`)
- **`delay`** : fonction utilitaire simulant une latence API (`utils/delay.ts`)
- **`Todo`** : type TypeScript importé depuis `types/todo.ts`

---

## 📌 Exemple d’utilisation

```ts
import { useTodoList } from '@/composables/useTodoList'

const { todoList, isLoading, errorApi, fetchTodolist, deleteTodo } = useTodoList()

onMounted(() => {
  fetchTodolist()
})
```

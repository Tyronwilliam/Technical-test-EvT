# ✍️ Composable `useForm`

Ce composable gère **l'ajout de nouveaux todos** via un formulaire réactif, avec **validation du titre** et **simulation de requête asynchrone** (ex. API).

---

## 🧩 Objectif

Centraliser la logique liée au **formulaire de création de todo**, tout en offrant une **validation instantanée** et une gestion d’état claire (disabled, loading, error).

---

## ⚙️ API

### 📥 Paramètre

| Nom        | Type                       | Description                                        |
| ---------- | -------------------------- | -------------------------------------------------- |
| `todoList` | `Ref<Todo[]> \| undefined` | Liste des todos dans laquelle on ajoute le nouveau |

---

### 📤 Valeurs retournées

| Nom          | Type           | Description                                      |
| ------------ | -------------- | ------------------------------------------------ |
| `formTitle`  | `Ref<string>`  | Valeur du champ texte lié au titre du todo       |
| `formError`  | `Ref<string>`  | Message d’erreur lié à la validation             |
| `isDisabled` | `Ref<boolean>` | Bouton désactivé si erreur ou champ vide         |
| `isLoading`  | `Ref<boolean>` | Indicateur d’attente lors de l’ajout             |
| `addTodo()`  | `Function`     | Fonction pour créer un nouveau todo (avec delay) |

---

## 🧠 Fonctionnement

### ✅ `addTodo()`

1. Passe le formulaire en mode loading/désactivé.
2. Attend `2500ms` via `delay()` simulant un appel réseau.
3. Crée un objet `Todo` avec :
   - un `id` généré dynamiquement ;
   - le `title` depuis `formTitle` ;
   - `completed: false`.
4. L’ajoute en **haut de la liste** des todos.
5. Réinitialise le formulaire.

### 🛑 Validation

- Utilise une RegExp (`noNumberAllowed`) pour interdire les **chiffres** dans le titre.
- Si invalide :
  - `formError` est rempli ;
  - `isDisabled` est à `true`.

---

## 🔁 Réactivité

- Un `watch` sur `formTitle` déclenche la validation **en temps réel** à chaque frappe utilisateur.

---

## 🧪 Dépendances

- `delay` : fonction utilitaire (`utils/delay.ts`) pour simuler une requête réseau.
- `noNumberAllowed` : RegExp importée de `utils/regex.ts`.

---

## 📌 Exemple d’utilisation

```ts
import { useForm } from '@/composables/useForm'

const { formTitle, formError, isDisabled, isLoading, addTodo } = useForm(todoList)
```

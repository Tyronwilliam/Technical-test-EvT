# ❗ Error Component

Composant minimaliste permettant d’afficher un **message d’erreur** dans une interface utilisateur.

---

## 💡 Description

Le composant `Error` est conçu pour afficher un texte d’erreur stylisé uniquement lorsque celui-ci est renseigné. Il permet d’unifier l’affichage des erreurs dans tes formulaires ou vues, avec un style cohérent.

---

## 📦 API

### ✅ Props

| Prop  | Type     | Description                                                 |
| ----- | -------- | ----------------------------------------------------------- |
| error | `string` | Le message d’erreur à afficher. Si vide, rien ne s'affiche. |

---

## 📘 Exemple d'utilisation

```vue
<Error :error="errorApi" />
```

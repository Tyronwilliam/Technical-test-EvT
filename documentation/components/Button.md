# 🖱️ Button Component

Un composant bouton réutilisable avec prise en charge des différents types (`button`, `submit`, `reset`), des états `disabled` et `loading`.

---

## ✨ Props

| Nom        | Type                              | Obligatoire | Description                                                           |
| ---------- | --------------------------------- | ----------- | --------------------------------------------------------------------- |
| `type`     | `'button' \| 'submit' \| 'reset'` | ✅ Oui      | Définit le type de bouton HTML.                                       |
| `label`    | `string`                          | ✅ Oui      | Le texte affiché à l'intérieur du bouton.                             |
| `disabled` | `boolean`                         | ❌ Non      | Si `true`, désactive le bouton. Empêche les clics et change le style. |
| `loading`  | `boolean`                         | ❌ Non      | Si `true`, change le curseur pour refléter un état de chargement.     |

---

## 📤 Emits

| Événement | Description                                                |
| --------- | ---------------------------------------------------------- |
| `click`   | Déclenché lors d’un clic sur le bouton (si non désactivé). |

---

## 🎨 Styles

- Désactivé → `bg-gray-400`, `cursor-not-allowed`
- Normal → `bg-gray-900`, hover en `bg-gray-800`
- Loading → `cursor-progress`

---

## 💡 Exemple d’utilisation

```vue
<Button
  type="submit"
  label="Valider"
  :loading="isSubmitting"
  :disabled="formInvalid"
  @click="handleSubmit"
/>
```

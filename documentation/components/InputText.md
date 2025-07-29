# 📝 InputText Component

Composant de champ texte personnalisable, réactif avec `v-model` via `defineModel`.  
Utilisé pour la saisie de texte dans les formulaires, comme le titre d’un todo ou d’une campagne.

---

## 💡 Description

`InputText` est un composant réutilisable qui encapsule un champ `<input type="text">` avec des styles cohérents et une liaison bidirectionnelle de données (`v-model`) via `defineModel`.

---

## 📦 API

### ✅ Props

| Prop         | Type     | Requis | Description                                |
|--------------|----------|--------|--------------------------------------------|
| `id`         | `string` | ✅     | Identifiant de l'élément `<input>`         |
| `name`       | `string` | ✅     | Attribut `name` du champ                   |
| `placeholder`| `string` | ✅     | Texte affiché lorsqu’aucune valeur n’est saisie |
| `label`      | `string` | ❌     | Libellé affiché au-dessus de l’input       |

### 🔁 v-model

Utilise `defineModel<string>()`  
👉 à l’usage, ce composant doit être utilisé comme :

```vue
<InputText v-model="formData.title" ... />

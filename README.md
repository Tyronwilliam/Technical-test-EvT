# 📝 Todo App Vue 3

Une application légère de gestion de tâches avec Vue 3 et TypeScript, permettant de créer, organiser et réorganiser facilement vos todos via drag & drop.

---

## 🚀 Fonctionnalités

- 🔄 Chargement dynamique des todos depuis une API  
- ✅ Séparation automatique en colonnes « Complétées » et « Incomplètes »  
- ✏️ Ajout, suppression et affichage détaillé de chaque tâche  
- 🤏 Drag & drop pour réorganiser les tâches et changer leur statut  
- 💅 Transitions fluides lors du déplacement des cartes  
- ⚙️ Gestion des états (chargement, erreur, affichage)  
- 🔧 Architecture modulaire avec composants, composables, services et types

---

## 🗂️ Organisation du projet

- `/src/components` : composants UI (Card, Column, TodoContent, ...)  
- `/src/composables` : logique réutilisable (useDraggableTodo, useFetchTodos, ...)  
- `/src/services` : appels API 
- `/src/type` : définitions TypeScript (Todo, etc.)  
- `/src/utils` : fonctions utilitaires (ex : delay)  
- `/src/views` : vues principales (TodoView, FormView, ...)

---

## ⚙️ Mode d’emploi technique

- **useDraggableTodo** : gère le drag & drop, les changements de statut (complet/incomplet) et la réorganisation des todos dans la liste.
- **useFetchTodos / useTodoList** : récupère les todos depuis l’API, gère le chargement, les erreurs, la suppression des todos et la mise à jour de la liste.
- **useForm** : gère la logique d’ajout d’un nouveau todo, la validation et le traitement des erreurs liées au formulaire.
- **useTodoUI** : gère l’état UI local, notamment l’ouverture et la fermeture détaillée d’une suppression d'un todo via l’`openedTodoId`.  
  
---

## 🧪 Stack technique

- **Vue 3** (Composition API)  
- **TypeScript**  
- **Vite** (build rapide)  
- **TailwindCSS** (design utility-first)  

---

## 📦 Installation

```bash
# Cloner le projet
git clone https://github.com/ton-utilisateur/ton-repo.git
cd ton-repo

# Installer les dépendances
npm install
# ou
yarn install

# Lancer en mode dev
npm run dev
# ou
yarn dev

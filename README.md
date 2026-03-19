# Campus Ideas – Angular SPA

**Campus Ideas** est une application web **Angular 18** pour gérer et suivre les suggestions d’amélioration du campus, émises par les étudiants et le personnel.  
Le projet est un **frontend complet**, utilisant un **backend prêt** (API REST) ou un **fake API** pour le développement et les tests locaux.

---

## Table des matières
- [Description](#description)
- [Fonctionnalités](#fonctionnalités)
- [Technologies utilisées](#technologies-utilisées)
- [Architecture et Routing](#architecture-et-routing)
- [Reactive Forms](#reactive-forms)
- [Services et Communication API](#services-et-communication-api)
- [Modèle de données](#modèle-de-données)
- [Installation](#installation)
- [Contribution](#contribution)
- [Auteur](#auteur)

---

## Description
Campus Ideas permet aux étudiants et au personnel du campus de proposer des suggestions et aux responsables de les valider, rejeter ou modifier.  
L’application est construite avec **Angular 18**, **Reactive Forms**, **routing modulable**, et suit les bonnes pratiques Angular pour un code **modulaire, lisible et maintenable**.

Le backend est prêt à l’emploi (API REST fournie). Pour le développement ou les tests locaux, il est possible d’utiliser **JSON Server** pour simuler l’API.

---

## Fonctionnalités
- Gestion complète des **suggestions** : création, consultation, modification, suppression  
- **Filtrage** par catégorie ou statut  
- **Consultation détaillée** d’une suggestion  
- **Formulaires réactifs** avec validation avancée  
- **Navigation SPA** avec routing et **lazy loading**  
- **Boutons interactifs** : Like, Ajouter aux favoris  
- **Barre de recherche** pour filtrer par titre et catégorie  

---

## Technologies utilisées
- **Angular 18** – framework frontend  
- **TypeScript** – langage principal  
- **Bootstrap** – UI et styles  
- **Reactive Forms** – formulaires réactifs et validations  
- **Services Angular** – communication avec API REST  
- **Routing & Lazy Loading** – navigation interne optimisée  
- **JSON Server** (optionnel) – simuler un backend REST pour tests  

---

## Architecture et Routing
L’application utilise une **architecture modulaire** avec lazy loading :  

- **Modules fonctionnels** :
  - `features/suggestions` : gestion des suggestions
  - `features/users` : gestion des utilisateurs  
- **Routing principal (`app-routing.module.ts`)** :
  - `/home` → HomeComponent  
  - `/suggestions` → SuggestionsListComponent (lazy loaded)  
  - `/suggestions/:id` → SuggestionDetailsComponent (lazy loaded)  
  - `**` → NotFoundComponent  
- **Routing interne** :
  - Utilisation de `<router-outlet>` dans les modules  
  - Routes paramétrées pour afficher les détails d’une suggestion avec `ActivatedRoute`  

---

## Reactive Forms
- Les formulaires sont **réactifs** avec validations personnalisées :  
  - `titre` : minimum 5 caractères, lettres seulement, commence par majuscule  
  - `description` : minimum 30 caractères  
  - `categorie` : sélection parmi une liste prédéfinie  
  - `date` et `status` : readonly, valeurs par défaut  
  - `nbLikes` : initialisé à 0, non modifiable depuis le formulaire  

- Le bouton **Soumettre** reste désactivé tant que le formulaire est invalide.  
- Après validation, la suggestion est ajoutée à la liste et l’utilisateur est redirigé automatiquement vers `SuggestionsListComponent`.  

---

## Services et Communication API
- Les **services Angular** gèrent toutes les interactions avec le backend :  
  - `SuggestionService` : CRUD complet pour les suggestions  
  - Communication via **HttpClient** pour GET, POST, PUT, DELETE  
- Compatible avec **API REST existante** ou **JSON Server** pour le développement local.  

---

## Modèle de données

```ts
export interface Suggestion {
  id: number;
  title: string;
  description: string;
  category: string;
  date: Date;
  status: string; // en attente | validée | rejetée
  nbLikes: number;
}

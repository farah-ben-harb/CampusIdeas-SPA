import { Injectable } from '@angular/core';
import { Suggestion } from '../models/suggestion';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SuggestionService {
    suggestions: Suggestion[] = [
      {
        id: 1,
        title: "Organiser une journée team building",
        description: "Suggestion pour organiser une journée de team building pour renforcer les liens entre les membres de l'équipe.",
        category: "Événements",
        date: new Date("2025-01-20"),
        status: "acceptee",
        nbLikes: 10
      },
      {
        id: 2,
        title: "Améliorer le système de réservation",
        description: "Proposition pour améliorer la gestion des réservations en ligne avec un système de confirmation automatique.",
        category: "Technologie",
        date: new Date("2025-01-15"),
        status: "refusee",
        nbLikes: 0
      },
      {
        id: 3,
        title: "Créer un système de récompenses",
        description: "Mise en place d'un programme de récompenses pour motiver les employés et reconnaître leurs efforts.",
        category: "Ressources Humaines",
        date: new Date("2025-01-25"),
        status: "refusee",
        nbLikes: 0
      },
      {
        id: 4,
        title: "Moderniser l'interface utilisateur",
        description: "Refonte complète de l'interface utilisateur pour une meilleure expérience utilisateur.",
        category: "Technologie",
        date: new Date("2025-01-30"),
        status: "en_attente",
        nbLikes: 0
      }
    ];

  constructor(private http: HttpClient) {

   }

  api= "http://localhost:3000/Suggestion"
  getAllSuggestions() {
    return this.http.get<Suggestion[]>(this.api);
  }

  getSuggestionById(id: number) {
    return this.http.get<Suggestion>(`${this.api}/${id}`);
  }

  AddSuggestion(suggestion:Suggestion)
  {
    return this.http.post<Suggestion>(this.api, suggestion);
  }

  DeleteSuggestion(id: number) {
    return this.http.delete(this.api +'/'+id);
  }
  UpdateSuggestion(id: number, suggestion: Suggestion) {
    return this.http.put(this.api + '/' +id, suggestion);
  }

}

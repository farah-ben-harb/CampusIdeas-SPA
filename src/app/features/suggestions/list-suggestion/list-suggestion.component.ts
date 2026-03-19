import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Suggestion } from '../../../models/suggestion';
import { SuggestionService } from '../../../services/suggestion.service';

@Component({
  selector: 'app-list-suggestion',
  templateUrl: './list-suggestion.component.html',
  styleUrl: './list-suggestion.component.css'
})
export class ListSuggestionComponent implements OnInit {
  favorites: Suggestion[] = [];
  searchItem :string = '';
  suggestions: Suggestion[] = [];

  constructor(
    private router: Router,
    private suggestionService: SuggestionService
  ) {}

  ngOnInit(): void {
    this.suggestionService.getAllSuggestions().subscribe(
      (data) => {
        this.suggestions = data;
      }
    )
  }


  Like(suggestion: Suggestion): void {
    suggestion.nbLikes++;
  }

  Ajouter_aux_favoris(suggestion: Suggestion): void {
      this.favorites.push(suggestion);
      console.log(this.favorites);
  }

  Detail(suggestion: Suggestion): void {
    this.router.navigate(['/suggestions/detail', suggestion.id]);
  }

  DeleteSuggestion(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette suggestion ?')) {
      this.suggestionService.DeleteSuggestion(id).subscribe(
        () => {
          this.suggestions = this.suggestions.filter(s => s.id !== id);
          alert('Suggestion supprimée avec succès');
        }
      );
    }
  }

}
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Suggestion } from '../../../models/suggestion';
import { SuggestionService } from '../../../services/suggestion.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent implements OnInit {
  suggestionId: number = 0;
  suggestion?: Suggestion;

  constructor(private route: ActivatedRoute, 
    private router: Router, 
    private suggestionService: SuggestionService) {}

  ngOnInit(): void {
    this.suggestionId = Number(this.route.snapshot.params['id']);
    this.suggestionService.getSuggestionById(this.suggestionId).subscribe(
      (suggestion) => {
        this.suggestion = suggestion;
        console.log('Suggestion:', this.suggestion);
      }
    );
  }

  goBack(): void {
    this.router.navigate(['/suggestions']);
  }

  Like(): void {
    if (this.suggestion) {
      this.suggestion.nbLikes++;
      this.suggestionService.UpdateSuggestion(this.suggestion.id, this.suggestion).subscribe(
        (response) => {
          console.log('Like mis à jour avec succès:', response);
        }
      );
    }
  }

  updateSuggestion(): void {
    if (this.suggestionId) {
      this.router.navigate(['/suggestions/modifier', this.suggestionId]);
    }
  }
}

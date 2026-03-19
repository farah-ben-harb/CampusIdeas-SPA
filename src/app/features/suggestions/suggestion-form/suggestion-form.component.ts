import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Suggestion } from '../../../models/suggestion';
//import { SuggestionService } from '../suggestion.service';
import { SuggestionService } from '../../../services/suggestion.service';

@Component({
  selector: 'app-suggestion-form',
  templateUrl: './suggestion-form.component.html',
  styleUrl: './suggestion-form.component.css'
})
export class SuggestionFormComponent implements OnInit {
  suggestionForm!: FormGroup;
  suggestionId?: number;
  isEditMode: boolean = false;
  
  categories: string[] = [
    'Infrastructure et bâtiments',
    'Technologie et services numériques',
    'Restauration et cafétéria',
    'Hygiène et environnement',
    'Transport et mobilité',
    'Activités et événements',
    'Sécurité',
    'Communication interne',
    'Accessibilité',
    'Autre'
  ];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private suggestionService: SuggestionService
  ) {}

  ngOnInit(): void {
    this.suggestionForm = this.fb.group({
      title: ['', [
        Validators.required, 
        Validators.minLength(5), 
        Validators.pattern('^[A-Z][a-zA-Z]*$')
      ]],
      description: ['', [
        Validators.required, 
        Validators.minLength(10)
      ]],
      category: ['', Validators.required],
      date: [{ value: new Date().toISOString().split('T')[0], disabled: true }],
      status: [{ value: 'en attente', disabled: true }]
    });

    // Vérifier si nous sommes en mode édition
    this.suggestionId = Number(this.route.snapshot.params['id']);
    if (this.suggestionId) {
      this.isEditMode = true;
      this.loadSuggestion(this.suggestionId);
    }
  }

  loadSuggestion(id: number): void {
    this.suggestionService.getSuggestionById(id).subscribe(
      (suggestion) => {
        this.suggestionForm.patchValue({
          title: suggestion.title,
          description: suggestion.description,
          category: suggestion.category,
          date: new Date(suggestion.date).toISOString().split('T')[0],
          status: suggestion.status
        });
      }
    );
  }

  onSubmit(): void {
    if (this.suggestionForm.valid) {
      if (this.isEditMode && this.suggestionId) {
        // Mode modification
        this.suggestionService.getSuggestionById(this.suggestionId).subscribe(
          (existingSuggestion) => {
            const updatedSuggestion: Suggestion = {
              ...existingSuggestion,
              title: this.suggestionForm.value.title,
              description: this.suggestionForm.value.description,
              category: this.suggestionForm.value.category
            };
            this.suggestionService.UpdateSuggestion(this.suggestionId!, updatedSuggestion).subscribe(
              (response) => {
                console.log('Suggestion mise à jour avec succès:', response);
                this.router.navigate(['/suggestions']);
              }
            );
          }
        );
      } else {
        // Mode ajout
        const newSuggestion: Suggestion = {
          id: this.suggestionService.suggestions.length + 1,
          title: this.suggestionForm.value.title,
          description: this.suggestionForm.value.description,
          category: this.suggestionForm.value.category,
          date: new Date(),
          status: 'en attente',
          nbLikes: 0
        };
        this.suggestionService.AddSuggestion(newSuggestion).subscribe(
          (response) => {
            console.log('Suggestion ajoutée avec succès:', response);
            this.router.navigate(['/suggestions']);
          }
        );
      }
    }
  }

  get title() {
    return this.suggestionForm.get('title');
  }

  get description() {
    return this.suggestionForm.get('description');
  }

  get category() {
    return this.suggestionForm.get('category');
  }
}

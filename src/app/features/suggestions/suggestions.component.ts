import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrl: './suggestions.component.css'
})
export class SuggestionsComponent {
  suggestionForm: FormGroup;

  constructor() {
    this.suggestionForm = new FormGroup({
      titre: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]),
      description: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(500)]),
      categorie: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      status: new FormControl('', [Validators.required])
    });
  }

  get f() {
    return this.suggestionForm.controls;
  }

  onSubmit() {
    if (this.suggestionForm.valid) {
      console.log(this.suggestionForm.value);
    }
  }
}

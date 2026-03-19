import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SuggestionsRoutingModule } from './suggestions-routing.module';
import { SuggestionsComponent } from './suggestions.component';
import { ListSuggestionComponent } from './list-suggestion/list-suggestion.component';
import { DetailComponent } from './detail/detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SuggestionFormComponent } from './suggestion-form/suggestion-form.component';

@NgModule({
  declarations: [
    SuggestionsComponent,
    ListSuggestionComponent,
    DetailComponent,
    SuggestionFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SuggestionsRoutingModule
  ]
})
export class SuggestionsModule { }

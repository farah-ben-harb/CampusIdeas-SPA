import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListSuggestionComponent } from './list-suggestion/list-suggestion.component';
import { DetailComponent } from './detail/detail.component';
import { SuggestionFormComponent } from './suggestion-form/suggestion-form.component';

const routes: Routes = [
  { path: '', component: ListSuggestionComponent },
  { path: 'ajouter', component: SuggestionFormComponent },
  { path: 'modifier/:id', component: SuggestionFormComponent },
  { path: 'detail/:id', component: DetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuggestionsRoutingModule { }

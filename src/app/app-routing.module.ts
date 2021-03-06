import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SavedRecipesComponent } from
  './components/saved-recipes/saved-recipes.component';

import { SearchRecipesComponent } from
  './components/search-recipes/search-recipes.component';


import { SetPreferencesComponent } from
  './components/set-preferences/set-preferences.component';
let intialComponent = localStorage['isPrefSet'] === "true" ? SearchRecipesComponent : SetPreferencesComponent
const routes: Routes = [
  { path: '', component: intialComponent },
  { path: 'home', component: intialComponent },
  { path: 'saved/:id', component: SavedRecipesComponent },
  { path: 'preferences', component: SetPreferencesComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})

export class AppRoutingModule { }

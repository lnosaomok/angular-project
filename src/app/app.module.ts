import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientJsonpModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { SavedRecipesComponent } from
  './components/saved-recipes/saved-recipes.component';

import { SearchRecipesComponent } from
  './components/search-recipes/search-recipes.component';


import { SetPreferencesComponent } from
  './components/set-preferences/set-preferences.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    SavedRecipesComponent,
    SearchRecipesComponent,
    SetPreferencesComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
























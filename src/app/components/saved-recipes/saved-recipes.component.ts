import { Component, OnInit } from '@angular/core';

//import { Contact } from '../../model/contact';
//import { RecipeService } from
//'../../services/recipe-search.service';

@Component({
    selector: 'app-saved-recipes',
    templateUrl: './saved-recipes.component.html',
    styleUrls: ['./saved-recipes.component.css']
})
export class SavedRecipesComponent implements OnInit {

    recipes: any;

    constructor() { }

    ngOnInit() {
        //	this.friends = this.provider.getFriends();
        //this.recipes = this.provider.getRecipes("fried rice")
        //console.log(this.recipes)
    }

    getRecipes() {

    }

}

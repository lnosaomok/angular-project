import { Component, OnInit } from '@angular/core';

//import { Contact } from '../../model/contact';
//import { RecipeService } from
//'../../services/recipe-search.service';

@Component({
    selector: 'app-set-preferences',
    templateUrl: './set-preferences.component.html',
    styleUrls: ['./set-preferences.component.css']
})
export class SetPreferencesComponent implements OnInit {

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

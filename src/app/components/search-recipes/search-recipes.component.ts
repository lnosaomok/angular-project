import { Component, OnInit } from '@angular/core';
import { sample } from '../../services/sample'
//import { Contact } from '../../model/contact';
import { RecipeService } from
    '../../services/recipe-search.service';

@Component({
    selector: 'app-search-recipes',
    templateUrl: './search-recipes.component.html',
    styleUrls: ['./search-recipes.component.css']
})
export class SearchRecipesComponent implements OnInit {

    data: any[] = [];
    loading: any;

    constructor(private recipeService: RecipeService) { }

    search(searchTerm: string) {
        this.loading = true;
        this.recipeService.getRecipes(searchTerm)
            .subscribe((result: any) => {
                console.log(result);
                this.data = result.hits
                this.loading = false
            });

    }

    ngOnInit() {
        this.data = sample;
        console.log(this.data);

    }


}
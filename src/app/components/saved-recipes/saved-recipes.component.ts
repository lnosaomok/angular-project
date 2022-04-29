import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

//import { Contact } from '../../model/contact';
//import { RecipeService } from
//'../../services/recipe-search.service';

@Component({
    selector: 'app-saved-recipes',
    templateUrl: './saved-recipes.component.html',
    styleUrls: ['./saved-recipes.component.css']
})
export class SavedRecipesComponent implements OnInit {
    id: any;
    sub: any;
    isDesktop: boolean = window.innerWidth >= 1200;
    savedRecipes: any;


    constructor(private route: ActivatedRoute, private router: Router) { }

    ngOnInit() {

        this.savedRecipes = JSON.parse(localStorage['saved']).filter((item: any, index: number) => {
            if (!item.sample) {
                return item
            }
        })

        this.sub =
            this.route.params.subscribe((params: any) => {
                this.id = params['id'];

            });
    }

    getSelectedRecipes(recipeNumber: string) {
        this.router.navigateByUrl(`saved/${recipeNumber}`);
    }



}

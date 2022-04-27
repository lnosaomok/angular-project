import { Component, OnInit, OnChanges, SimpleChanges, AfterContentInit } from '@angular/core';
import { sample } from '../../services/sample'
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from
    '../../services/recipe-search.service';
import bb, { gauge } from "billboard.js"

@Component({
    selector: 'app-search-recipes',
    templateUrl: './search-recipes.component.html',
    styleUrls: ['./search-recipes.component.css']
})
export class SearchRecipesComponent implements OnInit {

    data: any[] = [];
    loading: any;
    userPreferences: any;

    constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) {


    }

    search(searchTerm: string) {
        this.loading = true;
        this.recipeService.getRecipes(searchTerm, this.userPreferences)
            .subscribe((result: any) => {
                this.data = result.hits
                let transformedResult: any = [];
                let transformedResult1: any[] = [];

                result.hits.forEach((result: any) => {
                    transformedResult.push(result);
                });
                transformedResult.forEach((result: any) => {
                    let resultObj: any = {};
                    let nutrients: any[] = [];
                    let {
                        FAT: fat,
                        CHOCDF: carbs,
                        SUGAR: sugar,
                        PROCNT: protein,
                        FIBTG,
                    } = result.recipe.totalNutrients;
                    let {
                        label,
                        image,
                        source,
                        url,
                        yield: recipeYield,
                        ingredientLines,
                        ingredients,
                        calories,
                    } = result.recipe;
                    // let { FAT, CHOCDF, SUGAR, PROCNT, FIBTG } = totalNutrients;
                    nutrients.push(fat);
                    nutrients.push(carbs);
                    nutrients.push(sugar);
                    nutrients.push(protein);
                    nutrients.push(FIBTG);

                    resultObj.nutrients = nutrients;
                    resultObj.label = label;
                    resultObj.image = image;
                    resultObj.source = source;
                    resultObj.url = url;
                    resultObj.yield = recipeYield;
                    resultObj.ingredientLines = ingredientLines;
                    resultObj.ingredients = ingredients;
                    resultObj.calories = calories.toFixed(0);

                    transformedResult1.push(resultObj);
                });
                //console.log(transformedResult1)
                this.data = transformedResult1;

                localStorage.setItem('searchResults', JSON.stringify(this.data));
                this.loading = false
                let script1 = document.createElement("script");
                script1.type = "module";
                script1.text = `insertModalCode()`
                document.body.appendChild(script1);
                let script2 = document.createElement("script");
                script2.type = "module";
                script2.text = `intializeChartData()`
                document.body.appendChild(script2);


                //console.log(this.data);

            });
    }






    ngOnInit() {
        if (localStorage['saved']) {
            localStorage['saved'] = localStorage['saved']
        } else { localStorage['saved'] = JSON.stringify([{ sample: "" }]) }

        //this.data = sample;
        // console.log(JSON.parse(localStorage['userPreferences']));
        if (localStorage['userPreferences']) {
            this.userPreferences = JSON.parse(localStorage['userPreferences'])[0];
        }

        else if (history.state.my_object) {
            this.userPreferences = JSON.parse(history.state.my_object)
            // updateSession(booksArr)

        }


        //this.userPreferences = JSON.parse(history.state.my_object)
        console.log(this.userPreferences)


    }

    saveRecipe(data: any, event: Event) {
        (event.target as HTMLElement).innerHTML = "check";
        var a = [];
        a = JSON.parse((localStorage['saved']));
        a.push(data);
        console.log(a)

        localStorage.setItem('saved', JSON.stringify(a));
        let script = document.createElement("script");
        script.type = "module";
        script.text = `launchToast()`
        document.body.appendChild(script);
    }




}
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RecipeService {


    constructor(private http: HttpClient) { }

    getRecipes(search: string, userPreferences: any): Observable<any> {
        let url: string =
            `https://api.edamam.com/search?app_id=b002bd69&app_key=33ea49b904419aaba54475e6a92afd13&q=${search}`;

        if (userPreferences.fatMacroInd && userPreferences.fatMacroAmount !== "") {
            url += `&nutrients%5B${`FAT`}%5D=${userPreferences.fatMacroAmount}`;
        }



        if (userPreferences.sugarMacroInd && userPreferences.sugarMacroAmount !== "") {
            url += `&nutrients%5B${`SUGAR`}%5D=${userPreferences.sugarMacroAmount}`;
        }



        if (userPreferences.carbsMacroInd && userPreferences.carbsMacroAmount !== "") {
            url += `&nutrients%5B${`CARBS`}%5D=${userPreferences.carbsMacroAmount}`;
        }


        if (userPreferences.proteinMacroInd && userPreferences.proteinMacroAmount !== "") {
            url += `&nutrients%5B${`PROCNT`}%5D=${userPreferences.proteinMacroAmount}`;
        }

        if (userPreferences.dietInd !== "") {
            url += `&health=${userPreferences.dietInd}`;
        }
        return this.http
            .jsonp(url, 'callback');
    }
}

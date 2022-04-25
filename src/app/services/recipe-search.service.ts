import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RecipeService {


    constructor(private http: HttpClient) { }

    getRecipes(search: string): Observable<any> {
        let url: string =
            `https://api.edamam.com/search?app_id=b002bd69&app_key=33ea49b904419aaba54475e6a92afd13&q=${search}`;

        return this.http
            .jsonp(url, 'callback');
    }
}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

//import { Contact } from '../../model/contact';
//import { RecipeService } from
//'../../services/recipe-search.service';

@Component({
    selector: 'app-set-preferences',
    templateUrl: './set-preferences.component.html',
    styleUrls: ['./set-preferences.component.css']
})
export class SetPreferencesComponent implements OnInit {

    preferences: any;

    constructor(private route: ActivatedRoute, private router: Router) { }

    ngOnInit() {
        let script = document.createElement("script");
        script.type = "module";
        script.text = `showHideCheckBoxes()`
        document.body.appendChild(script);

    }

    updateSession(arr: any) {
        var sessionArray: any[] = [];

        arr.forEach((element: any) => {
            sessionArray.push(
                element
            )
        });

        localStorage.setItem('userPreferences', JSON.stringify(sessionArray));
    }

    onSubmit(f: NgForm) {
        let arr: any[] = []
        this.preferences = f.value;
        arr.push(this.preferences)
        this.updateSession(arr)

        localStorage['isPrefSet'] = "true"
        setTimeout(function () { window.location.reload(); }, 10)
        this.router.navigateByUrl('home', {
            state: { my_object: JSON.stringify(this.preferences) }
        });
        // this.router.navigate(['/home'], { state: { id: this.preferences } });


    }

}

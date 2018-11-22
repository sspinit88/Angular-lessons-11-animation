import {Component} from '@angular/core';
import {changeWidthTrigger, divTrigger} from "./app.animations";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    animations: [divTrigger, changeWidthTrigger]
})
export class AppComponent {
    isVisible = false;
}

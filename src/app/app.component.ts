import {Component} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    animations: [
        trigger('clickedDiv', [
            state('start', style({
                backgroundColor: 'blue',
                width: '150px',
                height: '150px',
            })),
            state('end', style({
                backgroundColor: 'red',
                width: '250px',
                height: '250px',
            })),

            state('active', style({
                width: '160px',
                height: '160px',
                backgroundColor: 'orange',
            })),
            transition('start <=> end', animate('800ms ease')),
            transition('start => active', animate(700)),
            transition('active => end', animate(700)),
        ])
    ]
})
export class AppComponent {
    clickedDivState = 'start';

    changeDivState() {
        this.clickedDivState = 'end';
        setTimeout(() => {
            this.clickedDivState = 'start';
        }, 3000)
    }
}

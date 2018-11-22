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
        ]),
        // делаем более сложную анимацию
        trigger('multi', [
            state('start', style({
                width: '150px',
                height: '150px',
                border: '5px solid black'
            })),
            state('end', style({
                width: '170px',
                height: '170px',
                background: 'blue'
            })),
            // задаем анимацию в transition
            transition('start <=> end', [
                style({
                    background: 'red'
                }),
                animate(1700, style({
                    background: 'yellow'
                })),
                animate(1000, style({
                    width: '200px',
                    height: '200px',
                })),
                animate(1000)
            ])
        ])
    ]
})
export class AppComponent {
    clickedDivState = 'start';
    multiState = 'start';

    changeDivState() {
        this.clickedDivState = 'end';
        setTimeout(() => {
            this.clickedDivState = 'start';
        }, 3000)
    }

    changeMultiState(){
        if (this.multiState === 'start'){
            this.multiState = 'end';
        } else {
            this.multiState = 'start';
        }
    }
}

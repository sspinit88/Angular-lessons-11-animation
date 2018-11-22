import {Component} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    animations: [
        // при создании анимации необходимо придерживаться определенной иерархии
        // для начала нужно дать название анимации
        // это делается с помощью метода trigger()
        // первым параметром задается название анимации
        // вторым - массив, в котором задаюся определенные состояния (до / после анимации)

        // state() - определяет состояние анимации
        // 1й парам - название состояния
        // 2й парам - стили состояния

        // по умолчанию ng принимает значения в %

        trigger('clickedDiv', [
            state('start', style({
                backgroundColor: 'blue',
                width: '150px',
                height: '150px',
            })),
            state('end', style({
                backgroundColor: 'red',
                width: '150px',
                height: '150px',
                borderRadius: '50%'
            })),
            // отвечает за анимацию
            // 1й - описывает изменение состояний
            // 2й - animate() - принимает различные параметры
            // animate('800ms .5s ease-out') - ('скорость задержка тип-анимации')
            transition('start => end', animate(1500)),
            transition('end => start', animate('800ms .5s ease-out'))
        ])
    ]
})
export class AppComponent {
    // переменная принимает значение определенного стейта
    clickedDivState = 'start';

    changeDivState() {
        this.clickedDivState = 'end';
        setTimeout(() => {
            this.clickedDivState = 'start';
        }, 3000)
    }
}

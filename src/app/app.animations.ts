import {animate, state, style, transition, trigger} from "@angular/animations";

// создаем константу, которая является результатом
// работы метода trigger и экспортирую ее наружу,
// подключаю ее в компоненте в массив animations: [divTrigger]

export const divTrigger = trigger('divTrigger', [
    state('show', style({

    })),
    // void - отвечает за отстутствующий эл в DOM
    transition('void => show', [
        style({
            opacity: 0
        }),
        animate(500, style({
            opacity: 1
        })),
    ]),
    transition('show => void', animate(700, style({
        opacity: 0
    })))
]);
import {animate, style, transition, trigger} from "@angular/animations";

export const divTrigger = trigger('divTrigger', [
    // void - отвечает за отстутствующий эл в DOM
    // * - означает, что будем использовать переход из любого состояния
    // transition('void => *', [
    // для 'void => *' есть спец ярлык ':enter'
    transition(':enter', [
        style({
            opacity: 0
        }),
        animate(500, style({
            opacity: 1
        })),
    ]),
    // ярлык для состояния '* => void' - ':leave'
    transition(':leave', animate(500, style({
        opacity: 0
    })))
]);


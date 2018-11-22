import {animate, style, transition, trigger} from "@angular/animations";

// создаем константу, которая является результатом
// работы метода trigger и экспортирую ее наружу,
// подключаю ее в компоненте в массив animations: [divTrigger]

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

export const changeWidthTrigger = trigger('changeWidth', [
    transition('* => *', [
        animate(1000,
            style({
               height: '10px'
        })),
        animate(1000,
            style({
                // вернет ширину к ее изначальному значению,
                // работает только для ширины и высоты
                height: '*'
        }))
    ])
]);
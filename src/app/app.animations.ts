import {animate, group, keyframes, style, transition, trigger} from "@angular/animations";

export const divTrigger = trigger('divTrigger', [
    // void - отвечает за отстутствующий эл в DOM
    // * - означает, что будем использовать переход из любого состояния
    // transition('void => *', [
    // для 'void => *' есть спец ярлык ':enter'
    transition(':enter', [
        style({
            width: '*',
            height: '*'
        }),
        // group() - принимает массив аргументов, объединяет в группу несколько анимаций,
        // принимает в себя функцию animate()
        group([
            animate(2000,
                style({
                    width: '200px',
                    height: '200px',
                    backgroundColor: 'yellow'
                })),
            animate(6000,
                // keyframes — позволяет определить как будет вести себя анимация на различных этапах времени анимации.
                keyframes([
                    style({backgroundColor: 'blue'}),
                    style({backgroundColor: 'pink'}),
                    style({backgroundColor: 'cyan'}),
                    style({backgroundColor: 'gold'}),
                    style({backgroundColor: 'red'}),
                    style({backgroundColor: 'green'}),
            ])),
        ]),
        animate(1000),
    ]),
    // ярлык для состояния '* => void' - ':leave'
    transition(':leave',
        animate(500,
            style({
                opacity: 0
    })))
]);


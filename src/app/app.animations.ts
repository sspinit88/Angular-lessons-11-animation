import {animate, group, keyframes, style, transition, trigger} from "@angular/animations";

export const divTrigger = trigger('divTrigger', [
    transition(':enter', [
        style({
            width: '*',
            height: '*'
        }),
        group([
            animate(2000,
                style({
                    width: '200px',
                    height: '200px',
                    backgroundColor: 'yellow'
                })),
            animate(6000,
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
    transition(':leave',
        animate(500,
            style({
                opacity: 0
    })))
]);


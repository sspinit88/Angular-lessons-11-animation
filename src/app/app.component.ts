import {Component} from '@angular/core';
import {divTrigger} from "./app.animations";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    animations: [divTrigger]
})
export class AppComponent {
    isVisible = false;

    // event, приходящий, имеет специальный тип -
    onAnimationStart(event: AnimationEvent){
        console.log('start ', event);
    }

    offAnimationStart(event: AnimationEvent){
        console.log('done ', event);
    }


}

import {Component} from 'angular2/core';
import {Game} from "./game/game";

@Component({
    selector: 'my-app',
    template: `
        <my-game></my-game>
    `,
    directives:[Game]
})
export class AppComponent {

}
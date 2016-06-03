import {Component} from 'angular2/core';
import {StateFull} from "./state-full-pipes/state-full";
import {StateLess} from "./state-less-pipes/state-less";

@Component({
    selector: 'my-app',
    template: `

        <state-less></state-less>

        <state-full></state-full>

    `,
    directives:[StateFull,StateLess]
})
export class AppComponent {

}
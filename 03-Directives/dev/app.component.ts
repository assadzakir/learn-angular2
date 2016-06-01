import {Component} from 'angular2/core';
import {DirectivesList} from "./directives/directives-list";

@Component({
    selector: 'my-app',
    template: `
        <directives-list></directives-list>
    `,
    directives:[DirectivesList]
})
export class AppComponent {

}
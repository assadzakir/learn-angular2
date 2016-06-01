import {Component} from 'angular2/core';
import {ComponentOne} from "./component1/component1";
import {ComponentTwo} from "./component2/component2";

@Component({
    selector: 'my-app',
    template: `
            <section>
                    <h3>Component One</h3>
                    <component-one></component-one>
            </section>
             <section>
                    <h3>Component Two</h3>
                    <component-two></component-two>
            </section>
    `,
    directives: [ComponentOne, ComponentTwo]

})
export class AppComponent {

}
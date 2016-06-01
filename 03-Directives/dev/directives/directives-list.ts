/**
 * Created by Assad zakir on 5/22/2016.
 */
import {Component} from 'angular2/core';
import {MyColor} from "../attribute-directive/attribute-directive";
import {NgNotDirective} from "../structural-directives/structural-directives";

@Component({
    selector: 'directives-list',
    template: `
    <div>
        <h1>Custom Attribute Directives</h1>
          <section [myColor]="'pink'">
                  <h2>Attribute Directive 1</h2>
            </section>

            <section [myColor]="'green'">
                   <h2> Attribute Directive 2</h2>
            </section>
    </div>
  <div>
        <h1>Custom Structural Directives</h1>
          <input type="text" #input (keyup)="0">
            <section *ngNot="input.value != 'false' ">
                   <h2> Custom Structural Directives</h2>
            </section>
    </div>
    `,
    directives: [MyColor, NgNotDirective]
})
export class DirectivesList {

}
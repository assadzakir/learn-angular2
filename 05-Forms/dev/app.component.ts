import {Component} from 'angular2/core';
import {TemplateDriven} from "./forms/template-driven";
import {DataDriven} from "./forms/data-driven";

@Component({
    selector: 'my-app',
    template: `
    <div>
           <h1>Template-Driven</h1>
            <template-driven></template-driven>

    </div>
     <div>
           <h1>Data-Driven</h1>
            <data-driven></data-driven>

    </div>
    `,
    directives:[TemplateDriven,DataDriven]
})
export class AppComponent {

}
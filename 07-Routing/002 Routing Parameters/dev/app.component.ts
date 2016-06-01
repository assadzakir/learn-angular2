import {Component} from 'angular2/core';
import {TestComponent} from "./test/test";
import {ComponentOne} from "./components1/components-1";
import {ComponentTwo} from "./component2/components-2";
import {RouteConfig,ROUTER_DIRECTIVES} from "angular2/router";

@Component({
    selector: 'my-app',
    template: `
        <h1>Angular 2 </h1>
        <header>
        <ul>
            <li> <a [routerLink]="['Components1',{name:'zubair',optionals:'Assad'}]">component-1 </a></li>
            <!--<li> <a [routerLink]="['Components1']">component-1 </a></li>-->
            <li> <a [routerLink]="['Components2']">component-2 </a></li>
        </ul>
        </header>
        <test> </test>
        <router-outlet></router-outlet>
    `,
    directives:[TestComponent,ROUTER_DIRECTIVES]
})

@RouteConfig([
    {path:'/component-1/:name',name:'Components1',component:ComponentOne},
    {path:'/component-2',name:'Components2',component:ComponentTwo,useAsDefault:true}
])

export class AppComponent {

}
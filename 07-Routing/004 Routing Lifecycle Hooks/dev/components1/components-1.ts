/**
 * Created by admin on 5/3/2016.
 */
import {Component,OnInit} from 'angular2/core';
import {Router,RouteParams} from 'angular2/router';
import {RouteConfig,ROUTER_DIRECTIVES} from "angular2/router";
import {ComponentOneMain} from "./comp1-main";
import {ComponentOneSub} from "./comp1-sub";

@Component({
    selector:'componentOne',
    template:`
      <header>
        <ul>
            <li> <a [routerLink]="['Components1Main']">Components1Main </a></li>
            <li> <a [routerLink]="['Components1Sub']">Components1Sub</a></li>
        </ul>
        </header>
    <h1> This is our test component One </h1>
    <h1>PARAM IS {{source}}</h1>
    <h2> Optional PARAM IS {{optional}}</h2>
    <button (click)="onNavigation()">Component2</button>
        <router-outlet></router-outlet>
    `,
    directives:[ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path:'/',name:'Components1Main',component:ComponentOneMain,useAsDefault:true},
    {path:'/componentOneSub',name:'Components1Sub',component:ComponentOneSub}
])



export class ComponentOne  implements OnInit{
    source:string;
    optional:string;
    constructor (private router:Router,private param:RouteParams){}
    onNavigation(){
        this.router.navigate(['Components2'])
    }
    ngOnInit():any{
    this.source = this.param.get('name');
    this.optional = this.param.get('optionals');
    }
}
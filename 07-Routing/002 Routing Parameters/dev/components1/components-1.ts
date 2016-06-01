/**
 * Created by admin on 5/3/2016.
 */
import {Component,OnInit} from 'angular2/core';
import {Router,RouteParams} from 'angular2/router';

@Component({
    selector:'componentOne',
    template:`
    <h1> This is our test component One </h1>
    <h1>PARAM IS {{source}}</h1>
    <h2> Optional PARAM IS {{optional}}</h2>
    <button (click)="onNavigation()">Component2</button>
    `
})

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
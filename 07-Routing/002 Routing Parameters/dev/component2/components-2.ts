/**
 * Created by admin on 5/3/2016.
 */
import {Component} from 'angular2/core';
import {Router} from 'angular2/router';

@Component({
    selector:'componentTwo',
    template:`
    <h1> This is our test component Two </h1>
    <button (click)="onNavigation()">Component1</button>
    `
})

export class ComponentTwo {
    constructor (private router:Router){}
    onNavigation(){
        this.router.navigate(['Components1'])
    }
}
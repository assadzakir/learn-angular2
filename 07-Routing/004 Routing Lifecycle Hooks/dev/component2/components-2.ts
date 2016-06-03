/**
 * Created by admin on 5/3/2016.
 */
import {Component} from 'angular2/core';
import {ComponentInstruction,CanDeactivate,Router} from 'angular2/router';

@Component({
    selector:'componentTwo',
    template:`
    <h1> This is our test component Two </h1>
    <button (click)="onNavigation()">Component1</button>
    `
})

export class ComponentTwo implements CanDeactivate{
    constructor (private router:Router){}
    
    onNavigation(){
        this.router.navigate(['Components1',{name:'zubair',optionals:'Assad'}])
    }

    routerCanDeactivate(next:ComponentInstruction,previous:ComponentInstruction){
        alert('Are you Sure');
    }
}
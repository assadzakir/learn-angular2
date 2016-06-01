/**
 * Created by HP on 5/20/2016.
 */
/**
 * Created by Assadzakir on 5/19/2016.
 */

import {Component,EventEmitter} from 'angular2/core';

@Component({
    selector: 'confirm-form',
    template: `
         <h1> You subimitted the following details . Is it correct ?</h1>
            <p>Your name is <span class="highlight">{{user.name}}</span></p>
            <p>Your email is <span class="highlight">{{user.email}}</span></p>
            <p>Your age is <span class="highlight">{{user.age}}</span></p>
            <div>
                <label for="name">Name</label>
                <input type="text" id="name" [(ngModel)]="user.name" (keyup)="onKeyup()">
            </div>
             <div>
                <label for="email">Email</label>
                <input type="text" id="email" [(ngModel)]="user.email" (keyup)="onKeyup()">
            </div>
             <div>
                <label for="age">Age</label>
                <input type="text" id="age" [(ngModel)]="user.age" (keyup)="onKeyup()">
            </div>
            <br>
            <div> Filled out : {{isFilled ? 'Yes' : 'No'}}</div>
            <div> Valid   :{{isValid ? 'Yes' : 'No'}}</div>
            <br>
            <button [disabled]="!isValid" (click)="onConfirm()" (submitted)="onSubmit()">Confirm</button>
    `,
    outputs:['confirmed'],
    inputs:['user'],
})
export class Confirmed {

    isFilled = false;
    isValid = false;
    confirmed = new EventEmitter<{name:string,email:string,age:string}>();

    user = {
        name : '',
        email : '',
        age: ''
    };

    onKeyup (){
        if(this.user.name != '' && this.user.email != '' && this.user.age != ''){
            this.isFilled = true
        }else {this.isFilled = false}
        if(this.user.name != '' && this.user.email != '' && /^\d+$/.test(this.user.age)){
            this.isValid = true
        }else {this.isValid = false}
    }

    onConfirm(){
        this.confirmed.emit(this.user)
    }

}
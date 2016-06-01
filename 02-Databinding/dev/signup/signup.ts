/**
 * Created by Assadzakir on 5/19/2016.
 */

import {Component,EventEmitter} from 'angular2/core';

@Component({
    selector: 'signup-form',
    template: `
            <h1> Sign up Form</h1>
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
            <button [disabled]="!isValid" (click)="onSubmit()">Signup</button>
    `,
    outputs:['submitted'],
    inputs:['user']
})
export class SignUp {

    isFilled = false;
    isValid = false;
    submitted = new EventEmitter<{name:string,email:string,age:string}>();

    user = {
        name : '',
        email : '',
        age: ''
    };

    onKeyup() {
        if (this.user.name != '' && this.user.email != '' && this.user.age != '') {
            this.isFilled = true
        } else {
            this.isFilled = false
        }
        if (this.user.name != '' && this.user.email != '' && /^\d+$/.test(this.user.age)) {
            this.isValid = true
        } else {
            this.isValid = false
        }
    }

    onSubmit(){
        this.submitted.emit(this.user)
    }

}
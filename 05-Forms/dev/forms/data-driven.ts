/**
 * Created by Assad zakir on 5/26/2016.
 */
import {Component,OnInit} from 'angular2/core';
import {FormBuilder,ControlGroup,Control,Validators} from 'angular2/common';

@Component({
    selector: 'data-driven',
    template: `
        <form [ngFormModel]="myForm" (ngSubmit)="onSubmit()">
                <div>
                    <label for="mail">Email</label>
                    <input type="text" id="mail" required #email="ngForm" [ngFormControl]="myForm.controls['email']">
                    <span class="validation-error" *ngIf="!email.valid">Not Valid</span>
                </div>
                <div>
                    <label for="password">Password</label>
                    <input type="text" id="password" required #password="ngForm"  [ngFormControl]="myForm.controls['password']">
                    <span class="validation-error" *ngIf="!password.valid">Not Valid</span>
                </div>
                <div>
                    <label for="confirmPassword">Confirm Password</label>
                    <input type="text" id="confirmPassword" required #confirmPassword="ngForm"  [ngFormControl]="myForm.controls['confirmPassword']">
                    <span class="validation-error" *ngIf="!confirmPassword.valid">Not Valid</span>
                </div>
                <button type="submit">Submit</button>
        </form>
        <h2>You Submitted</h2>
        <div>Email:{{user.email}}</div>
        <div>Password:{{user.password}}</div>
        `,
})

export class DataDriven implements OnInit{
    myForm:ControlGroup;
    user = {email:'',password:''};

    constructor(private _formBuilder:FormBuilder){}

    onSubmit(){
        this.user = this.myForm.value
    }

    ngOnInit():any{
        this.myForm = this._formBuilder.group({
            'email':['',Validators.required],
            'password':['',Validators.compose([
                Validators.required,
                this.hasNumbers
            ])],
            'confirmPassword':['',Validators.compose([
                this.hasNumbers,
                Validators.required,
            ])]
        })
    }

    hasNumbers = function(control:Control):{[s:string]:boolean}{
    if(!control.value.match('\\d+')){
        return {noNumbers:true};
    }
    };

    //matchPassword(control:Control):{[s:string]:boolean}{
    //    if(this.user && this.user.password != this.user.confirmPassword){
    //        return {noMatch:true};
    //    }
    //}

}
/**
 * Created by Assad zakir on 5/26/2016.
 */
import {Component} from 'angular2/core';

@Component({
    selector: 'template-driven',
    template: `
        <form (ngSubmit)="onSubmit(f)" #f="ngForm">
                <div>
                    <label for="mail">Email</label>
                    <input type="text" id="mail" required #email="ngForm" ngControl="email">
                    <span class="validation-error" *ngIf="!email.valid">Not Valid</span>
                </div>
                <div>
                    <label for="password">Password</label>
                    <input type="text" id="password" required #password="ngForm" ngControl="password">
                    <span class="validation-error" *ngIf="!password.valid">Not Valid</span>
                </div>
                <div>
                    <label for="confirmPassword">Confirm Password</label>
                    <input type="text" id="confirmPassword" required #confirmPassword="ngForm" ngControl="confirmPassword">
                    <span class="validation-error" *ngIf="!confirmPassword.valid">Not Valid</span>
                </div>
                <button type="submit" [disabled]="!f.valid || password.value != confirmPassword.value">Submit</button>
        </form>
        <h2>You Submitted</h2>
        <div>Email:{{user.email}}</div>
        <div>Password:{{user.password}}</div>
        `,
        })

export class TemplateDriven {

    user = {email:'',password:''};

    onSubmit(form){
        this.user.email = form.value['email'];
        this.user.password = form.controls['password'].value;
        console.log(form)
    }
}
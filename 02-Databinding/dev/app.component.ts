import {Component} from 'angular2/core';
import {SignUp} from "./signup/signup";
import {Confirmed} from "./confirmUser/confirm";

@Component({
    selector: 'my-app',
    template: `
    <div class="container">
          <signup-form (submitted)="onSubmit($event)" [user]="confirmUser"></signup-form>
    </div>
    <div class="container">
              <confirm-form (confirmed)="onConfirm($event)" [user]="user"></confirm-form>
    </div>
    `,
    directives: [SignUp, Confirmed]
})
export class AppComponent {
    user = {
        name: '',
        email: '',
        age: ''
    };
    confirmUser = {
        name: '',
        email: '',
        age: ''
    };

    onSubmit(user:{name:string,email:string,age:string}) {
        this.user = {name: user.name, email: user.email, age: user.age}
    }

    onConfirm(user:{name:string,email:string,age:string}) {
        this.confirmUser = {name: user.name, email: user.email, age: user.age};
    }
}
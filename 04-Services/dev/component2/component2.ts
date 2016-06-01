/**
 * Created by Assad zakir on 5/26/2016.
 */
import {Component} from 'angular2/core';
import {ExampleService} from "../services/example.service";

@Component({
    selector: 'component-two',
    template: `
           <input type="text" #message>
           <button (click)="onSubmit(message.value)">Submit</button>
            <div>
                <h2>Random Name</h2>
                <button (click)="getRandomName()">Random Name</button>
                <span>Name : {{data}}</span>
           </div>
           <div>
                <h2>Add Name</h2>
                <input type="text" #name>
                <button (click)="addName(name.value)">submit</button>
           </div>
    `,
    providers: [ExampleService]
})
export class ComponentTwo {
    data:string;

    constructor(private _exampleService:ExampleService) {
    }

    onSubmit(message:string) {
        this._exampleService.logMessage(message)
    }

    getRandomName() {
        this.data = this._exampleService.getRandomName()
    }

    addName(name:string) {
        this._exampleService.addName(name)
    }
}
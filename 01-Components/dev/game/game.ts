/**
 * Created by Assadzakir on 5/15/2016.
 */

import {Component,OnInit} from 'angular2/core';

@Component({
    selector: 'my-game',
    template: `
        <h1>Angular 2 game</h1>

        <section class="setup">
                <h2>Game Setup</h2>
                Enter your name please:
                <input type="text" #name (keyup)="0">
        </section>
         <section
         [ngClass]="{
         puzzle:true,
         solved: option1.value == optionOneDefaultValue && option2.value == optionTwoDefaultValue && option3.value == optionThreeDefaultValue && option4.value == optionFourDefaultValue
         }"
         [style.display]="name.value === '' ? 'none' : 'block' ">
                <h1>The Game |

                {{ option1.value == optionOneDefaultValue && option2.value == optionTwoDefaultValue && option3.value == optionThreeDefaultValue && option4.value == optionFourDefaultValue ? 'Sovled' : 'Not Sovled Yet'}}

                </h1>
                <p>Ok wellcome <span class="">{{name.value}}</span></p>
                <br>
                Switch 1
                <input type="text" #option1 (keyup)="0">
                Switch 2
                <input type="text" #option2 (keyup)="0">
                Switch 3
                <input type="text" #option3 (keyup)="0">
                Switch 4
                <input type="text" #option4 (keyup)="0">
        </section>
        <p [hidden]="option1.value != optionOneDefaultValue || option2.value != optionTwoDefaultValue || option3.value != optionThreeDefaultValue || option4.value != optionFourDefaultValue">Congratulations {{name.value}}, you did it !</p>
    `,
})
export class Game implements OnInit{
    optionOneDefaultValue:number;
    optionTwoDefaultValue:number;
    optionThreeDefaultValue:number;
    optionFourDefaultValue:number;

    ngOnInit(){
        this.optionOneDefaultValue      =   Math.round(Math.random());
        this.optionTwoDefaultValue      =   Math.round(Math.random());
        this.optionThreeDefaultValue    =   Math.round(Math.random());
        this.optionFourDefaultValue     =   Math.round(Math.random());

        console.log(this.optionOneDefaultValue);
        console.log(this.optionTwoDefaultValue);
        console.log(this.optionThreeDefaultValue);
        console.log(this.optionFourDefaultValue);
    }

}

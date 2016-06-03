/**
 * Created by Assad zakir on 6/1/2016.
 */
import {Component} from 'angular2/core';
import {ReversePipe} from "../custom-pipes/custom-pipe";

@Component({
    selector: 'state-less',
    template: `
        <h1>State less</h1>

        <section class="pipe">
            <h2>The Date Pipe</h2>
            <p>Today is :{{today | date}}</p>
        </section>

        <section class="pipe">
            <h2>The lower and UPPER case  Pipe</h2>
            <input type="text" #inputCasePipe (keyup)="0">
            <div>output Lowercase : xx</div>
            <div>output Uppercase : xx</div>
        </section>

        <section class="pipe">
            <h2>The Slice Pipe</h2>
             <input type="text" #inputSlicePipe (keyup)="0"> from <input type="text" #start (keyup)="0"> to <input type="text" #end (keyup)="0">
            <div>output : xx</div>
        </section>

        <section class="pipe">
            <h2>The Number Pipe</h2>
         <input type="text" #inputNumberPipe (keyup)="0"> - Currency : <input type="text" value="EUR" #currency (change)="0">
            <div>Decimal : xx</div>
            <div>Currency : xx</div>
            <input type="checkbox" checked #currencyShort (change)="0">
        </section>

        <section class="pipe">
            <h2>The Chaining Multiple Pipe (e.g. upper and slice)</h2>
             <input type="text" #inputChainPipe (keyup)="0">
            <div>output : xx</div>
        </section>

        <section class="pipe">
            <h2>Custom Pipe</h2>
             <input type="text" #inputCustomPipe (keyup)="0">
            <div>output : {{inputCustomPipe.value | my-reverse}}</div>
        </section>

    `,
    pipes:[ReversePipe]
})
export class StateLess {

}
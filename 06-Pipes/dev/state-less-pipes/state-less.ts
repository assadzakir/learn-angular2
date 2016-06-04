/**
 * Created by Assad zakir on 6/1/2016.
 */
import {Component} from 'angular2/core';
import {ReversePipe} from "../custom-pipes/custom-pipe";

@Component({
    selector: 'state-less',
    template: `
        <h1>State less</h1>

        <section>
            <h2>The Date Pipe</h2>
            <p>Today is :{{today | date}}</p>
        </section>

        <section class="pipe">
            <h2>The lower and UPPER case  Pipe</h2>
            <input type="text" #inputCasePipe (keyup)="0">
            <div>output Lowercase : {{inputCasePipe.value | lowercase}}</div>
            <div>output Uppercase : {{inputCasePipe.value | uppercase}}</div>
        </section>

        <section class="pipe">
            <h2>The Slice Pipe</h2>
             <input type="text" #inputSlicePipe (keyup)="0"> from <input type="text" #start (keyup)="0"> to <input type="text" #end (keyup)="0">
            <div>output : {{inputSlicePipe.value | slice:start.value:end.value}}</div>
        </section>

        <section>
            <h2>The Number Pipe</h2>
         <input type="text" #inputNumberPipe (keyup)="0"> - Currency : <input type="text" value="EUR" #currency (change)="0">
            <div>Decimal : {{ 1.0 * inputNumberPipe.value | number:'2.2-2'}}</div>
            <div>Currency : {{ 1.0 * inputNumberPipe.value | currency:currency.value:currencyShort.value:'1.2-2'}}</div>
            <input type="checkbox" checked #currencyShort (change)="0">
        </section>

        <section class="pipe">
            <h2>The Chaining Multiple Pipe (e.g. upper and slice)</h2>
             <input type="text" #inputChainPipe (keyup)="0">
            <div>output : {{inputChainPipe.value | slice:1-3 | uppercase}}</div>
        </section>

        <section>
            <h2>Custom Pipe</h2>
             <input type="text" #inputCustomPipe (keyup)="0">
            <div> output : {{inputCustomPipe.value | myReverse}}</div>
        </section>

    `,
    pipes:[ReversePipe]
})
export class StateLess {

    today = new Date()

}
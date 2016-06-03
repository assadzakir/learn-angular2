/**
 * Created by Assad zakir on 6/1/2016.
 */
import {Component} from 'angular2/core';

@Component({
    selector: 'state-full',
    template: `
        <h1>State full</h1>

         <section class="pipe">
            <h2>(Async Stateful Pipe )</h2>
            <div>output (received after 2 sec) {{stateFulPipeOutput | async}}</div>
        </section>

    `,
})
export class StateFull {

    stateFulPipeOutput = new Promise((resove,reject)=>{
        setTimeout(()=> resove('Data is here'),2000);
    })
}
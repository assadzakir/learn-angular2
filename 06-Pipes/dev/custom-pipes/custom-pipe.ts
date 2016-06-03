/**
 * Created by Assad zakir on 6/1/2016.
 */
import {Pipe,PipeTransform} from 'angular2/core';

@Pipe({
    //selector: 'my-reverse',
    selector: 'myReverse',
})
export class ReversePipe implements PipeTransform {

    transform(value:string, arg:any[]) {
        const length = value.length;
        let resultString = '';

        for (let i = 0; i < length; i++) {
            resultString = value[i] + resultString
        }
        return resultString
    }


}
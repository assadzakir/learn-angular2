/**
 * Created by Assad zakir on 5/26/2016.
 */
import {Injectable} from 'angular2/core';

@Injectable()

export class ExampleService {
    private _previousMessage:string;
    private _data = ['Assad', 'jawad', 'zubair', 'Mohsin'];

    logMessage(message:string) {
        console.log('Message ' + message, ' Previous Message ' + this._previousMessage);
        this._previousMessage = message;
    }

    getRandomName() {
        let randomName = Math.floor(Math.random() * this._data.length);
        return this._data[randomName]
    }

    addName(name:string) {
        this._data.push(name)
    }


}
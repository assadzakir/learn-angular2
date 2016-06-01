/**
 * Created by Assad zakir on 5/22/2016.
 */
import {Directive,EventEmitter,ElementRef,OnInit,Renderer} from 'angular2/core';

@Directive({
    selector: '[myColor]',
    inputs: ['selectedColor:myColor'],
    //host
    host: {
        '(mouseenter)': 'onMouseEnter()',
        '(mouseleave)': 'onMouseLeave()'
    }

})

export class MyColor {

    private _defaultColor = 'blue';
    selectedColor:string;

    // ElementRef
    // Renderer
    constructor(private _elRef:ElementRef, private _renderer:Renderer) {

    }

    onMouseEnter() {
        this.applyColor(this.selectedColor || this._defaultColor)
    }

    onMouseLeave() {
        this.applyColor(null)
    }

    private applyColor(color:string) {
        this._renderer.setElementStyle(this._elRef.nativeElement, 'background-color', color)
    }

}
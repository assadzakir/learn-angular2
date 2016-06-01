/**
 * Created by Assad zakir on 5/22/2016.
 */

import {Directive,TemplateRef,ViewContainerRef} from 'angular2/core';

@Directive({
    selector: '[ngNot]',
    inputs: ['ngNot'],

})

export class NgNotDirective {
    // TemplateRef
    // ViewContainerRef
    constructor(private _tempRef:TemplateRef, private _viewContainerRef:ViewContainerRef) {
    }

    set ngNot(condition:boolean) {

        if (!condition) {
            this._viewContainerRef.createEmbeddedView(this._tempRef)
        }
        else {
            this._viewContainerRef.clear()
        }
    }


}
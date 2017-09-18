import { Component } from '@angular/core';
import { AdvanceService } from '../services/advance.service';


@Component({
    selector: 'my-advance',
    templateUrl: './advance.component.html',
    styleUrls: ['./advance.component.css'],
    providers: [ AdvanceService ],
})



export class AdvanceComponent{
    stared: any = [];
    languagename: any;

    constructor(private _advanceservice: AdvanceService){
        console.log("loading....");

    }
    onClick(){
    
    this._advanceservice.updatelanguage(this.languagename);
    
    this._advanceservice.getLanguageRepo().subscribe(stared => {
        console.log(stared);
        this.stared = stared;        
    })
    }
}  
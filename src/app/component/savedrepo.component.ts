import {Component, OnInit} from '@angular/core';
import { AdvanceService } from '../services/advance.service';


@Component({
    selector: 'my-saved',
    templateUrl: './savedrepo.component.html',
    styleUrls:['./savedrepo.component.css'],
    providers:[AdvanceService]

})

export class SavedRepoComponent implements OnInit{
    data:any;

    ngOnInit(){
        
    }
    title: 'saved repo';
    saved:any;

    constructor(private _savedrepo: AdvanceService){
        this._savedrepo.getSavedRepo().subscribe(saved => {
            console.log(saved);
            this.saved = saved; 
        });

    }

    delete(saved): void{
        this._savedrepo.deleterepo(saved).then(this.saved = null);
    }
}
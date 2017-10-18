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
    getList(){
        this._savedrepo.getSavedRepo().subscribe(saved => {
            console.log(saved);
            this.saved = saved; 
        });
    }
    ngOnInit(){
        this.getList();
    }
    title: 'saved repo';
    saved:any;

    constructor(private _savedrepo: AdvanceService){
        

    }

    delete(id:any): void{
        this._savedrepo.deleterepo(id).then(() => this.getList());
        // this.getList();
    }
}
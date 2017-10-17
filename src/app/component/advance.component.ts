import { Component } from '@angular/core';
import { AdvanceService } from '../services/advance.service';

export class Save{
    id:any;
    full_name:any;
    language:any;
    forks: any;
    homepage:any;
    html_url:any;
    watchers_count:any;
    description:any;


}


@Component({
    selector: 'my-advance',
    templateUrl: './advance.component.html',
    styleUrls: ['./advance.component.css'],
    providers: [ AdvanceService ],
})



export class AdvanceComponent{
    stared: any = [];
    languagename: any;
    saved: any;
    json: any;
    postdata:any;

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

    onSave(star:any){
        this.json=JSON.stringify({
            id: star.id,
            full_name: star.full_name,
            language: star.language,
            fork: star.fork,
            homepage: star.homepage,
            html_url:star.html_url,
            watchers_count: star.watchers_count,
            description: star.description
          });
       
          console.log(this.json);
       
       
          return this._advanceservice.postLanguageRepo(this.json).subscribe(
            res => this.postdata=res,
            error => console.log(error),
            ()=> console.log("Finished")
          );
    }
}  
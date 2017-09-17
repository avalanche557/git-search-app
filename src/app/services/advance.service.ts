import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http'; 

import 'rxjs/add/operator/map';

@Injectable()


export class AdvanceService{
    private language: 'javascript';

    constructor(private _http:Http){
        console.log('advance service');
    }
    
        
    updatelanguage(language:any){
        this.language = language;
    }

    getLanguageRepo(){
        return this._http.get('https://api.github.com/search/repositories?q=+language:'+this.language+'&sort=stars&order=desc')
        .map(res => res.json());
    }

}
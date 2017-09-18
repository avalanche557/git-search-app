import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http'; 

import 'rxjs/add/operator/map';

@Injectable()


export class AdvanceService{
    private language: 'javascript';
    private client_id = '9dbdc8f265d8247fc11a';
    private client_secret = '2a17a875a8f577641e1d740276108eaddf5db800';

    constructor(private _http:Http){
        console.log('advance service');
    }

    getLanguageRepo(){
        return this._http.get('https://api.github.com/search/repositories?q=+language:'+this.language+'&sort=stars&order=desc')
        .map(res => res.json()['items']);
    }

    updatelanguage(language:any){
        this.language = language;
    }

}
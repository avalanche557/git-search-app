import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions , Response} from '@angular/http'; 

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@Injectable()


export class AdvanceService{
    private language: 'javascript';
    private client_id = '9dbdc8f265d8247fc11a';
    private client_secret = '2a17a875a8f577641e1d740276108eaddf5db800';
    private data: any;

    constructor(private _http:Http){
        console.log('advance service');
    }

    getLanguageRepo(){
        return this._http.get('https://api.github.com/search/repositories?q=+language:'+this.language+'&sort=stars&order=desc')
        .map(res => res.json()['items']);
    }

    postLanguageRepo(data:any){
  
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.post('http://localhost:8080/gitsearch/add',data,options)
        .map((res:Response) => res.json());
        
        
    }
    getSavedRepo(){
        return this._http.get('http://localhost:8080/gitsearch/repo').map((res: Response)=>res.json());
    }

    deleterepo(data:any){
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        const url = `http://localhost:8080/gitsearch/delete/${data.id}`;
        return this._http.get(url, options).toPromise().then(()=>null);
    }
   

    updatelanguage(language:any){
        this.language = language;
    }

}
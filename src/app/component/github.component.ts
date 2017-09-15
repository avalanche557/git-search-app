import { Component } from '@angular/core';

import { GithubService } from '../services/github.service';

@Component({
  selector: 'my-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css'],
  providers: [ GithubService ],
})
export class GithubComponent {
    user:any;
    repos:any;
    username: string;

    constructor(private _githubservice: GithubService){
        console.log("loading....");

    }
    onClickMe(){
        this._githubservice.updateusername(this.username);

        console.log(this.username);
        this._githubservice.getUser().subscribe(user => {
            //console.log(user);
            this.user = user; 
        });

        this._githubservice.getRepos().subscribe(repos => {
            //console.log(repos);
            this.repos = repos; 
        });
    }
    

}
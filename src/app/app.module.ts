import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';


import { GithubComponent } from './component/github.component';

import { AdvanceComponent } from './component/advance.component';

import { GithubService } from './services/github.service';


@NgModule({
  declarations: [
    AppComponent,
    GithubComponent,
    AdvanceComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

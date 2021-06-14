import { HttpClientModule } from '@angular/common/http';
import { FollowersService } from './common/services/followers.service';
import { DataService } from './common/services/data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FollowersComponent } from './followers/followers.component';

@NgModule({
  declarations: [
    AppComponent,
    FollowersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    DataService,
    FollowersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

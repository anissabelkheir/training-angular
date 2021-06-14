import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArchivesListComponent } from './archives-list/archives-list.component';
import { ArchivesDetailComponent } from './archives-detail/archives-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PictureService } from './rest.service';

@NgModule({
  declarations: [
    AppComponent,
    ArchivesListComponent,
    ArchivesDetailComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    PictureService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { ArchivesDetailComponent } from './archives-detail/archives-detail.component';
import { ArchivesListComponent } from './archives-list/archives-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  {
    path: '', component: ArchivesListComponent
  },
  {
    path: 'archives/:year/:month', component: ArchivesDetailComponent
  },
  {
    path: '**', component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

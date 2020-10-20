import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './pfa/details/details.component';
import { SummaryComponent } from './pfa/summary/summary.component';
import { UploadComponent } from './pfa/upload/upload.component';


const routes: Routes = [
  {
    path: '', component:  UploadComponent
  },
  {
    path: 'details', component:  DetailsComponent
  },
  {
    path: 'summary', component:  SummaryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostDashboardComponent } from './shared/components/post-dashboard/post-dashboard.component';
import { PostFormComponent } from './shared/components/post-form/post-form.component';
import { ClientDetailsComponent } from './shared/components/client-details/client-details.component';


const routes: Routes = [
  {
    path:'',
    component:PostDashboardComponent
  },
 {
  path:'posts',
  component : PostDashboardComponent,
  
 },
 {
  path:'view',
  component:ClientDetailsComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

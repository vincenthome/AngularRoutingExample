import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyFeatureBComponent } from './my-feature-b/my-feature-b.component';
import { MyFeatureBHomeComponent } from './my-feature-b-home/my-feature-b-home.component';


const routes: Routes = [
  {
    path: 'myfb',
    component: MyFeatureBComponent,
    children: [
      { path: 'home', component: MyFeatureBHomeComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyFeatureBRoutingModule { }

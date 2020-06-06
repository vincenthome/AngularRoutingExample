import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyFeatureCComponent } from './my-feature-c/my-feature-c.component';
import { MyFeatureCHomeComponent } from './my-feature-c-home/my-feature-c-home.component';


const routes: Routes = [
  {
    path: '',
    component: MyFeatureCComponent,
    children: [
      { path: 'home', component: MyFeatureCHomeComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyFeatureCRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyCanActivateFeatureComponent } from './my-can-activate-feature/my-can-activate-feature.component';
import { MyCanActivateFeatureHomeComponent } from './my-can-activate-feature-home/my-can-activate-feature-home.component';
import { MyCanActivateFeatureGuard } from './my-can-activate-feature.guard';


const routes: Routes = [
  {
    path: 'mycaf',
    component: MyCanActivateFeatureComponent,
    canActivate: [MyCanActivateFeatureGuard],
    children: [
      {
        path: '',
        component: MyCanActivateFeatureHomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyCanActivateFeatureRoutingModule { }

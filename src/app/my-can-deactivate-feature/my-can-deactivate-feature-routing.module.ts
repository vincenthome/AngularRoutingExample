import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyCanDeactivateFeatureComponent } from './my-can-deactivate-feature/my-can-deactivate-feature.component';
import { MyCanDeactivateFeatureHomeComponent } from './my-can-deactivate-feature-home/my-can-deactivate-feature-home.component';
import { MyCanDeactivateFeatureGuard } from './my-can-deactivate-feature.guard';


const routes: Routes = [
  {
    path: 'mycdf',
    component: MyCanDeactivateFeatureComponent,
    children: [
      {
        path: '',
        component: MyCanDeactivateFeatureHomeComponent,
        canDeactivate: [MyCanDeactivateFeatureGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyCanDeactivateFeatureRoutingModule { }

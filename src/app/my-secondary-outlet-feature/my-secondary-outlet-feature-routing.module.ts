import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MySecondaryOutletFeatureComponent } from './my-secondary-outlet-feature/my-secondary-outlet-feature.component';


const routes: Routes = [
  {
    path: 'my2ndoutletpath',
    component: MySecondaryOutletFeatureComponent,
    outlet: 'my2ndoutlet'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MySecondaryOutletFeatureRoutingModule { }

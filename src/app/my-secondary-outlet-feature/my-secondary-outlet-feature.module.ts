import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MySecondaryOutletFeatureRoutingModule } from './my-secondary-outlet-feature-routing.module';
import { MySecondaryOutletFeatureComponent } from './my-secondary-outlet-feature/my-secondary-outlet-feature.component';


@NgModule({
  declarations: [MySecondaryOutletFeatureComponent],
  imports: [
    CommonModule,
    MySecondaryOutletFeatureRoutingModule
  ]
})
export class MySecondaryOutletFeatureModule { }

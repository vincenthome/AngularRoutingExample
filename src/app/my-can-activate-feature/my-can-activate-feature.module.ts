import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyCanActivateFeatureRoutingModule } from './my-can-activate-feature-routing.module';
import { MyCanActivateFeatureComponent } from './my-can-activate-feature/my-can-activate-feature.component';
import { MyCanActivateFeatureHomeComponent } from './my-can-activate-feature-home/my-can-activate-feature-home.component';


@NgModule({
  declarations: [MyCanActivateFeatureComponent, MyCanActivateFeatureHomeComponent],
  imports: [
    CommonModule,
    MyCanActivateFeatureRoutingModule
  ]
})
export class MyCanActivateFeatureModule { }

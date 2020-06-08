import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MyCanDeactivateFeatureRoutingModule } from './my-can-deactivate-feature-routing.module';
import { MyCanDeactivateFeatureComponent } from './my-can-deactivate-feature/my-can-deactivate-feature.component';
import { MyCanDeactivateFeatureHomeComponent } from './my-can-deactivate-feature-home/my-can-deactivate-feature-home.component';


@NgModule({
  declarations: [MyCanDeactivateFeatureComponent, MyCanDeactivateFeatureHomeComponent],
  imports: [
    CommonModule,
    FormsModule,
    MyCanDeactivateFeatureRoutingModule
  ]
})
export class MyCanDeactivateFeatureModule { }

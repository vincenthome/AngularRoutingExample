import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyFeatureCRoutingModule } from './my-feature-c-routing.module';
import { MyFeatureCComponent } from './my-feature-c/my-feature-c.component';
import { MyFeatureCHomeComponent } from './my-feature-c-home/my-feature-c-home.component';


@NgModule({
  declarations: [MyFeatureCComponent, MyFeatureCHomeComponent],
  imports: [
    CommonModule,
    MyFeatureCRoutingModule
  ]
})
export class MyFeatureCModule { }

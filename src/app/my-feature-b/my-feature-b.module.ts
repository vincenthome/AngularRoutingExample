import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyFeatureBRoutingModule } from './my-feature-b-routing.module';
import { MyFeatureBHomeComponent } from './my-feature-b-home/my-feature-b-home.component';
import { MyFeatureBComponent } from './my-feature-b/my-feature-b.component';


@NgModule({
  declarations: [MyFeatureBHomeComponent, MyFeatureBComponent],
  imports: [
    CommonModule,
    MyFeatureBRoutingModule
  ]
})
export class MyFeatureBModule { }

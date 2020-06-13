import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyComponentlessFeatureRoutingModule } from './my-componentless-feature-routing.module';
import { MyComponentlessFeatureComponent } from './my-componentless-feature/my-componentless-feature.component';
import { MyComponentlessFeatureHomeComponent } from './my-componentless-feature-home/my-componentless-feature-home.component';


@NgModule({
  declarations: [MyComponentlessFeatureComponent, MyComponentlessFeatureHomeComponent],
  imports: [
    CommonModule,
    MyComponentlessFeatureRoutingModule
  ]
})
export class MyComponentlessFeatureModule { }

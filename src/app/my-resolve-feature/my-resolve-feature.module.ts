import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyResolveFeatureRoutingModule } from './my-resolve-feature-routing.module';
import { MyResolveFeatureComponent } from './my-resolve-feature/my-resolve-feature.component';
import { MyResolveFeatureHomeComponent } from './my-resolve-feature-home/my-resolve-feature-home.component';


@NgModule({
  declarations: [MyResolveFeatureComponent, MyResolveFeatureHomeComponent],
  imports: [
    CommonModule,
    MyResolveFeatureRoutingModule
  ]
})
export class MyResolveFeatureModule { }

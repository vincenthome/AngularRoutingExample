import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyFeatureARoutingModule } from './my-feature-a-routing.module';
import { MyFeatureAComponent } from './my-feature-a/my-feature-a.component';
import { MyFeatureAHomeComponent } from './my-feature-a-home/my-feature-a-home.component';
import { MyFeatureAChildAComponent } from './my-feature-a-child-a/my-feature-a-child-a.component';
import { MyFeatureAChildBComponent } from './my-feature-a-child-b/my-feature-a-child-b.component';
import { MyFeatureAHome2Component } from './my-feature-a-home2/my-feature-a-home2.component';

// ng g module my-feature-a --module app --routing

@NgModule({
  declarations: [MyFeatureAComponent, MyFeatureAHomeComponent, MyFeatureAChildAComponent, MyFeatureAChildBComponent, MyFeatureAHome2Component],
  imports: [
    CommonModule,
    MyFeatureARoutingModule
  ]
})
export class MyFeatureAModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyFeatureAHomeComponent } from './my-feature-a-home/my-feature-a-home.component';
import { MyFeatureAChildAComponent } from './my-feature-a-child-a/my-feature-a-child-a.component';
import { MyFeatureAComponent } from './my-feature-a/my-feature-a.component';
import { MyFeatureAChildBComponent } from './my-feature-a-child-b/my-feature-a-child-b.component';
import { MyFeatureAHome2Component } from './my-feature-a-home2/my-feature-a-home2.component';

const routes: Routes = [
  {
    path: 'myfa',
    component: MyFeatureAComponent,
    children: [
      {
        // if only have 1 home component(i.e. no home2), use EMPTY path instead
        // Use empty path routes to group routes together without adding any additional path segments to the URL.
        // Users will still visit /myfa and the MyFeatureAHomeComponent still serves as the Routing Component
        // containing child routes.
        path: 'home',
        component: MyFeatureAHomeComponent,
        children: [
          {
            path: 'childa',
            component: MyFeatureAChildAComponent,
          },
          {
            path: 'childb',
            component: MyFeatureAChildBComponent,
          }
        ]
      },
      {
        path: 'home2',
        component: MyFeatureAHome2Component
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyFeatureARoutingModule { }

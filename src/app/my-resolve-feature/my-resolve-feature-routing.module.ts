import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyResolveFeatureComponent } from './my-resolve-feature/my-resolve-feature.component';
import { MyResolveFeatureHomeComponent } from './my-resolve-feature-home/my-resolve-feature-home.component';
import { MyResolveFeatureHomeResolverService } from './my-resolve-feature-home-resolver.service';


const routes: Routes = [
  {
    path: 'myrf',
    component: MyResolveFeatureComponent,
    children: [
      {
        path: '',
        component: MyResolveFeatureHomeComponent,
        resolve: {
          resolveData: MyResolveFeatureHomeResolverService
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyResolveFeatureRoutingModule { }

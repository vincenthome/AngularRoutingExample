import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyResolveFeatureComponent } from './my-resolve-feature/my-resolve-feature.component';
import { MyResolveFeatureHomeComponent } from './my-resolve-feature-home/my-resolve-feature-home.component';
import { MyResolveFeatureHomeResolverService } from './my-resolve-feature-home-resolver.service';
import { MyResolveFeatureDetailsComponent } from './my-resolve-feature-details/my-resolve-feature-details.component';
import { MyResolveFeatureDetailsResolverService } from './my-resolve-feature-details-resolver.service';


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
      },
      {
        path: 'details/:id',
        component: MyResolveFeatureDetailsComponent,
        resolve: {
          resolveData: MyResolveFeatureDetailsResolverService
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

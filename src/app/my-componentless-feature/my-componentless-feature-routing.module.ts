import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyComponentlessFeatureComponent } from './my-componentless-feature/my-componentless-feature.component';
import { MyComponentlessFeatureHomeComponent } from './my-componentless-feature-home/my-componentless-feature-home.component';


const routes: Routes = [
  {
    path: 'myclf',
    // Componentless Route. i.e. NO component specified in this line
    // And no <router-outlet></router-outlet> in any of the following components.
    // Because it will use the AppComponent's <router-outlet></router-outlet> instead.
    children: [
      {
        path: '',
        component: MyComponentlessFeatureComponent
      },
      {
        path: 'home',
        component: MyComponentlessFeatureHomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyComponentlessFeatureRoutingModule { }

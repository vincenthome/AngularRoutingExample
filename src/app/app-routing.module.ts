import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PathNotFoundComponent } from './path-not-found/path-not-found.component';
import { Home2Component } from './home2/home2.component';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { RouteParamComponent } from './route-param/route-param.component';

// snippets: a-route-
const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'childa', component: ChildAComponent },
      { path: 'childb', component: ChildBComponent }
    ],
  },
  { path: 'home2', component: Home2Component },
  { path: 'routeparam/:id', component: RouteParamComponent },
  {
    path: 'myfc',
    // dont forget to remove MyFeatureCModule from app.module.ts
    // otherwise eagar load will continue!
    loadChildren: () => import('./my-feature-c/my-feature-c.module').then(m => m.MyFeatureCModule)
  },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', component: PathNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

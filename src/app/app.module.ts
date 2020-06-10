import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PathNotFoundComponent } from './path-not-found/path-not-found.component';
import { HomeComponent } from './home/home.component';
import { Home2Component } from './home2/home2.component';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { MyFeatureAModule } from './my-feature-a/my-feature-a.module';
import { MyFeatureBModule } from './my-feature-b/my-feature-b.module';
import { MyFeatureCModule } from './my-feature-c/my-feature-c.module';
import { RouteParamComponent } from './route-param/route-param.component';
import { MyCanActivateFeatureModule } from './my-can-activate-feature/my-can-activate-feature.module';
import { MyCanDeactivateFeatureModule } from './my-can-deactivate-feature/my-can-deactivate-feature.module';
import { MyResolveFeatureModule } from './my-resolve-feature/my-resolve-feature.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PathNotFoundComponent,
    HomeComponent,
    Home2Component,
    ChildAComponent,
    ChildBComponent,
    RouteParamComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MyFeatureAModule,
    MyFeatureBModule,
    MyCanActivateFeatureModule,
    MyCanDeactivateFeatureModule,
    MyResolveFeatureModule,
    // Feature Modules HAS TO BE BEFORE AppRoutingModule becoz catchall route is inside AppRoutingModule
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

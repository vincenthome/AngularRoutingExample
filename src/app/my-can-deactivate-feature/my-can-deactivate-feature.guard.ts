import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
// import { MyCanDeactivateFeatureComponent } from './my-can-deactivate-feature/my-can-deactivate-feature.component';
import { MyCanDeactivateFeatureHomeComponent } from './my-can-deactivate-feature-home/my-can-deactivate-feature-home.component';

@Injectable({
  providedIn: 'root'
})
export class MyCanDeactivateFeatureGuard implements CanDeactivate<MyCanDeactivateFeatureHomeComponent> {
  canDeactivate(
    component: MyCanDeactivateFeatureHomeComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot)
      : boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        console.log('g: ' + component.canDeactivate);
        return component.canDeactivate;
  }

}

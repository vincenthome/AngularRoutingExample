import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
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
        if (component.isDirty) {
          return confirm('Are you sure?');
        }
        return true;
  }

}

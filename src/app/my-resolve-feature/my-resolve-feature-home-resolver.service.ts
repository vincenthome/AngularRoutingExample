import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { MyModel } from './my-model';
import { MyResolveFeatureHomeService } from './my-resolve-feature-home.service';
import { mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MyResolveFeatureHomeResolverService implements Resolve<MyModel[]> {

  constructor(private homeService: MyResolveFeatureHomeService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot): Observable<MyModel[]> | Promise<MyModel[]> | MyModel[] {
    return this.homeService.getItems().pipe(
      mergeMap(r => {
        if (r && r.length > 0) {
          return of(r);
        } else {
          this.router.navigate(['/home']);
          return EMPTY;
        }
      })
    );
  }
}

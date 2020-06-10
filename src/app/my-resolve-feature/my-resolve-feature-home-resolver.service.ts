import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { MyModel } from './my-model';
import { mergeMap } from 'rxjs/operators';
import { MyResolveFeatureService } from './my-resolve-feature.service';

@Injectable({
  providedIn: 'root'
})
export class MyResolveFeatureHomeResolverService implements Resolve<MyModel[]> {

  constructor(private dataService: MyResolveFeatureService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot): Observable<MyModel[]> | Promise<MyModel[]> | MyModel[] {
    return this.dataService.getItems().pipe(
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

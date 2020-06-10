import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { MyModel } from './my-model';
import { MyResolveFeatureService } from './my-resolve-feature.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyResolveFeatureDetailsResolverService implements Resolve<MyModel> {

  constructor(private dataService: MyResolveFeatureService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot): Observable<MyModel> | Promise<MyModel> | MyModel {
    const id = route.paramMap.get('id');
    return this.dataService.getItem(+id);
  }

}



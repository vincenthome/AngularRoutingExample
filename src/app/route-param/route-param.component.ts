import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { map, catchError, switchMap, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-route-param',
  templateUrl: './route-param.component.html',
  styleUrls: ['./route-param.component.css']
})
export class RouteParamComponent implements OnInit {

  requiredParamSnapshot: string;
  requiredParam$: Observable<string>;
  queryParam$: Observable<string>;
  optionalParam$: Observable<string>;
  queryIdMap$: Observable<string>;
  url$: Observable<string>;
  data$: Observable<string>;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.requiredParamSnapshot = route.snapshot.paramMap.get('id') || 'None';
    this.requiredParam$ = route.paramMap.pipe(map(p => p.get('id') || 'None'));
    this.optionalParam$ = route.paramMap.pipe(map(p => p.get('optId') || 'None'));
    this.queryParam$ = route.queryParamMap.pipe(map(p => p.get('id') || 'None'));
    // this.requiredParam$ = route.params.pipe(map(p => p.id || 'None')); // deprecated soon
    // this.optionalParam$ = route.params.pipe(map(p => p.optId || 'None')); // deprecated soon
    // this.queryParam$ = route.queryParams.pipe(map(p => p.id || 'None')); // deprecated soon

    // route.data includes both `data` and `resolve`
    this.data$ = route.data.pipe(map(d => d.id || 'None'));
    this.url$ = route.url.pipe(map(segments => segments.join(', ') || 'None'));


    // more need to explore:
    // paramMap
    // queryParamMap
    // fragment
    // outlet
    // component

  }

  ngOnInit() {
  }

  navigateUsingQueryParams() {
    this.router.navigate(['/routeparam', 'myId'], { queryParams: { id: 'myId' } });
  }

  navigatePreserveQueryParams() {
    this.router.navigate(['/home'], { queryParamsHandling: 'preserve' });
  }

}

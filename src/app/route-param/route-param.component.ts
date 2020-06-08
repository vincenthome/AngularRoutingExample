import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map, catchError, switchMap, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-route-param',
  templateUrl: './route-param.component.html',
  styleUrls: ['./route-param.component.css']
})
export class RouteParamComponent implements OnInit {

  idSnapshot: string;
  id$: Observable<string>;
  queryId$: Observable<string>;
  idMap$: Observable<string>;
  queryIdMap$: Observable<string>;
  url$: Observable<string>;
  data$: Observable<string>;

  constructor(private route: ActivatedRoute) {
    this.idSnapshot = route.snapshot.paramMap.get('id') || 'None';
    this.id$ = route.params.pipe(map(p => p.id || 'None'));
    this.queryId$ = route.queryParams.pipe(map(p => p.id || 'None'));
    this.idMap$ = route.paramMap.pipe(map(p => p.get('optId') || 'None'));
    this.queryIdMap$ = route.queryParamMap.pipe(map(p => p.get('id') || 'None'));
    this.url$ = route.url.pipe(map(segments => segments.join(', ') || 'None'));
    // route.data includes both `data` and `resolve`
    this.data$ = route.data.pipe(map(d => d.id || 'None'));


    // more need to explore:
    // paramMap
    // queryParamMap
    // fragment
    // outlet
    // component

  }

  ngOnInit() {
  }

}

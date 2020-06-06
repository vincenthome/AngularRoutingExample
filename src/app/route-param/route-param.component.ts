import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, catchError, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-route-param',
  templateUrl: './route-param.component.html',
  styleUrls: ['./route-param.component.css']
})
export class RouteParamComponent implements OnInit {

  idSnapshot: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.idSnapshot = this.route.snapshot.paramMap.get('id');
    console.log(this.idSnapshot);
  }

}

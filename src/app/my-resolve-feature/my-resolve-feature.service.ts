import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyModel } from './my-model';
import { delay, filter, tap, map } from 'rxjs/operators';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyResolveFeatureService {

  constructor(private httpClient: HttpClient) { }

  getItem(id: number) {
    return this.httpClient.get<MyModel>(`assets/my-model-id-${id}.json`).pipe(
      delay(3000),
    );
  }

  getItems() {
    return this.httpClient.get<MyModel[]>('assets/my-model.json').pipe(
      delay(3000)
    );
  }
}

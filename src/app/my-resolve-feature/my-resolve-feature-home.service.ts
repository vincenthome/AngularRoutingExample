import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyModel } from './my-model';
import { EMPTY } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MyResolveFeatureHomeService {

  constructor(private httpClient: HttpClient) { }

  getItems() {
    return this.httpClient.get<MyModel[]>('assets/my-model.json').pipe(
      delay(2000)
    );
  }
}

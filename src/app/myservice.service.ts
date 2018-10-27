import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
records;
  constructor(private http: HttpClient) {}
  getData() {
    return this.http.get("http://jsonplaceholder.typicode.com/users")
    .subscribe(
      (data) => {
        console.log("We got: ", data);
        //this.records = data;
      }
    )
  }
}

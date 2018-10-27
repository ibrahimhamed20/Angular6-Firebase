import { Component, OnInit } from '@angular/core';
//import { MyserviceService } from './../myservice.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  records;

  constructor(/*private myservice: MyserviceService*/ private http: HttpClient) { }

  ngOnInit() {
    //this.records = this.myservice.getData();
    this.http.get("http://jsonplaceholder.typicode.com/users")
    .subscribe(
      (data) => {this.displaydata(data);}
    )
  }
  displaydata(data) {this.records = data;}

}

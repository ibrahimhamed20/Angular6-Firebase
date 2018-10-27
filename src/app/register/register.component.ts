import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  types = ['تكنولوجيا المعلومات', 'علوم الحاسب', 'هندسة البرمجيات', 'نظم المعلومات', 'هندسة الحاسب']
  isAvailable = true;

  myClickFunction(event) {
    alert("تم الضغط على الزر");
    console.log(event);
  }
  changemonths(event) {
    alert("تم تغير القسم");
  }

  constructor() { }

  ngOnInit() {
  }

}

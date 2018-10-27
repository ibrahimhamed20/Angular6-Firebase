import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addskill',
  templateUrl: './addskill.component.html',
  styleUrls: ['./addskill.component.css']
})
export class AddskillComponent implements OnInit {

  // name:string     = "إبراهيم حامد"
  // phone:string    = "01008928060"
  // skill:string    = "مهندس برمجيات"
  // province:string = "القاهرة"
  // price:string    = "200 جنيه"
  // comments:string = "مرحبا بكم فى معرض مهارتي الخاصة. اهلا وسهلا بكم يرجي التواصل معي على رقم الهاتف لمزيد من التفاصيل."

  data = {
    name      : "إبراهيم حامد",
    phone     : "01008928060",
    skill     : "مهندس برمجيات",
    province  : "القاهرة",
    price     : "200 جنيه",
    comments  :"مرحبا بكم فى معرض مهارتي الخاصة. اهلا وسهلا بكم يرجي التواصل معي على رقم الهاتف لمزيد من التفاصيل."
  }

  constructor() { }

  ngOnInit() {
    console.log(this.data.name);
  }

}

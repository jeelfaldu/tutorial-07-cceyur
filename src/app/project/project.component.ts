import { Component, OnInit } from '@angular/core';
import { Data } from '../shared/data';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})



export class ProjectComponent implements OnInit {

  student = [
    {"id":1,"name":"Jeel Faldu","Eno":'17SOECE11012'},
    {"id":2,"name":"Amit Kachhadiya","Eno":'17SOECE110XY'},
    {"id":3,"name":"jaydip Kyada","Eno":'17SOECE110AB'},
    {"id":4,"name":"Maulik Gajera","Eno":'17SOECE110CD'},
    {"id":5,"name":"Aashish Domadiya","Eno":'17SOECE110NP'},
    {"id":6,"name":"Anand Odedara","Eno":'17SOECE110EF'},
    {"id":7,"name":"Maulik Jiyani","Eno":'17SOECE110ZW'},
    {"id":8,"name":"Darshit Shekhda","Eno":'17SOECE110PO'},
    {"id":9,"name":"Akash kyada","Eno":'17SOECE110XY'},
    {"id":10,"name":"Bhutik Posiya","Eno":'17SOECE110AB'},
  ];

 onClickMe(data) {    
    alert("Name : " + data.name + " \nEnrollment no : " + data.Eno );
  }
  constructor() { 
  }


  ngOnInit(): void {
  }

}

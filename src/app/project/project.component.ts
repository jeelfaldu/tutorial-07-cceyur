import { Component, OnInit } from '@angular/core';
import { Data } from '../shared/data';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})



export class ProjectComponent implements OnInit {
  student =Data;
  P = [
    {"id":1,"name":"Jeel Faldu","Eno":'17SOECE11012',"bdate":'31/03/2000',"fee":'32500'},
    {"id":2,"name":"Amit Kachhadiya","Eno":'17SOECE110XY',"bdate":'31/03/2000',"fee":'32500'},
    {"id":3,"name":"jaydip Kyada","Eno":'17SOECE110AB',"bdate":'31/03/2000',"fee":'32500'},
    {"id":4,"name":"Maulik Gajera","Eno":'17SOECE110CD',"bdate":'31/03/2000',"fee":'32500'},
    {"id":5,"name":"Aashish Domadiya","Eno":'17SOECE110NP',"bdate":'31/03/2000',"fee":'32500'},
    {"id":6,"name":"Anand Odedara","Eno":'17SOECE110EF',"bdate":'31/03/2000',"fee":'32500'},
    {"id":7,"name":"Maulik Jiyani","Eno":'17SOECE110ZW',"bdate":'31/03/2000',"fee":'32500'},
    {"id":8,"name":"Darshit Shekhda","Eno":'17SOECE110PO',"bdate":'31/03/2000',"fee":'32500'},
    {"id":9,"name":"Akash kyada","Eno":'17SOECE110XY',"bdate":'31/03/2000',"fee":'32500'},
    {"id":10,"name":"Bhutik Posiya","Eno":'17SOECE110AB',"bdate":'31/03/2000',"fee":'32500'},
  ];

 onClickMe(data) {    
    alert("Name : " + data.name + " \nEnrollment no : " + data.Eno );
  }
  constructor() { 
  }


  ngOnInit(): void {
  }

}

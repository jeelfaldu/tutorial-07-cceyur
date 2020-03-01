import { Component, OnInit } from '@angular/core';
import { student } from '../shared/data';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})



export class ProjectComponent implements OnInit {

   student = [
    {"id":1,"name":"jeel "},
    {"id":2,"name":"Amit"},
    {"id":3,"name":"JK"},
    {"id":4,"name":"MLA"}
  ];


  constructor() { 
  }


  ngOnInit(): void {
    console.log(student)
  }

}

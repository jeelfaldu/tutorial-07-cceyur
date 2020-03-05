import { Component, OnInit } from '@angular/core';
import {HeaderComponent} from '../header/header.component'
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  
  mode : boolean ;
  night : boolean = false;
  constructor() {
    
   }
  
  data(mode : boolean){
    this.mode = mode;
  }
  ngOnInit(): void {
    
  }
  

}

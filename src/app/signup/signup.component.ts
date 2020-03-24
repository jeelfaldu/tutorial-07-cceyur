import { Component, OnInit } from '@angular/core';
import { emp } from '../shared/emp';
import { Student } from '../shared/student';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
 
  studmodel = new Student("", "", "","");
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {

  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Data  } from '../shared/data';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})
export class StudentdetailsComponent implements OnInit {
  student ;

  constructor(private route :ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(param => {
      this.student = Data[param.get('id')]
    });

  }

}

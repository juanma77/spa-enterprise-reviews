import { Component, OnInit } from '@angular/core';
import { Review } from '../../interfaces/Ireview';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  // To use with ngModel
  review: Review = {
    puntuaction: null,
    title: null,
    resume: null,
    ip: null,
    date: null,
    enterpriseName: null,
    userName: null
  };

  constructor() { 

  }

  ngOnInit() {
  }

  saveReview(){
    console.log(this.review); 
  }

}

import { Component, OnInit } from '@angular/core';
import { Review } from '../../interfaces/Ireview';
import { ReviewsService } from '../../services/reviews.service';

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

  constructor(private reviewsService: ReviewsService) { 

  }

  ngOnInit() {
  }

  // To save the review  
  saveReview(){
    console.log(this.review); 
    this.reviewsService.save(this.review).subscribe((data)=>{
      console.log('Operation done with success!');
    }, (error) => {
      console.log(error, 'This can not be done');
    });
  }

}

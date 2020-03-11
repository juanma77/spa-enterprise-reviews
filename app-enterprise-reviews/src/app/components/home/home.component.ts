import { Component, OnInit } from '@angular/core';
import { ReviewsService } from '../../services/reviews.service';
import { HttpClient } from '@angular/common/http';
import { Review } from '../../interfaces/Ireview';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  public reviews: Review[]; 
  
  constructor(private reviewsService: ReviewsService, private httpClient: HttpClient ) {
    this.reviewsService.get().subscribe((data: Review[])=>{
      console.log('Operation done with success!');
      this.reviews = data; 
    }, (error) => {
      console.log(error, 'This can not be done');
    });
  }

  ngOnInit() {
  }

}

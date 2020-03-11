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

  API_ENDPOINT = 'http://localhost:8000/api'; 
  public review: Review[]; 
  
  constructor( private reviewsService: ReviewsService, private httpClient: HttpClient ) {
    // To receive data from Laravel side
    httpClient.get(this.API_ENDPOINT + 'reviews').subscribe((data: Review[]) => {
      //console.log(data); 
      this.review = data;
    });

  }

  ngOnInit() {
  }

}

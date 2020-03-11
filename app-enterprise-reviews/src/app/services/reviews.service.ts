import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Review } from '../interfaces/Ireview';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  API_ENDPOINT = 'http://localhost:8000/api';

  constructor(private httpClient: HttpClient) {
   
  }

  // To receive data from Laravel side
  public get(){
    return this.httpClient.get(this.API_ENDPOINT + 'reviews');
      //console.log(data); 
  }

  // To save or post the data to the API endpoint
  public save(review: Review){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.post(this.API_ENDPOINT + '/reviews', review, {headers:headers }); 
  }  
}

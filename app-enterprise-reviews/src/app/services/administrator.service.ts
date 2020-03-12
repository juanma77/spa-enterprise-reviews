import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Administrator } from '../interfaces/Iadministrator';

@Injectable({
  providedIn: 'root'
})
export class AdministratorService {

  API_ENDPOINT = 'http://localhost:8000/api';

  constructor(private httpClient: HttpClient) { 
    
  }

 // To receive data from Laravel side
  public get(){
    return this.httpClient.get(this.API_ENDPOINT + 'administrators');
    //console.log(data); 
  }

// To post the data to the API 
  public save(administrator: Administrator){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.post(this.API_ENDPOINT + '/administrators', administrator, {headers:headers}); 
  }  
}

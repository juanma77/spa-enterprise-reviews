import { Component, OnInit } from '@angular/core';
import { Administrator } from '../../interfaces/Iadministrator';
import { AdministratorService } from '../../services/administrator.service';

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.css']
})
export class AdministratorComponent implements OnInit {

  administrator: Administrator = {
    administratorName: null,
    password: null
  };


  constructor(private administratorService: AdministratorService) { 
    
  }

  ngOnInit() {
  }

  checkAdministrator(){
    console.log(this.administrator); 
    this.administratorService.save(this.administrator).subscribe((data)=>{
      console.log('Operation done with success!');
    }, (error) => {
      console.log(error, 'This can not be done');
    });
  }

}

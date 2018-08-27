import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.css']
})
export class ApplicationListComponent implements OnInit {
  private  ApplicationsFromApi:  Array<object> = [];
  constructor(private apiService:ApiService) { }
  
  ngOnInit() {
    
  }
  
  
}

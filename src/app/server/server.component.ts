import { Component, OnInit,Input } from '@angular/core';
import { Server } from '../server';
import {ApiService} from "../api.service";
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  // @Input() server:Server;
   @Input() Ip:string;
   @Input() OperatingSystem:string;
   @Input() Hostname:string;
   @Input() Id:number;

   private ApplicationsFromApi:Array<object> = [];

     constructor(private apiService:ApiService) { 
    
  }

  ngOnInit() {

    this.getApplications(this.Id);

  }
public getApplications(ServerId){
    this.apiService.getApplications(ServerId).subscribe((data:Array<object>)=>{ this.ApplicationsFromApi=data;
    console.log(this.ApplicationsFromApi);
    });
}
}

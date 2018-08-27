import { Component, OnInit } from '@angular/core';
import { ServerComponent } from '../server/server.component';
import { Server } from '../server';
import {ApiService} from '../api.service'; 



@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  
  servers=[new Server("131.3.32.2","Windows 7"),new Server("131.3.32.6","Windows 8.1"),new Server("131.3.32.5","Windows 10"),new Server("131.3.32.975","Windows 2000"),new Server("131.3.32.14","Windows 2000"),new Server("131.3.32.74","Windows 2000"),new Server("131.3.32.741","Windows 2000"),new Server("131.3.32.747","Windows 2000"),new Server("131.3.32.14","Windows 2000"),new Server("131.3.32.11","Windows 2000"),new Server("131.3.32.99","Windows 2000"),new Server("131.3.32.66","Windows 2000")];
  private  serversFromApi:  Array<object> = [];
  
  constructor(private apiService:ApiService) { }
   
  ngOnInit() {

    this.getServers();
 
  }
  public getServers(){
    this.apiService.getServers().subscribe((data:Array<object>)=>{ this.serversFromApi=data;
    console.log(data);
    });
  }
  
   
}

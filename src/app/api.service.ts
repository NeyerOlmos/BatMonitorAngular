import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
   API_URL = 'http://localhost:57552';
   
  constructor(private  httpClient:  HttpClient) {}
  getServers(){
    return  this.httpClient.get(`${this.API_URL}/api/servers`);
  }
     
  getApplications(ServerId){
        return this.httpClient.get(`${this.API_URL}/api/ServerApplications/${ServerId}`)
   }

}

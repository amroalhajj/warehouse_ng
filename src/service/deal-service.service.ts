import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Deal } from 'src/app/dto/deal';

@Injectable({
  providedIn: 'root'
})
export class DealServiceService {


  constructor( private http: HttpClient) { 
    
  }


  public  getDeals():Observable<any>{
    return this.http.get("http://localhost:8000/deals");

  }
}

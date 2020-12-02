import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ControllerService {

  constructor(private http:HttpClient) { }

  public upcomingMatches():Observable<any>{
    return this.http.get("https://cricapi.com/api/matches?apikey=FuRpMvFs5GfaPiVECU5f5rgQpt93",{responseType:'json'});
  }
}

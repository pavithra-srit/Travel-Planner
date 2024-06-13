import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor( private http: HttpClient) { }

  getUser():Observable<any>{
    return this.http.get('http://localhost:3000/login/status')
  }

  getUserDetail(data:any):Observable<any>{
    return this.http.post('http://localhost:3000/login/user', data)
  }
  getPlanDetail():Observable<any>{
    return this.http.get('http://localhost:3000/plan/viewPlan')
  }
  createPlanDetail(data:any):Observable<any>{
    return this.http.post('http://localhost:3000/plan/createPlan', data)
  }
}

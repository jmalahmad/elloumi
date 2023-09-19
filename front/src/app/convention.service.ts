import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Convention } from './interface/convention';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ConventionService {
  private apiServerUrl=environment.apiBaseUrl;

  constructor(private http:HttpClient) { }
  getConventions():Observable<Convention[]>{
    return this.http.get<Convention[]>(`http://192.168.0.186:8080/convention`);
  }
  addConvention(convention:Convention ):Observable<Convention>{
    return this.http.post<Convention>(`http://192.168.0.186:8080/convention`,convention);
  }
  
  updateConvention(id:number,convention:Convention):Observable<Convention>{
    return this.http.put<Convention>(`http://192.168.0.186:8080/convention/${id}`,convention);
  }
  deleteConvention(id: number): Observable<unknown> {
    console.log(`http://localhost:8080/conventions/${id}`);
    return this.http.delete<unknown>(`http://192.168.0.186:8080/convention/${id}`);
  }
  
}

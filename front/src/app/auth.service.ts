import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated:boolean=false;
  roles:any;
  username:any;
  accessToken!:any;
  constructor(private http: HttpClient) {}

  public login(username1: string, password1: string) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = {
      username:username1,
    password:password1}

    return this.http.post('http://192.168.0.186:8080/auth/login', body, { headers });
  }
  loadProfile(data:any){
    this.isAuthenticated=true;

    this.accessToken=data[ 'access-token'];
    console.log(this.accessToken);
    let decodedJwt:any=jwtDecode(this.accessToken);
    this.username=decodedJwt.sub;
    this.roles=decodedJwt.scope;
  }
  logout(){
    this.isAuthenticated=false;
    this.accessToken=undefined;
    this.username=undefined;
    this.roles=undefined;
  }
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = 'https://warm-woodland-06371.herokuapp.com'

  constructor(private http: HttpClient) { }

  onSignUp(credentials){
    return this.http.post(this.url + "/sign-up", credentials)
  }

}

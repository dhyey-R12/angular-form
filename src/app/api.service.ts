import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class ApiService {
  constructor(private http: HttpClient) { }
isAppointmentRights():boolean{
  return true;
} 

  getUser() {
    // console.log("service calleed");
    this.http.get("http://localhost/wordpress/wp-json/wp/v2/login");
    // this.http.get("http://localhost/wordpress/wp-json/custom-plugin/login?username=${value.username}&password=${value.password}");
    // this.http.post("http://localhost/wordpress/wp-json/custom-plugin/appointment?")
  }
}

/*
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class ApiService {
  user: any;
  constructor(private httpClient: HttpClient) { }

  getUser(value) {
    localStorage.setItem("value", JSON.stringify(value));
    console.log("this is user", value);
    this.httpClient.get(`http://localhost/wordpress/wp-json/custom-plugin/login?username=${value.username}&password=${value.password}`)
    // console.log("service calleed");
    // this.http.get("http://localhost/wordpress/wp-json/wp/v2/login");
    // this.http.get("http://localhost/wordpress/wp-json/custom-plugin/login?username=${value.username}&password=${value.password}");
    // this.http.post("http://localhost/wordpress/wp-json/custom-plugin/appointment?")
  }
  isAppointmentRights(): boolean {
    // return false;
    this.user = JSON.parse(localStorage.getItem('value'))
    console.log("service", this.user)
    console.log("service", this.user.username)
    if (this.user.username && this.user.password == "") {
      return true;
    } else {
      return true;
    }
  }
}

 */
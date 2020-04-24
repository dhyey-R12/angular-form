import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class ApiService {
  constructor(private http: HttpClient) { }

  getUser() {
    // console.log("service calleed");
    this.http.get("http://localhost/wordpress/wp-json/wp/v2/login");
    // this.http.get("http://localhost/wordpress/wp-json/custom-plugin/login?username=${value.username}&password=${value.password}");
    // this.http.post("http://localhost/wordpress/wp-json/custom-plugin/appointment?")
  }
}

import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  jsonapifile: any;
  booking: any = [];
  // booking: any;
  constructor(private router: Router, private http: HttpClient, private service: ApiService ) { }

  logoutUser() {
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.get(`http://localhost/wordpress/wp-json/custom-plugin/logout`,
      { headers, responseType: 'text' })
      .subscribe(data => {
        this.jsonapifile = data
        localStorage.removeItem('ID');
        localStorage.removeItem('value');
        localStorage.removeItem('pri_id');
        localStorage.removeItem('user_email');
        localStorage.removeItem('user');
      })
  }
  // greetStudent(){
  //   this.service.sendmessage('morrning');
  // }
  ngOnInit(): void { }
}
        // (err) => {
        //   console.log("the errror is ==>", err);
        // }

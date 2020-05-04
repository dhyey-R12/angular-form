import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  jsonapifile: any;
  booking: any = [];
  // booking: any;
  constructor(private router: Router, private http: HttpClient) { }

  logoutUser() {
    this.http.get(`http://localhost/wordpress/wp-json/custom-plugin/logout`)
      .subscribe(data => {
        this.jsonapifile = data
        localStorage.removeItem('ID');
      })
  }
  // showbooking() {
  //   let id = localStorage.getItem('ID');

  //   console.log("Id *", id)
  //   let url = `http://localhost/wordpress/wp-json/custom-plugin/booking?pinged=${id}`

  //   this.http.get(url)

  //     .subscribe(data => {
  //       // this.booking = data;
  //       this.booking.push(data);
  //       console.log("API Call", this.booking)
  //     },
  //       error => {
  //         console.log("Error", error);
  //       }
  //     );
  // }
  ngOnInit(): void { }
}
        // (err) => {
        //   console.log("the errror is ==>", err);
        // }

import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-showbooking',
  templateUrl: './showbooking.component.html',
  styleUrls: ['./showbooking.component.css']
})
export class ShowbookingComponent implements OnInit {
  booking: any = [];
  // data = [];

  @Input() MSG = [];

  // @Input() childMessage: any;

  constructor(private http: HttpClient) { }

  showbooking() {
    let id = localStorage.getItem('ID');

    console.log("Id *", id)
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

    return this.http.get
      (`http://localhost/wordpress/wp-json/custom-plugin/booking?pinged=${id}`,
        { headers, responseType: 'text' }).subscribe((data) => {
          console.log('this is api response', data);
          this.booking.push(data);
        });

    // return this.http.get
    // let url = `http://localhost/wordpress/wp-json/custom-plugin/booking?pinged=` + id

    // this.http.get(url)

    //   .subscribe(data => {
    //     // this.booking = data;
    //     this.booking.push(data);
    //     console.log("API Call", this.booking)
    //   },
    //     error => {
    //       console.log("Error", error);
    //     }
    //   );
  }

  ngOnInit() { }

}

/*import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-showbooking',
  templateUrl: './showbooking.component.html',
  styleUrls: ['./showbooking.component.css']
})
export class ShowbookingComponent implements OnInit {

  booking : any;

  constructor(private http:HttpClient) { }

  ngOnInit(){
    let resp= this.http.get("http://localhost/wordpress/wp-json/custom-plugin/booking");
    resp.subscribe((data)=>this.booking=data);
  }

} */
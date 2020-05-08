import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-showbooking',
  templateUrl: './showbooking.component.html',
  styleUrls: ['./showbooking.component.css']
})
export class ShowbookingComponent implements OnInit {
  booking: any = [];
  // data: any = [];
  api: any;
  send_data: any;
  bookings: any

  @Input() MSG: object;
  apijson: string;

  constructor(private router: Router, private httpClient: HttpClient, private http: HttpClient, private service: ApiService) {
    this.showbooking()
  }

  showbooking() {
    this.service.booking().subscribe((data) => {
      this.bookings = data
      console.log('this is api response', data);
    },
      error => {
        console.log("Error", error);
      }
    );


  }

  ngOnInit() {
    // this.service.teacherMessage$
    // .subscribe(
    //   message => {
    //     if(message = 'morrning') {
    //       alert('good');
    //     } 
    //   } 
    // )
  }
  update(booking) {
    localStorage.setItem('pri_id', JSON.stringify(booking.id));
    console.log(" booking ", booking);
    // this.router.navigate(['appointment'], { state: this.booking });
    this.service.sendmessage(booking);
  }
  delete(booking) {
    localStorage.setItem('pri_id', JSON.stringify(booking.id));
    let pri_id = localStorage.getItem('pri_id');
    console.log("Id =>", pri_id)
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    // return this.httpClient.put( `http://localhost/wordpress/wp-json/custom-plugin/update?&pri_id =+ id`,
    return this.httpClient.delete(`http://localhost/wordpress/wp-json/custom-plugin/delete?&pri_id =${pri_id}`,
    // console.log('api call', this.apijson)

    // return this.httpClient.put(
    //   this.apijson,
    //   `pri_id =${pri_id}&post_content=${value.post_content}&to_ping=${value.to_ping}&post_title=${value.post_title}&post_date=${value.post_date}
    //   &post_excerpt=${value.post_excerpt}&address=${value.addresIDs}&action=${'wp_posts'}`,

      { headers, responseType: 'text' }).subscribe(
        data => {
          // this.data.push(value);
          console.log("POST Request is successful", data);
          // booking.id = data
          // console.log('this is prm id ====>', booking.id);
        },
        error => {
          console.log("Error", error);
        }
      )
  }
}

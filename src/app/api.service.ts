import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class ApiService {
  jsonapi: any;

  private _teacherMessageSource = new Subject<any>();
  teacherMessage$ = this._teacherMessageSource.asObservable();
  apijson: any;

  private _hide = new Subject<any>();
  hide$ = this._hide.asObservable();

  constructor(private http: HttpClient, private httpClient: HttpClient) { }
  isAppointmentRights(): boolean {
    return true;
  }

  hideButton(hide : any){
    this._hide.next(hide);
  }

  sendmessage(message: any) {
    this._teacherMessageSource.next(message);
  }

  getUser() {
    this.http.get("http://localhost/wordpress/wp-json/wp/v2/login");
  }

  booking() {
    let uid = localStorage.getItem('ID');

    console.log("Id =>", uid)
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

    return this.http.get
      (`http://localhost/wordpress/wp-json/custom-plugin/booking?pinged=${uid}`,
        { headers })
  }
  appointment(value) {
    this.jsonapi = `http://localhost/wordpress/wp-json/custom-plugin/appointment`
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    console.log('object ', value)
    var pinged = localStorage.getItem('ID');
    console.log(pinged);
    return this.httpClient.post(
      this.jsonapi,
      `pinged=${pinged}&post_content=${value.post_content}&to_ping=${value.to_ping}&post_title=${value.post_title}&post_date=${value.post_date}
      &post_excerpt=${value.post_excerpt}&address=${value.addresIDs}&action=${'wp_posts'}`,
      { headers, responseType: 'text' }
    )
  }
  deletedata(id) {
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.delete(`http://localhost/wordpress/wp-json/custom-plugin/delete?ID=${id}`,
      { headers, responseType: 'text' })
  }
  loginuser(value) {
    this.jsonapi = `http://localhost/wordpress/wp-json/custom-plugin/signup`
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    console.log('object ', value)
    // var pinged = localStorage.getItem('ID');
    // console.log(pinged);
    return this.httpClient.post(
      this.jsonapi,
      `user_login=${value.user_login}&user_nicename=${value.user_nicename}&user_email=${value.user_email}&user_pass=${value.user_pass}
        &action=${'wp_users'}`,
      { headers, responseType: 'text' }
    )
  }
}
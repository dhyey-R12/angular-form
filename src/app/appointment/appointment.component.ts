import { Component, OnInit, ViewChild, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { ShowbookingComponent } from '../showbooking/showbooking.component';
// import { getDiffieHellman } from 'crypto';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})

export class AppointmentComponent implements OnInit/* , AfterViewInit */ {
  // private isButtonVisible = true;
  appoint: FormGroup;
  // feature = ;
  submitted = false;
  jsonapi: any;
  postData: any;
  json;
  data = [];
  booking: any = [];
  last_id: any;
  obj: any = [];

  @Output() send_data = new EventEmitter<object>();
  demo: any;
  apijson: string;
  update: any;
  pri_id: any;
  isShow: boolean = false;
  isButtonVisible: boolean;
  // msg='hello msg from parent';

  // @ViewChild(ShowbookingComponent) child;

  constructor(private router: Router, private httpClient: HttpClient, private service: ApiService, private formBuilder: FormBuilder, private http: HttpClient) {
    this.appoint = new FormGroup({
      id: new FormControl(''),
      post_title: new FormControl(''),//name
      to_ping: new FormControl(''),//mo
      post_content: new FormControl(''),//email
      post_date: new FormControl(''),//date
      post_excerpt: new FormControl(''),//service
      address: new FormControl(''),//address
      action: new FormControl('wp_posts')
    });
    console.log('router data', this.router.getCurrentNavigation().extras.state);
    this.demo = this.router.getCurrentNavigation().extras.state;
  }

  // message: string;

  // ngAfterViewInit() {
  //   this.message = this.child.message
  // }

  ngOnInit() {
    this.appoint = this.formBuilder.group({
      post_title: ['', Validators.required],                                  //name
      to_ping: ['', [Validators.required, Validators.pattern("^[0-9]{10}$")]],  //mobie no
      post_content: ['', Validators.compose([
        Validators.required, Validators.email,
        Validators.pattern('^[a-zA-Z0-9.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])],                                                                      //email
      post_date: ['', Validators.required],                                     //date
      post_excerpt: ['', Validators.required],                                  //service
      address: ['', [Validators.required,
      Validators.maxLength(100)]]                                               //address
    });
    this.service.teacherMessage$
      .subscribe(
        message => {
          console.log("booking message", message);
          this.obj = message;
          console.log("booking obj", this.obj);
          console.log("name alert", this.obj.post_title);
        }
      )

    this.service.hide$
      .subscribe(
        hide => {
          console.log('this is bool value', hide)
          this.isShow = hide;
          this.isButtonVisible = true;
        }
      )
  }

  get f() { return this.appoint.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.appoint.invalid) {
      return;
    }

    // display form values on success
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.appoint.value, null, 4));
  }

  appointment(value) {
    this.service.appointment(value).subscribe(
      data => {
        this.data.push(value);
        console.log("POST Request is successful", data);
        value.id = data
        console.log('this is prm id ====>', value.id);
        // localStorage.setItem('pri_id', JSON.stringify(value.id));

        // console.log("POST Request is successful ", data);
        this.appoint.reset();
      },
      error => {
        console.log("Error", error);
      }
    )
  }
  logoutUser() {
    this.http.get(`http://localhost/wordpress/wp-json/c44ustom-plugin/logout`)
      .subscribe(data => {
        this.jsonapi = data
        localStorage.removeItem('ID');
      })
  }
  // edit(value) {
  // let pri_id = localStorage.getItem('pri_id');
  // console.log("Id =>", pri_id)
  // const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
  // // return this.httpClient.put( `http://localhost/wordpress/wp-json/custom-plugin/update?&pri_id =+ id`,
  // this.apijson = `http://localhost/wordpress/wp-json/custom-plugin/update`;
  // console.log('api call', this.apijson)

  // return this.httpClient.put(
  //   this.apijson,
  //   `pri_id =${pri_id}&post_content=${value.post_content}&to_ping=${value.to_ping}&post_title=${value.post_title}&post_date=${value.post_date}
  //   &post_excerpt=${value.post_excerpt}&address=${value.addresIDs}&action=${'wp_posts'}`,

  //   { headers, responseType: 'text' }).subscribe(
  //     data => {
  //       // this.data.push(value);
  //       console.log("POST Request is successful", data);
  //       value.id = data
  //       console.log('this is prm id ====>', value.id);
  //     },
  //     error => {
  //       console.log("Error", error);
  //     }
  //   )
  // }
  updatedatanew(value) {
    alert("Are you sure Update data");
    console.log("this is value", value.id);
    this.pri_id = JSON.parse(localStorage.getItem('pri_id'));
    console.log("primary id", this.pri_id);

    this.update = `http://localhost/wordpress/wp-json/custom-plugin/update?ID=${this.pri_id}`
    console.log("ID", this.update)

    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    return this.httpClient.put(this.update, `post_content=${value.post_content}&to_ping=${value.to_ping}&post_title=${value.post_title}&post_date=${value.post_date}
    &post_excerpt=${value.post_excerpt}`,
      { headers, responseType: 'text' }).subscribe((data) => {
        console.log("this is new data", data)
        this.isShow = false
        this.isButtonVisible = false;
        this.appoint.reset();
      })
  }
}

/*
this.httpClient.post(this.jsonapi, `name=${value.post_content}&mobile_no${value.mobile_no}&email${value.email}&date=${value.post_date}
    &time=${value.time}&service${value.post_title}&address${value.address}&action=${'wp_posts'}`)

    `post_content=${value.post_content}&mobile_no${value.mobile_no}&email${value.email}&post_date=${value.post_date}
    &time=${value.time}&post_title${value.post_title}&address${value.address}&action=${'wp_posts'}`

    */

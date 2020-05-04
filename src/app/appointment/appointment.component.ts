import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
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

export class AppointmentComponent implements OnInit/* , AfterViewInit */  {
  appoint: FormGroup;
  // feature = ;
  submitted = false;
  jsonapi: any;
  postData: any;
  json;
  data = [];
  last_id: any;

  msg='hello msg from parent';

  // @ViewChild(ShowbookingComponent) child;

  constructor(private router: Router, private httpClient: HttpClient, private service: ApiService, private formBuilder: FormBuilder, private http: HttpClient) {
    this.appoint = new FormGroup({
      id: new FormControl(''),
      post_content: new FormControl(''),//name
      to_ping: new FormControl(''),//mo
      post_title: new FormControl(''),//email
      post_date: new FormControl(''),//date
      post_excerpt: new FormControl(''),//service
      address: new FormControl(''),//address
      action: new FormControl('wp_posts')
    });
  }

  // message: string;
  
  // ngAfterViewInit() {
  //   this.message = this.child.message
  // }

  ngOnInit() {
    this.appoint = this.formBuilder.group({
      post_content: ['', Validators.required],                                  //name
      to_ping: ['', [Validators.required, Validators.pattern("^[0-9]{10}$")]],  //mobie no
      post_title: ['', Validators.compose([
        Validators.required, Validators.email,
        Validators.pattern('^[a-zA-Z0-9.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])],                                                                      //email
      post_date: ['', Validators.required],                                     //date
      post_excerpt: ['', Validators.required],                                  //service
      address: ['', [Validators.required,
      Validators.maxLength(100)]]                                               //address
    });
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
      .subscribe(
        data => {
          this.data.push(data);
          // this.last_id.push(this.last_id);
          console.log("POST Request is successful", data);
          value.id = data
          console.log('this is prm id ====>', value.id);
          // console.log("POST Request is successful ", data);
        },
        error => {
          console.log("Error", error);
        }
      )
  }
  logoutUser() {
    this.http.get(`http://localhost/wordpress/wp-json/custom-plugin/logout`)
      .subscribe(data => {
        this.jsonapi = data
        localStorage.removeItem('ID');
      })
  }
}

/*
this.httpClient.post(this.jsonapi, `name=${value.post_content}&mobile_no${value.mobile_no}&email${value.email}&date=${value.post_date}
    &time=${value.time}&service${value.post_title}&address${value.address}&action=${'wp_posts'}`)

    `post_content=${value.post_content}&mobile_no${value.mobile_no}&email${value.email}&post_date=${value.post_date}
    &time=${value.time}&post_title${value.post_title}&address${value.address}&action=${'wp_posts'}`
    */

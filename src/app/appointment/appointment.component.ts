import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})

export class AppointmentComponent implements OnInit {
  appoint: FormGroup;
  submitted = false;
  jsonapi: any;
  postData: any;
  json;
  data = [];

  constructor(private router: Router, private httpClient: HttpClient, private service: ApiService, private formBuilder: FormBuilder) {
    this.appoint = new FormGroup({
      post_content: new FormControl(''),//name
      to_ping: new FormControl(''),//mo
      post_title: new FormControl(''),//email
      post_date: new FormControl(''),//date
      post_excerpt: new FormControl(''),//service
      address: new FormControl(''),//address
      action: new FormControl('wp_posts')
    });
  }

  ngOnInit() {
    this.appoint = this.formBuilder.group({
      post_content: ['', Validators.required],                                  //name
      to_ping: ['', [Validators.required, Validators.pattern("^[0-9]{10}$")]],                                               //mobie no
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
    return this.httpClient.post(
      this.jsonapi,

      `post_content=${value.post_content}&to_ping=${value.to_ping}&post_title=${value.post_title}&post_date=${value.post_date}
    &post_excerpt=${value.post_excerpt}&address=${value.address}&action=${'wp_posts'}`,
      { headers, responseType: 'text' }
    )
      .subscribe(
        data => {
          this.data.push(data);
          console.log("POST Request is successful ", data);
        },
        error => {

          console.log("Error", error);

        }
      )
  }
}

/*
this.httpClient.post(this.jsonapi, `name=${value.post_content}&mobile_no${value.mobile_no}&email${value.email}&date=${value.post_date}
    &time=${value.time}&service${value.post_title}&address${value.address}&action=${'wp_posts'}`)

    `post_content=${value.post_content}&mobile_no${value.mobile_no}&email${value.email}&post_date=${value.post_date}
    &time=${value.time}&post_title${value.post_title}&address${value.address}&action=${'wp_posts'}`
    */

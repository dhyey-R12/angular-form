import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ApiService } from '../api.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginuser',
  templateUrl: './loginuser.component.html',
  styleUrls: ['./loginuser.component.css']
})
export class LoginuserComponent implements OnInit {
  forgot: FormGroup;
  jsonapi: string;

  constructor(private router: Router, private formBuilder: FormBuilder, private service: ApiService, private http: HttpClient, private httpClient: HttpClient) {
    this.forgot = new FormGroup({
      user_email: new FormControl(''),//email
      user_pass: new FormControl(''),//pass
      action: new FormControl('wp_users')
    });
  }

  // this.router.navigate(['login']) 

  pass(value) {
    // this.service.loginuser(value)
    this.jsonapi = `http://localhost/wordpress/wp-json/custom-plugin/forgot`
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    console.log('object ', value)
    return this.httpClient.put(
      this.jsonapi,
      `user_email=${value.user_email}&user_pass=${value.user_pass}&action=${'wp_users'}`,
      { headers, responseType: 'text' }
    )
      .subscribe(
        data => {
          console.log("POST Request is successful", data);
          this.router.navigate(['login'])
        },
        error => {
          console.log("Error", error);
        }
      )
    // this.router.navigate(['login']) 
  }
  ngOnInit(): void {
  }

}

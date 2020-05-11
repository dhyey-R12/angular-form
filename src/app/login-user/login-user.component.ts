import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
// import { MustMatch } from './_helpers/must-match.validator';
import { ApiService } from '../api.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {
  newuser: FormGroup;
  submitted = false;
  data: any;
  jsonapifile: any;
  constructor(private router: Router,private formBuilder: FormBuilder, private service: ApiService, private http: HttpClient) {
    this.newuser = new FormGroup({
      user_login: new FormControl(''),//name
      user_nicename: new FormControl(''),//nickname
      user_email: new FormControl(''),//email
      user_pass: new FormControl(''),//pass
      action: new FormControl('wp_users')
    });
   }

  ngOnInit() {
    this.newuser = this.formBuilder.group({
      user_login: ['', Validators.required],//name
      user_nicename: ['', Validators.required],//nickname
      user_email: ['', Validators.required],//email
      user_pass: ['', Validators.required] //pass
    });
  }

  get f() { return this.newuser.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.newuser.invalid) {
      return;
    }

    // display form values on success
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.appoint.value, null, 4));
  }
  loginuser(value) {
    this.service.loginuser(value)
    .subscribe(
      data => {
        // this.data.push(value);
        // this.last_id.push(this.last_id);
        console.log("POST Request is successful", data);
      this.router.navigate(['login']) 
        // value.id = data
        // console.log('this is prm id ====>', value.id);
        // localStorage.setItem('pri_id', JSON.stringify(value.id));

        // console.log("POST Request is successful ", data);
        this.newuser.reset();
      },
      error => {
        console.log("Error", error);
      }
    )
  }
  logoutUser() {
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.get(`http://localhost/wordpress/wp-json/custom-plugin/logout`,
      { headers, responseType: 'text' })
      .subscribe(data => {
        this.jsonapifile = data
        localStorage.removeItem('ID');
      })
  }
}

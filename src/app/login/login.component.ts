import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
loginForm: FormGroup;
  jsonapifile : any 
  constructor(private router: Router, private http:HttpClient ,private service:ApiService) {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  loginUser(value) {
    this.service.login(value)
    .subscribe(data => {
      localStorage.setItem("value", JSON.stringify(value));
          console.log('this is value of', value);
      this.jsonapifile = data
      console.log("loginSuccess", this.jsonapifile)
      this.router.navigate(['home'], { state: value }) 
      localStorage.setItem('ID', JSON.stringify(this.jsonapifile.ID));
      localStorage.setItem('user_email', JSON.stringify(this.jsonapifile.data.user_email));
    },
    error => {
      console.error(" Error ", error)
    })
  }
  logoutUser(value){
    this.http.get(`http://localhost/wordpress/wp-json/custom-plugin/logout`)
  }
}
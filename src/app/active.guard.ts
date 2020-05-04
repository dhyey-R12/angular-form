import { Injectable, ComponentFactoryResolver } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ActiveGuard implements CanActivate {
  constructor(private apiService: ApiService, private router:Router ) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.apiService.isAppointmentRights()) {
      return true;
    }else{
      alert("You don't have permission");
      // console.log(" error ")
      this.router.navigate(['Login']);
    }
  }
}

/*
import { Injectable, ComponentFactoryResolver } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ActiveGuard implements CanActivate {
  user: any;
  constructor(private apiService: ApiService, private router: Router) {
    this.user = JSON.parse(localStorage.getItem('value'))
    console.log('this is user name', this.user)
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.apiService.isAppointmentRights()) {
      return true;
    } else {
      alert("You don't have permission");
      // console.log(" error ")
      this.router.navigate(['Login']);
    }
  }
}
*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { ActiveGuard } from './active.guard';
import { ShowbookingComponent } from './showbooking/showbooking.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent, pathMatch: 'full', canActivate: [ActiveGuard] },
  { path: 'appointment', component: AppointmentComponent, pathMatch: 'full', canActivate: [ActiveGuard] },
  { path: 'showbooking', component: ShowbookingComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// export const routingComponents = [ HomeComponent ]


// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';
// import { LoginComponent } from './login/login.component';
// import { HomeComponent } from './home/home.component';

// const routes: Routes = [
//   { path: 'login', component: LoginComponent/* ,pathMatch: 'full' */ },
//   { path: 'home', component: HomeComponent/* , pathMatch: 'full' */ }

// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
// export const routingComponents = [ HomeComponent ]

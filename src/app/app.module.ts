import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
// import { AdminComponent } from './admin/admin.component';
// import {MatFormFieldModule} from '@angular/material/form-field';
// import {MatInputModule} from '@angular/material/input';
// import {MatButtonModule} from '@angular/material/button';
// import {MatCardModule} from '@angular/material/Card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { FormsModule } from '@angular/forms';
// import {MatToolbarModule } from "@angular/material/toolbar";
// import { FlexLayoutModule }from "@angular/flex-layout"
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AppointmentComponent } from './appointment/appointment.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AppointmentComponent,
    // AdminComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // MatFormFieldModule,
    // MatInputModule,
    // MatButtonModule,
    // MatCardModule,
    BrowserAnimationsModule,
    FormsModule,
    // MatToolbarModule,
    // FlexLayoutModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
// import { HttpClientModule }    from '@angular/common/http';
// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { RouterModule } from '@angular/router';
// import { Router } from '@angular/router';
// import { ReactiveFormsModule, FormsModule} from '@angular/forms';
// // import { HomeComponent } from './home/home.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     // routingComponents,
//     // HomeComponent,
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     HttpClientModule,
//     BrowserAnimationsModule,
//     FormsModule,
//     RouterModule,
//     ReactiveFormsModule,

//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { ActiveGuard } from './active.guard';
import { ApiService } from './api.service';
import { ShowbookingComponent } from './showbooking/showbooking.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { LoginuserComponent } from './loginuser/loginuser.component';
// import { Approutes } from './Routing';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AppointmentComponent,
    ShowbookingComponent,
    LoginUserComponent,
    LoginuserComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    // RouterModule.forRoot(Approutes),
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [ActiveGuard,ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
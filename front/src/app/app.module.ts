import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { AddEditComponent } from './add-edit/add-edit.component';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import{MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import {MatIconModule} from '@angular/material/icon';
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import { AppHttpInterceptor } from './interceptors/app-http.interceptor';
import { UserTemplateComponent } from './user-template/user-template.component';


@NgModule({
  declarations: [
    AppComponent,
    AddEditComponent,
    LoginComponent,
  AdminTemplateComponent,
  UserTemplateComponent,
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule, ReactiveFormsModule,MatIconModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:AppHttpInterceptor,multi:true}],
  bootstrap: [AppComponent],
  
})
export class AppModule { }

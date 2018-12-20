import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { routing } from './app.routing';
import { JoditAngularModule } from 'jodit-angular';

import { fakeBackendProvider , AppComponent , AlertComponent , JwtInterceptor , ErrorInterceptor , HomeComponent ,
  LoginComponent , RegisterComponent , ExamplesComponent , ServerComponent , ServersComponent ,
  Example1Component } from './index';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    JoditAngularModule,
    ReactiveFormsModule,
    HttpClientModule,
    routing
  ],
  declarations: [
    AppComponent,
    AlertComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ExamplesComponent,
    ServerComponent,
    ServersComponent,
    Example1Component
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

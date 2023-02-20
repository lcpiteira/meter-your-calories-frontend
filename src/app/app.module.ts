import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponentComponent } from './user-login-component/user-login-component.component';
import { FoodListComponentComponent } from './food-list-component/food-list-component.component';


import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FoodFormComponentComponent } from './food-form-component/food-form-component.component';



@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponentComponent,
    FoodListComponentComponent,
    FoodFormComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    HttpClientModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

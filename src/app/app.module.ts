import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactpracComponent } from './reactprac/reactprac.component';
import { CrudComponent } from './crud/crud.component';
import { UpdateComponent } from './update/update.component';
import {ButtonModule} from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import  {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ReactpracComponent,
    CrudComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    ButtonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

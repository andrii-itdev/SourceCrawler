import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserInputFormComponent } from './user-input-form/user-input-form.component';
import { ViewDashboardComponent } from './view-dashboard/view-dashboard.component';
import { ViewSourceComponent } from './view-source/view-source.component';

@NgModule({
  declarations: [
    AppComponent,
    UserInputFormComponent,
    ViewDashboardComponent,
    ViewSourceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

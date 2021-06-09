import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CreateEmployeeComponent} from './create-employee/create-employee.component';
import {UpdateEmployeeComponent} from './update-employee/update-employee.component';
import {EmployeeListComponent} from './employee-list/employee-list.component';
import {EmployeeDetailsComponent} from './employee-details/employee-details.component';
import { SearchComponent } from './search/search.component';
import { NavbarComponent } from './navbar/navbar.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { environment } from "../environments/environment";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchFilterPipe } from './search-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeeComponent,
    UpdateEmployeeComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    SearchComponent,
    NavbarComponent,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

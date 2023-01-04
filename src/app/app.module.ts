import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { HomeComponent } from './home/home.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RectangleComponent } from './rectangle/rectangle.component';
import { DirectivesComponent } from './directives/directives.component';
import { GpayComponent } from './gpay/gpay.component';
import { ProductComponent } from './product/product.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { VehicleComponent } from './vehicle/vehicle.component';
import { SbibankComponent } from './sbibank/sbibank.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { MailComponent } from './mail/mail.component';
import { BoredomComponent } from './boredom/boredom.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { AboutUsModule } from './about-us/about-us.module';
import { StarsComponent } from './stars/stars.component';
import { ParentComponent } from './parent/parent.component';
import { ChildrenComponent } from './children/children.component';
import { Sibling1Component } from './sibling1/sibling1.component';
import { Sibling2Component } from './sibling2/sibling2.component';
import { PricePipe } from './price.pipe';
import { AgePipe } from './age.pipe';
import { ImpDirective } from './imp.directive';
import { TokenInterceptor } from './token.interceptor';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PagenotfoundComponent,
    CalculatorComponent,
    HomeComponent,
    DataBindingComponent,
    RectangleComponent,
    DirectivesComponent,
    GpayComponent,
    ProductComponent,
    VehicleComponent,
    SbibankComponent,
    FlipkartComponent,
    MailComponent,
    BoredomComponent,
    CreateVehicleComponent,
    CreateStudentComponent,
    EmployeeFormComponent,
    VehicleDetailsComponent,
    StarsComponent,
    ParentComponent,
    ChildrenComponent,
    Sibling1Component,
    Sibling2Component,
    PricePipe,
    AgePipe,
    ImpDirective,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AboutUsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

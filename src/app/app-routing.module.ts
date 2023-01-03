import { NgModule } from '@angular/core';
import { NoPreloading, PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AboutCompanyComponent } from './about-us/about-company/about-company.component';
import { AuthenticationGuard } from './authentication.guard';
import { BoredomComponent } from './boredom/boredom.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { GpayComponent } from './gpay/gpay.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MailComponent } from './mail/mail.component';
import { NotifyGuard } from './notify.guard';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ParentComponent } from './parent/parent.component';
import { ProductComponent } from './product/product.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { SbibankComponent } from './sbibank/sbibank.component';
import { Sibling1Component } from './sibling1/sibling1.component';
import { Sibling2Component } from './sibling2/sibling2.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { VehicleComponent } from './vehicle/vehicle.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'dashboard', component: DashboardComponent, canActivate:[AuthenticationGuard], children:[
          {path:'home', component:HomeComponent},
          {path:'calculator', component: CalculatorComponent},
          {path:'databinding', component:DataBindingComponent},
          {path:'rectangle', component:RectangleComponent},
          {path:'directives', component:DirectivesComponent},
          {path:'gpay', component:GpayComponent},
          {path:'product', component:ProductComponent}, 
          {path:'vehicle', component:VehicleComponent},
          {path:'sbibank', component:SbibankComponent},
          {path:'flipkart', component:FlipkartComponent},
          {path:'mail', component:MailComponent},
          {path:'boredom', component:BoredomComponent},
          {path:'create-vehicle', component:CreateVehicleComponent},
          {path:'create-student', component:CreateStudentComponent, canDeactivate:[NotifyGuard]},
          {path:'employee-form', component:EmployeeFormComponent},
          {path:'vehicle-details/:id', component:VehicleDetailsComponent},
          {path:'edit-vehicle/:id', component:CreateVehicleComponent },
          {path: 'about-company', component:AboutCompanyComponent},
          {
            path: 'contact-us',
            loadChildren: () => import('./contact-us/contact-us.module').then(m => m.ContactUsModule)
          },
          {path:'parent', component:ParentComponent},
          {path:'sibling1', component:Sibling1Component},
          {path:'sibling2', component:Sibling2Component},
        ]},
  {path:'', component: LoginComponent},
  {path:'**', component: PagenotfoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy:NoPreloading})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

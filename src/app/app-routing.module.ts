import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoredomComponent } from './boredom/boredom.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { GpayComponent } from './gpay/gpay.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MailComponent } from './mail/mail.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductComponent } from './product/product.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { SbibankComponent } from './sbibank/sbibank.component';
import { VehicleComponent } from './vehicle/vehicle.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'dashboard', component: DashboardComponent,
  children:[{path:'home', component:HomeComponent},
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
          ]},
  {path:'', component: LoginComponent},
  {path:'**', component: PagenotfoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

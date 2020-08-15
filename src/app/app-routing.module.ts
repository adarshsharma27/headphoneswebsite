import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContactusComponent} from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'products',component:ProductsComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'**',component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

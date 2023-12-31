import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { CategoriesComponent } from './categories/categories.component';

const routes: Routes = [
  //rutas protegidas
  {
    path: 'dashboard', component: PagesComponent,//ruta padre PagesComponent
    children: [
      { path: '', component: DashboardComponent },
      { path: 'products', component: ProductsComponent },//rutas hijas ProductsComponent
      { path: 'categories', component: CategoriesComponent },//rutas hijas CategoriesComponent
      { path:'', redirectTo:'/dashboard', pathMatch:'full'},
    ]
  },
  //{path:'**', component: NoFoundPageComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})

export class PagesRoutingModule { }

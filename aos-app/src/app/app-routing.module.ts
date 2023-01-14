import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { EditProductComponent } from './products/edit-product/edit-product.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path: '', component:HomeComponent,   pathMatch:'full'},
  {path: 'home', component:HomeComponent},
  {path: 'products', component:ProductsComponent,
   children:[
    {path: '', component:ProductListComponent},
    {path: 'add', component:AddProductComponent},
    {path: 'update/:id', component:EditProductComponent},
    {path: 'details/:id', component:ProductDetailsComponent}]
   },
   {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListProductComponent } from './Admin/product/list-product/list-product.component';
import { AddProductComponent } from './Admin/product/add-product/add-product.component';
import { HomeComponent } from './MainPage/home/home.component';
import { LoginComponent } from './MainPage/login/login.component';
import { AddCategoryComponent } from './Admin/Category/add-category/add-category.component';
import { ListCategoryComponent } from './Admin/Category/list-category/list-category.component';
import { ListUsersComponent } from './Admin/user/list-users/list-users.component';
import { AddUserComponent } from './Admin/user/add-user/add-user.component';
import { EditUserComponent } from './Admin/user/edit-user/edit-user.component';
import { MyOrdersComponent } from './User/my-orders/my-orders.component';
import { PageNotFoundComponent } from './MainPage/page-not-found/page-not-found.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  // we need guard for admin in this area
  {path:'product', component: ListProductComponent},
  {path: 'product/add', component: AddProductComponent},
  {path: 'product/edit/:id', component: AddProductComponent},
  {path: 'category', component: ListCategoryComponent},
  {path: 'category/add', component: AddCategoryComponent},
  {path: 'adminUser', component: ListUsersComponent},
  {path: 'adminUser/add', component: AddUserComponent},
  {path: 'adminUser/edit/:id', component: EditUserComponent},
  // we need guard for user in this area
  {path:"user/myorders",component:MyOrdersComponent},
  {path:"",redirectTo:"user/home",pathMatch:"full"},
  // without guard with main page components
  {path:"**",component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

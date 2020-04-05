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
import { AuthGuard } from './_guard/auth.guard';
import { DeleteProductComponent } from './Admin/product/delete-product/delete-product.component';
import { DeleteUserComponent } from './Admin/user/delete-user/delete-user.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},

  {path:'product', component: ListProductComponent, canActivate: [AuthGuard]},
  {path: 'product/add', component: AddProductComponent, canActivate: [AuthGuard]},
  {path: 'product/edit/:id', component: AddProductComponent, canActivate: [AuthGuard]},
  {path: 'product/delete/:id', component: DeleteProductComponent, canActivate: [AuthGuard]},

  {path: 'category', component: ListCategoryComponent, canActivate: [AuthGuard]},
  {path: 'category/add', component: AddCategoryComponent, canActivate: [AuthGuard]},

  {path: 'adminUser', component: ListUsersComponent, canActivate: [AuthGuard]},
  {path: 'adminUser/add', component: AddUserComponent, canActivate: [AuthGuard]},
  {path: 'adminUser/edit/:id', component: EditUserComponent, canActivate: [AuthGuard]},
  {path: 'adminUser/delete/:id', component: DeleteUserComponent, canActivate: [AuthGuard]},
  {path:"user/myorders",component:MyOrdersComponent},
  {path:"",redirectTo:"user/home",pathMatch:"full"},
  {path:"**",component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

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
import { AdminAuthGuard } from './_guard/admin-auth.guard';
import { HomeAdminComponent } from './Admin/home-admin/home-admin.component';
import { HomeUserComponent } from './User/home-user/home-user.component';
import { UserAuthGuard } from './_guard/user-auth.guard';


const routes: Routes = [
  {path: '', redirectTo:"/home", pathMatch:"full"},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  //Admin
  {path:'product', component: ListProductComponent, canActivate: [AuthGuard, AdminAuthGuard]},
  {path: 'product/add', component: AddProductComponent, canActivate: [AuthGuard, AdminAuthGuard]},
  {path: 'product/edit/:id', component: AddProductComponent, canActivate: [AuthGuard, AdminAuthGuard]},
  {path: 'product/delete/:id', component: DeleteProductComponent, canActivate: [AuthGuard, AdminAuthGuard]},
  {path: 'category', component: ListCategoryComponent, canActivate: [AuthGuard, AdminAuthGuard]},
  {path: 'category/add', component: AddCategoryComponent, canActivate: [AuthGuard, AdminAuthGuard]},
  {path: 'adminUser', component: ListUsersComponent, canActivate: [AuthGuard, AdminAuthGuard]},
  {path: 'adminUser/add', component: AddUserComponent, canActivate: [AuthGuard, AdminAuthGuard]},
  {path: 'adminUser/edit/:id', component: EditUserComponent, canActivate: [AuthGuard, AdminAuthGuard]},
  {path: 'adminUser/delete/:id', component: DeleteUserComponent, canActivate: [AuthGuard, AdminAuthGuard]},
  {path: 'admin/home', component: HomeAdminComponent, canActivate: [AuthGuard, AdminAuthGuard]},
  //user
  {path: 'user/home', component: HomeUserComponent, canActivate: [AuthGuard, UserAuthGuard]},
  {path:"user/myorders",component:MyOrdersComponent, canActivate: [AuthGuard, UserAuthGuard]},
  // {path:"",redirectTo:"user/home",pathMatch:"full", canActivate: [AuthGuard, UserAuthGuard]},
  {path:"**",component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'

import { AppComponent } from './app.component';
import { ProductService } from './_service/product.service';
import { ListProductComponent } from './Admin/product/list-product/list-product.component';
import { OrderService } from './_service/order.service';
import { CategoryService } from './_service/category.service';
import { UserService } from './_service/user.service';
import { ListCategoryComponent } from './Admin/Category/list-category/list-category.component';
import { AddCategoryComponent } from './Admin/Category/add-category/add-category.component';
import { AddProductComponent } from './Admin/product/add-product/add-product.component';
import { ListOrdersComponent } from './Admin/order/list-orders/list-orders.component';
import { AddOrdersComponent } from './Admin/order/add-orders/add-orders.component';
import { ListUsersComponent } from './Admin/user/list-users/list-users.component';
import { AddUserComponent } from './Admin/user/add-user/add-user.component';
import { EditUserComponent } from './Admin/user/edit-user/edit-user.component';
import { MyOrdersComponent } from './User/my-orders/my-orders.component';
import { LoginComponent } from './MainPage/login/login.component';
import { FooterComponent } from './MainPage/footer/footer.component';
import { NavBarComponent } from './MainPage/nav-bar/nav-bar.component';
import { AuthGuard } from './_guard/auth.guard';
import { AdminAuthGuard } from './_guard/admin-auth.guard';
import { UserAuthGuard } from './_guard/user-auth.guard';
import { AuthInterceptor } from './_guard/auth-interceptor';
import { DeleteUserComponent } from './Admin/user/delete-user/delete-user.component';
import { HomeUserComponent } from './User/home-user/home-user.component';
import { HomeAdminComponent } from './Admin/home-admin/home-admin.component';
import { HomeComponent } from './MainPage/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ListProductComponent,
    ListCategoryComponent,
    AddCategoryComponent,
    AddProductComponent,
    ListOrdersComponent,
    AddOrdersComponent,
    ListUsersComponent,
    AddUserComponent,
    EditUserComponent,
    MyOrdersComponent,
    LoginComponent,
    FooterComponent,
    NavBarComponent,
    DeleteUserComponent,
    HomeUserComponent,
    HomeAdminComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ProductService,
    OrderService,
    CategoryService,
    UserService,
    AuthGuard,
    AdminAuthGuard,
    UserAuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

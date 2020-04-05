import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';



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
import { HomeComponent } from './Admin/home/home.component';
import { MyOrdersComponent } from './User/my-orders/my-orders.component';
import { LoginComponent } from './MainPage/login/login.component';
import { FooterComponent } from './MainPage/footer/footer.component';
import { NavBarComponent } from './MainPage/nav-bar/nav-bar.component';
import { PageNotFoundComponent } from './MainPage/page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    HomeComponent,
    MyOrdersComponent,
    LoginComponent,
    FooterComponent,
    NavBarComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    
  ],
  providers: [
    ProductService,
    OrderService,
    CategoryService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

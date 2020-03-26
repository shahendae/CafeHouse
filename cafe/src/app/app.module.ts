import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { ProductService } from './_service/product.service';
import { ListProductComponent } from './product/list-product/list-product.component';
import { OrderService } from './_service/order.service';
import { CategoryService } from './_service/category.service';
import { UserService } from './_service/user.service';
import { ListCategoryComponent } from './Category/list-category/list-category.component';
import { AddCategoryComponent } from './Category/add-category/add-category.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { EditProductComponent } from './product/edit-product/edit-product.component';
import { ListOrdersComponent } from './order/list-orders/list-orders.component';
import { AddOrdersComponent } from './order/add-orders/add-orders.component';
import { ListUsersComponent } from './user/list-users/list-users.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { DeleteUserComponent } from './user/delete-user/delete-user.component';
import { DeleteProductComponent } from './product/delete-product/delete-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ListProductComponent,
    ListCategoryComponent,
    AddCategoryComponent,
    AddProductComponent,
    EditProductComponent,
    ListOrdersComponent,
    AddOrdersComponent,
    ListUsersComponent,
    AddUserComponent,
    EditUserComponent,
    DeleteUserComponent,
    DeleteProductComponent
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
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

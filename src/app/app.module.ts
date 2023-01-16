import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { UserComponent } from './user/user.component';
import { OrdersComponent } from './orders/orders.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    UserComponent,
    OrdersComponent,
    ContactFormComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'UserList', component: UserComponent},
      {path: 'OrderList', component: OrdersComponent},
      {path: 'ProductList', component: ProductComponent},
      {path: 'Contact', component: ContactFormComponent},
    ]),
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

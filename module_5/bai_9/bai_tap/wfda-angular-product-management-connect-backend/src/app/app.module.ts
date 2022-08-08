import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {DeleteModalComponent} from './delete-modal/delete-modal.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ListBusComponent} from './bus/list-bus/list-bus.component';
import {EditBusComponent} from './bus/edit-bus/edit-bus.component';
import {CreateBusComponent} from './bus/create-bus/create-bus.component';
import { HeaderComponent } from './book-store-component/header/header.component';
import { FeatureComponent } from './book-store-component/feature/feature.component';
import { ProductSectionComponent } from './book-store-component/product-section/product-section.component';
import { CartBannerComponent } from './book-store-component/cart-banner/cart-banner.component';
import { LogoCaroselComponent } from './book-store-component/logo-carosel/logo-carosel.component';
import { FooterComponent } from './book-store-component/footer/footer.component';
import { CartComponent } from './book-store-component/cart/cart.component';


@NgModule({
  declarations: [
    AppComponent,
    DeleteModalComponent,
    ListBusComponent,
    EditBusComponent,
    CreateBusComponent,
    HeaderComponent,
    FeatureComponent,
    ProductSectionComponent,
    CartBannerComponent,
    LogoCaroselComponent,
    FooterComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  exports: [
    DeleteModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

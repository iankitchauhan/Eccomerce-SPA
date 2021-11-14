import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { ProductDetailsComponent } from './shared/product-details-modal/product-details.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailsPageComponent } from './product-details-page/product-details-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductDetailsComponent,
    HomeComponent,
    ProductDetailsPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

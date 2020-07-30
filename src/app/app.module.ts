import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AcmkitLibModule } from 'acmkit/dist/acmkit-lib';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [BrowserModule, AppRoutingModule, AcmkitLibModule, BrowserAnimationsModule, CollapseModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

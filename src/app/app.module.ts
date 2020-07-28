import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AcmkitLibModule } from 'acmkit/dist/acmkit-lib';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AcmkitLibModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

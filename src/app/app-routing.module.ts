import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent, LoginCardComponent } from 'acmkit/dist/acmkit-lib';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'landing', component: LandingComponent },
  { path: 'login', component: LoginCardComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: 'landing' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

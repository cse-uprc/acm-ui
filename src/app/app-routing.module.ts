import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent, LoginCardComponent } from 'acmkit/dist/acmkit-lib';
import { AboutUsComponent } from './components/About-Us/about-us.component';
import { ACMInformationComponent } from './components/ACM-Information/acm-information.component';
import { ClassroomComponent } from './components/Classroom/classroom.component';
import { HomeComponent } from './components/Home/home.component';

const routes: Routes = [
  { path: 'landing', component: LandingComponent },
  { path: 'login', component: LoginCardComponent },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'classroom',
        component: ClassroomComponent,
      },
      {
        path: 'about-us',
        component: AboutUsComponent,
      },
      {
        path: 'acm-information',
        component: ACMInformationComponent,
      },
    ],
  },
  { path: '**', redirectTo: 'landing' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

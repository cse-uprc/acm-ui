import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent, LoginCardComponent } from 'acmkit/dist/acmkit-lib';
import { AboutUsComponent } from './components/About-Us/about-us.component';
import { ACMInformationComponent } from './components/ACM-Information/acm-information.component';
import { BotServiceInfoComponent } from './components/Bot-Service-Info/bot-service-info.component';
import { CalendarComponent } from './components/Calendar/calendar.component';
import { ClassroomComponent } from './components/Classroom/classroom.component';
import { ContactServicesComponent } from './components/Contact-Services/contact-services.component';
import { DashboardComponent } from './components/Dashboard/dashboard.component';
import { EventSignUpComponent } from './components/Event-Sign-Up/event-sign-up.component';
import { HomeComponent } from './components/Home/home.component';
import { ResourcesComponent } from './components/Resources/resources.component';
import { StudentAdvisorsComponent } from './components/Student-Advisors/student-advisors.component';
import { TeachersComponent } from './components/Teachers/teachers.component';
import { VideoLecturesComponent } from './components/Video-Lectures/video-lectures.component';

const routes: Routes = [
  { path: 'landing', component: LandingComponent },
  { path: 'login', component: LoginCardComponent },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'classroom',
        component: ClassroomComponent,
      },
      {
        path: 'resources',
        component: ResourcesComponent,
      },
      {
        path: 'teachers',
        component: TeachersComponent,
      },
      {
        path: 'student-advisors',
        component: StudentAdvisorsComponent,
      },
      {
        path: 'video-lectures',
        component: VideoLecturesComponent,
      },
      {
        path: 'calendar',
        component: CalendarComponent,
      },
      {
        path: 'event-sign-up',
        component: EventSignUpComponent,
      },
      {
        path: 'acm-information',
        component: ACMInformationComponent,
      },
      {
        path: 'bot-service-info',
        component: BotServiceInfoComponent,
      },
      {
        path: 'about-us',
        component: AboutUsComponent,
      },
      {
        path: 'contact-services',
        component: ContactServicesComponent,
      },
      { path: '**', redirectTo: '/home/dashboard' },
    ],
  },
  { path: '**', redirectTo: '/landing' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

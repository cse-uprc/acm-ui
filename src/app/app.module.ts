import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AcmkitLibModule } from 'acmkit/dist/acmkit-lib';
import { QRCodeModule } from 'angularx-qrcode';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { VideoLecturesComponent } from './components/Video-Lectures/video-lectures.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ACMInformationComponent,
    BotServiceInfoComponent,
    CalendarComponent,
    ClassroomComponent,
    ContactServicesComponent,
    DashboardComponent,
    EventSignUpComponent,
    ResourcesComponent,
    StudentAdvisorsComponent,
    VideoLecturesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AcmkitLibModule,
    QRCodeModule,
    ToastrModule.forRoot(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

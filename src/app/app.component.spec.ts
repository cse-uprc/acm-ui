import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {
  BasePageComponent,
  CardComponent,
  LoginCardComponent,
} from 'acmkit/dist/acmkit-lib';
import { LandingComponent } from 'acmkit/dist/acmkit-lib/lib/components/landing/landing.component';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        AppComponent,
        CardComponent,
        LoginCardComponent,
        BasePageComponent,
        LandingComponent,
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});

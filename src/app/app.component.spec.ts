import { ComponentFixture, TestBed } from '@angular/core/testing';
import { setupTests } from 'acmkit/dist/acmkit-lib';
import { AppTestBed } from 'src/testing/app-test-bed';
import { AppComponent } from './app.component';

describe('AppTestComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  setupTests(async () => AppTestBed.setup());

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { setupTests } from 'acmkit/dist/acmkit-lib';
import { AppTestBed } from 'src/testing/app-test-bed';
import { ACMInformationComponent } from './acm-information.component';

describe('ClassroomComponent', () => {
  let component: ACMInformationComponent;
  let fixture: ComponentFixture<ACMInformationComponent>;

  setupTests(async () => AppTestBed.setup());

  beforeEach(() => {
    fixture = TestBed.createComponent(ACMInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

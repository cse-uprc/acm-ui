import { ComponentFixture, TestBed } from '@angular/core/testing';
import { setupTests } from 'acmkit/dist/acmkit-lib';
import { AppTestBed } from 'src/testing/app-test-bed';

import { StudentAdvisorsComponent } from './student-advisors.component';

describe('StudentAdvisorsComponent', () => {
  let component: StudentAdvisorsComponent;
  let fixture: ComponentFixture<StudentAdvisorsComponent>;

  setupTests(async () => AppTestBed.setup());

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentAdvisorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

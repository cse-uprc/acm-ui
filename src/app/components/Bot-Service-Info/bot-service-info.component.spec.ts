import { ComponentFixture, TestBed } from '@angular/core/testing';
import { setupTests } from 'acmkit/dist/acmkit-lib';
import { AppTestBed } from 'src/testing/app-test-bed';

import { BotServiceInfoComponent } from './bot-service-info.component';

describe('BotServiceInfoComponent', () => {
  let component: BotServiceInfoComponent;
  let fixture: ComponentFixture<BotServiceInfoComponent>;

  setupTests(async () => AppTestBed.setup());

  beforeEach(() => {
    fixture = TestBed.createComponent(BotServiceInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

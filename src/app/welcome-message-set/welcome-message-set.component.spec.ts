import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeMessageSetComponent } from './welcome-message-set.component';

describe('WelcomeMessageSetComponent', () => {
  let component: WelcomeMessageSetComponent;
  let fixture: ComponentFixture<WelcomeMessageSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeMessageSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeMessageSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

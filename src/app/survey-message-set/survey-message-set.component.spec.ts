import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyMessageSetComponent } from './survey-message-set.component';

describe('SurveyMessageSetComponent', () => {
  let component: SurveyMessageSetComponent;
  let fixture: ComponentFixture<SurveyMessageSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyMessageSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyMessageSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

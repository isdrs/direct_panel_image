import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoyaltyMessageSetComponent } from './loyalty-message-set.component';

describe('LoyaltyMessageSetComponent', () => {
  let component: LoyaltyMessageSetComponent;
  let fixture: ComponentFixture<LoyaltyMessageSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoyaltyMessageSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoyaltyMessageSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

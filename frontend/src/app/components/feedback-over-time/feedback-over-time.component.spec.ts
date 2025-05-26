import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackOverTimeComponent } from './feedback-over-time.component';

describe('FeedbackOverTimeComponent', () => {
  let component: FeedbackOverTimeComponent;
  let fixture: ComponentFixture<FeedbackOverTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeedbackOverTimeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedbackOverTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

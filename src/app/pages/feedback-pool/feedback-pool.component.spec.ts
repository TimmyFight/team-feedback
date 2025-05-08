import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackPoolComponent } from './feedback-pool.component';

describe('FeedbackPoolComponent', () => {
  let component: FeedbackPoolComponent;
  let fixture: ComponentFixture<FeedbackPoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeedbackPoolComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedbackPoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

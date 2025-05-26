import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestFeedbackComponent } from './request-feedback.component';

describe('RequestFeedbackComponent', () => {
  let component: RequestFeedbackComponent;
  let fixture: ComponentFixture<RequestFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequestFeedbackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

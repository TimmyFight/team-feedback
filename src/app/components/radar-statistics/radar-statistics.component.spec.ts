import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadarStatisticsComponent } from './radar-statistics.component';

describe('RadarStatisticsComponent', () => {
  let component: RadarStatisticsComponent;
  let fixture: ComponentFixture<RadarStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadarStatisticsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadarStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

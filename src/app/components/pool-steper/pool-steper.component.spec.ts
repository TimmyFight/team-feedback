import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoolSteperComponent } from './pool-steper.component';

describe('PoolSteperComponent', () => {
  let component: PoolSteperComponent;
  let fixture: ComponentFixture<PoolSteperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoolSteperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoolSteperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

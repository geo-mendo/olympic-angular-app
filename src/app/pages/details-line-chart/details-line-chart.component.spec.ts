import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsLineChartComponent } from './details-line-chart.component';

describe('DetailsLineChartComponent', () => {
  let component: DetailsLineChartComponent;
  let fixture: ComponentFixture<DetailsLineChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsLineChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

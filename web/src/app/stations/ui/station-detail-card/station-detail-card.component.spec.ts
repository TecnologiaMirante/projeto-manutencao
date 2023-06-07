import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StationDetailCardComponent } from './station-detail-card.component';

describe('StationDetailCardComponent', () => {
  let component: StationDetailCardComponent;
  let fixture: ComponentFixture<StationDetailCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StationDetailCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StationDetailCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

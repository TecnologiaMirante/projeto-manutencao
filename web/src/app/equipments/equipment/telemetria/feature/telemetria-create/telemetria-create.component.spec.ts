import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelemetriaCreateComponent } from './telemetria-create.component';

describe('TelemetriaCreateComponent', () => {
  let component: TelemetriaCreateComponent;
  let fixture: ComponentFixture<TelemetriaCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelemetriaCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelemetriaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

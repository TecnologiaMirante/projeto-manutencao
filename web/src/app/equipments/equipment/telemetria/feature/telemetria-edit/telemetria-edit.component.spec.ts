import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelemetriaEditComponent } from './telemetria-edit.component';

describe('TelemetriaEditComponent', () => {
  let component: TelemetriaEditComponent;
  let fixture: ComponentFixture<TelemetriaEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelemetriaEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelemetriaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

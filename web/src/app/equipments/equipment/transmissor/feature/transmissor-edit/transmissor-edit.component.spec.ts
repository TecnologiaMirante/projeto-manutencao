import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransmissorEditComponent } from './transmissor-edit.component';

describe('TransmissorEditComponent', () => {
  let component: TransmissorEditComponent;
  let fixture: ComponentFixture<TransmissorEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransmissorEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransmissorEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

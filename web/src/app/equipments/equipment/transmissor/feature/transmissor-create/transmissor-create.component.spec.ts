import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransmissorCreateComponent } from './transmissor-create.component';

describe('TransmissorCreateComponent', () => {
  let component: TransmissorCreateComponent;
  let fixture: ComponentFixture<TransmissorCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransmissorCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransmissorCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntenaCreateComponent } from './antena-create.component';

describe('AntenaCreateComponent', () => {
  let component: AntenaCreateComponent;
  let fixture: ComponentFixture<AntenaCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AntenaCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AntenaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

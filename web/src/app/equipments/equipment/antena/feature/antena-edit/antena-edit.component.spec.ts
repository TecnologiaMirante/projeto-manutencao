import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntenaEditComponent } from './antena-edit.component';

describe('AntenaEditComponent', () => {
  let component: AntenaEditComponent;
  let fixture: ComponentFixture<AntenaEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AntenaEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AntenaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

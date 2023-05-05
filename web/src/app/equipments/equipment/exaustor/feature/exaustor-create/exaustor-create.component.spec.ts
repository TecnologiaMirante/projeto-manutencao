import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExaustorCreateComponent } from './exaustor-create.component';

describe('ExaustorCreateComponent', () => {
  let component: ExaustorCreateComponent;
  let fixture: ComponentFixture<ExaustorCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExaustorCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExaustorCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

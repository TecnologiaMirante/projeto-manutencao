import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaboCreateComponent } from './cabo-create.component';

describe('CaboCreateComponent', () => {
  let component: CaboCreateComponent;
  let fixture: ComponentFixture<CaboCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaboCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaboCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

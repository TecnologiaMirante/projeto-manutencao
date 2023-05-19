import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombinadorCreateComponent } from './combinador-create.component';

describe('CombinadorCreateComponent', () => {
  let component: CombinadorCreateComponent;
  let fixture: ComponentFixture<CombinadorCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CombinadorCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CombinadorCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

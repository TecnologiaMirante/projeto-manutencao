import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParabolicaCreateComponent } from './parabolica-create.component';

describe('ParabolicaCreateComponent', () => {
  let component: ParabolicaCreateComponent;
  let fixture: ComponentFixture<ParabolicaCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParabolicaCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParabolicaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

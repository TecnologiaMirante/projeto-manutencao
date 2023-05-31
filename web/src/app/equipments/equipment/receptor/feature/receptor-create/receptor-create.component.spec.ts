import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptorCreateComponent } from './receptor-create.component';

describe('ReceptorCreateComponent', () => {
  let component: ReceptorCreateComponent;
  let fixture: ComponentFixture<ReceptorCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceptorCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceptorCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

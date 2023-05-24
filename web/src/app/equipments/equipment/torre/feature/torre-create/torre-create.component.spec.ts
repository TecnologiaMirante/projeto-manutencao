import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TorreCreateComponent } from './torre-create.component';

describe('TorreCreateComponent', () => {
  let component: TorreCreateComponent;
  let fixture: ComponentFixture<TorreCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TorreCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TorreCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

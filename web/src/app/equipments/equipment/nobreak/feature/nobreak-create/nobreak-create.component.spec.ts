import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NobreakCreateComponent } from './nobreak-create.component';

describe('NobreakCreateComponent', () => {
  let component: NobreakCreateComponent;
  let fixture: ComponentFixture<NobreakCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NobreakCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NobreakCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

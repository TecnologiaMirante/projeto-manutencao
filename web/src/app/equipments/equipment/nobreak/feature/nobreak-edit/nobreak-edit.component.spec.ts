import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NobreakEditComponent } from './nobreak-edit.component';

describe('NobreakEditComponent', () => {
  let component: NobreakEditComponent;
  let fixture: ComponentFixture<NobreakEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NobreakEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NobreakEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

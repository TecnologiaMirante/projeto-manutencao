import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisjuntorEditComponent } from './disjuntor-edit.component';

describe('DisjuntorEditComponent', () => {
  let component: DisjuntorEditComponent;
  let fixture: ComponentFixture<DisjuntorEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisjuntorEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisjuntorEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

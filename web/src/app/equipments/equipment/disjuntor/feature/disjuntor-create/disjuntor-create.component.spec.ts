import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisjuntorCreateComponent } from './disjuntor-create.component';

describe('DisjuntorCreateComponent', () => {
  let component: DisjuntorCreateComponent;
  let fixture: ComponentFixture<DisjuntorCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisjuntorCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisjuntorCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

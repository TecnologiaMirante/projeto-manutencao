import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NobreakCreateEditCardComponent } from './nobreak-create-edit-card.component';

describe('NobreakCreateEditCardComponent', () => {
  let component: NobreakCreateEditCardComponent;
  let fixture: ComponentFixture<NobreakCreateEditCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NobreakCreateEditCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NobreakCreateEditCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

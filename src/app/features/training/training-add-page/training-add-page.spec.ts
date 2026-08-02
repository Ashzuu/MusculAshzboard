import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingAddPage } from './training-add-page';

describe('TrainingAddPage', () => {
  let component: TrainingAddPage;
  let fixture: ComponentFixture<TrainingAddPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainingAddPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingAddPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

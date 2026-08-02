import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingPage } from './training-page';

describe('TrainingPage', () => {
  let component: TrainingPage;
  let fixture: ComponentFixture<TrainingPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainingPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

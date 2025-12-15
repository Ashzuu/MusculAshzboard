import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardStats } from './card-stats';

describe('CardStats', () => {
  let component: CardStats;
  let fixture: ComponentFixture<CardStats>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardStats]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardStats);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

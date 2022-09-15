import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardweekComponent } from './cardweek.component';

describe('CardweekComponent', () => {
  let component: CardweekComponent;
  let fixture: ComponentFixture<CardweekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardweekComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardweekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

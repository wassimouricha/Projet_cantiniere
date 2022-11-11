import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteContenuComponent } from './carte-contenu.component';

describe('CarteContenuComponent', () => {
  let component: CarteContenuComponent;
  let fixture: ComponentFixture<CarteContenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarteContenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarteContenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

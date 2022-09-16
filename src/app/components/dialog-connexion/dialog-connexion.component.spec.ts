import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogConnexionComponent } from './dialog-connexion.component';

describe('DialogConnexionComponent', () => {
  let component: DialogConnexionComponent;
  let fixture: ComponentFixture<DialogConnexionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogConnexionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogConnexionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutDevoirComponent } from './ajout-devoir.component';

describe('AjoutDevoirComponent', () => {
  let component: AjoutDevoirComponent;
  let fixture: ComponentFixture<AjoutDevoirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjoutDevoirComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutDevoirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

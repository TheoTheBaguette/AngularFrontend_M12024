import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppressionDevoirComponent } from './suppression-devoir.component';

describe('SuppressionDevoirComponent', () => {
  let component: SuppressionDevoirComponent;
  let fixture: ComponentFixture<SuppressionDevoirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuppressionDevoirComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuppressionDevoirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

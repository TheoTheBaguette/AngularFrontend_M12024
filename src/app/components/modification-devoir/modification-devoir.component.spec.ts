import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificationDevoirComponent } from './modification-devoir.component';

describe('ModificationDevoirComponent', () => {
  let component: ModificationDevoirComponent;
  let fixture: ComponentFixture<ModificationDevoirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModificationDevoirComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificationDevoirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerationTestComponent } from './generation-test.component';

describe('GenerationTestComponent', () => {
  let component: GenerationTestComponent;
  let fixture: ComponentFixture<GenerationTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenerationTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerationTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

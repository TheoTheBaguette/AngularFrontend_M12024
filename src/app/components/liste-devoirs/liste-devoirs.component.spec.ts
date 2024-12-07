import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDevoirsComponent } from './liste-devoirs.component';

describe('ListeDevoirsComponent', () => {
  let component: ListeDevoirsComponent;
  let fixture: ComponentFixture<ListeDevoirsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeDevoirsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeDevoirsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

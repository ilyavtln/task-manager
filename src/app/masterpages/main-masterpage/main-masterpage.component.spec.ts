import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMasterpageComponent } from './main-masterpage.component';

describe('MainMasterpageComponent', () => {
  let component: MainMasterpageComponent;
  let fixture: ComponentFixture<MainMasterpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainMasterpageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainMasterpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

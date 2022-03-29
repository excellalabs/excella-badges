import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeTypeComponent } from './badgetype.component';

describe('BadgeTypeComponent', () => {
  let component: BadgeTypeComponent;
  let fixture: ComponentFixture<BadgeTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BadgeTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BadgeTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

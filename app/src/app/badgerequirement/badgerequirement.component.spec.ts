import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeRequirementComponent } from './badgerequirement.component';

describe('BadgeRequirementComponent', () => {
  let component: BadgeRequirementComponent;
  let fixture: ComponentFixture<BadgeRequirementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BadgeRequirementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BadgeRequirementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

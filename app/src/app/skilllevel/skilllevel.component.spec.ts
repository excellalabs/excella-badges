import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkilllevelComponent } from './skilllevel.component';

describe('SkilllevelComponent', () => {
  let component: SkilllevelComponent;
  let fixture: ComponentFixture<SkilllevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkilllevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkilllevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

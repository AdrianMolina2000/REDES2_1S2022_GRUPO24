import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EconomicDevComponent } from './economic-dev.component';

describe('EconomicDevComponent', () => {
  let component: EconomicDevComponent;
  let fixture: ComponentFixture<EconomicDevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EconomicDevComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EconomicDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

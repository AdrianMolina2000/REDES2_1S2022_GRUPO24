import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicFuntionComponent } from './public-funtion.component';

describe('PublicFuntionComponent', () => {
  let component: PublicFuntionComponent;
  let fixture: ComponentFixture<PublicFuntionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicFuntionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicFuntionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Layput } from './layput';

describe('Layput', () => {
  let component: Layput;
  let fixture: ComponentFixture<Layput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Layput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Layput);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

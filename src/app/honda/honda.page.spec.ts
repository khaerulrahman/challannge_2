import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HondaPage } from './honda.page';

describe('HondaPage', () => {
  let component: HondaPage;
  let fixture: ComponentFixture<HondaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HondaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HondaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

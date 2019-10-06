import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeatPage } from './beat.page';

describe('BeatPage', () => {
  let component: BeatPage;
  let fixture: ComponentFixture<BeatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeatPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

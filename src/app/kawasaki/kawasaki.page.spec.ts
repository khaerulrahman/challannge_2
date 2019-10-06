import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KawasakiPage } from './kawasaki.page';

describe('KawasakiPage', () => {
  let component: KawasakiPage;
  let fixture: ComponentFixture<KawasakiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KawasakiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KawasakiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

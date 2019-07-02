import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntrogPage } from './introg.page';

describe('IntrogPage', () => {
  let component: IntrogPage;
  let fixture: ComponentFixture<IntrogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntrogPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntrogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

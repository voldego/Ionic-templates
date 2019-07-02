import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntrocPage } from './introc.page';

describe('IntrocPage', () => {
  let component: IntrocPage;
  let fixture: ComponentFixture<IntrocPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntrocPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntrocPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntrobPage } from './introb.page';

describe('IntrobPage', () => {
  let component: IntrobPage;
  let fixture: ComponentFixture<IntrobPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntrobPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntrobPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntrodPage } from './introd.page';

describe('IntrodPage', () => {
  let component: IntrodPage;
  let fixture: ComponentFixture<IntrodPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntrodPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntrodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

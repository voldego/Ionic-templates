import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntrohPage } from './introh.page';

describe('IntrohPage', () => {
  let component: IntrohPage;
  let fixture: ComponentFixture<IntrohPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntrohPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntrohPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

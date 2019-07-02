import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntrofPage } from './introf.page';

describe('IntrofPage', () => {
  let component: IntrofPage;
  let fixture: ComponentFixture<IntrofPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntrofPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntrofPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroaPage } from './introa.page';

describe('IntroaPage', () => {
  let component: IntroaPage;
  let fixture: ComponentFixture<IntroaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

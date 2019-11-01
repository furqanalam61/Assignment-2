import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieslistPage } from './movieslist.page';

describe('MovieslistPage', () => {
  let component: MovieslistPage;
  let fixture: ComponentFixture<MovieslistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieslistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieslistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMoviePage } from './add-movie.page';

describe('AddMoviePage', () => {
  let component: AddMoviePage;
  let fixture: ComponentFixture<AddMoviePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMoviePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMoviePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EditblockComponent } from './editblock.component';

describe('EditblockComponent', () => {
  let component: EditblockComponent;
  let fixture: ComponentFixture<EditblockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditblockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

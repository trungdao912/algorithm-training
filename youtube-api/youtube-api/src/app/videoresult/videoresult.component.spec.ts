import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoresultComponent } from './videoresult.component';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material';
import { InjectionToken } from '@angular/core';

describe('VideoresultComponent', () => {
  let component: VideoresultComponent;
  let fixture: ComponentFixture<VideoresultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoresultComponent ],
      imports: [
        MatDialogModule
      ],
      providers: [
        { provide: HttpClient },
        { provide: ActivatedRoute },
        // tslint:disable-next-line:align
        { provide:  MAT_DIALOG_DATA }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

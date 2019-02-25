import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoresultComponent } from './videoresult.component';

describe('VideoresultComponent', () => {
  let component: VideoresultComponent;
  let fixture: ComponentFixture<VideoresultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoresultComponent ]
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

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InboxdetailComponent } from './inboxdetail.component';

describe('InboxdetailComponent', () => {
  let component: InboxdetailComponent;
  let fixture: ComponentFixture<InboxdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InboxdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InboxdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

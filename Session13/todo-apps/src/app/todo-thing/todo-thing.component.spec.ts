import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoThingComponent } from './todo-thing.component';

describe('TodoThingComponent', () => {
  let component: TodoThingComponent;
  let fixture: ComponentFixture<TodoThingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoThingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoThingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

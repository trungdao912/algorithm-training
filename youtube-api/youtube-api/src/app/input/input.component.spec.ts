import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputComponent } from './input.component';
import { MatMenuModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputComponent ],
      imports: [
        MatMenuModule,
        MatIconModule,
        MatInputModule,
        FormsModule,
        BrowserAnimationsModule
      ],
      providers: [
        { provide: HttpClient }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create input', () => {
    expect(fixture.nativeElement.querySelector('input')).toBeTruthy();
  });

  it('should change the input', () => {
    let inputValue: HTMLInputElement;
    inputValue = fixture.nativeElement.querySelector('input');
    inputValue.value = 'Test Value';
    inputValue.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(component.value).toEqual('Test Value');
  });
});

import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideodetailComponent } from './videodetail.component';
import { MatCardActions, MatTableModule, MatCardModule, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { NgxPaginationModule } from 'ngx-pagination';

describe('VideodetailComponent', () => {
  let component: VideodetailComponent;
  let fixture: ComponentFixture<VideodetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideodetailComponent ],
      imports: [
        NgxPaginationModule,
        MatTableModule,
        MatCardModule
      ],
      providers: [
        { provide: HttpClient },
        { provide:  MAT_DIALOG_DATA },
        { provide:  MatDialog },
        { provide: ActivatedRoute }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideodetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

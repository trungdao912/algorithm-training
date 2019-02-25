import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { VideoresultComponent } from './videoresult/videoresult.component';
import { VideodetailComponent } from './videodetail/videodetail.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';

import { NgxPaginationModule } from 'ngx-pagination';
import { MatDialogModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    VideoresultComponent,
    VideodetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
    MatMenuModule,
    NgxPaginationModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatTableModule,
    MatCardModule,
    MatDialogModule,
    MatPaginatorModule
  ],
  providers: [],
  entryComponents: [VideodetailComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

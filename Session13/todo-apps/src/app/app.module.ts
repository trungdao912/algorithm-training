import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoThingComponent } from './todo-thing/todo-thing.component';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoThingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

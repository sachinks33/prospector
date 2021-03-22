import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SegmentComponent } from './segment/segment.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddSegmentComponent } from './add-segment/add-segment.component';
import {MatDialogModule} from '@angular/material/dialog';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { FormsModule } from '@angular/forms';
import { AddTableComponent } from './add-table/add-table.component';

@NgModule({
  declarations: [
    AppComponent,
    SegmentComponent,
    AddSegmentComponent,
    AddTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    PickerModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

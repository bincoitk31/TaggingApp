import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatVideoModule } from 'mat-video';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatVideoModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  src = 'assets/bacphan.mp4';
  onDragEnded(event) {
    console.log(event.source.dropped);
  }
}

import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-clock-widget',
  standalone: true,
  imports: [],
  templateUrl: './clock-widget.component.html',
  styleUrl: './clock-widget.component.scss'
})
export class ClockWidgetComponent implements OnInit, OnDestroy {

  currentTime: string = '';
  currentDate: string = '';
  private timer: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.updateTime();
      this.timer = setInterval(() => this.updateTime(), 1000);
    }
  }

  ngOnDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  private updateTime() {
    const now = new Date();
    this.currentTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    this.currentDate = now.toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' });
  }


}

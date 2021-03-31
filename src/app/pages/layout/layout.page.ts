import { Component } from '@angular/core';
import { ActivationStart, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout.page.html',
  styleUrls: ['./layout.page.scss'],
})
export class LayoutPage {
  title: string;

  constructor(private router: Router) {
    router.events.subscribe((val) => {
      if (val instanceof ActivationStart) {
        this.title = val.snapshot.data.title;
      }
    });
  }
}

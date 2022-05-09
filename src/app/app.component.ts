import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'test-cuisthouse';
  public isGuidelines = false;

  ngOnInit(): void {
    //TODO find a cleaner way to host guidelines
    if (window.location.href.slice(-10).toString() === 'guidelines') {
      this.isGuidelines = true;
    };
  }
}

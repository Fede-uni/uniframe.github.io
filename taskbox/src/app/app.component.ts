import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'taskbox';

   public collapsedPanel: boolean = false;
  

    public collapsePanel(): void {
      this.collapsedPanel = !this.collapsedPanel;
    }

}

import { Component } from '@angular/core';
import { Confirm } from './decorators/confirm.decorator';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [CommonModule],
})
export class AppComponent {
  isDisplayed: boolean = false;

  @Confirm('confirm to display your message?')
  showMessage() {
    this.isDisplayed = true;
  }

  @Confirm('confirm to hide your message?')
  hideMessage() {
    this.isDisplayed = false;
  }
}

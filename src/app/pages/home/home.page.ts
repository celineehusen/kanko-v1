import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  progressFb = 0;
  progressIg = 0;
  expandFb: Boolean = false;
  expandIg: Boolean = false;
  expandIgStory: Boolean = false;
  imgSource: String = 'assets/poster.jpeg';
  description: String = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
  do eiusmod tempor incididunt ut labore et dolore magna
  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
  ullamco laboris nisi ut aliquip ex ea commodo consequat.
  Duis aute irure dolor in reprehenderit in voluptate velit
  esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
  occaecat cupidatat non proident, sunt in culpa qui officia
  deserunt mollit anim id est laborum.
  `;

  customCounterFormatter(inputLength: number, maxLength: number) {
    return `${maxLength - inputLength} characters remaining`;
  }

  constructor() {
    setInterval(() => {
      this.progressFb += 0.01;

      // Reset the progress bar when it reaches 100%
      // to continuously show the demo
      if (this.progressFb > 1) {
        setTimeout(() => {
          this.progressFb = 0;
        }, 1000);
      }
    }, 50);

    setInterval(() => {
      this.progressIg += 0.01;

      // Reset the progress bar when it reaches 100%
      // to continuously show the demo
      if (this.progressIg > 1) {
        setTimeout(() => {
          this.progressIg = 0;
        }, 1000);
      }
    }, 100);
  }

  ngOnInit() {
  }

}

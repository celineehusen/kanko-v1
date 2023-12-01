import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  primaryText: String = '';
  headline: String = '';
  websiteUrl: String = '';
  progressFb = 0;
  progressIg = 0;
  expandFb: Boolean = false;
  expandIg: Boolean = false;
  expandIgStory: Boolean = false;
  imgSource: String = 'assets/kanko-poster.png';
  description: String = '';
  warningPrimaryText: String = '';
  warningHeadline: String = '';
  warningMedia: String = '';

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

  fileUpload(e: any){
    const file = e.target.files[0];
    if (file){
      this.imgSource = window.URL.createObjectURL(file)
      if(file.type === "image/jpg" || file.type === "image/png"){
        this.warningMedia = ''
      } else {
        this.warningMedia = 'Recommended file type: JPG or PNG'
      }
    }
  }

  validatePrimaryText(){
    if(this.primaryText.length > 50) {
      this.warningPrimaryText = 'Exceeded recommended character limit for Reels.'
    } else {
      this.warningPrimaryText = ''
    }
  }

  validateHeadline(){
    if(this.headline.length > 27) {
      this.warningHeadline = 'Exceeded recommended character limit for Facebook Feeds.'
    } else if (this.headline.length > 10) {
      this.warningHeadline = 'Exceeded recommended character limit for Facebook Reels.'
    } else {
      this.warningHeadline = ''
    }
  }

  validateDescription(){
    
  }
}

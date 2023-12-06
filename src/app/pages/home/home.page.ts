import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable, fromEvent, map, take } from 'rxjs';

interface ISize { width: number; height: number; }

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild('coverFilesInput')imgType!: ElementRef;
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
  warningRatio1: String = '';
  warningRatio2: String = '';
  warningRatio3: String = '';

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
    let image = e.target.files[0];
    let width: number, height: number;
    let fr = new FileReader();
    var img = new Image();
    this.imgSource = window.URL.createObjectURL(image)
    this.warningRatio1 = '';
    this.warningRatio2 = '';
    this.warningRatio3 = '';
    
    fr.onload = () => {
     img.onload = () => {
         width = img.width as number;
         height = img.height as number;
         this.validateImage(image, width, height)
     };

     

     img.src = fr.result as string;
    };
    fr.readAsDataURL(image);
    this.imgType.nativeElement.value = "";
  }

  validateImage(image: any, width: number, height: number){
    if (image){
      if(image.type === "image/jpg" || image.type === "image/png" || image.type === "image/jpeg"){
        this.warningMedia = ''
      } else {
        this.warningMedia = 'Recommended file type: JPG, JPEG or PNG'
      }
    }

    const ratio = (width/height).toFixed(2);
    if(!(ratio <= '1.91' && ratio >= '1.00')){
      this.warningRatio1 = 'This image does not fit the recommended Facebook Feed ratio (1.91:1 to 1:1).'
    }

    if (ratio != '1.00'){
      this.warningRatio2 = 'This image does not fit the recommended Instagram Feed/Facebook Reels ratio (1:1).'
    }

    if (ratio != '0.56') {
      this.warningRatio3 = 'This image does not fit the recommended Instagram Story/Facebook Story/Instagram Reels ratio (9:16).'
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
}

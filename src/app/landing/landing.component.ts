import { Component, OnInit, HostListener } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  config:SwiperOptions;
  config3:SwiperOptions;
  screenOrientation:boolean=true
  constructor() {
    this.orientation();
   }

  ngOnInit(): void {
    this.slidePerViewDefault();
    this.slidePerView3();

    
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.orientation();
  }
  slidePerViewDefault(){
    this.config= {
      pagination: { el: '.swiper-pagination', clickable: true },
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      spaceBetween: 20,
      loop: true,
    };
  }
  slidePerView3(){
    this.config3= {
      pagination: { el: '.swiper-pagination', clickable: true },
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      slidesPerView: 2,
      spaceBetween: 20,
    };
  }

  orientation(){
    if (window.matchMedia("(orientation: landscape)").matches) {
    this.screenOrientation=false
   }else{
    this.screenOrientation=true
   }
  }
}

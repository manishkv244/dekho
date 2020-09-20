import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  config:SwiperOptions;
  config3:SwiperOptions;
  constructor() { }

  ngOnInit(): void {
    this.slidePerViewDefault();
    this.slidePerView3();
  }

  slidePerViewDefault(){
    this.config= {
      pagination: { el: '.swiper-pagination', clickable: true },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      spaceBetween: 20
    };
  }
  slidePerView3(){
    this.config3= {
      pagination: { el: '.swiper-pagination', clickable: true },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      slidesPerView: 2,
      spaceBetween: 20
    };
  }
}

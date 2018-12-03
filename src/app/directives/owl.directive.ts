import {Directive, ElementRef, HostListener,OnInit} from '@angular/core';
declare var $;
@Directive({
    selector:'[owlCarousel]'
})

export class OwlDirective implements OnInit{
   
    constructor(private ele:ElementRef){
     
    }

    ngOnInit(){
        $(".owl-carousel").owlCarousel({
            loop:true,
            autoplay:true,
            autoplayTimeout:4000
        });
    }
}

   
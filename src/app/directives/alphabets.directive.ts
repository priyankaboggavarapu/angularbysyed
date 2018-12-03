import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
    selector:'[alphabetsonly]'
})

export class AlphabetsOnlyDirective{
    regexForAlphabets:any
    constructor(private ele:ElementRef){
        // console.log('I am the directive');
        // console.log(this.ele.nativeElement);
        this.regexForAlphabets=/^[a-zA-Z ]*$/;
        // this.ele.nativeElement.style="background-color:yellow";
    }

    @HostListener('keypress',['$event'])
    alphabetsOnly(e){
        console.info(`Alphabets Only`,e);
        let exp = new RegExp(this.regexForAlphabets);
        if(!exp.test(e.key)){
            e.preventDefault();
        }
    }
}
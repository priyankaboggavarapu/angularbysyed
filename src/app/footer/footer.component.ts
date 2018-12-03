import {Component} from '@angular/core';

//Decorate
@Component({
    selector: 'baba-footer',
    templateUrl:'./footer.component.html',
    styleUrls:['./footer.component.css']
})

//export

export class FooterComponent{
    chooseDate:Date;
    constructor(){
        this.chooseDate=new Date();
    }
}
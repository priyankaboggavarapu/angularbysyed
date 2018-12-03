import { Component, OnInit } from '@angular/core';
import { VALIDATION_MESSAGES } from '../utils/validationmessages';
import { LookupProvider } from '../providers/lookup.provider';
import { HttpClientService } from '../providers/http.provider';
// import { BootstrapGrowlService, BootstrapAlertType } from 'ngx-bootstrap-growl';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  countryList: Array<any>;
  stateList: Array<any>;
  stateListByCountry: Array<any>
  userDetails: any;
  validation = VALIDATION_MESSAGES;
  nameRegex = /^[a-zA-Z ]*$/;
  countryListObj: any;
  stateListObj:any;
  constructor(private lookupSvc: LookupProvider,
    private httpClientSvc: HttpClientService) {

    // this.countryList = this.lookupSvc.getCountries();
    this.stateList = [];
    this.userDetails = {
      firstName: "",
      lastName: "",
      userName: "",
      password: "",
      confirmPassword: "",
      email: "",
      country: "",
      state: "",
      mobileNumber: "",
      gender: ""
    };
    this.stateListObj ={
      label:'State',
      inputList:[],
      selectedValue:''
    };
    this.countryListObj ={
      label:'Country',
      inputList:[],
      selectedValue:''
    };
    this.httpClientSvc.getCountriesFromApi()
      .subscribe((x: any) => {
        console.log(x);
        this.countryList = x.countries;

        this.countryListObj = {
          label: "Country",
          selectedValue: this.userDetails.country,
          inputList: x.countries.map((y) => {
            return { text: y.country.country_name, 
              value: y.country.country_id }
          })
        };
      },
        (err) => {
          console.log(err);
        })
  }



  changeCountry() {
    this.stateListByCountry = this.lookupSvc.getStates(this.userDetails.country);
    this.stateListObj.inputList = this.stateListByCountry;
  }

  ngOnInit() {
  }

  register() {
    console.log(this.userDetails);
    this.httpClientSvc.registerUser(this.userDetails)
      .subscribe(x => {
        console.log(x);
        // this.bootstrapGrowlService.addAlert("User Registered Successfully", BootstrapAlertType.SUCCESS);
      },
        err => {
          console.log(err);
          //this.bootstrapGrowlService.addAlert("Oops!!! Something went wrong!!", BootstrapAlertType.DANGER);
        })
  }


  countrySelected(a){
    console.info('Event Triggered',a);
    this.userDetails.country=a;
    this.changeCountry();
  }

  stateSelected(a){
    console.info('Event Triggered',a);
    this.userDetails.state=a;
    this.changeCountry();
  }
}

import { Injectable } from '@angular/core';

@Injectable()
export class LookupProvider {
    private _countries: Array<any>;
    private _states: Array<any>;
    private _gender: Array<any>;

    constructor() {

    }

    getCountries() {
        this._countries = [{ text: "India", value: "IN" },
        { text: "United States", value: "USA" },
        { text: "Australia", value: "AU" },
        { text: 'Others', value: 'others' }];
        return this._countries;
    }
    getStates(countryCode) {
        this._states = [{ text: "Andhra Pradesh", value: "AP", country: 'IN' },
        { text: "Telangana", value: "TG", country: "IN" },
        { text: "New Jersy", value: "NJ", country: "US" },
        { text: "New York", value: "NY", country: "US" },
        ];
        if (countryCode) {
            return this._states.filter(x => {
                return x.country == countryCode;
            })
        }
        else {
            return this._states;
        }
    }
    getGender() {

    }
}
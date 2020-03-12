import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

import { Country } from '@app/infrastructure/interfaces/country';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.scss']
})
export class RegionsComponent implements OnInit, OnChanges {

  @Input() regions: any;
  @Input() countries: any;

  @Output() changeRegions: EventEmitter<any> = new EventEmitter();
  @Output() changeCountries: EventEmitter<any> = new EventEmitter();
  @Output() resetSelectedCountry: EventEmitter<any> = new EventEmitter();

  mappedCountries: Country[];
  hasCountries = false;
  countryDetails: Country;

  constructor() { }

  ngOnInit() { }

  ngOnChanges(): void {
    this.mapCountriesForDropdown();
  }

  onLoadCountryDetails(): void {
    this.changeCountries.emit(this.mapCountryDetails(this.countryDetails));
  }

  /*
   * Format countries data into value/label pairs for select dropdown
   */
  mapCountriesForDropdown(): void {
    if (this.countries && this.countries.length > 0) {
      this.mappedCountries = this.countries.map((country) => {
        return {
          value: country.alpha3Code,
          label: country.name
        };
      });
      this.hasCountries = true;
    } else {
      this.hasCountries = false;
    }
  }

  /*
   * Format selected country data to only include necessary data
   */
  mapCountryDetails(country: any): Country {
    return {
      id: country.alpha3Code,
      name: country.name,
      capital: country.capital,
      population: country.population,
      currencies: country.currencies,
      flag: country.flag
    };
  }

  onRegionsSelect(value: string): void {
    this.countryDetails = null;
    this.changeRegions.emit(value);
  }

  onCountriesSelect(value: string): void {
    this.resetSelectedCountry.emit();
    this.countryDetails = this.countries.find((item) => item.alpha3Code === value);
  }
}

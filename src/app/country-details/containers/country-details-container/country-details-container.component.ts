import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { State as RegionsState } from '@app/regions/store/reducers';
import { selectCountry } from '@app/regions/store/selectors';

@Component({
  selector: 'app-country-details-container',
  templateUrl: './country-details-container.component.html',
  styleUrls: ['./country-details-container.component.scss']
})
export class CountryDetailsContainerComponent implements OnInit {

  countryDetails$: Observable<any>;

  constructor(
    private regionsStore: Store<RegionsState>
  ) { }

  ngOnInit() {
    this.countryDetails$ = this.regionsStore.pipe(select(selectCountry));
  }

}

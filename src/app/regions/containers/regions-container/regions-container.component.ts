import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { State as RegionsState } from '@app/regions/store/reducers';
import { RegionsActions } from '@app/regions/store/actions';
import { selectRegions, selectCountries } from '@app/regions/store/selectors';

import { Country } from '@app/infrastructure/interfaces/country';

@Component({
  selector: 'app-regions-container',
  templateUrl: './regions-container.component.html',
  styleUrls: ['./regions-container.component.scss']
})
export class RegionsContainerComponent implements OnInit {

  regions$: Observable<any>;
  countries$: Observable<any>;

  constructor(
    private regionsStore: Store<RegionsState>
  ) { }

  ngOnInit(): void {
    this.regions$ = this.regionsStore.pipe(select(selectRegions));
    this.countries$ = this.regionsStore.pipe(select(selectCountries));
  }

  onChangeRegions(selectedRegion: string): void {
    this.regionsStore.dispatch(RegionsActions.resetRegions());
    this.regionsStore.dispatch(RegionsActions.selectedRegion({selectedRegion}));
    this.regionsStore.dispatch(RegionsActions.loadCountries({selectedRegion}));
  }

  onChangeCountries(selectedCountry: Country): void {
    this.regionsStore.dispatch(RegionsActions.selectedCountry({selectedCountry}));
  }

  onResetSelectedCountry(): void {
    this.regionsStore.dispatch(RegionsActions.resetSelectedCountry());
  }
}

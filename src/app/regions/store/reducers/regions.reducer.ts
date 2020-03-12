import { Action, createReducer, on } from '@ngrx/store';

import { RegionsActions } from '@app/regions/store/actions';

import { Country } from '@app/infrastructure/interfaces/country';

export interface RegionsState {
  loadRegions: boolean;
  regions: any[];
  selectedRegion: string;
  loadCountries: boolean;
  selectedCountry: Country;
  countries: Country[];
  error: any;
}

export const initialState: RegionsState = {
  loadRegions: false,
  regions: [
    {
      value: 'europe',
      label: 'Europe'
    },
    {
      value: 'asia',
      label: 'Asia'
    }
  ],
  selectedRegion: null,
  loadCountries: false,
  selectedCountry: null,
  countries: null,
  error: null
};

const regionsReducer = createReducer(
  initialState,
  on(RegionsActions.resetRegions, () => (Object.assign({}, initialState))),
  on(RegionsActions.resetSelectedCountry, (state) => ({ ...state, selectedCountry: null })),
  on(RegionsActions.selectedRegion, (state, { selectedRegion }) => ({ ...state, selectedRegion })),
  on(RegionsActions.loadRegions, (state) => ({ ...state, loadRegions: true })),
  on(RegionsActions.loadRegionsSuccessful, (state, { regions }) => ({ ...state, regions, loadRegions: false })),
  on(RegionsActions.loadRegionsFailed, (state, { error }) => ({ ...state, error, loadRegions: false })),
  on(RegionsActions.selectedCountry, (state, { selectedCountry }) => ({ ...state, selectedCountry })),
  on(RegionsActions.loadCountries, (state) => ({ ...state, loadCountries: true })),
  on(RegionsActions.loadCountriesSuccessful, (state, { countries }) => ({ ...state, countries, loadCountries: false })),
  on(RegionsActions.loadCountriesFailed, (state, { error }) => ({ ...state, error, loadCountries: false })),
  on(RegionsActions.resetError, (state) => ({ ...state, error: null }))
);

export function reducer(state: RegionsState | undefined, action: Action) {
  return regionsReducer(state, action);
}

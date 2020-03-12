import { createFeatureSelector, createSelector } from '@ngrx/store';

import { State as RegionsState } from '@app/regions/store/reducers';

const selectRegionsStore = createFeatureSelector<RegionsState>('regionsState');

export const selectRegionsState = createSelector(
  selectRegionsStore,
  (state: RegionsState) => state
);

export const selectRegions = createSelector(
  selectRegionsStore,
  (state: RegionsState) => state.regionsState.regions
);

export const selectCountries = createSelector(
  selectRegionsStore,
  (state: RegionsState) => state.regionsState.countries
);

export const selectCountry = createSelector(
  selectRegionsStore,
  (state: RegionsState) => state.regionsState.selectedCountry
);



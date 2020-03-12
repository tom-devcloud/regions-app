import { createAction, props, union } from '@ngrx/store';

import { Country } from '@app/infrastructure/interfaces/country';

export const resetRegions = createAction(
  '[Regions] Reset Regions'
);

export const selectedRegion = createAction(
  '[Regions] Selected Region',
  props<{ selectedRegion: string }>()
);

export const loadRegions = createAction(
  '[Regions] Load Regions'
);

export const loadRegionsSuccessful = createAction(
  '[Regions] Load Regions Successful',
  props<{ regions: any }>()
);

export const loadRegionsFailed = createAction(
  '[Regions] Load Regions Failed',
  props<{ error: any }>()
);

export const selectedCountry = createAction(
  '[Regions] Selected Country',
  props<{ selectedCountry: Country }>()
);

export const resetSelectedCountry = createAction(
  '[Regions] Reset Country'
);

export const loadCountries = createAction(
  '[Regions] Load Countries',
  props<{ selectedRegion: string }>()
);

export const loadCountriesSuccessful = createAction(
  '[Regions] Load Countries Successful',
  props<{ countries: any }>()
);

export const loadCountriesFailed = createAction(
  '[Regions] Load Countries Failed',
  props<{ error: any }>()
);

export const resetError = createAction(
  '[Premium] Reset Error'
);

const all = union({
  resetRegions,
  selectedRegion,
  loadRegions,
  loadRegionsSuccessful,
  loadRegionsFailed,
  selectedCountry,
  resetSelectedCountry,
  loadCountries,
  loadCountriesSuccessful,
  loadCountriesFailed,
  resetError
});

export type RegionsActionsUnion = typeof all;

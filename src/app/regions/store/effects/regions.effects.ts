import { Injectable } from '@angular/core';

import { Actions, ofType, createEffect } from '@ngrx/effects';
import { mergeMap, map } from 'rxjs/operators';

import { RegionsActions } from '@app/regions/store/actions';
import { RegionDataService } from '@app/shared/services/region-data.service';

@Injectable()
export class RegionsEffects {

  loadCountries$ = createEffect(() => this.actions$.pipe(
    ofType(RegionsActions.loadCountries),
    mergeMap(({selectedRegion}) =>
      this.regionDataService.getRegionData(selectedRegion).pipe(
        map(countries => RegionsActions.loadCountriesSuccessful({countries}))
      ))
  ));

  constructor(
    private actions$: Actions,
    private regionDataService: RegionDataService
    ) {
  }
}

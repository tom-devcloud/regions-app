import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import { RegionsState, reducer as regionsReducer } from '@app/regions/store/reducers/regions.reducer';

export interface State {
  regionsState: RegionsState;
}

export const reducers: ActionReducerMap<State> = {
  regionsState: regionsReducer
};

export const metaReducers: MetaReducer<{}>[] = [];

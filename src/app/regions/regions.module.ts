import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '@app/shared/shared.module';
import { RegionsEffects } from '@app/regions/store/effects/regions.effects';
import * as fromRegions from '@app/regions/store/reducers';
import { RegionsContainerComponent } from '@app/regions/containers/regions-container/regions-container.component';
import { RegionsComponent } from '@app/regions/components/regions/regions.component';

@NgModule({
  declarations: [
    RegionsComponent,
    RegionsContainerComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    StoreModule.forFeature('regionsState', fromRegions.reducers),
    EffectsModule.forFeature([RegionsEffects])
  ],
  exports: [
    RegionsContainerComponent,
    RegionsComponent,
    SharedModule
  ]
})
export class RegionsModule {
}

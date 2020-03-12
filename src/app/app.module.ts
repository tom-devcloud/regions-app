import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { EffectsModule } from '@ngrx/effects';
// import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';

import { reducers, metaReducers } from '@app/regions/store/reducers';
import { AppComponent } from '@app/app.component';
import { SharedModule } from '@app/shared/shared.module';
import { RegionsModule } from '@app/regions/regions.module';
// tslint:disable:max-line-length
import { CountryDetailsContainerComponent } from '@app/country-details/containers/country-details-container/country-details-container.component';
// tslint:enable:max-line-length
import { CountryDetailsComponent } from '@app/country-details/components/country-details/country-details.component';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    CountryDetailsContainerComponent,
    CountryDetailsComponent
  ],
  imports: [
    EffectsModule.forRoot([]),
    SharedModule,
    RegionsModule,
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    // StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesModule } from '@app/shared/services/services.module';
import { SelectComponent } from '@app/shared/components/select/select.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    ServicesModule,
    SelectComponent
  ],
  declarations: [
    SelectComponent
  ]
})
export class SharedModule { }

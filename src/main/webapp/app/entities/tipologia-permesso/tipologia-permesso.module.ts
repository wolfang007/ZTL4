import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MyZtl4SharedModule } from 'app/shared/shared.module';
import { TipologiaPermessoComponent } from './tipologia-permesso.component';
import { TipologiaPermessoDetailComponent } from './tipologia-permesso-detail.component';
import { TipologiaPermessoUpdateComponent } from './tipologia-permesso-update.component';
import { TipologiaPermessoDeleteDialogComponent } from './tipologia-permesso-delete-dialog.component';
import { tipologiaPermessoRoute } from './tipologia-permesso.route';

@NgModule({
  imports: [MyZtl4SharedModule, RouterModule.forChild(tipologiaPermessoRoute)],
  declarations: [
    TipologiaPermessoComponent,
    TipologiaPermessoDetailComponent,
    TipologiaPermessoUpdateComponent,
    TipologiaPermessoDeleteDialogComponent,
  ],
  entryComponents: [TipologiaPermessoDeleteDialogComponent],
})
export class MyZtl4TipologiaPermessoModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProfiloPage } from './profilo.page';
import {TranslateModule} from '@ngx-translate/core';
import {ModificaprofiloPageModule} from '../modificaprofilo/modificaprofilo.module';

const routes: Routes = [
  {
    path: '',
    component: ProfiloPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
      TranslateModule.forChild(),
    ModificaprofiloPageModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProfiloPage]
})
export class ProfiloPageModule {}
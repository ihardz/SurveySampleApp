import { RouterModule } from '@angular/router';
import { LayoutPage } from './layout/layout.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { AboutPage } from './about/about.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  declarations: [
    LayoutPage,
    AboutPage    
  ]
})
export class PagesModule {}

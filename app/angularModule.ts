import { NgModule, NgModuleFactoryLoader, SystemJsNgModuleLoader } from '@angular/core';
import { UpgradeModule } from '@angular/upgrade/static';
import { BrowserModule } from '@angular/platform-browser';

import { UIRouterModule } from '@uirouter/angular';
import { UIRouterUpgradeModule } from '@uirouter/angular-hybrid';

import { Ng4Module } from './ng4/ng4.module';
import { Ng4IntegratedComponent } from './ng4/ng4Integrated.component';


@NgModule({
  imports: [
    BrowserModule,
    
    UpgradeModule,
    
    UIRouterUpgradeModule,

    UIRouterModule,

    Ng4Module,
  ],
  providers: [
    { provide: NgModuleFactoryLoader, useClass: SystemJsNgModuleLoader },
  ],
  entryComponents : [Ng4IntegratedComponent]
})
export class HybridAppModuleAngular {
  ngDoBootstrap() {
    
  }
}

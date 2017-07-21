import { Injector } from '@angular/core';
import { UpgradeModule } from '@angular/upgrade/static';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { UIRouter, UrlService } from '@uirouter/core';
import { visualizer } from '@uirouter/visualizer';

import { HybridAppModuleAngular } from './angularModule';
import { hybridAppModuleAngularJS } from "./angularJSModule";

hybridAppModuleAngularJS.config([ '$urlServiceProvider', ($urlService: UrlService) => $urlService.deferIntercept() ]);

      platformBrowserDynamic()
          .bootstrapModule(HybridAppModuleAngular).then(platformRef => {
        const injector: Injector = platformRef.injector;
        const upgrade = injector.get(UpgradeModule) as UpgradeModule;

        upgrade.bootstrap(document.body, [hybridAppModuleAngularJS.name]);

        const url: UrlService = injector.get(UIRouter).urlService;

        url.listen();
        url.sync();
      });

hybridAppModuleAngularJS.run(['$uiRouter', ($uiRouter) => visualizer($uiRouter) ]);

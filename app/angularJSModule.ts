// External dependencies
import * as angular from "angular";
import uiRouter from "@uirouter/angularjs";
import { upgradeModule } from "@uirouter/angular-hybrid";

import { homeModule } from "./home/index";

export const hybridAppModuleAngularJS = angular.module("hybridapp", [
  uiRouter,
  upgradeModule.name,
  homeModule.name,
]);

const otherwiseConfigBlock = ['$urlRouterProvider', $urlRouterProvider => { $urlRouterProvider.otherwise("/ng1Route"); }];
hybridAppModuleAngularJS.config(otherwiseConfigBlock);
import { homeModule } from './home.module';
import { Ng4IntegratedComponent } from '../ng4/ng4Integrated.component';

const appState = {
  name: 'app',
  redirectTo: 'ng1',
  component: 'app'
};

const ng1State = {
  parent: 'app',
  name: 'ng1',
  url: '/ng1Route',
  component: 'ng1Component'
};

homeModule.config(['$stateProvider', ($stateProvider) => {
  $stateProvider.state(appState);
  $stateProvider.state(ng1State);
  $stateProvider.state('app.ng1Mixed', {
    url: '/ng1MixedRoute',
    views: {
      '': {
        component: 'ng1MixedComponent'
      },
      'ng4Component@app.ng1Mixed': {
        component: Ng4IntegratedComponent
      }
    }
  });
}]);

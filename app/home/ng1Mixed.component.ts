import { homeModule } from './home.module';

        const ng1MixedComponent = {
            template: `
            <div class="">
              <h3>NG1Mixed Route</h3>
              <h4>an Angular 4 component
               is displayed in Angular 1.* view</h4>
              <ui-view></ui-view>
              
              <div ui-view="ng4Component"></div>
            </div>
            `
        };

        homeModule.component('ng1MixedComponent',
            ng1MixedComponent);




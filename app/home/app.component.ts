import { homeModule } from './home.module';

const appComponent = {
  template: `    
    <div ui-view/>
`
};

homeModule.component('app', appComponent);

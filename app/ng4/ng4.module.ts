import { Ng4Component } from './ng4.component';
import { Ng4IntegratedComponent } from './ng4Integrated.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UIRouterModule } from '@uirouter/angular';


    import { ng4State } from './ng4.states';
    let NG4_STATES = [ ng4State ];

    @NgModule({
      imports: [
        CommonModule,
        FormsModule,
        UIRouterModule
            .forChild({ states: NG4_STATES })
      ],
      declarations: [ Ng4Component,
          Ng4IntegratedComponent ]
    })
    class Ng4Module {}

    export {Ng4Module};
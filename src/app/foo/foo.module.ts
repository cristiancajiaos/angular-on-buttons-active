import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooRoutingModule } from './foo-routing.module';
import { FooComponent } from './foo.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';


@NgModule({
  declarations: [FooComponent, OneComponent, TwoComponent, ThreeComponent],
  imports: [
    CommonModule,
    FooRoutingModule
  ]
})
export class FooModule { }

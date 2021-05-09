import { ThreeComponent } from './three/three.component';
import { TwoComponent } from './two/two.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FooComponent } from './foo.component';
import { OneComponent } from './one/one.component';

const routes: Routes = [
  { path: '', component: FooComponent },
  { path: 'one', component: OneComponent },
  { path: 'two', component: TwoComponent },
  { path: 'three', component: ThreeComponent },
  { path: '**', redirectTo: '/one', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FooRoutingModule { }

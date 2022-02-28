import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsolidateComponent } from './partial/consolidate/consolidate.component';

const routes: Routes = [{ path: '', component: ConsolidateComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsolidateRoutingModule {}

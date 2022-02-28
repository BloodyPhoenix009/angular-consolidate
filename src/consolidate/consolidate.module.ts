import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsolidateRoutingModule } from './consolidate-routing.module';
import { ConsolidateComponent } from './partial/consolidate/consolidate.component';

@NgModule({
  imports: [CommonModule, ConsolidateRoutingModule],
  declarations: [ConsolidateComponent],
})
export class ConsolidateModule {}

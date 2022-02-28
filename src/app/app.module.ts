import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule, Routes } from '@angular/router';
import { ConsolidateModule } from '../consolidate/consolidate.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ConsolidateModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HelloComponent,
        children: [
          {
            path: 'consolidate',
            loadChildren: () =>
              import('../consolidate/consolidate.module').then(
                (m) => m.ConsolidateModule
              ),
          },
        ],
      },
    ]),
  ],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

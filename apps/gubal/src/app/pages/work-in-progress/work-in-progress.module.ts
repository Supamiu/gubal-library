import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WipComponent } from './wip/wip.component';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

const routes: Routes = [
  {
    path: '**',
    component: WipComponent
  }
];

@NgModule({
  imports: [CommonModule, FlexLayoutModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [WipComponent]
})
export class WorkInProgressModule {
}

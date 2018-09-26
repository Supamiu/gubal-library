import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiTextPipe } from './ui-text/ui-text.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [UiTextPipe],
  exports: [UiTextPipe]
})
export class GubalAngularToolsModule {
}

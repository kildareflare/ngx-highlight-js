import { NgModule } from '@angular/core';
import { HighlightJsDirective } from './components/highlight-js.directive';

@NgModule({
  declarations: [HighlightJsDirective],
  exports: [HighlightJsDirective]
})
export class HighlightJsModule {
}

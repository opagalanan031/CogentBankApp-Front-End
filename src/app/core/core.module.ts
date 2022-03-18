import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HeaderComponent } from './component/layout/header/header.component';
import { LandingComponent } from './component/layout/landing/landing.component';
import { FooterComponent } from './component/layout/footer/footer.component';

@NgModule({
  declarations: [HeaderComponent, LandingComponent, FooterComponent],
  imports: [CommonModule, CoreRoutingModule],
  exports: [HeaderComponent, FooterComponent, LandingComponent],
})
export class CoreModule {}

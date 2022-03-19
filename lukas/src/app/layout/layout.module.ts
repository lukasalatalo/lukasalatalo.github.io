import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faFacebook, faLinkedin, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LayoutRoutingModule } from './layout-routing.module';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    MainLayoutComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    RouterModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    MainLayoutComponent,    
  ]
})
export class LayoutModule {
  faFacebook  = faFacebook;
  faLinkedin  = faLinkedin;
  faInstagram = faInstagram;
  faTwitter   = faTwitter;
  faYoutube   = faYoutube;
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ShellComponent } from './shell/shell.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { CarouselComponent } from './carousel/carousel.component';
import { SliderComponent } from './carousel/slider/slider.component';
import { SliderItemDirective } from './carousel/slider/slider-item.directive';
import { TextimgComponent } from './textimg/textimg.component';
import { BlogCarouselComponent } from './blog-carousel/blog-carousel.component';
import { BlogSliderItemDirective } from './blog-carousel/blog-slider/blog-slider-item.directive';
import { BlogSliderComponent } from './blog-carousel/blog-slider/blog-slider.component';



const components = [ShellComponent,
  CarouselComponent, SliderItemDirective, TextimgComponent, BlogCarouselComponent, BlogSliderItemDirective, BlogSliderComponent, SliderComponent
];

const modules = [
  CommonModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  LayoutModule,
  MatSidenavModule,
  MatListModule,
  MatMenuModule,
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatSnackBarModule,
  RouterModule,
  MatGridListModule
];

@NgModule({
  declarations: [...components, CarouselComponent, SliderComponent, TextimgComponent],
  imports: [...modules],
  exports: [
    ...components,
    ...modules,
  ]
})
export class SharedModule { }
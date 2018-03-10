import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutingModule } from './routing/routing.module';
import { MaterialModule } from './material/material.module';
import { MatInputModule } from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FormsService } from './forms.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    MaterialModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [FormsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

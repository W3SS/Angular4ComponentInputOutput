import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DispatchComponent } from './dispatch/dispatch.component';
import { SuspectComponent } from './suspect/suspect.component';

@NgModule({
  declarations: [
    AppComponent,
    DispatchComponent,
    SuspectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

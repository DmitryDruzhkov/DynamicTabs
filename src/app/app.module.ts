import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { TabComponent } from './components/tab/tab.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    TabComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

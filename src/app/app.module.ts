import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ChatModule} from './chat/chat.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbSidebarModule, NbLayoutModule, NbThemeModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NgxIndexedDBModule } from 'ngx-indexed-db';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

const dbConfig: any  = {
  name: 'MyDb',
  version: 1,
  objectStoresMeta: [{
    store: 'people',
    storeConfig: { keyPath: 'id', autoIncrement: true },
    storeSchema: [
      { name: 'name', keypath: 'name', options: { unique: false } },
      { name: 'email', keypath: 'email', options: { unique: false } }
    ]
  }]
};


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxIndexedDBModule.forRoot(dbConfig),
    AppRoutingModule,
    BrowserAnimationsModule,
    ChatModule,
    HttpClientModule,
    NbThemeModule.forRoot({ name: 'corporate' }),
    NbLayoutModule,
    NbEvaIconsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

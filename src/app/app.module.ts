import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import {HttpClientModule} from  '@angular/common/http';
import {AppRoutingModule} from  './app-routing.module';
import { ApplicationListComponent } from './application-list/application-list.component';
import { ServerCreateComponent } from './server-create/server-create.component';
import { ApplicationCreateComponent } from './application-create/application-create.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ServerComponent,
    ServersComponent,
    ServerCreateComponent,
    ApplicationListComponent,
    ApplicationCreateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

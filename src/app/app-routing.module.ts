import {AppModule} from "./app.module";
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServerListComponent } from "./server-list/server-list.component";
import { ServerCreateComponent } from "./server-create/server-create.component";
import { ApplicationListComponent } from "./application-list/application-list.component";
import { ApplicationCreateComponent } from "./application-create/application-create.component";
import { ServersComponent } from "./servers/servers.component";
const routes: Routes = [
    { path:  '', redirectTo:  'servers', pathMatch:  'full' },
    {
        path:  'servers',
        component:  ServersComponent
    },{
        path:  'create-server',
        component:  ServerCreateComponent
    },{
        path:  'applications',
        component:  ApplicationListComponent
    },{
        path:  'create-application',
        component:  ApplicationCreateComponent
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
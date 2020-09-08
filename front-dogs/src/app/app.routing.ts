import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { StartComponent } from './components/start/start.component';
import { NewGameComponent } from './components/new-game/new-game.component';
import { CreatePCComponent } from './components/create-pc/create-pc.component';
import { ListPCComponent } from './components/list-pc/list-pc.component';
import { MasterScreenComponent } from './components/master-screen/master-screen.component';


const appRoutes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'start', component: StartComponent},
    {path: 'new-game', component: NewGameComponent},
    {path: 'new-character', component: CreatePCComponent},
    {path: 'list-pc', component: ListPCComponent},
    {path: 'master-screen', component: MasterScreenComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);


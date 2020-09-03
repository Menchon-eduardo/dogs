import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartComponent } from './components/start/start.component';
import { NewGameComponent } from './components/new-game/new-game.component';
import { CreatePCComponent } from './components/create-pc/create-pc.component';

const appRoutes: Routes = [
    {path: '', component: StartComponent},
    {path: 'start', component: StartComponent},
    {path: 'new-game', component: NewGameComponent},
    {path: 'new-character', component: CreatePCComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);


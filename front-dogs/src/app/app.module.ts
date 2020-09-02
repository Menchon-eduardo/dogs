import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from './components/start/start.component';
import { NewGameComponent } from './components/new-game/new-game.component';
import { MasterScreenComponent } from './components/master-screen/master-screen.component';
import { ListPCComponent } from './components/list-pc/list-pc.component';
import { CreatePCComponent } from './components/create-pc/create-pc.component';
import { ListNPCComponent } from './components/list-npc/list-npc.component';
import { CreateNPCComponent } from './components/create-npc/create-npc.component';




@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    NewGameComponent,
    MasterScreenComponent,
    ListPCComponent,
    CreatePCComponent,
    ListNPCComponent,
    CreateNPCComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
    HttpClientModule,
    FormsModule   

  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule }   from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from "@angular/router";
import './rxjs-extensions'

//for inmemory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service'

//self modules
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component'
import { HeroesComponent } from './heroes.component'
import { DashboardComponent } from './dashboard.component'
import { HeroSearchComponent } from "./hero-search.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        RouterModule.forRoot([
            {
                path:'heroes',
                component: HeroesComponent
            },
            {
                path:'detail/:id',
                component:HeroDetailComponent
            },
            {
                path:'dashboard',
                component:DashboardComponent
            },
            {
                path:'',
                redirectTo:'/dashboard',
                pathMatch: 'full'
            }
        ])
    ],
    declarations: [
        AppComponent,
        HeroesComponent,
        HeroDetailComponent,
        DashboardComponent,
        HeroSearchComponent
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule { }